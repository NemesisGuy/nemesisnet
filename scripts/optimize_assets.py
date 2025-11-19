"""Utility helpers for generating optimized WebP variants of site imagery."""

from __future__ import annotations

import itertools
from pathlib import Path
from typing import Iterable, Tuple

from PIL import Image

# Repository-relative paths
ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "public" / "assets"
PROJECTS_DIR = ASSETS_DIR / "images" / "projects"
BRAND_DIR = ASSETS_DIR / "images" / "brand"

# Output tuning
TARGET_WIDTH = 1600
TARGET_DPI = (72, 72)
WEBP_QUALITY = 88
SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".jfif"}


def discover_project_pairs() -> Iterable[Tuple[Path, Path]]:
    """Yield (source, destination) pairs for each project asset.

    The function walks every project folder, finds files under ``original/`` with
    an allowed extension, and maps it to the sibling ``optimized/`` folder using
    the same basename but a ``.webp`` suffix.
    """

    for project_dir in PROJECTS_DIR.iterdir():
        if not project_dir.is_dir():
            continue

        original_dir = project_dir / "original"
        if not original_dir.exists():
            continue

        for source in original_dir.iterdir():
            if source.suffix.lower() not in SUPPORTED_EXTENSIONS or not source.is_file():
                continue

            optimized_dir = project_dir / "optimized"
            optimized_dir.mkdir(parents=True, exist_ok=True)
            destination = optimized_dir / f"{source.stem}.webp"
            yield source, destination


def brand_pairs() -> Iterable[Tuple[Path, Path]]:
    """Return pairs for brand imagery (logo/favicon)."""

    brand_png = BRAND_DIR / "Nemesis_Logo_Icon.png"
    if brand_png.exists():
        yield brand_png, BRAND_DIR / "Nemesis_Logo_Icon.webp"


def optimize_image(source: Path, destination: Path) -> None:
    """Convert a source image to a WebP file capped at ``TARGET_WIDTH``.

    The helper keeps alpha channels, applies a high-quality Lanczos resize when
    the source is wider than the allowed width, and writes a WebP with 72 DPI.
    """

    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as img:
        # Convert to a WebP-friendly colorspace while preserving transparency.
        mode = "RGBA" if "A" in img.getbands() else "RGB"
        working = img.convert(mode)

        if working.width > TARGET_WIDTH:
            scale = TARGET_WIDTH / working.width
            new_height = int(working.height * scale)
            working = working.resize((TARGET_WIDTH, new_height), Image.Resampling.LANCZOS)

        # Pillow's WebP saver accepts dpi argument directly.
        working.save(
            destination,
            "WEBP",
            quality=WEBP_QUALITY,
            method=6,
            dpi=TARGET_DPI,
        )


def main() -> None:
    """Generate every optimized asset for the site in a single run."""

    pairs = list(itertools.chain(discover_project_pairs(), brand_pairs()))
    if not pairs:
        print("No source images discovered. Nothing to optimize.")
        return

    for source, destination in pairs:
        optimize_image(source, destination)
        rel_source = source.relative_to(ROOT)
        rel_dest = destination.relative_to(ROOT)
        print(f"Optimized {rel_source} -> {rel_dest}")

    print(f"Generated {len(pairs)} optimized assets.")


if __name__ == "__main__":
    main()
