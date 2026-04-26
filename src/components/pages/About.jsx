'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function About() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  return (
    <ContentPage
      title={tf('aboutPage.title', 'About Car Rental Herceg Novi')}
      subtitle={tf('aboutPage.subtitle', "A local booking partner on Montenegro's western border, serving visitors via Tivat Airport, Dubrovnik Airport, or ferry arrivals")}
      description={tf('aboutPage.description', "Car Rental Herceg Novi is an independent booking platform for rental cars on Montenegro's western bay, specialising in Herceg Novi, Igalo, and cross-border Dubrovnik trips.")}
      image="/img/blog-djenovici-west-bay-promenade.webp"
    >
      <h2>{tf('aboutPage.h2WhoWeAre', 'Who we are')}</h2>
      <p>{tf('aboutPage.p1', "Car Rental Herceg Novi is a booking platform partnered with small and mid-sized rental operators on Montenegro's western coast, the stretch from the Debeli Brijeg border through Igalo, Herceg Novi, and onto the Kamenari ferry. We're a small local team, not a global franchise.")}</p>

      <h2>{tf('aboutPage.h2WhyHercegNovi', 'Why base in Herceg Novi')}</h2>
      <p>{tf('aboutPage.p2', "Herceg Novi sits at the western gateway to the Bay of Kotor, between the Croatian border and the Verige Strait. It's the natural base for visitors who want two-country access without moving hotels: Dubrovnik is 40 minutes west, Kotor 30 minutes east.")}</p>
      <p>
        {tf('aboutPage.p3Before', 'From here, the ')}
        <a href={localePath('/blog/tivat-vs-dubrovnik-airport-choice')}>{tf('aboutPage.p3LinkAirport', 'airport choice')}</a>
        {tf('aboutPage.p3Mid1', ' shapes your arrival, the ')}
        <a href={localePath('/blog/rose-village-lustica')}>{tf('aboutPage.p3LinkLustica', 'Luštica peninsula')}</a>
        {tf('aboutPage.p3Mid2', ' is a short ferry away, and the ')}
        <a href={localePath('/blog/ledenice-viewpoint-loop')}>{tf('aboutPage.p3LinkLedenice', 'Ledenice loop')}</a>
        {tf('aboutPage.p3After', ' delivers a mountain drive forty minutes from the beach.')}
      </p>

      <h2>{tf('aboutPage.h2Included', 'Included with every rental')}</h2>
      <p>{tf('aboutPage.p4', 'CDW and third-party liability insurance, VAT, unlimited mileage on most categories, winter tyres November through March on mountain-class vehicles, and 24/7 roadside support. Zero-excess upgrade available at booking or pickup. Cross-border cover for Croatia, Bosnia, Serbia, Albania and Kosovo is included when requested.')}</p>

      <h2>{tf('aboutPage.h2Pickup', 'Pickup options')}</h2>
      <p>
        {tf('aboutPage.p5Before', 'We meet every flight at Tivat Airport (TIV), 40 minutes east via the ')}
        <a href={localePath('/blog/kamenari-lepetane-ferry')}>{tf('aboutPage.p5LinkFerry', 'Kamenari ferry')}</a>
        {tf('aboutPage.p5After', ' or around the bay. We can also arrange Dubrovnik Airport pickup for travellers flying into Croatia, with cross-border delivery included. In-town pickups are available at your Herceg Novi or Igalo hotel.')}
      </p>

      <h2>{tf('aboutPage.h2Pricing', 'Pricing')}</h2>
      <p>{tf('aboutPage.p6', 'No summer premium on the confirmation page. The rate you book is the rate you pay.')}</p>

      <h2>{tf('aboutPage.h2Contact', 'Contact us')}</h2>
      <p>
        {tf('aboutPage.p7Before', 'See our ')}
        <a href={localePath('/contact')}>{tf('aboutPage.p7LinkContact', 'contact page')}</a>
        {tf('aboutPage.p7After', ' for form, email, and WhatsApp. We reply within two hours during business hours.')}
      </p>
    </ContentPage>
  );
}
