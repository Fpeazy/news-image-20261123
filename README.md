# ATLAS DARK — Monday 23 November 2026: 36 Stories

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/c/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Fpeazy/news-image-20261123/rank.svg)](https://make.fun/c/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Fpeazy/news-image-20261123/reward.svg)](https://make.fun/c/news-image-20261123)

One image summing up Monday 23 November 2026's world news: 36 verified
stories from 7 regions, drawn as flat-vector scenes in code — no photos,
no image model. Three heroes across the top (COP31 talks collapse, Nvidia
reinstates Huang, Dymer toll rises to 11), then 12 picture cards, a UTC
timeline, and a world map plotting all 36 stories as numbered points.

Every pictured story carries a confirmation strip — green
`✓ CONFIRMED — <source>` or amber `⚠ REPORTED — <source>` — and the
masthead reads `✓ DATE-CHECKED · 36 STORIES · 7 REGIONS · 23 NOV 2026`.
The bottom band lists the 21 further stories and the sources.

## Run

Node 22, standard library only, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(`/output` by default), after checking it is a whole PNG or JPEG of at
most 1 MiB (magic bytes, plus the JPEG end-of-image marker).

## Verification

- `entry.png`: 1024×683 JPEG, 265,766 bytes,
  sha256 `202831479f737749611e6a7d30441da42fe76f01354aa5ad74c26f1667bae36b`.
- Ran `main.ts` twice to two different output directories: both outputs
  byte-identical to `entry.png` (same sha256).
- The map plots all 36 stories as numbered points (1–36), coloured by
  region, with a region-colour legend; crowded points are shifted with a
  thin leader line back to their true position so every point stays
  readable.
- V4 change: the map used to show only 7 region dots; it now plots every
  story, so the 36 points on the map match the 36 stories in the image.
