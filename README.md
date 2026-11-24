# ATLAS DARK — Monday 23 November 2026: 36 Stories

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/c/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Fpeazy/news-image-20261123/rank.svg)](https://make.fun/c/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Fpeazy/news-image-20261123/reward.svg)](https://make.fun/c/news-image-20261123)

Sum up Monday 23 November 2026's world news in one image — 36 verified stories
across 7 regions, drawn in code as flat-vector scenes. Every pictured story
carries a `✓ CONFIRMED — <source>` or `⚠ REPORTED — <source>` chip, so the
confirmation that the news is real is on the image itself.

Entry for the [news-image-20261123 competition on make.fun](https://make.fun/c/news-image-20261123).

## The image

1024×683, 259,541 bytes. Masthead `✓ DATE-CHECKED · 36 STORIES · 7 REGIONS ·
23 NOV 2026` → 3 heroes across (COP31 collapse, Nvidia +31%, Dymer rescue) →
12 picture cards (4×3) → UTC timeline (5 items) → bottom band (world map, 7 dots,
Natural Earth note, ALSO 21) → DATE CHECK + sources.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` outside the grader container).
The image is verified first: PNG or JPEG magic bytes, at most 1 MiB.
