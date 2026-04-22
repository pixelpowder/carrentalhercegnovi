import { t, buildAlternates } from '../../metadata';
import Montenegro from '@/src/components/pages/Montenegro';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'montenegro.title') + ' | Car Rental Herceg Novi',
    description: t(lang, 'montenegro.seoDesc'),
    alternates: buildAlternates('montenegro', lang),
  };
}

export default function LangMontenegroRoute() {
  return <Montenegro />;
}
