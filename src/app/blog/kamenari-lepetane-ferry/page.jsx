import { buildAlternates } from '../../metadata';
import KamenariLepetaneFerry from '@/src/components/pages/blog/KamenariLepetaneFerry';

export async function generateMetadata() {
  return {
    title: "The Kamenari–Lepetane Ferry — The Bay of Kotor Shortcut" + ' | Car Rental Herceg Novi',
    description: "A practical guide to the Kamenari–Lepetane car ferry across the narrowest point of the Bay of Kotor: the route, when to use it, ticket basics, and what the crossing actually shows you.",
    alternates: buildAlternates('blog/kamenari-lepetane-ferry'),
    openGraph: { title: "The Kamenari–Lepetane Ferry — The Bay of Kotor Shortcut", description: "A practical guide to the Kamenari–Lepetane car ferry across the narrowest point of the Bay of Kotor: the route, when to use it, ticket basics, and what the crossing actually shows you.", type: 'website' },
  };
}

export default function KamenariLepetaneFerryRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Kamenari–Lepetane Ferry — The Bay of Kotor Shortcut",
    "description": "A practical guide to the Kamenari–Lepetane car ferry across the narrowest point of the Bay of Kotor: the route, when to use it, ticket basics, and what the crossing actually shows you.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-kamenari-lepetane-ferry.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KamenariLepetaneFerry />
    </>
  );
}
