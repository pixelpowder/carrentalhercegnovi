'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function About() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="About Car Rental Herceg Novi"
      subtitle="A local booking partner on Montenegro's western border — serving visitors via Tivat Airport, Dubrovnik Airport, or ferry arrivals"
      description="Car Rental Herceg Novi is an independent booking platform for rental cars on Montenegro's western bay, specialising in Herceg Novi, Igalo, and cross-border Dubrovnik trips."
      image="/img/blog-hercegnovi-oldtown.webp"
    >
      <h2>Who we are</h2>
      <p>Car Rental Herceg Novi is a booking platform partnered with small and mid-sized rental operators on Montenegro's western coast — the stretch from the Debeli Brijeg border through Igalo, Herceg Novi, and onto the Kamenari ferry. We're a small local team, not a global franchise.</p>

      <h2>Why base in Herceg Novi</h2>
      <p>Herceg Novi sits at the western gateway to the Bay of Kotor — between the Croatian border and the Verige Strait. It's the natural base for visitors who want two-country access without moving hotels: Dubrovnik is 40 minutes west, Kotor 30 minutes east.</p>
      <p>From here, the <a href={localePath('/blog/dubrovnik-day-trip')}>Dubrovnik day trip</a> is routine, the <a href={localePath('/blog/lustica-peninsula-drive')}>Luštica Peninsula</a> is a ferry away, and the mountain above town (<a href={localePath('/blog/orjen-mountain-hike')}>Orjen</a>) gives real high-altitude hiking 40 minutes from the beach.</p>

      <h2>Included with every rental</h2>
      <p>CDW and third-party liability insurance, VAT, unlimited mileage on most categories, winter tyres November through March on mountain-class vehicles, and 24/7 roadside support. Zero-excess upgrade available at booking or pickup. Cross-border cover for Croatia, Bosnia, Serbia, Albania and Kosovo is included when requested.</p>

      <h2>Pickup options</h2>
      <p>We meet every flight at <a href={localePath('/blog/tivat-airport-to-hercegnovi')}>Tivat Airport (TIV)</a> — 40 minutes east via the Kamenari ferry or around the bay. We can also arrange Dubrovnik Airport pickup for travellers flying into Croatia, with cross-border delivery included. In-town pickups are available at your Herceg Novi or Igalo hotel.</p>

      <h2>Pricing</h2>
      <p>No summer premium on the confirmation page. The rate you book is the rate you pay.</p>

      <h2>Contact us</h2>
      <p>See our <a href={localePath('/contact')}>contact page</a> for form, email, and WhatsApp. We reply within two hours during business hours.</p>
    </ContentPage>
  );
}
