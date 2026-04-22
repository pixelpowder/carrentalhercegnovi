import { buildAlternates } from '../../metadata';
import MamulaIslandHistory from '@/src/components/pages/blog/MamulaIslandHistory';

export async function generateMetadata() {
  return {
    title: "Mamula Island — From 19th-Century Fortress to WWII Prison to Luxury Hotel" + ' | Car Rental Herceg Novi',
    description: "Mamula Island guide: the 1853 Austro-Hungarian fortress, WWII Italian prison camp, 2023 Banyan Tree hotel, and how to visit.",
    alternates: buildAlternates('blog/mamula-island-history'),
    openGraph: { title: "Mamula Island — From 19th-Century Fortress to WWII Prison to Luxury Hotel", description: "Mamula Island guide: the 1853 Austro-Hungarian fortress, WWII Italian prison camp, 2023 Banyan Tree hotel, and how to visit.", type: 'website' },
  };
}

export default function MamulaIslandHistoryRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mamula Island — From 19th-Century Fortress to WWII Prison to Luxury Hotel",
    "description": "Mamula Island guide: the 1853 Austro-Hungarian fortress, WWII Italian prison camp, 2023 Banyan Tree hotel, and how to visit.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-mamula.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MamulaIslandHistory />
    </>
  );
}
