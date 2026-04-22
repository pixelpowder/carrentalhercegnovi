'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function LedeniceViewpointLoop() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Ledenice Loop — The Mountain Road Above Herceg Novi"
      subtitle="A short, steep switchback road that climbs out of the old town into the pines — and delivers the best bay panorama on the west Boka"
      description="A driving guide to the Ledenice loop above Herceg Novi: how to find the turn, what the switchback is like, where to stop, and why morning and sunset give very different views of the bay."
      image="/img/blog-ledenice.webp"
    >
      <h2>What the loop is</h2>
      <p>Ledenice is a high hamlet on the flank of Orjen, perched on the mountain shoulder above Herceg Novi and reached by a switchback road that climbs from around sea level to roughly 700 metres in a handful of kilometres. The area takes its name from the old "ice pits" (ledenice) — stone-walled pits where snow and ice were packed in winter and kept under straw for the summer, then brought down to sell in Herceg Novi. The road up is narrow, steep and lightly trafficked, and the views back over the bay and across to Luštica and Mamula are the reason to take it.</p>

      <h2>Where to find the turn</h2>
      <p>The turn inland is above Herceg Novi in the upper part of town, climbing off the magistrala toward the Orjen foothills. Local signage points toward Ledenice, Ubli and Vrbanj. The asphalt is narrow but reasonable; expect farm tractors and the occasional flock of goats rather than much car traffic. Drop into a low gear early; the gradient starts in earnest within a few hundred metres of leaving the highway.</p>

      <h2>The climb itself</h2>
      <p>The road stacks switchback onto switchback, with several blind hairpins and almost no guardrails. It is a comfortable drive in any small rental if you are willing to slow to a crawl on corners and pull right for oncoming vehicles. Two cars can pass almost everywhere — with one easing onto the verge — but not at the tightest bends. Watch for loose gravel at the edges after rain, and use engine braking on the descent rather than riding the pedal; the drop is continuous enough that brakes can overheat.</p>

      <img src="/img/blog-ledenice.webp" alt="Mountain road viewpoint above the Adriatic" loading="lazy" />

      <h2>The first big viewpoint</h2>
      <p>Roughly halfway up there is an unmarked widening on the outside of a bend where you can pull off safely. From here the entire western bay opens up below: Herceg Novi's red-tiled old town on the left, the curve of the Šetalište Pet Danica promenade sweeping west toward Igalo, Mamula Island as a dark circle in the open sea, and the far shoulder of Luštica on the right. The airport at Tivat is visible off to the east on a clear day.</p>

      <h2>Ledenice hamlet</h2>
      <p>Higher up, the road eases into a plateau of grazing terraces and stone houses — some ruined, some restored as weekend cottages. The hamlet itself is a handful of buildings around a small chapel. It is quiet year-round; a few households graze sheep and goats. This is where the old ice pits sat; a couple of the stone-lined circular hollows can still be traced in the fields below the road if you know what you are looking for.</p>

      <h2>Morning vs sunset</h2>
      <p>The light matters. Go up in the morning and you are shooting into the sun over the bay — hazy, back-lit, dramatic in a soft way. The water reads silver. Go up for sunset and the light is behind you: the red-tiled roofs of the old town glow warm, Orjen catches the last alpenglow, and the bay turns deep violet before the town lights come on. Sunset is the more photogenic window. Morning is the better drive — cooler engine, less traffic, no rush to descend in failing light.</p>

      <h2>Continuing higher — Vrbanj and the Orjen approach</h2>
      <p>From Ledenice a rougher road continues up toward Vrbanj and the Orjen plateau, eventually meeting the tracks used by hikers approaching the massif from the south. This section is not for rental cars without 4x4; gravel, ruts and loose sections begin within a few kilometres of Ledenice. Most drivers turn around at the hamlet and descend the way they came up.</p>

      <h2>Descent and loop options</h2>
      <p>The simplest return is back down the same switchback. A longer loop continues east around the mountain shoulder before dropping to the magistrala at Meljine or Bijela — worth doing once if you have time, though it is slower and has more patchy road surface. The view does not meaningfully improve above the first two or three pull-offs, so a there-and-back visit captures the attraction.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Pull fully off.</strong> Traffic is light but sightlines are poor — get the whole car onto the verge before stopping.</li>
        <li><strong>Fuel first.</strong> There are no petrol stations above Herceg Novi.</li>
        <li><strong>Winter caution.</strong> Black ice and snow patches from late November through March; check conditions before heading up.</li>
        <li><strong>Signal drops.</strong> Phone coverage is patchy above the first viewpoint; download offline maps.</li>
      </ul>

      <h2>Pair with</h2>
      <p>The Ledenice loop is short — an hour or two — and pairs naturally with a morning in Herceg Novi's old town or an afternoon at <a href={localePath('/blog/djenovici-west-bay-promenade')}>Đenovići on the west-bay promenade</a>. For a full mountain day, use Ledenice as the warm-up and then pick up the approach tracks toward Orjen.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Altitude</strong>Climbs to ~700 m</div>
          <div className="route-info__item"><strong>Distance from HN</strong>~8 km to the hamlet</div>
          <div className="route-info__item"><strong>Drive time</strong>30 min up, 20 min down</div>
          <div className="route-info__item"><strong>Best light</strong>Sunset, clear days</div>
        </div>
      </div>
    </ContentPage>
  );
}
