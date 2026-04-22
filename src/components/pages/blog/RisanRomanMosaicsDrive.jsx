'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import content from '../../../data/blog/risan-roman-mosaics-drive';
import renderSections from './renderSections';

export default function RisanRomanMosaicsDrive() {
  const { lang, localePath } = useTranslation();
  const c = content[lang] || content.en;
  return (
    <ContentPage title={c.title} subtitle={c.subtitle} description={c.description} image={c.image}>
      {renderSections(c.sections, localePath)}
    </ContentPage>
  );
}
