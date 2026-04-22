import { buildAlternates } from '../../../metadata';
import SavinaMonastery from '@/src/components/pages/blog/SavinaMonastery';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Savina Monastery — Three Churches, a Thousand Years of Orthodox History" + ' | Car Rental Herceg Novi',
    description: "Guide to Savina Monastery: the three churches, the relics of St Sava, the 11th-century foundation, how to visit.",
    alternates: buildAlternates('blog/savina-monastery', lang),
  };
}

export default async function LangSavinaMonasteryRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Savina Monastery — Three Churches, a Thousand Years of Orthodox History",
    "description": "Guide to Savina Monastery: the three churches, the relics of St Sava, the 11th-century foundation, how to visit.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-savina.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SavinaMonastery />
    </>
  );
}
