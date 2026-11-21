# 3D Showroom — Downloading, Compressing & Adding Your Own Models

The showroom automatically renders **realistic procedural PBR furniture fallbacks** for every item until you drop a real `.glb` file into `public/models/...`. The moment a `.glb` file exists at the configured path, `ModelAsset.tsx` loads and displays it automatically — no code changes required.

---

## 1. Install Compression Tools (One-Time)

Install `@gltf-transform/cli` globally (or run with `npx`):

```bash
npm install -g @gltf-transform/cli
```

Optionally, for React component generation with compression:
```bash
npx gltfjsx model.glb --transform --simplify
```

---

## 2. Download Realistic PBR Models

1. **Primary (Recommended — 100% CC0):** Go to [polyhaven.com/models](https://polyhaven.com/models).
   - Pick a model (e.g., `sofa_02`, `coffee_table_round_01`, `potted_plant_01`).
   - Select **GLTF** format and **1K** or **2K** texture resolution (avoid 4K to keep room budgets under 10–15 MB).
   - If Poly Haven downloads a `.gltf` + `.bin` + `textures/` folder, pack it into a single `.glb` using step 3.
2. **Secondary (CGTrader):** Go to [cgtrader.com/free-3d-models/furniture](https://www.cgtrader.com/free-3d-models/furniture).
   - **Check the License badge** (must be **Royalty Free**, not **Editorial**).
   - Record the model and license in `CREDITS_AND_LICENSES.md`.

---

## 3. Compress & Downscale to 1K–2K (Draco / Meshopt + WebP)

Run `gltf-transform optimize` to pack `.gltf`/`.glb`, downscale 4K textures to 1K (1024px) or 2K (2048px), convert textures to WebP, and apply Meshopt/Draco geometry compression:

```bash
# Single file (recommended: 1K textures + WebP + Meshopt compression)
npx @gltf-transform/cli optimize input/sofa.gltf public/models/living-room/sofa.glb \
  --compress meshopt \
  --texture-compress webp \
  --texture-size 1024

# Or using Draco compression with 2K hero textures
npx @gltf-transform/cli optimize input/sofa.glb public/models/living-room/sofa.glb \
  --compress draco \
  --texture-compress webp \
  --texture-size 2048
```

> **Target Budget:** Aim for **1–3 MB per hero furniture model** and **10–15 MB total per room**.

---

## 4. Drop Models into `public/models/`

Match the paths in `src/data/showroomRooms.ts`:

```
public/models/
├── home-office/   desk.glb, office-chair.glb, monitor.glb, shelves.glb, desk-lamp.glb
├── living-room/   sofa.glb, coffee-table.glb, tv-unit.glb, floor-lamp.glb, rug.glb
├── dining-room/   dining-table.glb, dining-chair.glb, pendant-light.glb
├── bedroom/       bed.glb, nightstand.glb, wardrobe.glb, desk-lamp.glb, rug.glb
├── kitchen/       counter.glb, island.glb, stool.glb, fridge.glb
├── bathroom/      vanity-sink.glb, mirror.glb, bathtub.glb
└── shared/        plant.glb
```

---

## 5. Adding or Editing a Room / Project

Open `src/data/showroomRooms.ts` and edit any room entry (or add a new one):
- `title`, `tagline`, `description`, `techStack`, `link` — updates the slide-in side panel immediately.
- `cameraPosition` & `cameraTarget` — controls the exact camera viewpoint when flying into the room.
- `models` — list of `{ id, name, url, position, rotation, scale, fallbackType }` placed in local room coordinates.

---

## 6. Optional: Local Poly Haven HDRI

By default, `ShowroomCanvas.tsx` uses `<Environment preset="apartment" />` (Poly Haven HDRI).
To self-host an HDRI offline:
1. Download a **1K `.hdr`** from [polyhaven.com/hdris](https://polyhaven.com/hdris) (e.g., `studio_small_09_1k.hdr`).
2. Save it to `public/hdri/studio_small_09_1k.hdr`.
3. In `src/components/showroom/ShowroomCanvas.tsx`, switch `<Environment preset="apartment" />` to `<Environment files="/hdri/studio_small_09_1k.hdr" />`.
