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
  { titleKey: 'blogIndex.card_churches_title', titleFb: 'The Kamenari–Lepetane Ferry, The Bay of Kotor Shortcut', excerptKey: 'blogIndex.card_churches_excerpt', excerptFb: 'A five-minute roll-on ferry across the Verige strait, when to use it vs driving around the bay.', image: '/img/blog-kamenari-lepetane-ferry.webp', href: '/blog/kamenari-lepetane-ferry' },
  { titleKey: 'blogIndex.card_vrmac_title', titleFb: 'Rose Village, The Fishing Hamlet at the Tip of Luštica', excerptKey: 'blogIndex.card_vrmac_excerpt', excerptFb: 'A 14th-century stone village opposite Herceg Novi, with Austrian battery ruins on the ridge above.', image: '/img/blog-rose-village-lustica.webp', href: '/blog/rose-village-lustica' },
  { titleKey: 'blogIndex.card_markets_title', titleFb: 'The Ledenice Loop, The Mountain Road Above Herceg Novi', excerptKey: 'blogIndex.card_markets_excerpt', excerptFb: 'A steep switchback climb to ~700 m on the flank of Orjen, and the best bay panorama on the west Boka.', image: '/img/blog-ledenice-viewpoint-loop.webp', href: '/blog/ledenice-viewpoint-loop' },
  { titleKey: 'blogIndex.card_swimming_title', titleFb: 'Risan and the Roman Mosaics, An Inner-Bay Drive from Herceg Novi', excerptKey: 'blogIndex.card_swimming_excerpt', excerptFb: 'An ancient Illyrian capital, a Roman villa and the Hypnos floor mosaic most visitors never see.', image: '/img/blog-risan-roman-mosaics-drive.webp', href: '/blog/risan-roman-mosaics-drive' },
  { titleKey: 'blogIndex.card_cetinje_title', titleFb: 'Portonovi and Podi, The Old Naval Base Reborn as a Marina', excerptKey: 'blogIndex.card_cetinje_excerpt', excerptFb: 'How the Yugoslav naval yard at Kumbor became a superyacht marina, and whether it is worth an hour.', image: '/img/blog-portonovi-marina-podi.webp', href: '/blog/portonovi-marina-podi' },
  { titleKey: 'blogIndex.card_dobrota_title', titleFb: 'Bijela Shipyards, The Industrial Heritage of the Outer Bay', excerptKey: 'blogIndex.card_dobrota_excerpt', excerptFb: 'A working dry-dock town on the magistrala and a concise lesson in how the Adriatic coast paid its bills.', image: '/img/blog-bijela-shipyards-heritage.webp', href: '/blog/bijela-shipyards-heritage' },
  { titleKey: 'blogIndex.card_kayak_title', titleFb: 'Đenovići and the West-Bay Promenade', excerptKey: 'blogIndex.card_kayak_excerpt', excerptFb: 'Austro-Hungarian villas, cypress avenues and a quiet walking strip east of Herceg Novi.', image: '/img/blog-djenovici-west-bay-promenade.webp', href: '/blog/djenovici-west-bay-promenade' },
  { titleKey: 'blogIndex.card_stoliv_title', titleFb: "The Sutorina Corridor, Bosnia's Old Sea Access", excerptKey: 'blogIndex.card_stoliv_excerpt', excerptFb: 'The valley west of Igalo that once gave Bosnia a window to the Adriatic, and the abandoned railway trace still visible today.', image: '/img/blog-sutorina-bosnia-corridor.webp', href: '/blog/sutorina-bosnia-corridor' },
  { titleKey: 'blogIndex.card_wildflowers_title', titleFb: 'Tivat vs Dubrovnik, Which Airport to Fly Into for Herceg Novi', excerptKey: 'blogIndex.card_wildflowers_excerpt', excerptFb: 'Two airports, roughly equal driving time, very different logistics. A decision guide for first-time visitors.', image: '/img/blog-tivat-vs-dubrovnik-airport-choice.webp', href: '/blog/tivat-vs-dubrovnik-airport-choice' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-djenovici-west-bay-promenade.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{tf('blogIndex.breadcrumbBlog', 'Blog')}</span>
          </nav>
          <h1 className="content-hero__title">{tf('blogIndex.pageTitle', 'Driving the Western Bay of Kotor')}</h1>
          <p className="content-hero__subtitle">{tf('blogIndex.pageSubtitle', 'Researched guides to the quieter corners of the Herceg Novi region, ferries, villages, viewpoints and the borders behind the old town.')}</p>
        </div>
      </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {articles.map((article) => {
            const title = tf(article.titleKey, article.titleFb);
            const excerpt = tf(article.excerptKey, article.excerptFb);
            return (
              <a key={article.href} href={localePath(article.href)} style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <img src={article.image} alt={title} style={cardImageStyle} loading="lazy" />
                <div style={cardBodyStyle}>
                  <h2 style={cardTitleStyle}>{title}</h2>
                  <p style={cardExcerptStyle}>{excerpt}</p>
                  <span style={cardLinkStyle}>{tf('blogIndex.readGuide', 'Read guide')} &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
