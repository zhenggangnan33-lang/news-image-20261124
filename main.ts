import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261124: copy the rendered front page to the output dir.
// The image itself is pre-rendered (see render.py at the competition
// level); this program only moves its bytes, so both runs write the
// same file.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
await copyFile(join(here, "entry.png"), join(outDir, "entry.png"));
const { stat } = await import("node:fs/promises");
const sourceBytes = (await stat(join(here, "entry.png"))).size;
const copiedBytes = (await stat(join(outDir, "entry.png"))).size;
if (sourceBytes !== copiedBytes) {
  throw new Error(`entry.png was not copied whole: ${copiedBytes} of ${sourceBytes} bytes written`);
}
