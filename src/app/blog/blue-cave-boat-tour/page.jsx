import { buildAlternates } from '../../metadata';
import BlueCaveBoatTour from '@/src/components/pages/blog/BlueCaveBoatTour';

export async function generateMetadata() {
  return {
    title: "Blue Cave (Plava Špilja) — The Boat Tour from Herceg Novi" + ' | Car Rental Herceg Novi',
    description: "Blue Cave boat tour guide: timing the midday light, typical stops (Mamula, Luštica tunnels), swimming, best months to go.",
    alternates: buildAlternates('blog/blue-cave-boat-tour'),
    openGraph: { title: "Blue Cave (Plava Špilja) — The Boat Tour from Herceg Novi", description: "Blue Cave boat tour guide: timing the midday light, typical stops (Mamula, Luštica tunnels), swimming, best months to go.", type: 'website' },
  };
}

export default function BlueCaveBoatTourRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Blue Cave (Plava Špilja) — The Boat Tour from Herceg Novi",
    "description": "Blue Cave boat tour guide: timing the midday light, typical stops (Mamula, Luštica tunnels), swimming, best months to go.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-blue-cave.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlueCaveBoatTour />
    </>
  );
}
