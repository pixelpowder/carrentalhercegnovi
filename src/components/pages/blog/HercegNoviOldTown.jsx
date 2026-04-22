'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function HercegNoviOldTown() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Herceg Novi Old Town — The City of Stairs and the Bloody Tower"
      subtitle="Kanli Kula (1539), Stari Grad founded 1382, and a town built on steep hillsides above the Adriatic"
      description="A walking guide to Herceg Novi's Stari Grad: Kanli Kula fortress (now an open-air amphitheatre), the town squares, and parking tips for a town made of stairs."
      image="/img/blog-hercegnovi-oldtown.webp"
    >
      <h2>A town founded in 1382</h2>
      <p>Herceg Novi is younger than most Adriatic old towns — founded in 1382 as a fortified settlement by King Tvrtko I Kotromanić of Bosnia. It sits at the western entrance of the Bay of Kotor, commanding both sea approaches and the mountain pass behind. Ottoman rule from 1482 to 1687, then Venetian rule from 1687 to 1797 as part of Albania Veneta — the layers are still visible in the walls and squares.</p>

      <h2>Kanli Kula — the Bloody Tower</h2>
      <p>Built in 1539 by Ottoman forces. The name means "bloody tower" in Turkish — the fortress served not just as a defensive position but as a prison for centuries. Prisoners' carvings still visible on some interior walls; historians dated the founding to the 16th century from carved depictions of ships in service at the time.</p>
      <p>After the Venetian reconquest of 1687 the fortress was repaired and expanded. In 1966 the interior was converted into an open-air amphitheatre with seating for over 1,000 — now the venue for the Herceg Novi summer festival (film, theatre, concerts, July-August). Entrance is around €2-3 in daylight hours.</p>
      <p>Kanli Kula sits at 85 metres above sea level. The walk up is steep. Take water.</p>

      <img src="/img/blog-hercegnovi-oldtown.webp" alt="Herceg Novi old town view" loading="lazy" />

      <h2>Why they call it the City of Stairs</h2>
      <p>Herceg Novi is genuinely built on a steep slope. The Old Town rises from the waterfront via flights of limestone stairs. Some routes have 200+ steps. There are no cars in the Old Town. Expect to walk up.</p>
      <p>The main stair-street (Njegoševa) climbs from the harbour, past the town squares (Trg Herceg Stjepana, Trg Nikole Đurkovića), up to Kanli Kula and beyond to the Spanjola Fortress on the higher hillside.</p>

      <h2>Trg Herceg Stjepana — the main square</h2>
      <p>The central piazza. Surrounded by Ottoman-era and Venetian-era buildings, dominated by the Orthodox Church of the Archangel Michael (1905). Cafés around the edges of the square. Morning coffee here is a local institution.</p>

      <h2>Forte Mare</h2>
      <p>The oldest fortification — founded in the 14th century at the same time as the town. Sea-level, on the waterfront. Today houses a small museum and an open-air cinema in summer. Free to enter the grounds during the day.</p>

      <h2>Parking strategy</h2>
      <p>Park at the waterfront (large paid lot near the market, €1-2/hour) or at the Igalo end of town. Walk up through the Old Town. The higher streets (above Kanli Kula) are reached by narrow one-way roads — not recommended in a rental unless you've driven Mediterranean hill towns before.</p>

      <h2>Pair with</h2>
      <p>Herceg Novi Old Town pairs with a boat trip to <a href={localePath('/blog/mamula-island-history')}>Mamula Island</a> or a morning at <a href={localePath('/blog/savina-monastery')}>Savina Monastery</a> a few minutes east. Save the afternoon for a swim at Igalo.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Founded</strong>1382 (Bosnian king)</div>
          <div className="route-info__item"><strong>Kanli Kula</strong>1539, 85 m altitude</div>
          <div className="route-info__item"><strong>Stairs</strong>Many</div>
          <div className="route-info__item"><strong>Amphitheatre</strong>1,000 seats, 1966 conversion</div>
        </div>
      </div>
    </ContentPage>
  );
}
