# 3D Showroom — Asset Credits & Licenses

Track every 3D model and HDRI used in the 360° IKEA-style showroom here.
**Rule of thumb:** Keep all primary furniture realistic and PBR-textured. Verify every CGTrader model's individual license before deploying commercially.

---

## Environment Lighting (HDRI)

| Asset | Source | License | Commercial Use? | Notes |
| --- | --- | --- | --- | --- |
| `apartment` preset (Poly Haven indoor HDRI) | [Poly Haven](https://polyhaven.com/hdris) via `@react-three/drei` | **CC0 (Public Domain)** | Yes | Default `<Environment preset="apartment" />` |
| `studio_small_09_1k.hdr` (optional local override) | [Poly Haven](https://polyhaven.com/a/studio_small_09) | **CC0 (Public Domain)** | Yes | Download 1K `.hdr` to `public/hdri/` if you prefer offline hosting |

---

## Primary Realistic Furniture (Poly Haven — CC0)

All models from [Poly Haven](https://polyhaven.com/models) are **CC0** (free for personal & commercial use, no attribution required, though appreciated).

| Room | Target Path in `public/models/` | Recommended Poly Haven Asset | License | Status |
| --- | --- | --- | --- | --- |
| Living Room | `living-room/sofa.glb` | `sofa_02` / `sofa_03` | **CC0** | Ready to download |
| Living Room | `living-room/coffee-table.glb` | `coffee_table_round_01` | **CC0** | Ready to download |
| Living Room | `living-room/tv-unit.glb` | `wooden_table_02` or low cabinet | **CC0** | Ready to download |
| Living Room | `living-room/floor-lamp.glb` | `modern_floor_lamp` / `standing_lamp` | **CC0** | Ready to download |
| Living Room | `living-room/rug.glb` | `woven_rug_01` | **CC0** | Ready to download |
| Bedroom | `bedroom/bed.glb` | `modern_bed_01` / `gothic_bed_01` | **CC0** | Ready to download |
| Bedroom | `bedroom/nightstand.glb` | `nightstand_01` / `wooden_stool_02` | **CC0** | Ready to download |
| Bedroom | `bedroom/wardrobe.glb` | `wooden_cabinet_01` | **CC0** | Ready to download |
| Bedroom | `bedroom/desk-lamp.glb` | `desk_lamp_arm_01` | **CC0** | Ready to download |
| Home Office | `home-office/desk.glb` | `writing_desk_01` / `modern_desk` | **CC0** | Ready to download |
| Home Office | `home-office/office-chair.glb` | `mid_century_lounge_chair` / `arm_chair_01` | **CC0** | Ready to download |
| Home Office | `home-office/shelves.glb` | `industrial_shelf_01` / `bookcase` | **CC0** | Ready to download |
| Home Office | `home-office/monitor.glb` | `computer_monitor` | **CC0** | Ready to download |
| Kitchen | `kitchen/counter.glb` | `kitchen_counter` | **CC0** | Ready to download |
| Kitchen | `kitchen/island.glb` | `wooden_table_02` | **CC0** | Ready to download |
| Kitchen | `kitchen/stool.glb` | `wooden_bar_stool` | **CC0** | Ready to download |
| Kitchen | `kitchen/fridge.glb` | `refrigerator_01` | **CC0** | Ready to download |
| Dining Room | `dining-room/dining-table.glb` | `dining_table_01` | **CC0** | Ready to download |
| Dining Room | `dining-room/pendant-light.glb` | `pendant_lamp_01` | **CC0** | Ready to download |
| Bathroom | `bathroom/vanity-sink.glb` | `bathroom_vanity_01` | **CC0** | Ready to download |
| Bathroom | `bathroom/mirror.glb` | `wall_mirror_01` | **CC0** | Ready to download |
| Bathroom | `bathroom/bathtub.glb` | `bathtub_01` | **CC0** | Ready to download |

---

## Secondary Models (CGTrader — CHECK LICENSE PER MODEL)

> **⚠️ LICENSE CHECK REQUIRED:** Free models on CGTrader use mixed licenses (**Royalty Free** vs. **Editorial Use Only**). Never publish an **Editorial** model on a commercial portfolio without replacing it or obtaining permission.

| Room | Target Path in `public/models/` | Source / Example | License | Action Required |
| --- | --- | --- | --- | --- |
| Dining Room | `dining-room/dining-chair.glb` | [CGTrader Free Furniture](https://www.cgtrader.com/free-3d-models/furniture) — Rustic Wooden Chair (4K PBR atlas → downscale to 1K/2K) | **⚠️ VERIFY ON DOWNLOAD PAGE** (Royalty Free vs. Editorial) | Check the right-hand "License" badge on CGTrader before shipping. If Editorial-only, swap for Poly Haven's `wooden_chair_01` (CC0). |

---

## Small Filler Props (Plants & Decor — CC0)

Keep main furniture realistic; small plants and decor may come from CC0 packs if visually consistent:

| Room | Target Path in `public/models/` | Source | License | Notes |
| --- | --- | --- | --- | --- |
| Shared (all rooms) | `shared/plant.glb` | [Poly Haven Potted Plant 01](https://polyhaven.com/a/potted_plant_01) (preferred realistic) or [Quaternius](https://quaternius.com/) / [Kenney](https://kenney.nl/) | **CC0** | Downscale textures to 1K |
