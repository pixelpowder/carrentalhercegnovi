import { t, buildAlternates } from '../../../metadata';
import BudvaOldTownWalking from '@/src/components/pages/blog/BudvaOldTownWalking';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogOldtown.title') + ' | Herceg Novi Car Rental',
    description: t(lang, 'blogOldtown.description'),
    alternates: buildAlternates('blog/budva-old-town-walking'),
  };
}

export default function LangBudvaOldTownWalkingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOldtown.title'),
    "description": t('en', 'blogOldtown.description'),
    "image": "https://www.carrentalhercegnovi.com/img/blog-budva-old-town-walking.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Rental", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Rental", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaOldTownWalking />
    </>
  );
}
