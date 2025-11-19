# Asset Inventory

Snapshot of every externally hosted image referenced in `index.html`, along with the planned local storage paths inside `src/assets/images`.

| Use case | Remote source | Local original | Local optimized | Status |
| --- | --- | --- | --- | --- |
| Open Graph / Twitter preview + favicons | `https://nemesisnet.co.za/assets/Nemesis_Logo_Icon.(png|ico)` | `src/assets/images/brand/Nemesis_Logo_Icon.(png|ico)` | `src/assets/images/brand/Nemesis_Logo_Icon.webp` | originals + optimized WebP ready |
| Kokoro TTS Service card | `https://raw.githubusercontent.com/NemesisGuy/Kokoro_TTS_Service/refs/heads/master/assets/screenshots/Kokorotts-service-blender.png` | `src/assets/images/projects/kokoro-tts-service/original/hero.png` | `src/assets/images/projects/kokoro-tts-service/optimized/hero.webp` | original + optimized ready |
| OntheGoRentals card | `https://otgr.nemesisnet.co.za/assets/OntheGoRentals-Logo-Round-Clear-D5t-6qFC.PNG` | `src/assets/images/projects/onthegorentals/original/hero.png` | `src/assets/images/projects/onthegorentals/optimized/hero.webp` | original + optimized ready |
| NK Assessments card | `https://nkassessments.nemesisnet.co.za/assets/images/Nk-logo.jpeg` | `src/assets/images/projects/nk-assessments/original/hero.jpg` | `src/assets/images/projects/nk-assessments/optimized/hero.webp` | original + optimized ready |
| CodeCritical card | `https://raw.githubusercontent.com/NemesisGuy/CodeCritical/refs/heads/master/image_2025-06-29_144748410.png` | `src/assets/images/projects/codecritical/original/hero.png` | `src/assets/images/projects/codecritical/optimized/hero.webp` | original + optimized ready |
| ForkMyFolio card | `https://github.com/NemesisGuy/ForkMyFolio-frontend/blob/master/Snapshotforkmyfolio.nemesisnet.co.za.png?raw=true` | `src/assets/images/projects/forkmyfolio/original/hero.png` | `src/assets/images/projects/forkmyfolio/optimized/hero.webp` | original + optimized ready |
| Vibe-Type card | `https://raw.githubusercontent.com/NemesisGuy/Vibe-Type/refs/heads/dev/assets/screenshots/VibeType-kokorotts-tab.png` | `src/assets/images/projects/vibetype/original/hero.png` | `src/assets/images/projects/vibetype/optimized/hero.webp` | original + optimized ready |
| Bored Room Cafe card | `https://raw.githubusercontent.com/NemesisGuy/Bored-Room-Cafe/refs/heads/master/screenshots/boredroomcafe-homescreen-image.png` | `src/assets/images/projects/bored-room-cafe/original/hero.png` | `src/assets/images/projects/bored-room-cafe/optimized/hero.webp` | original + optimized ready |

> All optimized assets are generated via `python scripts/optimize_assets.py`, which exports 72 DPI WebP files capped at 1600px width (auto height). PNG/JPG fallbacks remain inside each `original/` folder.
