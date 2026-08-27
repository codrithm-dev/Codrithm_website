import sharp from "sharp";
import { readdir, stat, unlink, rename, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";

const ASSETS_DIR = join(import.meta.dirname, "..", "src", "assets");
const TMP_DIR = join(import.meta.dirname, "..", ".tmp-images");
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;
const WEBP_QUALITY = 80;

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function getImages(dir) {
  const entries = await readdir(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isFile() && !entry.startsWith(".") && IMAGE_EXTS.has(extname(entry).toLowerCase())) {
      files.push({ path: full, name: entry, size: s.size });
    }
  }
  return files;
}

async function optimizeImage(file) {
  const ext = extname(file.name).toLowerCase();
  const base = file.name.slice(0, -ext.length);
  const outName = `${base}.webp`;
  const tmpOut = join(TMP_DIR, outName);

  const meta = await sharp(file.path).metadata();
  const needsResize = meta.width > MAX_WIDTH || meta.height > MAX_HEIGHT;

  await sharp(file.path)
    .resize({
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY })
    .toFile(tmpOut);

  const outStat = await stat(tmpOut);
  const saved = file.size - outStat.size;
  const pct = ((saved / file.size) * 100).toFixed(1);

  return {
    name: file.name,
    out: outName,
    tmpOut,
    finalOut: join(ASSETS_DIR, outName),
    before: file.size,
    after: outStat.size,
    saved,
    pct,
    resized: needsResize,
    isSameFile: file.name === outName,
  };
}

async function main() {
  await mkdir(TMP_DIR, { recursive: true });

  console.log("Optimizing images in", ASSETS_DIR, "\n");

  const images = await getImages(ASSETS_DIR);
  console.log(`Found ${images.length} image(s)\n`);

  const results = [];
  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    try {
      const r = await optimizeImage(img);
      results.push(r);
      totalBefore += r.before;
      totalAfter += r.after;
      const resizedNote = r.resized ? " (resized)" : "";
      console.log(
        `  ${r.name} → ${r.out}  ${(r.before / 1024).toFixed(1)}KB → ${(r.after / 1024).toFixed(1)}KB  (-${r.pct}%${resizedNote})`
      );
    } catch (err) {
      console.error(`  FAILED: ${img.name} — ${err.message}`);
    }
  }

  console.log("\nSwapping files...");

  for (const r of results) {
    try {
      if (!r.isSameFile) {
        await unlink(r.finalOut).catch(() => {});
      }
      await rename(r.tmpOut, r.finalOut);
    } catch (err) {
      console.error(`  SWAP FAILED: ${r.out} — ${err.message}`);
    }
  }

  try {
    await unlink(TMP_DIR);
  } catch {}

  console.log(
    `\nTotal: ${(totalBefore / 1024).toFixed(1)}KB → ${(totalAfter / 1024).toFixed(1)}KB  (saved ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`
  );
}

main();
