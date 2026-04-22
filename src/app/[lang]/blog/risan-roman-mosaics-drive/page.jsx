import { buildAlternates } from '../../../metadata';
import RisanRomanMosaicsDrive from '@/src/components/pages/blog/RisanRomanMosaicsDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Risan and the Roman Mosaics — An Inner-Bay Drive from Herceg Novi" + ' | Car Rental Herceg Novi',
    description: "A driving guide from Herceg Novi to Risan on the inner Bay of Kotor: the route, the Roman villa mosaics including the Hypnos floor, and why Risan rewards a half-day.",
    alternates: buildAlternates('blog/risan-roman-mosaics-drive', lang),
  };
}

export default async function LangRisanRomanMosaicsDriveRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Risan and the Roman Mosaics — An Inner-Bay Drive from Herceg Novi",
    "description": "A driving guide from Herceg Novi to Risan on the inner Bay of Kotor: the route, the Roman villa mosaics including the Hypnos floor, and why Risan rewards a half-day.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-risan.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <RisanRomanMosaicsDrive />
    </>
  );
}
