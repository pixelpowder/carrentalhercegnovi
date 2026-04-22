import { buildAlternates } from '../../metadata';
import PortonoviMarinaPodi from '@/src/components/pages/blog/PortonoviMarinaPodi';

export async function generateMetadata() {
  return {
    title: "Portonovi and Podi — The Old Naval Base Reborn as a Marina" + ' | Car Rental Herceg Novi',
    description: "A guide to Portonovi marina and the wider Podi area east of Herceg Novi: the Yugoslav naval base history, the marina today, parking and access for non-guests.",
    alternates: buildAlternates('blog/portonovi-marina-podi'),
    openGraph: { title: "Portonovi and Podi — The Old Naval Base Reborn as a Marina", description: "A guide to Portonovi marina and the wider Podi area east of Herceg Novi: the Yugoslav naval base history, the marina today, parking and access for non-guests.", type: 'website' },
  };
}

export default function PortonoviMarinaPodiRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Portonovi and Podi — The Old Naval Base Reborn as a Marina",
    "description": "A guide to Portonovi marina and the wider Podi area east of Herceg Novi: the Yugoslav naval base history, the marina today, parking and access for non-guests.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-portonovi-marina-podi.webp",
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
