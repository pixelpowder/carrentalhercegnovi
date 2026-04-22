import { buildAlternates } from '../../../metadata';
import IgaloThermalMudSpa from '@/src/components/pages/blog/IgaloThermalMudSpa';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Igalo's Thermal Mud Spa — The Institute Tito Used" + ' | Car Rental Herceg Novi',
    description: "Visit guide to Igalo's Institute Dr Simo Milošević: the healing mud, treatment programmes, and the Balkans' biggest rehabilitation spa.",
    alternates: buildAlternates('blog/igalo-thermal-mud-spa', lang),
  };
}

export default async function LangIgaloThermalMudSpaRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Igalo's Thermal Mud Spa — The Institute Tito Used",
    "description": "Visit guide to Igalo's Institute Dr Simo Milošević: the healing mud, treatment programmes, and the Balkans' biggest rehabilitation spa.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-igalo.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <IgaloThermalMudSpa />
    </>
  );
}
