import NotFound from '@/src/components/pages/NotFound';
import { t } from './metadata';

export function generateMetadata() {
  const translated = t('en', 'notFound.metaTitle');
  const title = translated !== 'notFound.metaTitle'
    ? translated
    : 'Page Not Found | Car Rental Herceg Novi';
  return { title };
}

export default function NotFoundPage() {
  return <NotFound />;
}
