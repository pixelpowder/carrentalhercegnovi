import { buildAlternates } from '../../../metadata';
import SutorinaBosniaCorridor from '@/src/components/pages/blog/SutorinaBosniaCorridor';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo" + ' | Car Rental Herceg Novi',
    description: "A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused railway trace, and a half-day drive from Herceg Novi up to Trebinje.",
    alternates: buildAlternates('blog/sutorina-bosnia-corridor', lang),
  };
}

export default async function LangSutorinaBosniaCorridorRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo",
    "description": "A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused railway trace, and a half-day drive from Herceg Novi up to Trebinje.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-sutorina.webp",
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
