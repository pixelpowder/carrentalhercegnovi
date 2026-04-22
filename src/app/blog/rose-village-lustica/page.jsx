import { buildAlternates } from '../../metadata';
import RoseVillageLustica from '@/src/components/pages/blog/RoseVillageLustica';

export async function generateMetadata() {
  return {
    title: "Rose Village — The Fishing Hamlet at the Tip of Luštica" + ' | Car Rental Herceg Novi',
    description: "A guide to Rose on the Luštica peninsula opposite Herceg Novi: how to get there, where to park, what to see, and the Austrian coastal battery above.",
    alternates: buildAlternates('blog/rose-village-lustica'),
    openGraph: { title: "Rose Village — The Fishing Hamlet at the Tip of Luštica", description: "A guide to Rose on the Luštica peninsula opposite Herceg Novi: how to get there, where to park, what to see, and the Austrian coastal battery above.", type: 'website' },
  };
}

export default function RoseVillageLusticaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rose Village — The Fishing Hamlet at the Tip of Luštica",
    "description": "A guide to Rose on the Luštica peninsula opposite Herceg Novi: how to get there, where to park, what to see, and the Austrian coastal battery above.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-rose-village-lustica.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <RoseVillageLustica />
    </>
  );
}
