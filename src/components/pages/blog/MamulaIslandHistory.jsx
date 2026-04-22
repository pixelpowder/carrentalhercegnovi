'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function MamulaIslandHistory() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Mamula Island — From 19th-Century Fortress to WWII Prison to Luxury Hotel"
      subtitle="The small circular island 10 km offshore with three lives and a memorial museum"
      description="Mamula Island guide: the 1853 Austro-Hungarian fortress, its WWII history as an Italian prison camp, its 2023 reopening as a Banyan Tree hotel, and how to visit."
      image="/img/blog-mamula.webp"
    >
      <h2>The island</h2>
      <p>Mamula is a small circular island 10 km offshore from Herceg Novi, at the western approach to the Bay of Kotor. It takes its name from Lazarus von Mamula, the Austro-Hungarian general who commissioned the fortress there in 1853 as one of three defensive positions (the others at Prevlaka's Cape Oštro and Luštica's Cape Arza) designed to guard the entrance to the bay.</p>
      <p>The fortress was an engineering achievement for its time but was almost obsolete by the time it was finished — artillery technology advanced so quickly that sea-level circular forts lost their strategic value within decades.</p>

      <h2>Mussolini's prison camp (1942-1943)</h2>
      <p>During the Italian occupation of Montenegro in WWII, Mamula was converted into a concentration camp for political prisoners. Yugoslav partisans, Communists, and civilians from the surrounding region were held here. Prisoner names, initials and dates are still carved into the interior stone walls and are preserved today as part of the memorial.</p>
      <p>The camp was evacuated in late 1943 after the Italian armistice with the Allies. Subsequent use was minimal; the fort fell into ruin through the late 20th century.</p>

      <img src="/img/blog-mamula.webp" alt="Mamula Island fortress" loading="lazy" />

      <h2>The restoration — 2023 onward</h2>
      <p>In 2023, the restored fort reopened as Mamula Island by Banyan Tree — Banyan Tree's first hotel in Europe. 32 rooms and suites inside the circular fort walls. Three restaurants and four bars, including a rooftop cocktail bar looking back at the Bay of Kotor. A memorial museum at the centre of the property documents the island's history as fortress, prison, and ruin before restoration.</p>
      <p>The restoration was controversial. Some preservationists argued that converting a WWII prison site into a luxury hotel was a misuse of heritage. Others pointed out that without commercial investment, the fort would have continued to decay.</p>

      <h2>Visiting the island</h2>
      <p>The hotel is open to paying guests for overnight stays (rooms start around €500-800/night in peak season). Day visits to the museum and the common-access areas are available through boat tours from Herceg Novi, Kotor or Budva harbours — typically 3-4 hour trips that include Mamula plus one or two other stops (often the Blue Cave and Our Lady of the Rocks).</p>
      <p>Direct-to-Mamula boat tickets range around €20-30 per person. Inclusive tours that stop at Mamula are €40-60. Book through hotel concierges or directly at the Herceg Novi harbour kiosks.</p>

      <h2>Combining with other island stops</h2>
      <p>Most Mamula boat tours include:</p>
      <ul>
        <li><strong>Our Lady of the Rocks (Gospa od Škrpjela)</strong> — the man-made island with the 17th-century church, near Perast.</li>
        <li><a href={localePath('/blog/blue-cave-boat-tour')}><strong>Blue Cave (Plava Špilja)</strong></a> — on the Luštica Peninsula, with its neon-blue water.</li>
        <li><strong>Luštica submarine tunnels</strong> — Yugoslav-era navy tunnels carved into the cliff.</li>
      </ul>
      <p>The full day-tour combination is standard from Herceg Novi — €40-60, four to five hours.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Best time:</strong> morning, calm sea, before the afternoon wind picks up.</li>
        <li><strong>What to wear:</strong> swimwear for the Blue Cave swim stop, comfortable shoes for Mamula's uneven fortress floors.</li>
        <li><strong>Museum entry:</strong> included in most organised tours.</li>
        <li><strong>Currency:</strong> Euro. Card machines usually working.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Morning boat tour out to Mamula, afternoon at <a href={localePath('/blog/igalo-thermal-mud-spa')}>Igalo's mud spa</a>. Or pair with <a href={localePath('/blog/herceg-novi-old-town')}>Herceg Novi Old Town</a> for a full day in town.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>10 km offshore</div>
          <div className="route-info__item"><strong>Built</strong>1853 (Mamula)</div>
          <div className="route-info__item"><strong>Reopened</strong>2023 as Banyan Tree hotel</div>
          <div className="route-info__item"><strong>Day visit</strong>€20-60 boat tours</div>
        </div>
      </div>
    </ContentPage>
  );
}
