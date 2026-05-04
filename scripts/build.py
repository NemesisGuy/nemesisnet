#!/usr/bin/env python3
"""
NemesisNet Build Script
Composes static HTML pages from templates and partials.
Usage: python scripts/build.py
"""

import os
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
DIST = ROOT / "dist"
PARTIALS = SRC / "partials"
PAGES = SRC / "pages"


def load_partial(name):
    """Load a partial HTML file."""
    partial_path = PARTIALS / f"{name}.html"
    if not partial_path.exists():
        raise FileNotFoundError(f"Partial not found: {partial_path}")
    return partial_path.read_text(encoding="utf-8")


def build_index():
    """Build the landing page from template and partials."""
    print("Building index.html...")

    # Load template
    template = (SRC / "index.template.html").read_text(encoding="utf-8")

    # Replace placeholders with partials
    placeholders = [
        "nav", "hero", "core-services", "featured-projects",
        "testimonials", "cta", "contact", "footer"
    ]

    for key in placeholders:
        partial_content = load_partial(key)
        template = template.replace(f"{{{{{key}}}}}", partial_content)
        print(f"  - Injected {key}")

    # Write to dist
    output_path = DIST / "index.html"
    output_path.write_text(template, encoding="utf-8")
    print(f"  -> Written to {output_path}")


def copy_static_assets():
    """Copy static assets to dist."""
    print("\nCopying static assets...")

    # Copy assets folder
    src_assets = SRC / "assets"
    dist_assets = DIST / "assets"
    if src_assets.exists():
        if dist_assets.exists():
            shutil.rmtree(dist_assets)
        shutil.copytree(src_assets, dist_assets)
        print("  - Copied assets/")

    # Copy styles folder
    src_styles = SRC / "styles"
    dist_styles = DIST / "styles"
    if src_styles.exists():
        if dist_styles.exists():
            shutil.rmtree(dist_styles)
        shutil.copytree(src_styles, dist_styles)
        print("  - Copied styles/ ")

    # Copy scripts folder
    src_scripts = SRC / "scripts"
    dist_scripts = DIST / "scripts"
    if src_scripts.exists():
        if dist_scripts.exists():
            shutil.rmtree(dist_scripts)
        shutil.copytree(src_scripts, dist_scripts)
        print("  - Copied scripts/ ")

    # Copy nemesis-mode.css and aurora-mode.css if they exist in src root
    for css_file in ["nemesis-mode.css", "aurora-mode.css", "theme-aware-layout.css"]:
        src_file = SRC / css_file
        if src_file.exists():
            shutil.copy2(src_file, DIST / css_file)
            print(f"  - Copied {css_file}")


def copy_pages():
    """Copy sub-pages to dist/pages/."""
    print("\nCopying sub-pages...")

    dist_pages = DIST / "pages"
    if dist_pages.exists():
        shutil.rmtree(dist_pages)
    shutil.copytree(PAGES, dist_pages)
    print("  - Copied pages/ ")


def copy_root_files():
    """Copy root-level files like robots.txt, sitemap.xml."""
    print("\nCopying root files...")

    for filename in ["robots.txt", "sitemap.xml", "README.md"]:
        src_file = ROOT / filename
        if src_file.exists():
            shutil.copy2(src_file, DIST / filename)
            print(f"  - Copied {filename}")


def main():
    """Main build function."""
    print("=" * 50)
    print("NemesisNet Static Site Builder")
    print("=" * 50)

    # Ensure dist folder exists
    DIST.mkdir(parents=True, exist_ok=True)

    # Build index.html
    build_index()

    # Copy static assets
    copy_static_assets()

    # Copy sub-pages
    copy_pages()

    # Copy root files
    copy_root_files()

    print("\n" + "=" * 50)
    print("Build complete! Output: dist/")
    print("=" * 50)


if __name__ == "__main__":
    main()
