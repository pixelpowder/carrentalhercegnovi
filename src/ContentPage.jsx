'use client';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import useTranslation from './i18n/useTranslation';
import config from './siteConfig';
import './ContentPage.css';

export default function ContentPage({ title, subtitle, image, description, children }) {
  const pathname = usePathname();
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{title}</span>
          </nav>
          <h1 className="content-hero__title">{title}</h1>
          {subtitle && <p className="content-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="content-body">
        <div className="content-body__inner">{children}</div>
        <aside className="content-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.bookTitle')}</h3>
            <p className="sidebar-card__text">{t('sidebar.bookText')}</p>
            <a href={localePath('/book')} className="sidebar-card__btn">{t('common.searchCars')}</a>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.helpTitle')}</h3>
            <p className="sidebar-card__text">{t('sidebar.helpText')}</p>
            <a href={`mailto:${config.email}`} className="sidebar-card__btn sidebar-card__btn--outline">{t('common.emailUs') || 'Email Us'}</a>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.westernBayGuides') || 'Western Bay Guides'}</h3>
            <ul className="sidebar-links">
              <li><a href={localePath('/blog/kamenari-lepetane-ferry')}>{t('sidebar.linkKamenariFerry') || 'Kamenari–Lepetane Ferry'}</a></li>
              <li><a href={localePath('/blog/rose-village-lustica')}>{t('sidebar.linkRoseLustica') || 'Rose Village on Luštica'}</a></li>
              <li><a href={localePath('/blog/ledenice-viewpoint-loop')}>{t('sidebar.linkLedenice') || 'Ledenice Viewpoint Loop'}</a></li>
              <li><a href={localePath('/blog/risan-roman-mosaics-drive')}>{t('sidebar.linkRisanMosaics') || 'Risan Roman Mosaics'}</a></li>
              <li><a href={localePath('/blog/djenovici-west-bay-promenade')}>{t('sidebar.linkDjenovici') || 'Đenovići West-Bay Promenade'}</a></li>
              <li><a href={localePath('/blog/tivat-vs-dubrovnik-airport-choice')}>{t('sidebar.linkAirportChoice') || 'Tivat vs Dubrovnik Airport'}</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="related-guides">
        <div className="related-guides__inner">
          <h2 className="related-guides__title">{t('relatedGuides.title') || 'You might also like'}</h2>
          <div className="related-guides__cards">
            <a href={localePath('/blog/ledenice-viewpoint-loop')} className="related-card">
              <img src="/img/blog-ledenice-viewpoint-loop.webp" alt={t('sidebar.linkLedenice') || 'Ledenice Viewpoint Loop'} loading="lazy" />
              <span>{t('sidebar.linkLedenice') || 'Ledenice Viewpoint Loop'}</span>
            </a>
            <a href={localePath('/blog/rose-village-lustica')} className="related-card">
              <img src="/img/blog-rose-village-lustica.webp" alt={t('sidebar.linkRoseLustica') || 'Rose Village on Luštica'} loading="lazy" />
              <span>{t('sidebar.linkRoseLustica') || 'Rose Village on Luštica'}</span>
            </a>
            <a href={localePath('/blog/tivat-vs-dubrovnik-airport-choice')} className="related-card">
              <img src="/img/blog-tivat-vs-dubrovnik-airport-choice.webp" alt={t('sidebar.linkAirportChoice') || 'Tivat vs Dubrovnik Airport'} loading="lazy" />
              <span>{t('sidebar.linkAirportChoice') || 'Tivat vs Dubrovnik Airport'}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="content-cta">
        <div className="content-cta__inner">
          <h2>{t('contentPage.readyCta')}</h2>
          <a href={localePath('/book')} className="content-cta__btn">{t('contentPage.searchCars')} →</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
