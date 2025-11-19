"""Build the distributable static bundle by copying ``src`` into ``dist``.

The repo now keeps editable assets in ``src/`` and treats ``dist/`` as the
publish-ready output consumed by Docker/hosting. This script clears
``dist/`` (except for ``.gitkeep``) and recopies everything from ``src/``.
"""

from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "src"
DIST_DIR = ROOT / "dist"
DIST_SENTINEL = ".gitkeep"


def clean_dist() -> None:
    """Remove previous build artifacts inside ``dist`` while keeping sentinel."""

    DIST_DIR.mkdir(parents=True, exist_ok=True)
    for entry in DIST_DIR.iterdir():
        if entry.name == DIST_SENTINEL:
            continue
        if entry.is_dir():
            shutil.rmtree(entry)
        else:
            entry.unlink()


def copy_src_to_dist() -> None:
    """Copy the entire ``src`` tree into ``dist`` preserving structure."""

    if not SRC_DIR.exists():
        raise SystemExit("Missing src/ directory; nothing to build.")

    for entry in SRC_DIR.iterdir():
        destination = DIST_DIR / entry.name
        if entry.is_dir():
            shutil.copytree(entry, destination, dirs_exist_ok=True)
        else:
            shutil.copy2(entry, destination)



def main() -> None:
    clean_dist()
    copy_src_to_dist()
    print(f"Static bundle ready at {DIST_DIR}")


if __name__ == "__main__":
    main()
