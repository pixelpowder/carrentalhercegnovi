import { buildAlternates } from '../../metadata';
import HercegNoviOldTown from '@/src/components/pages/blog/HercegNoviOldTown';

export async function generateMetadata() {
  return {
    title: "Herceg Novi Old Town — The City of Stairs and the Bloody Tower" + ' | Car Rental Herceg Novi',
    description: "A walking guide to Herceg Novi's Stari Grad: Kanli Kula fortress, the town squares, and parking tips for a town made of stairs.",
    alternates: buildAlternates('blog/herceg-novi-old-town'),
    openGraph: { title: "Herceg Novi Old Town — The City of Stairs and the Bloody Tower", description: "A walking guide to Herceg Novi's Stari Grad: Kanli Kula fortress, the town squares, and parking tips for a town made of stairs.", type: 'website' },
  };
}

export default function HercegNoviOldTownRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Herceg Novi Old Town — The City of Stairs and the Bloody Tower",
    "description": "A walking guide to Herceg Novi's Stari Grad: Kanli Kula fortress, the town squares, and parking tips for a town made of stairs.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-hercegnovi-oldtown.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HercegNoviOldTown />
    </>
  );
}
