import { copyFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
if (!existsSync(src)) throw new Error(`entry.png missing next to main.ts: ${src}`);
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
const n = statSync(dst).size;
if (n === 0) throw new Error("entry.png copied empty — refusing to emit a blank image");
if (n > 1048576) throw new Error(`entry.png over the 1 MiB gate: ${n} bytes`);
console.log(`wrote ${dst} (${n} bytes)`);
