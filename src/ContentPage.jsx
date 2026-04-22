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
            <h3 className="sidebar-card__title">Western Bay Guides</h3>
            <ul className="sidebar-links">
              <li><a href={localePath('/blog/herceg-novi-old-town')}>Herceg Novi Old Town</a></li>
              <li><a href={localePath('/blog/dubrovnik-day-trip')}>Dubrovnik Day Trip</a></li>
              <li><a href={localePath('/blog/mamula-island-history')}>Mamula Island</a></li>
              <li><a href={localePath('/blog/igalo-thermal-mud-spa')}>Igalo Mud Spa</a></li>
              <li><a href={localePath('/blog/blue-cave-boat-tour')}>Blue Cave Tour</a></li>
              <li><a href={localePath('/blog/savina-monastery')}>Savina Monastery</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="related-guides">
        <div className="related-guides__inner">
          <h2 className="related-guides__title">You might also like</h2>
          <div className="related-guides__cards">
            <a href={localePath('/blog/orjen-mountain-hike')} className="related-card">
              <img src="/img/blog-orjen.webp" alt="Orjen Mountain hike" loading="lazy" />
              <span>Orjen Mountain Hike</span>
            </a>
            <a href={localePath('/blog/lustica-peninsula-drive')} className="related-card">
              <img src="/img/blog-lustica.webp" alt="Luštica peninsula drive" loading="lazy" />
              <span>Luštica Peninsula Drive</span>
            </a>
            <a href={localePath('/blog/tivat-airport-to-hercegnovi')} className="related-card">
              <img src="/img/blog-tivat-arrival.webp" alt="Tivat Airport to Herceg Novi" loading="lazy" />
              <span>Tivat Airport Route</span>
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
