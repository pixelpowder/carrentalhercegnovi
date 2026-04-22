'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PortonoviMarinaPodi() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Portonovi and Podi — The Old Naval Base Reborn as a Marina"
      subtitle="How the former Yugoslav naval yard at Kumbor became a superyacht marina, and what a rental driver gets out of visiting"
      description="A guide to Portonovi marina and the wider Podi area east of Herceg Novi: the Yugoslav naval base history, the marina today, parking and access for non-guests, and what is worth an hour's detour."
      image="/img/blog-portonovi.webp"
    >
      <h2>What Portonovi is</h2>
      <p>Portonovi is a superyacht marina and resort complex on the outer Bay of Kotor, a few kilometres east of Herceg Novi between Kumbor and Đenovići. The site covers a long stretch of waterfront with a deep-water harbour, a village of low-rise stone-clad buildings, a hotel, and a scatter of high-end shops and restaurants. It opened in phases through the late 2010s and early 2020s and sits on land that, for most of the 20th century, was a Yugoslav naval base. The contrast is the interesting part — and a rental car makes it accessible without staying there.</p>

      <h2>The Kumbor naval base history</h2>
      <p>The stretch of coast now occupied by Portonovi was, from the 1930s until the 1990s, a major Yugoslav People's Army (later Montenegrin) naval installation. It hosted submarine pens, torpedo boats and support infrastructure; parts of the Yugoslav submarine fleet were stationed along the inner and outer bay in tunnels cut into the limestone. After the break-up of Yugoslavia and the end of military use at this site, the land sat largely derelict for much of the 2000s. Redevelopment as a private resort followed. Traces of the military period have mostly been removed from view, though some old concrete structures on the hillside above the marina are still visible from the road.</p>

      <h2>Podi — the hillside behind</h2>
      <p>Podi is the broader settlement climbing the hillside behind Portonovi. It is a mixed area of older village houses, newer villa developments built in the last fifteen years, and a supermarket on the magistrala. A local Podi roundabout acts as a hub — the turn down to Portonovi drops from here. The views back over the marina from the upper Podi streets are better than anything you can photograph at sea level.</p>

      <img src="/img/blog-portonovi.webp" alt="Mediterranean marina at dusk" loading="lazy" />

      <h2>Getting there from Herceg Novi</h2>
      <p>It is a ten-minute drive. Leave Herceg Novi east on the magistrala through Meljine and Zelenika. Past Kumbor, signs for Portonovi appear on the right. Drop down the access road to a gatehouse. Public parking for non-guests is available in a multi-storey lot near the entrance — free for a couple of hours if you are dining or shopping inside. The complex allows walk-in visitors during normal hours; simply park, pass the gatehouse on foot, and walk the promenade.</p>

      <h2>What there is to do as a visitor</h2>
      <p>The promenade runs the length of the marina and is genuinely a pleasant place to walk. Cafés open onto the water. A small supermarket stocks basics. Several restaurants — including at least one well-reviewed Italian and an Asian-leaning restaurant — sit waterside, but prices are notably higher than in Herceg Novi town. The One&amp;Only Portonovi hotel occupies part of the complex; the grounds are visitor-accessible only if you are a hotel guest or a restaurant booking. The superyachts themselves are the draw for many — visible free from the public walkways.</p>

      <h2>Beach access</h2>
      <p>A private beach serves the hotel and marina residents. A small strip of public beach sits near the eastern end of the complex, and the old Kumbor beach is a short walk further east via a coastal path.</p>

      <h2>Is it worth stopping?</h2>
      <p>Honestly: for an hour, if you are already driving past. Portonovi is not culturally Montenegrin in the way that Herceg Novi old town or Perast are — it is a new-build luxury marina of a kind you can find across the Mediterranean, and that is the point of its exclusivity. What is interesting is the juxtaposition with the surrounding bay: the old fishermen's village at Kumbor a few hundred metres away, the shipyards at Bijela a few kilometres further east (see our <a href={localePath('/blog/bijela-shipyards-heritage')}>Bijela guide</a>), and the battered naval past still embedded in the hillside. Walk the promenade, look at the boats, go elsewhere for lunch.</p>

      <h2>Where to eat nearby — realistic alternatives</h2>
      <p>If the marina restaurants are priced beyond what you want, drive on a few minutes to Đenovići or Baošići, where small konobas on the waterfront serve fresh fish at a fraction of the cost. Our <a href={localePath('/blog/djenovici-west-bay-promenade')}>Đenovići west-bay promenade</a> guide lists the stretch in detail.</p>

      <h2>Evening visits</h2>
      <p>The marina is at its most photogenic in the last hour before sunset. Yachts light up in sequence, the orange glow backlights Luštica across the water, and the promenade fills with a slow crowd of residents and curious day visitors. Parking is more relaxed in the evening, and most walk-in visitors come and go without interacting with the gatehouse.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Dress code.</strong> Smart-casual is expected at the restaurants; the promenade itself has no dress code.</li>
        <li><strong>Parking is finite.</strong> Late afternoon in high summer the public lot fills — either come early or come late.</li>
        <li><strong>Cash or card.</strong> Card accepted everywhere inside Portonovi. Cash useful only at Đenovići konobas afterwards.</li>
        <li><strong>Children welcome.</strong> The promenade is flat and fully paved, fine with strollers.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Pair Portonovi with a morning walk on the <a href={localePath('/blog/djenovici-west-bay-promenade')}>Đenovići coastal promenade</a>, a sunset drink at the marina and dinner further east. It is a useful orientation stop if you are new to the bay — it shows how fast the coast has changed in fifteen years.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance from HN</strong>~5 km east</div>
          <div className="route-info__item"><strong>Former use</strong>Yugoslav naval base</div>
          <div className="route-info__item"><strong>Open to visit</strong>Yes, public promenade</div>
          <div className="route-info__item"><strong>Best time</strong>Sunset hour</div>
        </div>
      </div>
    </ContentPage>
  );
}
