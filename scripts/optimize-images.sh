#!/bin/bash
BASE="/mnt/c/Users/Reign/Projects/NemesisNet/public/images/projects"
for proj in bored-room-cafe codecritical-saas codecritical forkmyfolio kokoro-tts-service nemesisnet-wordpress-theme nk-assessments onthegorentals pockettts-mcp since torquebooks vibetype voxnemesis-supertonic wordpress-mcp; do
  img="$BASE/$proj/optimized/hero.webp"
  if [ -f "$img" ]; then
    w=$(identify -format "%w" "$img")
    echo "$proj: ${w}px"
    if [ "$w" -gt 640 ]; then
      convert "$img" -resize 640x640> -quality 80 "$BASE/$proj/optimized/hero-640.webp"
      echo "  Created hero-640.webp"
    fi
    if [ "$w" -gt 480 ]; then
      convert "$img" -resize 480x480> -quality 80 "$BASE/$proj/optimized/hero-480.webp"
      echo "  Created hero-480.webp"
    fi
  fi
done
echo "Done!"
