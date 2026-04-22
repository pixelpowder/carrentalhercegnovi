import { buildAlternates } from '../../metadata';
import TivatAirportToHercegnovi from '@/src/components/pages/blog/TivatAirportToHercegnovi';

export async function generateMetadata() {
  return {
    title: "Tivat Airport to Herceg Novi — Three Routes, Three Different Drives" + ' | Car Rental Herceg Novi',
    description: "Tivat Airport to Herceg Novi: the Kamenari ferry shortcut, the full bay route, and the winter detour via Trebinje.",
    alternates: buildAlternates('blog/tivat-airport-to-hercegnovi'),
    openGraph: { title: "Tivat Airport to Herceg Novi — Three Routes, Three Different Drives", description: "Tivat Airport to Herceg Novi: the Kamenari ferry shortcut, the full bay route, and the winter detour via Trebinje.", type: 'website' },
  };
}

export default function TivatAirportToHercegnoviRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tivat Airport to Herceg Novi — Three Routes, Three Different Drives",
    "description": "Tivat Airport to Herceg Novi: the Kamenari ferry shortcut, the full bay route, and the winter detour via Trebinje.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-tivat-arrival.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatAirportToHercegnovi />
    </>
  );
}
