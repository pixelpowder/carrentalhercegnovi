import { buildAlternates } from '../../metadata';
import DjenoviciWestBayPromenade from '@/src/components/pages/blog/DjenoviciWestBayPromenade';

export async function generateMetadata() {
  return {
    title: "Đenovići and the West-Bay Promenade — The Forgotten Coastal Strip East of Herceg Novi" + ' | Car Rental Herceg Novi',
    description: "A walking and driving guide to Đenovići, Baošići and the quiet west-bay coastal promenade east of Herceg Novi: Austro-Hungarian history, where to swim and eat.",
    alternates: buildAlternates('blog/djenovici-west-bay-promenade'),
    openGraph: { title: "Đenovići and the West-Bay Promenade — The Forgotten Coastal Strip East of Herceg Novi", description: "A walking and driving guide to Đenovići, Baošići and the quiet west-bay coastal promenade east of Herceg Novi: Austro-Hungarian history, where to swim and eat.", type: 'website' },
  };
}

export default function DjenoviciWestBayPromenadeRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Đenovići and the West-Bay Promenade — The Forgotten Coastal Strip East of Herceg Novi",
    "description": "A walking and driving guide to Đenovići, Baošići and the quiet west-bay coastal promenade east of Herceg Novi: Austro-Hungarian history, where to swim and eat.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-djenovici-west-bay-promenade.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <DjenoviciWestBayPromenade />
    </>
  );
}
