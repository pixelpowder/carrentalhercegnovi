'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = { background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--gray-200, #e9ecef)', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s', display: 'flex', flexDirection: 'column' };
const cardImageStyle = { width: '100%', height: '220px', objectFit: 'cover', display: 'block' };
const cardBodyStyle = { padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 };
const cardTitleStyle = { fontSize: '18px', fontWeight: 800, color: 'var(--navy, #05203c)', lineHeight: 1.3, marginBottom: '10px' };
const cardExcerptStyle = { fontSize: '15px', color: 'var(--gray-600, #6c757d)', lineHeight: 1.65, marginBottom: '20px', flex: 1 };
const cardLinkStyle = { fontSize: '14px', fontWeight: 700, color: '#E31937', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' };

const articles = [
  { title: 'Herceg Novi Old Town — The City of Stairs and the Bloody Tower', excerpt: "Kanli Kula fortress (1539), the 1382 Stari Grad, and a town built on stone stairs rising from the harbour.", image: '/img/blog-hercegnovi-oldtown.webp', href: '/blog/herceg-novi-old-town' },
  { title: 'Dubrovnik Day Trip from Herceg Novi — The Border Crossing Guide', excerpt: "Forty kilometres west to the Croatian walled city. The Debeli Brijeg border, wait times, car paperwork and timing.", image: '/img/blog-dubrovnik.webp', href: '/blog/dubrovnik-day-trip' },
  { title: 'Mamula Island — From 19th-Century Fortress to WWII Prison to Luxury Hotel', excerpt: "The small circular island 10 km offshore with three lives — Austro-Hungarian fort, Mussolini prison, Banyan Tree hotel.", image: '/img/blog-mamula.webp', href: '/blog/mamula-island-history' },
  { title: "Igalo's Thermal Mud Spa — The Institute Tito Used", excerpt: "Radioactive marine peloid, a 1949 institute, and the spa Marshal Tito visited for treatment in the Yugoslav era.", image: '/img/blog-igalo.webp', href: '/blog/igalo-thermal-mud-spa' },
  { title: 'Orjen Mountain — Hiking from Sea Level to 1,895 m', excerpt: "Cretaceous limestone, 40 km of marked trails, Subra and Veliki Kabao summits, and a start right from the Herceg Novi bus station.", image: '/img/blog-orjen.webp', href: '/blog/orjen-mountain-hike' },
  { title: 'Savina Monastery — Three Churches, a Thousand Years of Orthodox History', excerpt: "The 11th-century Orthodox complex above Herceg Novi — oldest foundations from 1030, relics of St Sava.", image: '/img/blog-savina.webp', href: '/blog/savina-monastery' },
  { title: 'Blue Cave (Plava Špilja) — The Boat Tour from Herceg Novi', excerpt: "A sea cave on the Luštica Peninsula that glows neon blue at midday. Boat tours, stops, swimming and best months.", image: '/img/blog-blue-cave.webp', href: '/blog/blue-cave-boat-tour' },
  { title: 'The Luštica Peninsula Drive — Hidden Beaches Across the Water', excerpt: "The peninsula opposite Herceg Novi — Kamenari ferry, Mirište and Žanjice beaches, Rose village, Luštica Bay.", image: '/img/blog-lustica.webp', href: '/blog/lustica-peninsula-drive' },
  { title: 'Tivat Airport to Herceg Novi — Three Routes, Three Different Drives', excerpt: "40 km by road, or a ferry shortcut that halves the distance. When each route is worth taking.", image: '/img/blog-tivat-arrival.webp', href: '/blog/tivat-airport-to-hercegnovi' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-hercegnovi-oldtown.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="content-hero__title">Driving Herceg Novi and the Western Bay</h1>
          <p className="content-hero__subtitle">Researched guides to the coast, borders, mountains and boat trips from the Adriatic's western Montenegrin edge.</p>
        </div>
      </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {articles.map((article) => (
            <a key={article.href} href={localePath(article.href)} style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <img src={article.image} alt={article.title} style={cardImageStyle} loading="lazy" />
              <div style={cardBodyStyle}>
                <h2 style={cardTitleStyle}>{article.title}</h2>
                <p style={cardExcerptStyle}>{article.excerpt}</p>
                <span style={cardLinkStyle}>Read guide &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
