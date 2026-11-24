// ATLAS DARK — Monday 23 November 2026: 36 Stories (V4, agent-written).
// A news-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to the output
// directory, verifying it is a whole PNG or JPEG of at most 1 MiB first.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MAX_BYTES = 1024 * 1024;

// A whole PNG starts with its 8-byte signature; a whole JPEG starts with
// SOI (0xFF 0xD8) and ends with the EOI marker (0xFF 0xD9). Anything else
// is not the entry image, so refuse it instead of copying a bad file.
const buf = readFileSync(SRC);
const isPng = buf.length >= 8
  && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47
  && buf[4] === 0x0d && buf[5] === 0x0a && buf[6] === 0x1a && buf[7] === 0x0a;
// A JPEG must start with SOI and end with EOI; telling the two failures
// apart makes a bad file much easier to diagnose than one generic error.
const isJpegStart = buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xd8;
const hasJpegEnd = buf.length >= 2
  && buf[buf.length - 2] === 0xff && buf[buf.length - 1] === 0xd9;
if (!isPng && !isJpegStart) {
  throw new Error('entry.png is neither a PNG nor a JPEG (bad magic bytes)');
}
if (!isPng && !hasJpegEnd) {
  throw new Error('entry.png is a truncated JPEG (missing end-of-image marker)');
}
if (statSync(SRC).size > MAX_BYTES) {
  throw new Error(`entry.png is ${statSync(SRC).size} bytes, over the 1 MiB limit`);
}

copyFileSync(SRC, join(OUT_DIR, 'entry.png'));
