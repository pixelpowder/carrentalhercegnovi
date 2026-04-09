import { t, buildAlternates } from '../../metadata';
import BudvaNightlifeGuide from '@/src/components/pages/blog/BudvaNightlifeGuide';

export async function generateMetadata() {
  return {
    title: t('en', 'blogNightlife.title') + ' | Herceg Novi Car Rental',
    description: t('en', 'blogNightlife.description'),
    alternates: buildAlternates('blog/budva-nightlife-guide'),
  };
}

export default function BudvaNightlifeGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogNightlife.title'),
    "description": t('en', 'blogNightlife.description'),
    "image": "https://www.carrentalhercegnovi.com/img/blog-budva-nightlife-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Herceg Novi Car Rental", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Herceg Novi Car Rental", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaNightlifeGuide />
    </>
  );
}
