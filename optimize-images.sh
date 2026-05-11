#!/bin/bash
# Image Optimization Script for NemesisNet
# Usage: ./optimize-images.sh [project-name]
# Example: ./optimize-images.sh codecritical-saas

set -e

PROJECT=${1:-""}
INPUT_DIR="public/images/projects"
OUTPUT_DIR="public/images/projects"

if [ -z "$PROJECT" ]; then
  echo "Usage: ./optimize-images.sh <project-folder-name>"
  echo "Example: ./optimize-images.sh codecritical-saas"
  echo ""
  echo "Available projects:"
  ls -1 public/images/projects/ | grep -v optimized | grep -v screenshots
  exit 1
fi

ORIGINAL_DIR="$INPUT_DIR/$PROJECT/original"
OPTIMIZED_DIR="$INPUT_DIR/$PROJECT/optimized"

if [ ! -d "$ORIGINAL_DIR" ]; then
  echo "Error: No original folder found for $PROJECT"
  exit 1
fi

echo "Optimizing images for: $PROJECT"
echo "Input: $ORIGINAL_DIR"
echo "Output: $OPTIMIZED_DIR"
echo ""

# Find all images
for img in $ORIGINAL_DIR/*; do
  if [ -f "$img" ]; then
    filename=$(basename "$img")
    name="${filename%.*}"
    ext="${filename##*.}"
    
    echo "Processing: $filename"
    
    # Create optimized directory if needed
    mkdir -p "$OPTIMIZED_DIR"
    
    # Get dimensions
    dims=$(identify -format "%wx%h" "$img" 2>/dev/null || echo "unknown")
    echo "  Original: $dims"
    
    # Determine max dimensions based on original
    width=$(echo $dims | cut -dx -f1)
    height=$(echo $dims | cut -dx -f2)
    
    # Main WebP (max 1200px)
    if [ "$width" -gt 1200 ] || [ "$height" -gt 1200 ]; then
      convert "$img" -resize 1200x1200\> -quality 80 -interlace Plane "$OPTIMIZED_DIR/$name.webp"
      echo "  Created hero.webp (1200px)"
    else
      convert "$img" -quality 80 -interlace Plane "$OPTIMIZED_DIR/$name.webp"
      echo "  Created hero.webp (original size)"
    fi
    
    # 640px variant
    if [ "$width" -gt 640 ] || [ "$height" -gt 640 ]; then
      convert "$img" -resize 640x640\> -quality 75 -interlace Plane "$OPTIMIZED_DIR/${name}-640.webp"
      echo "  Created hero-640.webp (640px)"
    fi
    
    # 480px variant
    if [ "$width" -gt 480 ] || [ "$height" -gt 480 ]; then
      convert "$img" -resize 480x480\> -quality 70 -interlace Plane "$OPTIMIZED_DIR/${name}-480.webp"
      echo "  Created hero-480.webp (480px)"
    fi
    
    # Show final sizes
    if [ -f "$OPTIMIZED_DIR/$name.webp" ]; then
      size=$(ls -lh "$OPTIMIZED_DIR/$name.webp" | awk '{print $5}')
      echo "  Final: $size"
    fi
    echo ""
  fi
done

echo "✅ Optimization complete!"
echo ""
echo "Output files:"
ls -lh "$OPTIMIZED_DIR/"