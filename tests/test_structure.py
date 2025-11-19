"""Basic structural checks to ensure the site uses the single-source layout."""

from __future__ import annotations

from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class StructureTests(unittest.TestCase):
    """Sanity checks around paths referenced by the Docker image and repo layout."""

    def test_single_source_of_truth(self) -> None:
        """Verify the canonical src/index.html exists and legacy paths are gone."""

        src_index = ROOT / "src" / "index.html"
        self.assertTrue(src_index.exists(), "src/index.html should exist")
        self.assertFalse((ROOT / "index.html").exists(), "root index.html should be removed")
        self.assertFalse((ROOT / "dist").exists(), "dist/ should not be present anymore")

    def test_dockerfile_targets_src(self) -> None:
        """Ensure the Dockerfile copies src/ instead of the removed dist/."""

        dockerfile = (ROOT / "Dockerfile").read_text(encoding="utf-8")
        self.assertIn("COPY src/", dockerfile)
        self.assertNotIn("dist/", dockerfile)

    def test_favicons_use_relative_paths(self) -> None:
        """The favicon references should be relative so file:// previews succeed."""

        html = (ROOT / "src" / "index.html").read_text(encoding="utf-8")
        self.assertNotIn('href="/assets', html)
        self.assertIn('href="assets/images/brand/Nemesis_Logo_Icon.png"', html)


if __name__ == "__main__":
    unittest.main()
