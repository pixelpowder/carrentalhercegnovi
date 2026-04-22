import { buildAlternates } from '../../metadata';
import SutorinaBosniaCorridor from '@/src/components/pages/blog/SutorinaBosniaCorridor';

export async function generateMetadata() {
  return {
    title: "The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo" + ' | Car Rental Herceg Novi',
    description: "A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused railway trace, and a half-day drive from Herceg Novi up to Trebinje.",
    alternates: buildAlternates('blog/sutorina-bosnia-corridor'),
    openGraph: { title: "The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo", description: "A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused railway trace, and a half-day drive from Herceg Novi up to Trebinje.", type: 'website' },
  };
}

export default function SutorinaBosniaCorridorRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo",
    "description": "A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused railway trace, and a half-day drive from Herceg Novi up to Trebinje.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-sutorina-bosnia-corridor.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SutorinaBosniaCorridor />
    </>
  );
}
