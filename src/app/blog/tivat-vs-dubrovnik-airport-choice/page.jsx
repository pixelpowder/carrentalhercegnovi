import { buildAlternates } from '../../metadata';
import TivatVsDubrovnikAirportChoice from '@/src/components/pages/blog/TivatVsDubrovnikAirportChoice';

export async function generateMetadata() {
  return {
    title: "Tivat vs Dubrovnik — Which Airport to Fly Into for Herceg Novi" + ' | Car Rental Herceg Novi',
    description: "A detailed comparison of Tivat (TIV) and Dubrovnik (DBV) airports for reaching Herceg Novi: driving times, border crossings, rental car considerations, flight options.",
    alternates: buildAlternates('blog/tivat-vs-dubrovnik-airport-choice'),
    openGraph: { title: "Tivat vs Dubrovnik — Which Airport to Fly Into for Herceg Novi", description: "A detailed comparison of Tivat (TIV) and Dubrovnik (DBV) airports for reaching Herceg Novi: driving times, border crossings, rental car considerations, flight options.", type: 'website' },
  };
}

export default function TivatVsDubrovnikAirportChoiceRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tivat vs Dubrovnik — Which Airport to Fly Into for Herceg Novi",
    "description": "A detailed comparison of Tivat (TIV) and Dubrovnik (DBV) airports for reaching Herceg Novi: driving times, border crossings, rental car considerations, flight options.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-airport-choice.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatVsDubrovnikAirportChoice />
    </>
  );
}
