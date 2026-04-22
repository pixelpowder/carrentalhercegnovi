import { buildAlternates } from '../../metadata';
import DubrovnikDayTrip from '@/src/components/pages/blog/DubrovnikDayTrip';

export async function generateMetadata() {
  return {
    title: "Dubrovnik Day Trip from Herceg Novi — The Border Crossing Guide" + ' | Car Rental Herceg Novi',
    description: "Driving guide from Herceg Novi to Dubrovnik: the Debeli Brijeg border, wait times, rental paperwork, what to see in Dubrovnik.",
    alternates: buildAlternates('blog/dubrovnik-day-trip'),
    openGraph: { title: "Dubrovnik Day Trip from Herceg Novi — The Border Crossing Guide", description: "Driving guide from Herceg Novi to Dubrovnik: the Debeli Brijeg border, wait times, rental paperwork, what to see in Dubrovnik.", type: 'website' },
  };
}

export default function DubrovnikDayTripRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dubrovnik Day Trip from Herceg Novi — The Border Crossing Guide",
    "description": "Driving guide from Herceg Novi to Dubrovnik: the Debeli Brijeg border, wait times, rental paperwork, what to see in Dubrovnik.",
    "image": "https://www.carrentalhercegnovi.com/img/blog-dubrovnik.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Herceg Novi", "url": "https://www.carrentalhercegnovi.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <DubrovnikDayTrip />
    </>
  );
}
