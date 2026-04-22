import { buildAlternates } from '../../../metadata';
import HercegNoviOldTown from '@/src/components/pages/blog/HercegNoviOldTown';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Herceg Novi Old Town — The City of Stairs and the Bloody Tower" + ' | Car Rental Herceg Novi',
    description: "A walking guide to Herceg Novi's Stari Grad: Kanli Kula fortress, the town squares, and parking tips for a town made of stairs.",
    alternates: buildAlternates('blog/herceg-novi-old-town', lang),
  };
}

export default async function LangHercegNoviOldTownRoute({ params }) {
  const { lang } = await params;
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
