import { buildAlternates } from '../../../metadata';
import DjenoviciWestBayPromenade from '@/src/components/pages/blog/DjenoviciWestBayPromenade';
import content from '@/src/data/blog/djenovici-west-bay-promenade';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const c = content[lang] || content.en;
  return {
    title: c.title + ' | Car Rental Herceg Novi',
    description: c.description,
    alternates: buildAlternates('blog/djenovici-west-bay-promenade', lang),
    openGraph: { title: c.title, description: c.description, type: 'website' },
  };
}

export default async function LangDjenoviciWestBayPromenadeRoute({ params }) {
  const { lang } = await params;
  const c = content[lang] || content.en;
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
      <DjenoviciWestBayPromenade />
    </>
  );
}
