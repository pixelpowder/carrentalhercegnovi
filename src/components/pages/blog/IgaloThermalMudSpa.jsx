'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function IgaloThermalMudSpa() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Igalo's Thermal Mud Spa — The Institute Tito Used"
      subtitle="Radioactive marine mud, a 1949 Soviet-era institute, and the spa resort that specialises in rheumatism treatment"
      description="Visit guide to Igalo's Institute Dr Simo Milošević: the healing mud, treatment programmes, how to book, and the history of the Balkans' biggest rehabilitation spa."
      image="/img/blog-igalo.webp"
    >
      <h2>Igalo — the medical spa town next door</h2>
      <p>Igalo is a small seaside resort immediately west of Herceg Novi — effectively joined to it by a shared waterfront promenade. It's 5 minutes' drive, 20 minutes' walk. The reason Igalo exists as a distinct place is the mud: a naturally occurring radioactive marine peloid formed where the Sutorina river meets the sea.</p>
      <p>The Institute "Dr Simo Milošević" here, founded in 1949, is one of the largest multi-disciplinary spa treatment facilities in the Balkans. During the Yugoslav era it was the go-to rehabilitation centre for communist-era elites — including President Tito himself, who came here for treatment.</p>

      <h2>The mud — why it works</h2>
      <p>The peloid from Igalo Bay forms over centuries as mineral deposits from the Sutorina river interact with seawater. It is characterised by a very high concentration of minerals and biologically active substances, and is classed as mildly radioactive — the low-level radiation is part of the therapeutic effect.</p>
      <p>Application of the mud causes blood vessel dilation, increased circulation, improved lymph drainage, and accelerated resorption of inflammation. It's used for rheumatism, musculoskeletal injuries, skin conditions and post-operative rehabilitation.</p>

      <img src="/img/blog-igalo.webp" alt="Igalo spa institute" loading="lazy" />

      <h2>What the Institute offers</h2>
      <p>The medical centre includes five indoor pools at different temperatures, three saunas, mud treatment chambers, four tennis courts, and a range of physiotherapy and rehabilitation facilities. Treatments can be booked as individual sessions (day visits) or as multi-week programmes.</p>
      <p>Doctors recommend three-week programmes for optimal therapeutic results. Individual day sessions (mud bath, mud wrap, thermal pool access) start around €25-40 per treatment.</p>

      <h2>Wellness programmes (non-medical)</h2>
      <p>Alongside clinical rehabilitation, the Institute offers wellness packages focused on relaxation and general health: gym access, manual and underwater massage, aromatherapy baths, magnetotherapy, and exercise therapy. Three-day to two-week programmes, priced €150-800 depending on length and inclusions.</p>

      <h2>Booking and access</h2>
      <p>The Institute operates its own hotels on the same grounds — Hotel Mediterranean and Hotel Tamaris — offering package deals that include accommodation, meals, and treatments. Direct bookings via <a href="https://igalospa.com" target="_blank" rel="noopener noreferrer">igalospa.com</a>.</p>
      <p>For non-residents: day access to the pool, sauna and gym is available (€15-20 day pass). Mud treatments need pre-booking and a short medical consultation.</p>

      <h2>Historical context — the Tito years</h2>
      <p>President Tito visited the Institute repeatedly during his life. His personal recovery sessions here contributed to Igalo's international reputation in the 1960s and 1970s, when it drew clients from across Europe, Africa and the non-aligned Yugoslav diplomatic sphere. The Institute's architecture — low-rise 1970s brutalism — is a fair summary of that era. Love it or hate it, the waters underneath still work.</p>

      <h2>The wider Igalo waterfront</h2>
      <p>Beyond the Institute, Igalo has a pleasant 2 km promenade, a pebbly beach that's quieter than Herceg Novi's, and a few good konobas (Konoba Tri Lipe is a local favourite for grilled fish). It's a sensible base for visitors focused on treatment rather than sightseeing.</p>

      <h2>Pair with</h2>
      <p>Morning treatment, afternoon drive — the <a href={localePath('/blog/savina-monastery')}>Savina Monastery</a> is 10 minutes east, and a relaxed coast drive back via Bijela and Meljine fills the rest of the day.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Institute</strong>Dr Simo Milošević, 1949</div>
          <div className="route-info__item"><strong>Specialises in</strong>Rheumatism, rehabilitation</div>
          <div className="route-info__item"><strong>Day treatment</strong>€25-40</div>
          <div className="route-info__item"><strong>Optimal programme</strong>3 weeks</div>
        </div>
      </div>
    </ContentPage>
  );
}
