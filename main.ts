// news-image-20261124 v2 — entrypoint: copies the front page (entry.png,
// rendered beside this file) into the grader's output directory.
import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

await mkdir(outDir, { recursive: true });
await copyFile(join(sourceDir, "entry.png"), join(outDir, "entry.png"));

// Confirm the copy is whole: a short write would hand the judge a broken
// image, so refuse to finish silently if the sizes differ.
const sourceBytes = (await stat(join(sourceDir, "entry.png"))).size;
const copiedBytes = (await stat(join(outDir, "entry.png"))).size;
if (sourceBytes !== copiedBytes) {
  throw new Error(
    `entry.png was not copied whole: ${copiedBytes} of ${sourceBytes} bytes written`,
  );
}
