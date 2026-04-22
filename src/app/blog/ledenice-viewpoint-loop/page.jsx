import { buildAlternates } from '../../metadata';
import LedeniceViewpointLoop from '@/src/components/pages/blog/LedeniceViewpointLoop';

export async function generateMetadata() {
  return {
    title: "The Ledenice Loop — The Mountain Road Above Herceg Novi" + ' | Car Rental Herceg Novi',
    description: "A driving guide to the Ledenice loop above Herceg Novi: how to find the turn, what the switchback is like, where to stop, and why morning and sunset give very different views.",
    alternates: buildAlternates('blog/ledenice-viewpoint-loop'),
    openGraph: { title: "The Ledenice Loop — The Mountain Road Above Herceg Novi", description: "A driving guide to the Ledenice loop above Herceg Novi: how to find the turn, what the switchback is like, where to stop, and why morning and sunset give very different views.", type: 'website' },
  };
}

export default function LedeniceViewpointLoopRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ledenice Loop — The Mountain Road Above Herceg Novi",
    "description": "A driving guide to the Ledenice loop above Herceg Novi: how to find the turn, what the switchback is like, where to stop, and why morning and sunset give very different views.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-ledenice.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LedeniceViewpointLoop />
    </>
  );
}
