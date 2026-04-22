import { buildAlternates } from '../../../metadata';
import LusticaPeninsulaDrive from '@/src/components/pages/blog/LusticaPeninsulaDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "The Luštica Peninsula Drive — Hidden Beaches Across the Water" + ' | Car Rental Herceg Novi',
    description: "Driving and ferrying guide to Luštica: Kamenari ferry, Mirište and Žanjice beaches, Rose village, and the new Luštica Bay.",
    alternates: buildAlternates('blog/lustica-peninsula-drive', lang),
  };
}

export default async function LangLusticaPeninsulaDriveRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Luštica Peninsula Drive — Hidden Beaches Across the Water",
    "description": "Driving and ferrying guide to Luštica: Kamenari ferry, Mirište and Žanjice beaches, Rose village, and the new Luštica Bay.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-lustica.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LusticaPeninsulaDrive />
    </>
  );
}
