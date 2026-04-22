// Fetch Pexels images for the new HN (rental) blog set.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const KEY = 'FiklPDZt0hg1DGN1AXfCLaNeezqbPuzRDGIpkQEzu9Q14EGeo0uunrD4';
const BANNED = new Set([
  18037877, 7192505, 32419973, 34169538, 5340094, 34062037, 37167189, 14778150, 1548116, 28860320,
  18048405, 36327395, 29201405, 12932683, 16907807, 12372367, 32821932, 30710168, 27607236,
  13786211, 34803738, 33608201, 14922906, 15564106, 30160277, 33483269, 36478680, 20320147, 20320144, 6261508, 15929963, 17491228, 33350327, 28825813, 14797639, 29574935, 36039417,
  23940966, 34118972, 29318862, 36406012, 28207899, 32962288, 17621582, 15673050, 1928072,
  36615187, 35440903, 30832872, 14778147, 2887781, 34061672, 33067878, 31264085, 33047581,
  1719490, 19312906, 7510133, 33350263, 27890685, 12353536, 4530192, 34062048, 35636306,
]);

const POSTS = [
  { slug: 'kamenari-ferry', queries: ['car ferry adriatic', 'car ferry boat sea', 'ferry crossing bay'] },
  { slug: 'rose-village', queries: ['montenegro fishing village stone', 'adriatic fishing hamlet', 'old mediterranean village sea'] },
  { slug: 'ledenice', queries: ['mountain road viewpoint adriatic', 'bay panorama montenegro', 'winding coastal road overlook'] },
  { slug: 'risan', queries: ['roman mosaic ancient', 'ancient roman ruins mosaic', 'archaeological site mosaic'] },
  { slug: 'portonovi', queries: ['luxury marina yachts', 'superyacht marina mediterranean', 'marina harbour evening'] },
  { slug: 'bijela', queries: ['shipyard cranes', 'dry dock harbour', 'industrial port boats'] },
  { slug: 'djenovici', queries: ['adriatic coastal promenade', 'seaside promenade stone', 'mediterranean waterfront walk'] },
  { slug: 'sutorina', queries: ['abandoned railway tracks overgrown', 'old rail tunnel forest', 'disused railway balkans'] },
  { slug: 'airport-choice', queries: ['small regional airport runway', 'airport terminal aircraft', 'rental car airport'] },
];

const usedIds = new Set();
const manifest = [];
const outDir = path.resolve('public/img');

async function search(q) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=landscape&size=large&per_page=5`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`Pexels ${res.status}: ${await res.text()}`);
  return (await res.json()).photos || [];
}

async function downloadAndConvert(url, outPath) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 80 }).toFile(outPath);
}

for (const post of POSTS) {
  let chosen = null;
  outer: for (const q of post.queries) {
    const photos = await search(q);
    for (const p of photos) {
      if (BANNED.has(p.id) || usedIds.has(p.id)) continue;
      chosen = { id: p.id, url: p.src.large2x || p.src.large || p.src.original, query: q, photographer: p.photographer, page: p.url };
      break outer;
    }
  }
  if (!chosen) { console.error('No image for', post.slug); continue; }
  usedIds.add(chosen.id);
  const outPath = path.join(outDir, `blog-${post.slug}.webp`);
  await downloadAndConvert(chosen.url, outPath);
  manifest.push({ slug: post.slug, pexelsId: chosen.id, query: chosen.query, photographer: chosen.photographer, page: chosen.page, file: `blog-${post.slug}.webp` });
  console.log('OK', post.slug, chosen.id);
}

fs.writeFileSync(path.join(outDir, 'blog-images-manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Manifest written.');
