'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function OrjenMountainHike() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Orjen Mountain — Hiking from Sea Level to 1,895 m"
      subtitle="Cretaceous limestone, 40 km of marked trails, and the Bijela Gora plateau — all accessible from the Herceg Novi bus station"
      description="A guide to hiking Mount Orjen from Herceg Novi: trail network, Vratlo and Orjen Ridge huts, Subra and Veliki Kabao peaks, limestone karst, and winter route advice."
      image="/img/blog-orjen.webp"
    >
      <h2>The mountain behind the town</h2>
      <p>Orjen is the Dinaric limestone massif that rises directly behind Herceg Novi, spanning the Montenegro-Bosnia border. Veliki Kabao, the main peak, reaches 1,895 metres — less than 10 kilometres in a straight line from the sea. The entire massif is Cretaceous limestone, heavily karstified (sinkholes, underground caves, naturally fluted stone surfaces).</p>
      <p>Uniquely among Montenegro's mountain ranges, Orjen trails start at sea level. You can walk from the Herceg Novi bus station at 30 metres altitude up into the high alpine zone above 1,500 metres.</p>

      <h2>The trail network</h2>
      <p>Roughly 40 km of marked trails exist across the massif. The two key mountain huts serve as base camps:</p>
      <ul>
        <li><strong>Vratlo Hut</strong> (1,160 m) — the lower of the two. Accessible by a sustained climb from Herceg Novi (6-8 hours ascent for fit walkers, or drive up on the forest track if you have a 4x4 and a local guide). Basic dormitory accommodation.</li>
        <li><strong>Orjen Ridge Hut</strong> (1,594 m) — higher up on the ridge. Used as a summit bid base for Veliki Kabao and Subra.</li>
      </ul>

      <h2>Signature summit hikes</h2>
      <p><strong>Subra (1,680 m)</strong> — the classic half-day from Vratlo. The trail leads to the dramatic Subra Amphitheatre, a natural limestone cirque below the Zubački Kabao summit. Widely marked, moderate difficulty. 4-5 hours round trip from Vratlo.</p>
      <p><strong>Veliki Kabao (1,895 m)</strong> — the highest peak. Full-day effort even from Orjen Ridge Hut. Well-marked but steep in the final section. The summit view encompasses the Bay of Kotor, coastal Croatia, and the Orjen-Lovćen-Durmitor interior chain.</p>

      <img src="/img/blog-orjen.webp" alt="Orjen mountain karst" loading="lazy" />

      <h2>Bijela Gora plateau</h2>
      <p>Orjen's northern flank drops onto the Bijela Gora plateau — "White Mountain" — so named for the exposed limestone. Evidence of past glaciation is everywhere: scattered erratic boulders, smoothed rock surfaces, karst sinkholes that were once glacial moulins. The plateau crosses into Bosnia and Herzegovina and is sparsely inhabited.</p>
      <p>A circular day walk from Vratlo via the plateau edge takes around 6 hours, with some exposure on limestone slabs — appropriate for confident hikers, not beginners.</p>

      <h2>Driving to the trailheads</h2>
      <p>From Herceg Novi, follow signs for Trebinje (Bosnia). The road climbs steadily through oak forest toward the massif's eastern flank. Trail-heads at Petijevići and the Sitnica saddle are reachable by any standard rental car on asphalt. The Vratlo hut itself is via a forest track — 4x4 recommended.</p>
      <p>Allow 45 minutes from Herceg Novi to the main trailhead parking. Free parking along the road.</p>

      <h2>Seasons and conditions</h2>
      <ul>
        <li><strong>April-May:</strong> wildflowers, snowmelt, waterfalls on the limestone. Best overall.</li>
        <li><strong>June-September:</strong> dry and hot. Start at dawn. Water is scarce above the huts — carry 2-3 L per person.</li>
        <li><strong>October-November:</strong> cooler, quieter, occasional rain.</li>
        <li><strong>December-March:</strong> snow cover on upper sections. Only for experienced winter mountaineers with appropriate gear.</li>
      </ul>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Guide:</strong> strongly recommended for anything above Vratlo. Adriatic Adventures Montenegro and local Herceg Novi guide services offer half-day and full-day options.</li>
        <li><strong>Water:</strong> fill up in town. Springs higher up are seasonal.</li>
        <li><strong>Signal:</strong> patchy above the huts. Download offline maps.</li>
        <li><strong>Weather:</strong> summer thunderstorms build fast in late afternoon. Start early, aim to be off the high ground by 14:00.</li>
      </ul>

      <h2>Pair with</h2>
      <p>The hike pairs naturally with a morning swim at Igalo and the <a href={localePath('/blog/igalo-thermal-mud-spa')}>mud spa</a> treatment after a long descent — the hot pools are exactly what tired legs need.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Highest peak</strong>Veliki Kabao, 1,895 m</div>
          <div className="route-info__item"><strong>Trail network</strong>~40 km marked</div>
          <div className="route-info__item"><strong>Best season</strong>April-October</div>
          <div className="route-info__item"><strong>From town</strong>Sea-level start at bus station</div>
        </div>
      </div>
    </ContentPage>
  );
}
