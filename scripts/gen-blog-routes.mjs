import fs from 'node:fs';
import path from 'node:path';

const posts = [
  { slug: 'kamenari-lepetane-ferry', comp: 'KamenariLepetaneFerry', title: 'The Kamenari–Lepetane Ferry — The Bay of Kotor Shortcut', desc: 'A practical guide to the Kamenari–Lepetane car ferry across the narrowest point of the Bay of Kotor: the route, when to use it, ticket basics, and what the crossing actually shows you.', img: 'blog-kamenari-ferry' },
  { slug: 'rose-village-lustica', comp: 'RoseVillageLustica', title: 'Rose Village — The Fishing Hamlet at the Tip of Luštica', desc: 'A guide to Rose on the Luštica peninsula opposite Herceg Novi: how to get there, where to park, what to see, and the Austrian coastal battery above.', img: 'blog-rose-village' },
  { slug: 'ledenice-viewpoint-loop', comp: 'LedeniceViewpointLoop', title: 'The Ledenice Loop — The Mountain Road Above Herceg Novi', desc: 'A driving guide to the Ledenice loop above Herceg Novi: how to find the turn, what the switchback is like, where to stop, and why morning and sunset give very different views.', img: 'blog-ledenice' },
  { slug: 'risan-roman-mosaics-drive', comp: 'RisanRomanMosaicsDrive', title: 'Risan and the Roman Mosaics — An Inner-Bay Drive from Herceg Novi', desc: 'A driving guide from Herceg Novi to Risan on the inner Bay of Kotor: the route, the Roman villa mosaics including the Hypnos floor, and why Risan rewards a half-day.', img: 'blog-risan' },
  { slug: 'portonovi-marina-podi', comp: 'PortonoviMarinaPodi', title: 'Portonovi and Podi — The Old Naval Base Reborn as a Marina', desc: 'A guide to Portonovi marina and the wider Podi area east of Herceg Novi: the Yugoslav naval base history, the marina today, parking and access for non-guests.', img: 'blog-portonovi' },
  { slug: 'bijela-shipyards-heritage', comp: 'BijelaShipyardsHeritage', title: 'Bijela Shipyards — The Industrial Heritage of the Outer Bay', desc: 'A driving and walking guide to Bijela, the outer Bay of Kotor shipyard town: the dockyard history, what is visible from the road, and how to fit a visit around the ferry.', img: 'blog-bijela' },
  { slug: 'djenovici-west-bay-promenade', comp: 'DjenoviciWestBayPromenade', title: 'Đenovići and the West-Bay Promenade — The Forgotten Coastal Strip East of Herceg Novi', desc: 'A walking and driving guide to Đenovići, Baošići and the quiet west-bay coastal promenade east of Herceg Novi: Austro-Hungarian history, where to swim and eat.', img: 'blog-djenovici' },
  { slug: 'sutorina-bosnia-corridor', comp: 'SutorinaBosniaCorridor', title: "The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo", desc: 'A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused railway trace, and a half-day drive from Herceg Novi up to Trebinje.', img: 'blog-sutorina' },
  { slug: 'tivat-vs-dubrovnik-airport-choice', comp: 'TivatVsDubrovnikAirportChoice', title: 'Tivat vs Dubrovnik — Which Airport to Fly Into for Herceg Novi', desc: 'A detailed comparison of Tivat (TIV) and Dubrovnik (DBV) airports for reaching Herceg Novi: driving times, border crossings, rental car considerations, flight options.', img: 'blog-airport-choice' },
];

const BRAND = 'Car Rental Herceg Novi';
const DOMAIN = 'https://www.carrentalhercegnovi.com';

const escStr = s => s.replace(/"/g, '\\"');

for (const p of posts) {
  const root = `import { buildAlternates } from '../../metadata';
import ${p.comp} from '@/src/components/pages/blog/${p.comp}';

export async function generateMetadata() {
  return {
    title: "${escStr(p.title)}" + ' | ${BRAND}',
    description: "${escStr(p.desc)}",
    alternates: buildAlternates('blog/${p.slug}'),
    openGraph: { title: "${escStr(p.title)}", description: "${escStr(p.desc)}", type: 'website' },
  };
}

export default function ${p.comp}Route() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${escStr(p.title)}",
    "description": "${escStr(p.desc)}",
    "image": "${DOMAIN}/img/${p.img}.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "${BRAND}", "url": "${DOMAIN}" },
    "publisher": { "@type": "Organization", "name": "${BRAND}", "url": "${DOMAIN}" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <${p.comp} />
    </>
  );
}
`;

  const lang = `import { buildAlternates } from '../../../metadata';
import ${p.comp} from '@/src/components/pages/blog/${p.comp}';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "${escStr(p.title)}" + ' | ${BRAND}',
    description: "${escStr(p.desc)}",
    alternates: buildAlternates('blog/${p.slug}', lang),
  };
}

export default async function Lang${p.comp}Route({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${escStr(p.title)}",
    "description": "${escStr(p.desc)}",
    "image": "${DOMAIN}/img/${p.img}.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "${BRAND}", "url": "${DOMAIN}" },
    "publisher": { "@type": "Organization", "name": "${BRAND}", "url": "${DOMAIN}" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <${p.comp} />
    </>
  );
}
`;
  fs.writeFileSync(path.resolve(`src/app/blog/${p.slug}/page.jsx`), root);
  fs.writeFileSync(path.resolve(`src/app/[lang]/blog/${p.slug}/page.jsx`), lang);
  console.log('Wrote', p.slug);
}
