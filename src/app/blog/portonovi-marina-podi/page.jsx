import { buildAlternates } from '../../metadata';
import PortonoviMarinaPodi from '@/src/components/pages/blog/PortonoviMarinaPodi';
import content from '@/src/data/blog/portonovi-marina-podi';

const c = content.en;

export async function generateMetadata() {
  return {
    title: c.title + ' | Car Rental Herceg Novi',
    description: c.description,
    alternates: buildAlternates('blog/portonovi-marina-podi'),
    openGraph: { title: c.title, description: c.description, type: 'website' },
  };
}

export default function PortonoviMarinaPodiRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.description,
    "image": "https://www.carrentalhercegnovi.com" + c.image,
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PortonoviMarinaPodi />
    </>
  );
}
