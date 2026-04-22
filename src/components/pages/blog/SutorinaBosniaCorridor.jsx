'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SutorinaBosniaCorridor() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Sutorina Corridor — Bosnia's Old Sea Access and the Quiet Valley Behind Igalo"
      subtitle="The strip of land that once gave Bosnia-Herzegovina a window to the Adriatic, and the abandoned railway trace that still scores the valley floor"
      description="A guide to the Sutorina valley west of Igalo: the historical Bosnian corridor to the sea, the disused Belgrade–Bar railway trace (Nikšić branch), and a half-day drive from Herceg Novi up to the Bosnian border at Trebinje."
      image="/img/blog-sutorina.webp"
    >
      <h2>What Sutorina is</h2>
      <p>Sutorina is the narrow valley that runs inland from Igalo, the western suburb of Herceg Novi. It climbs gently from the coast through fields, low hills and small villages to the Bosnian border at Ivanica, and from there up to the Herzegovinian town of Trebinje. On a map it looks unremarkable. In the longer historical record it was the famous Bosnian corridor — the strip that, between 1699 and the late 19th century, gave Bosnia-Herzegovina (under Ottoman rule) direct access to the Adriatic. That arrangement is the reason Bosnia's border today comes surprisingly close to the sea.</p>

      <h2>The corridor — a very short history</h2>
      <p>Under the Treaty of Karlowitz in 1699, the Ottomans and the Venetian Republic redrew Adriatic borders after the long Morean War. A small strip of Ottoman territory — Sutorina in the west and Neum-Klek in the east — was preserved as a buffer between Venetian Dalmatia and the Republic of Ragusa (Dubrovnik), deliberately denying Venice a continuous coast. After 1878 the Austro-Hungarians, who now administered Bosnia-Herzegovina as well as much of the coast, kept the Sutorina strip attached to Bosnia for administrative purposes. It was finally detached from Bosnia and attached to Montenegro in 1947, during the reorganisation of Yugoslav internal borders. Neum, at the other end, remained with Bosnia — which is why Bosnia today still has a short Adriatic coastline there but not here.</p>

      <h2>The abandoned railway trace</h2>
      <p>Running along the valley floor are the visible remains of a narrow-gauge railway — part of the broader Yugoslav-era network that once linked the coast to the interior via small-gauge lines. These were gradually closed through the 1960s and 1970s as the standard-gauge Belgrade–Bar line and the road network took over. In the Sutorina valley the old trackbed, bridges and some tunnel portals can still be traced, used locally as farm access roads and walking paths. It is not a curated heritage trail — there is no signage — but once you know to look for it, the dead-straight embankments and the stone arch culverts read easily against the softer curves of the valley fields.</p>

      <h2>Driving the valley</h2>
      <p>From Herceg Novi, head west along the magistrala to Igalo, then turn inland following signs toward Trebinje (Bosnia) or Sitnica. The road leaves the coast immediately and climbs gently up the Sutorina valley. The first few kilometres are built up with houses, a petrol station and a small shopping strip. Beyond that the valley opens up into farmland — maize, vines, olive groves — with the limestone hills of the Orjen foothills on the south side and the Bosnian border massif rising to the north.</p>

      <img src="/img/blog-sutorina.webp" alt="Abandoned railway trace in a Balkan valley" loading="lazy" />

      <h2>The Ivanica border crossing</h2>
      <p>The road ends at Ivanica, the small Bosnian–Montenegrin crossing point. It is a minor, quiet crossing — generally quick compared to the heavier Debeli Brijeg crossing with Croatia — and is used mostly by locals and visitors heading to Trebinje. Passports are checked in a normal manner; rental cars pass without issue if your insurance Green Card covers Bosnia-Herzegovina. If yours does not, turn back at Ivanica: you cannot cross without cover. Talk to your rental provider at booking if a Trebinje day is on the plan.</p>

      <h2>On to Trebinje</h2>
      <p>From Ivanica, Trebinje is a further twenty to thirty minutes. It is a quietly beautiful Herzegovinian town — Ottoman stone bridge over the river Trebišnjica, arcaded old square, a working plane-tree market, and the hilltop Hercegovačka Gračanica monastery with a wide panorama back toward Montenegro. A half-day in Trebinje is the natural pay-off for driving Sutorina. We keep this summary short because once you cross into Bosnia you are out of the Herceg Novi ambit; a dedicated Trebinje guide belongs elsewhere.</p>

      <h2>Even if you don't cross the border</h2>
      <p>The Montenegrin side of the valley is worth a slow hour on its own. Villages like Sutorina and Sušćepan have small churches and old stone houses; farm stands sell honey, figs and home-made rakija in season. The railway trace gives a quiet walk, and the valley floor is flat enough that a stretch of it makes a good early-evening jog or cycle.</p>

      <h2>A note on the "sea access" claim</h2>
      <p>The Sutorina corridor did at certain points give Bosnia technical access to the sea, but the strip was never developed as a port — its coastline was short and the terrain unhelpful. Ragusa (Dubrovnik) and later the Austrians ensured it stayed marginal. In practice "Bosnia's sea access" here meant a narrow door, not a harbour.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Green Card.</strong> Confirm your rental insurance covers Bosnia-Herzegovina before driving toward Ivanica.</li>
        <li><strong>Fuel up in Igalo.</strong> Prices and availability are better on the coast than in Trebinje.</li>
        <li><strong>Passport, not ID card.</strong> Take a passport for non-EU/non-BA holders.</li>
        <li><strong>No roadside facilities.</strong> The valley has small shops but few cafés — take water on a hot day.</li>
        <li><strong>Railway exploration.</strong> Stay on public paths; sections of the old trackbed cross private farmland.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Sutorina works as a half-day east of Herceg Novi's old town attractions. Combine it with an early morning on the <a href={localePath('/blog/djenovici-west-bay-promenade')}>west-bay promenade</a> or a late afternoon on the <a href={localePath('/blog/ledenice-viewpoint-loop')}>Ledenice loop</a>.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Corridor period</strong>1699 – 1947 (attached to Bosnia)</div>
          <div className="route-info__item"><strong>From HN to Ivanica</strong>~15 km</div>
          <div className="route-info__item"><strong>On to Trebinje</strong>~30 min beyond border</div>
          <div className="route-info__item"><strong>Crossing type</strong>Quiet, locals-first</div>
        </div>
      </div>
    </ContentPage>
  );
}
