'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BijelaShipyardsHeritage() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Bijela Shipyards — The Industrial Heritage of the Outer Bay"
      subtitle="The dry docks and cranes that defined the west Boka's working coast — and what is quietly changing at the waterline"
      description="A driving and walking guide to Bijela, the outer Bay of Kotor's shipyard town: the history of the dockyard, what is visible from the road, and how to fit a visit around the ferry and the inner bay."
      image="/img/blog-bijela-shipyards-heritage.webp"
    >
      <h2>Where Bijela is</h2>
      <p>Bijela is a small coastal town on the outer Bay of Kotor, roughly 10 km east of Herceg Novi and 3 km west of the Kamenari ferry ramp. It sits directly on the magistrala, which runs through the town rather than bypassing it. For most drivers, Bijela is the five-minute stretch of industrial-looking waterfront between Baošići and Kamenari — but if you know what you are looking at, that stretch is a concise lesson in how the working Adriatic coast actually paid its bills for most of the 20th century.</p>

      <h2>The shipyard — a compact history</h2>
      <p>The Bijela shipyard (Brodogradilište "Bijela") was founded in 1927. Through the Yugoslav era it grew into one of the most important ship-repair facilities on the eastern Adriatic, specialising in the overhaul of medium-sized cargo ships and tankers. It operates two large dry docks and a long repair quay, visible from the magistrala as you drive through town. For decades the yard employed a substantial share of Bijela's population and drew workers from villages across the outer bay.</p>
      <p>After the 1990s the yard went through the kinds of ownership changes familiar to any post-Yugoslav industrial facility — privatisation, insolvency, re-capitalisation. Environmental concerns dating to that era, particularly around sandblasting waste on the waterfront, have been the subject of long-running clean-up discussions. At the time of writing the yard is active, but its long-term future has been the subject of government plans and public debate. We avoid stating specifics here because the situation is evolving; if the detail matters, check the current Montenegrin business press before you visit.</p>

      <h2>What you actually see from the road</h2>
      <p>Driving through Bijela you pass a row of cranes rising above the waterfront, a long corrugated-clad repair shed, and — if the docks are occupied — the exposed underwater hull of a ship sitting on the dock floor with workers on scaffolding around it. The scale is surprising against the small-town surroundings. A fence separates the yard from the public road, but most of the operation is visible over or through it. On a weekday during working hours the yard is active and noisy; at weekends and evenings it is quiet.</p>

      <img src="/img/blog-bijela-shipyards-heritage.webp" alt="Bay shipyard cranes and dry dock" loading="lazy" />

      <h2>Bijela's other layers</h2>
      <p>Behind the shipyard, Bijela is a normal coastal town — an Orthodox church, a small waterfront promenade, a handful of seasonal cafés, an older village core on the hill above the magistrala. The Church of the Dormition of the Mother of God (Crkva Uspenja Bogorodice) is the landmark religious building, with fragments of medieval frescoes widely regarded as among the older surviving examples in the bay. Dates and attribution are debated by historians; we avoid a specific century here rather than state it incorrectly.</p>

      <h2>The waterfront promenade</h2>
      <p>The coastal promenade runs along part of the Bijela shoreline east of the shipyard, eventually linking (with some gaps) toward Kamenari. It is a pleasant, unpolished walk lined with pines and small swimming ladders. Locals jog it early morning and families use it in the evening. It is emphatically not a manicured resort strip — which is why it remains worth walking.</p>

      <h2>Beaches</h2>
      <p>Bijela's main beach is a mix of fine pebble and concrete swimming platforms, with clear calm water typical of the outer bay. It is quieter than Igalo or Herceg Novi town beach because nobody is coming to Bijela just to swim. Combine a morning at the beach with a walk through the town centre and a look at the shipyard fence from the road.</p>

      <h2>Why the industrial view is worth your time</h2>
      <p>Most of the bay's tourist focus is the aestheticised side — Kotor's walls, Perast's churches, Luštica's beaches. Bijela shows the other ninety per cent: a coast that loaded ships, welded hulls and paid wages. If the yard is eventually redeveloped in a similar model to <a href={localePath('/blog/portonovi-marina-podi')}>Portonovi at Kumbor</a>, the working-coast character will be the thing that vanishes. For now it is still visible.</p>

      <h2>Fitting it into a day</h2>
      <p>Bijela is not a destination by itself — it is a twenty-minute stop on the way to or from the <a href={localePath('/blog/kamenari-lepetane-ferry')}>Kamenari ferry</a> and worth pairing with the ferry crossing. Park at a waterfront lay-by, walk the short promenade, drive on. If you are based in Herceg Novi and going east, the sequence Herceg Novi → Portonovi → Đenovići → Bijela → Kamenari works as a morning's slow drive.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>No shipyard tours.</strong> The yard is a working industrial facility; you can only view it from the public road.</li>
        <li><strong>Park on the sea side.</strong> A couple of roadside lay-bys east of the yard make a short walk practical.</li>
        <li><strong>Photograph from public ground.</strong> Do not step inside the fence line.</li>
        <li><strong>Expect noise on weekdays.</strong> For a peaceful beach visit go early morning or at weekends.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Bijela slots naturally into a Kamenari-ferry morning or a slow eastward drive along the outer bay. If you want the opposite direction of travel, see our <a href={localePath('/blog/djenovici-west-bay-promenade')}>Đenovići west-bay</a> guide.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Shipyard founded</strong>1927</div>
          <div className="route-info__item"><strong>Distance from HN</strong>~10 km east</div>
          <div className="route-info__item"><strong>Visit style</strong>Drive-through + short walk</div>
          <div className="route-info__item"><strong>Pair with</strong>Kamenari ferry</div>
        </div>
      </div>
    </ContentPage>
  );
}
