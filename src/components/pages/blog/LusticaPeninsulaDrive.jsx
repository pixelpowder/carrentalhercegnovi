'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function LusticaPeninsulaDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Luštica Peninsula Drive — Hidden Beaches Across the Water"
      subtitle="The tongue of land opposite Herceg Novi — ferry-accessible beaches, Mirište, Žanjice, and the old submarine tunnels"
      description="Driving and ferrying guide to the Luštica Peninsula: the Kamenari car ferry, access to Mirište and Žanjice beaches, Blue Cave boat starting points, and the Luštica Bay development."
      image="/img/blog-lustica.webp"
    >
      <h2>What Luštica is</h2>
      <p>Luštica is a peninsula of roughly 40 square kilometres directly opposite Herceg Novi, across the narrow Verige Strait. It's one of the quieter corners of the Montenegrin coast — partly because it's a ferry ride or a long drive around, partly because much of it is protected landscape. Beyond the new Luštica Bay resort development, most of the peninsula remains rural: olive groves, pine forest, empty coves, a handful of villages.</p>

      <h2>How to get there</h2>
      <p>Two options:</p>
      <ul>
        <li><strong>Kamenari car ferry</strong> — the fastest way. The Verige Strait ferry connects the mainland at Kamenari to the Luštica-side village of Lepetane. A 10-minute crossing, every 10-15 minutes through the day, €5-10 per car. Saves roughly 40 minutes over driving around.</li>
        <li><strong>Drive around the head of the bay</strong> — via Tivat, then south onto the peninsula. Scenic but 60+ minutes from Herceg Novi.</li>
      </ul>

      <img src="/img/blog-lustica.webp" alt="Luštica peninsula coast" loading="lazy" />

      <h2>Mirište and Žanjice — the classic beaches</h2>
      <p>The two most famous Luštica beaches sit on the peninsula's seaward side, facing the open Adriatic (not into the bay). White pebbles, unusually clear water, a pine-shaded fringe.</p>
      <p><strong>Mirište</strong> is smaller and more developed — a handful of beach bars and konobas, umbrella rental, usually quieter in the mornings and crowded after lunch.</p>
      <p><strong>Žanjice</strong> is larger (300 m of shingle), with similarly good water and the same development pattern. Both beaches have direct road access — park at the top, walk down.</p>

      <h2>Rose village</h2>
      <p>A small fishing village on the peninsula's western tip, directly across from Herceg Novi. Traditional stone houses, a few konobas on the waterfront, genuinely sleepy. A short boat-taxi runs between Herceg Novi and Rose in summer — 15 minutes across the water — making it a pleasant lunch destination.</p>

      <h2>The submarine tunnels</h2>
      <p>On Luštica's seaward cliffs, a series of carved tunnels were cut during the Yugoslav era as submarine pens — allowing small subs to be concealed inside the rock. The tunnels are decommissioned and abandoned but remain visually striking. Most boat tours (Blue Cave, Mamula) pass these tunnels as a standard stop. Road access is limited; the best view is from the water.</p>

      <h2>Luštica Bay — the new development</h2>
      <p>On the north side of the peninsula, Luštica Bay is a large modern marina and resort development. Golf course, hotels, restaurants, a promenade. It's a deliberate contrast to the rest of Luštica — polished, upscale, pristine. Worth a look if you're into the scale of new Balkan tourism developments. The Dimitris restaurant (Mediterranean-upscale) has a good reputation.</p>

      <h2>A loop drive from Herceg Novi</h2>
      <p>Morning: Kamenari ferry across. Drive down the peninsula to Žanjice beach via the narrow asphalt road (20-30 minutes). Swim and lunch at a beach konoba. Afternoon: drive back via Rose for an olive-grove coffee stop. Ferry back to the mainland. Back in Herceg Novi by early evening.</p>
      <p>Total distance: ~50 km. Total time: 6-7 hours with stops. Petrol: the peninsula has one station at Krašići — fill up before crossing if on a long rental day.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Ferry:</strong> runs roughly 05:00-23:00. No booking needed — queue, pay cash or card, board.</li>
        <li><strong>Road condition:</strong> paved throughout but narrow with steep drops in places. Fine for any standard rental; not for novices afraid of mountain roads.</li>
        <li><strong>Season:</strong> beaches operate mid-May to mid-October. Out of season, the peninsula is nearly empty and road access is still fine.</li>
        <li><strong>Food:</strong> Konoba Peškera near Mirište is a long-standing favourite. Cash preferred.</li>
      </ul>

      <h2>Pair with</h2>
      <p>The Luštica drive goes naturally with a morning <a href={localePath('/blog/blue-cave-boat-tour')}>Blue Cave boat tour</a> — the tour covers the sea side of the peninsula, the drive covers the land side, and together you see the whole thing.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Area</strong>~40 km²</div>
          <div className="route-info__item"><strong>Access</strong>Kamenari ferry, 10 min</div>
          <div className="route-info__item"><strong>Ferry price</strong>€5-10 per car</div>
          <div className="route-info__item"><strong>Top beaches</strong>Žanjice, Mirište</div>
        </div>
      </div>
    </ContentPage>
  );
}
