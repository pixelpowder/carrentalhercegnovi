import { buildAlternates } from '../../metadata';
import BijelaShipyardsHeritage from '@/src/components/pages/blog/BijelaShipyardsHeritage';

export async function generateMetadata() {
  return {
    title: "Bijela Shipyards — The Industrial Heritage of the Outer Bay" + ' | Car Rental Herceg Novi',
    description: "A driving and walking guide to Bijela, the outer Bay of Kotor shipyard town: the dockyard history, what is visible from the road, and how to fit a visit around the ferry.",
    alternates: buildAlternates('blog/bijela-shipyards-heritage'),
    openGraph: { title: "Bijela Shipyards — The Industrial Heritage of the Outer Bay", description: "A driving and walking guide to Bijela, the outer Bay of Kotor shipyard town: the dockyard history, what is visible from the road, and how to fit a visit around the ferry.", type: 'website' },
  };
}

export default function BijelaShipyardsHeritageRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bijela Shipyards — The Industrial Heritage of the Outer Bay",
    "description": "A driving and walking guide to Bijela, the outer Bay of Kotor shipyard town: the dockyard history, what is visible from the road, and how to fit a visit around the ferry.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-bijela-shipyards-heritage.webp",
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
