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
const cardLinkStyle = { fontSize: '14px', fontWeight: 700, color: '#047857', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' };

const articles = [
  { title: 'The Kamenari–Lepetane Ferry, The Bay of Kotor Shortcut', excerpt: 'A five-minute roll-on ferry across the Verige strait, when to use it vs driving around the bay.', image: '/img/blog-kamenari-lepetane-ferry.webp', href: '/blog/kamenari-lepetane-ferry' },
  { title: 'Rose Village, The Fishing Hamlet at the Tip of Luštica', excerpt: 'A 14th-century stone village opposite Herceg Novi, with Austrian battery ruins on the ridge above.', image: '/img/blog-rose-village-lustica.webp', href: '/blog/rose-village-lustica' },
  { title: 'The Ledenice Loop, The Mountain Road Above Herceg Novi', excerpt: 'A steep switchback climb to ~700 m on the flank of Orjen, and the best bay panorama on the west Boka.', image: '/img/blog-ledenice-viewpoint-loop.webp', href: '/blog/ledenice-viewpoint-loop' },
  { title: 'Risan and the Roman Mosaics, An Inner-Bay Drive from Herceg Novi', excerpt: 'An ancient Illyrian capital, a Roman villa and the Hypnos floor mosaic most visitors never see.', image: '/img/blog-risan-roman-mosaics-drive.webp', href: '/blog/risan-roman-mosaics-drive' },
  { title: 'Portonovi and Podi, The Old Naval Base Reborn as a Marina', excerpt: 'How the Yugoslav naval yard at Kumbor became a superyacht marina, and whether it is worth an hour.', image: '/img/blog-portonovi-marina-podi.webp', href: '/blog/portonovi-marina-podi' },
  { title: 'Bijela Shipyards, The Industrial Heritage of the Outer Bay', excerpt: 'A working dry-dock town on the magistrala and a concise lesson in how the Adriatic coast paid its bills.', image: '/img/blog-bijela-shipyards-heritage.webp', href: '/blog/bijela-shipyards-heritage' },
  { title: 'Đenovići and the West-Bay Promenade', excerpt: 'Austro-Hungarian villas, cypress avenues and a quiet walking strip east of Herceg Novi.', image: '/img/blog-djenovici-west-bay-promenade.webp', href: '/blog/djenovici-west-bay-promenade' },
  { title: "The Sutorina Corridor, Bosnia's Old Sea Access", excerpt: 'The valley west of Igalo that once gave Bosnia a window to the Adriatic, and the abandoned railway trace still visible today.', image: '/img/blog-sutorina-bosnia-corridor.webp', href: '/blog/sutorina-bosnia-corridor' },
  { title: 'Tivat vs Dubrovnik, Which Airport to Fly Into for Herceg Novi', excerpt: 'Two airports, roughly equal driving time, very different logistics. A decision guide for first-time visitors.', image: '/img/blog-tivat-vs-dubrovnik-airport-choice.webp', href: '/blog/tivat-vs-dubrovnik-airport-choice' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-djenovici-west-bay-promenade.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="content-hero__title">Driving the Western Bay of Kotor</h1>
          <p className="content-hero__subtitle">Researched guides to the quieter corners of the Herceg Novi region — ferries, villages, viewpoints and the borders behind the old town.</p>
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
