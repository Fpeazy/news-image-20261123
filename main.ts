// ATLAS DARK — Monday 23 November 2026: 36 Stories.
// Node 22, standard library only. Copies the entry image beside this file to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR outside the grader container).
// The image is verified before copying: PNG or JPEG magic bytes, at most 1 MiB.
import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const buf = readFileSync(src);
const isPng =
  buf.length >= 8 &&
  buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47 &&
  buf[4] === 0x0d && buf[5] === 0x0a && buf[6] === 0x1a && buf[7] === 0x0a;
const isJpeg = buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
if (!isPng && !isJpeg) throw new Error('entry image is not PNG or JPEG');
if (buf.length > 1048576) throw new Error('entry image exceeds 1 MiB');
copyFileSync(src, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
