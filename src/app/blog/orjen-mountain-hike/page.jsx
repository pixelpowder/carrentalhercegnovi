import { buildAlternates } from '../../metadata';
import OrjenMountainHike from '@/src/components/pages/blog/OrjenMountainHike';

export async function generateMetadata() {
  return {
    title: "Orjen Mountain — Hiking from Sea Level to 1,895 m" + ' | Car Rental Herceg Novi',
    description: "Hiking Mount Orjen from Herceg Novi: trail network, mountain huts, Subra and Veliki Kabao peaks, limestone karst.",
    alternates: buildAlternates('blog/orjen-mountain-hike'),
    openGraph: { title: "Orjen Mountain — Hiking from Sea Level to 1,895 m", description: "Hiking Mount Orjen from Herceg Novi: trail network, mountain huts, Subra and Veliki Kabao peaks, limestone karst.", type: 'website' },
  };
}

export default function OrjenMountainHikeRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Orjen Mountain — Hiking from Sea Level to 1,895 m",
    "description": "Hiking Mount Orjen from Herceg Novi: trail network, mountain huts, Subra and Veliki Kabao peaks, limestone karst.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-orjen.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <OrjenMountainHike />
    </>
  );
}
