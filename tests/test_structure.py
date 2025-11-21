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

    def test_nemesis_light_buttons_have_override(self) -> None:
        """Ensure Nemesis-on-light mode has bespoke card button styling."""

        html = (ROOT / "src" / "index.html").read_text(encoding="utf-8")
        self.assertIn('html[data-theme="light"][data-nemesis="on"] .card .project-link', html)

    def test_nemesis_logo_pulse_present(self) -> None:
        """Nemesis-on-light should animate the nav logo with a pulse effect."""

        html = (ROOT / "src" / "index.html").read_text(encoding="utf-8")
        self.assertIn('@keyframes nemesis-logo-pulse', html)
        self.assertIn('html[data-theme="light"][data-nemesis="on"] .nav-logo img', html)

    def test_nemesis_hero_logo_pulse_present(self) -> None:
        """Nemesis-on-light should pulse the hero avatar as well."""

        html = (ROOT / "src" / "index.html").read_text(encoding="utf-8")
        self.assertIn('@keyframes nemesis-hero-pulse', html)
        self.assertIn('html[data-theme="light"][data-nemesis="on"] .avatar-img', html)

    def test_nemesis_hero_ring_pulse_present(self) -> None:
        """Ensure the hero outer ring pulse animation exists for Nemesis mode."""

        html = (ROOT / "src" / "index.html").read_text(encoding="utf-8")
        self.assertIn('@keyframes nemesis-hero-ring', html)
        self.assertIn('html[data-theme="light"][data-nemesis="on"] .avatar-wrap::after', html)


if __name__ == "__main__":
    unittest.main()
