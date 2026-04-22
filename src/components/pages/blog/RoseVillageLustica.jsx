'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function RoseVillageLustica() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Rose Village — The Fishing Hamlet at the Tip of Luštica"
      subtitle="A car-free stone village on the outer Luštica shore, with Austrian battery ruins above and a boat-taxi culture below"
      description="A guide to Rose (Rose, Luštica) — the small 14th-century fishing village on the Luštica peninsula opposite Herceg Novi: how to get there, where to park, what to see, and how the Austrian coastal batteries tie in."
      image="/img/blog-rose-village-lustica.webp"
    >
      <h2>Where Rose is</h2>
      <p>Rose — written Rose in Montenegrin and pronounced roughly "Ro-seh" — is a small stone village at the north-western tip of the Luštica peninsula, directly across the mouth of the Bay of Kotor from Herceg Novi. It is the first piece of Luštica you see from the Herceg Novi waterfront, and in the evenings its lights trace the opposite shore. Boats cross the two kilometres of water in about fifteen minutes; by road it is a roughly hour-long loop via the Kamenari ferry and the length of the Luštica north coast.</p>

      <h2>A very short history</h2>
      <p>The village is usually dated to the 14th century. It was one of a string of Luštica fishing hamlets whose inhabitants supplied fresh fish to Kotor, Herceg Novi and the monasteries along the bay. The population was always small — measured in tens of families, not hundreds — and the stone houses cluster around a tiny harbour with no real road running through. During the Austro-Hungarian period (1878–1918) the empire treated Luštica as a strategic promontory guarding the entrance to its inner Adriatic fleet anchorage at Kotor and Tivat. Concrete coastal batteries were installed on the high ground above the village, some of which remain today as overgrown ruins.</p>

      <h2>How to get there by car</h2>
      <p>From Herceg Novi, drive east along the magistrala to Kamenari (about 10 km) and take the <a href={localePath('/blog/kamenari-lepetane-ferry')}>Kamenari–Lepetane ferry</a>. After disembarkation at Lepetane, turn right and follow the north shore of Luštica west through Krašići. The road narrows as it approaches Rose; in the last kilometre it becomes a one-lane single-track that dead-ends at a small car park above the village. Expect the full trip to take around an hour. An alternative is to take a boat-taxi directly from Herceg Novi's old harbour — around fifteen minutes on water, often faster than driving in high summer.</p>

      <h2>Where to park</h2>
      <p>The village itself is not drivable. A small dusty car park sits above Rose where the road stops, and from there a stepped path leads down to the harbour in five minutes. The lot is free but holds maybe twenty cars. In July and August it fills by mid-morning; arrive before ten, or take the boat. Do not try to drive down the footpath — cars have been damaged trying.</p>

      <img src="/img/blog-rose-village-lustica.webp" alt="Adriatic stone village on the shore" loading="lazy" />

      <h2>What the village feels like</h2>
      <p>Rose is a working fishing settlement with a small summer overlay of cafés and seafood restaurants. Stone houses packed tight around two small pebble coves, a concrete jetty where fishing boats tie up, nets drying on walls, a scatter of outdoor tables in the shade. A handful of konobas open in season and do simple, fresh whole-fish lunches — grilled sea bream, octopus salad, a carafe of cold local white. Outside May to October many of these are closed and the village returns to its working rhythm.</p>

      <h2>The Austrian battery above</h2>
      <p>A rough track climbs the ridge behind the village through pines and scrub to the remains of an Austro-Hungarian coastal battery. The concrete emplacements, magazine corridors and observation bunkers are mostly intact, if heavily weathered and tagged with graffiti. The views from the ridge are among the widest on Luštica — the open Adriatic to the west, the Bay of Kotor to the east, Mamula Island visible out beyond the headland. Count on thirty to forty minutes up on foot, less back down. Solid shoes; there is no fence.</p>

      <h2>Swimming at Rose</h2>
      <p>Two small coves frame the village, both with clear, deep water close to shore. They are not sandy beaches — the bottom is pebbles and smooth slabs — and they are not fitted out with sunbed rows; you swim off the rocks or from a ladder. The water here is notably clean because the village sits outside any inner-bay current-stagnation zone. Morning light is the best; by late afternoon the mountain behind Herceg Novi throws the eastern cove into shadow.</p>

      <h2>Eating and drinking</h2>
      <p>Two or three seasonal restaurants tend to be open on the waterfront in summer, plus a small café. Expect fresh fish priced by the kilogram rather than a fixed menu. Prices are noticeably higher than in Herceg Novi because everything arrives by boat or along that one narrow road. It is worth it for the setting. Reserve ahead on summer weekends or risk a wait.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Cash matters.</strong> Some konobas take cards; assume cash for smaller places.</li>
        <li><strong>No petrol on Luštica west end.</strong> Fill up at Kamenari or Tivat side.</li>
        <li><strong>Shoulder season wins.</strong> Late May and September are ideal — warm water, empty lanes.</li>
        <li><strong>Respect the village.</strong> It is a residential community, not a themed attraction. Keep voices low in side lanes.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Rose works best as a half-day out of Herceg Novi. Cross on the ferry in the morning, walk the battery ridge, eat lunch in the village, swim the cove in the afternoon, and return before the Kamenari queue builds. Combine with our <a href={localePath('/blog/kamenari-lepetane-ferry')}>ferry guide</a> for the outward leg.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Founded</strong>Around the 14th century</div>
          <div className="route-info__item"><strong>From Herceg Novi</strong>~1 hr by car, ~15 min by boat</div>
          <div className="route-info__item"><strong>Car access</strong>Park above, walk down</div>
          <div className="route-info__item"><strong>Best months</strong>Late May – early October</div>
        </div>
      </div>
    </ContentPage>
  );
}
