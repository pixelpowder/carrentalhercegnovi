import { buildAlternates } from '../../metadata';
import BijelaShipyardsHeritage from '@/src/components/pages/blog/BijelaShipyardsHeritage';
import content from '@/src/data/blog/bijela-shipyards-heritage';

const c = content.en;

export async function generateMetadata() {
  return {
    title: c.title + ' | Car Rental Herceg Novi',
    description: c.description,
    alternates: buildAlternates('blog/bijela-shipyards-heritage'),
    openGraph: { title: c.title, description: c.description, type: 'website' },
  };
}

export default function BijelaShipyardsHeritageRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.description,
    "image": "https://www.carrentalhercegnovi.com" + c.image,
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BijelaShipyardsHeritage />
    </>
  );
}
