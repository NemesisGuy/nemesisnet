"""Structural checks for the refactored NemesisNet site."""

from __future__ import annotations

from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
DIST = ROOT / "dist"
PARTIALS = SRC / "partials"
PAGES = SRC / "pages"


class StructureTests(unittest.TestCase):
    """Verify the new composable static system structure."""

    def test_source_folder_structure(self) -> None:
        """Verify source folders exist."""
        self.assertTrue(SRC.exists(), "src/ should exist")
        self.assertTrue(PARTIALS.exists(), "src/partials/ should exist")
        self.assertTrue(PAGES.exists(), "src/pages/ should exist")
        self.assertTrue(DIST.exists(), "dist/ should exist")

    def test_partials_exist(self) -> None:
        """Verify all required partials exist."""
        required_partials = [
            "nav.html", "footer.html", "hero.html", "core-services.html",
            "featured-projects.html", "testimonials.html", "cta.html", "contact.html"
        ]
        for partial in required_partials:
            self.assertTrue((PARTIALS / partial).exists(), f"partial {partial} should exist")

    def test_template_exists(self) -> None:
        """Verify index.template.html exists with placeholders."""
        template = SRC / "index.template.html"
        self.assertTrue(template.exists(), "src/index.template.html should exist")
        content = template.read_text(encoding="utf-8")
        for placeholder in ["{{nav}}", "{{hero}}", "{{core-services}}",
                           "{{featured-projects}}", "{{testimonials}}",
                           "{{cta}}", "{{contact}}", "{{footer}}"]:
            self.assertIn(placeholder, content, f"Template should contain {placeholder}")

    def test_sub_pages_exist(self) -> None:
        """Verify sub-pages exist."""
        self.assertTrue((PAGES / "projects.html").exists(), "projects.html should exist")
        self.assertTrue((PAGES / "legal" / "refund.html").exists(), "legal/refund.html should exist")
        self.assertTrue((PAGES / "legal" / "terms.html").exists(), "legal/terms.html should exist")
        self.assertTrue((PAGES / "legal" / "privacy.html").exists(), "legal/privacy.html should exist")

    def test_build_script_exists(self) -> None:
        """Verify build script exists and is valid Python."""
        build_script = ROOT / "scripts" / "build.py"
        self.assertTrue(build_script.exists(), "scripts/build.py should exist")
        content = build_script.read_text(encoding="utf-8")
        self.assertIn("def build_index()", content)
        self.assertIn("def copy_static_assets()", content)
        self.assertIn("def copy_pages()", content)

    def test_build_script_works(self) -> None:
        """Verify the build script runs successfully."""
        result = subprocess.run(
            ["python", str(ROOT / "scripts" / "build.py")],
            capture_output=True, text=True, cwd=str(ROOT)
        )
        self.assertEqual(result.returncode, 0, f"Build script failed: {result.stderr}")

    def test_dist_output_exists(self) -> None:
        """Verify dist/ has the built output."""
        self.assertTrue((DIST / "index.html").exists(), "dist/index.html should exist")
        self.assertTrue((DIST / "pages" / "projects.html").exists(), "dist/pages/projects.html should exist")
        self.assertTrue((DIST / "assets").exists(), "dist/assets/ should exist")
        self.assertTrue((DIST / "styles" / "main.css").exists(), "dist/styles/main.css should exist")
        self.assertTrue((DIST / "scripts" / "main.js").exists(), "dist/scripts/main.js should exist")

    def test_dist_index_has_no_placeholders(self) -> None:
        """Verify dist/index.html has no remaining placeholders."""
        html = (DIST / "index.html").read_text(encoding="utf-8")
        self.assertNotIn("{{", html, "dist/index.html should have no placeholders")

    def test_dist_index_has_nav_and_footer(self) -> None:
        """Verify dist/index.html has nav and footer content."""
        html = (DIST / "index.html").read_text(encoding="utf-8")
        self.assertIn('id="navbar"', html, "dist/index.html should have navbar")
        self.assertIn('class="site-footer"', html, "dist/index.html should have footer")

    def test_sub_pages_have_nav(self) -> None:
        """Verify sub-pages have simplified nav with home link."""
        pages_to_check = [
            DIST / "pages" / "projects.html",
            DIST / "pages" / "legal" / "refund.html",
            DIST / "pages" / "legal" / "terms.html",
            DIST / "pages" / "legal" / "privacy.html",
        ]
        for page in pages_to_check:
            with self.subTest(page=page.name):
                content = page.read_text(encoding="utf-8")
                self.assertIn('nav-logo', content, f"{page.name} should have nav-logo")
                self.assertIn('href="/"', content, f"{page.name} should have home link")

    def test_sub_pages_have_back_link(self) -> None:
        """Verify sub-pages have 'Back to Home' link."""
        pages_to_check = [
            DIST / "pages" / "legal" / "refund.html",
            DIST / "pages" / "legal" / "terms.html",
            DIST / "pages" / "legal" / "privacy.html",
        ]
        for page in pages_to_check:
            with self.subTest(page=page.name):
                content = page.read_text(encoding="utf-8")
                self.assertIn('Back to Home', content, f"{page.name} should have Back to Home link")

    def test_images_have_alt_attributes(self) -> None:
        """Verify images in dist/ have alt attributes."""
        html_files = [
            DIST / "index.html",
            DIST / "pages" / "projects.html",
        ]
        for html_file in html_files:
            if not html_file.exists():
                continue
            content = html_file.read_text(encoding="utf-8")
            # Simple check: img tags should have alt=
            import re
            img_tags = re.findall(r'<img[^>]+>', content)
            for img in img_tags:
                self.assertIn('alt=', img, f"Image in {html_file.name} missing alt attribute")

    def test_featured_projects_have_view_all_button(self) -> None:
        """Verify featured projects section has 'View All Projects' link."""
        html = (DIST / "index.html").read_text(encoding="utf-8")
        self.assertIn('href="/pages/projects.html"', html, "Should have link to all projects")

    def test_dockerfile_targets_dist(self) -> None:
        """Ensure the Dockerfile copies dist/ instead of src/."""
        dockerfile = (ROOT / "Dockerfile").read_text(encoding="utf-8")
        self.assertIn("COPY dist/", dockerfile)
        self.assertNotIn("COPY src/", dockerfile)

    def test_css_js_extracted(self) -> None:
        """Verify CSS and JS are extracted from inline."""
        self.assertTrue((SRC / "styles" / "main.css").exists(), "src/styles/main.css should exist")
        self.assertTrue((SRC / "scripts" / "main.js").exists(), "src/scripts/main.js should exist")

    def test_preconnect_present(self) -> None:
        """Verify preconnect links are present in template."""
        template = (SRC / "index.template.html").read_text(encoding="utf-8")
        self.assertIn('rel="preconnect"', template)
        self.assertIn('fonts.gstatic.com', template)


if __name__ == "__main__":
    unittest.main()
