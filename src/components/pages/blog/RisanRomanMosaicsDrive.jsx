'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function RisanRomanMosaicsDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Risan and the Roman Mosaics — An Inner-Bay Drive from Herceg Novi"
      subtitle="The oldest continuously inhabited place on the bay, the ancient Illyrian capital of Teuta, and a floor mosaic of Hypnos in a little-visited pavilion"
      description="A driving guide from Herceg Novi to Risan on the inner Bay of Kotor: the route, the Roman villa urbana mosaics (including the Hypnos floor), and why Risan rewards a half-day that most visitors skip."
      image="/img/blog-risan-roman-mosaics-drive.webp"
    >
      <h2>Why Risan is worth a drive</h2>
      <p>Risan is one of those places on the bay that almost everyone drives past and almost no-one stops at. Most visitors are chasing Perast or Kotor further round, and Risan sits between Perast and the head of the inner bay on a stretch of road that looks ordinary — low houses, a Yugoslav-era apartment block, a supermarket. What they miss is that Risan is arguably the oldest settled place in the bay, the capital of the Illyrian queen Teuta in the 3rd century BC, and the site of a partially excavated Roman villa whose floor mosaics — including a sleeping god Hypnos — are among the finest Roman mosaics in this part of the Adriatic.</p>

      <h2>The drive from Herceg Novi</h2>
      <p>From Herceg Novi, head east along the magistrala (E65) through Meljine, Zelenika, Kumbor, Bijela and Kamenari. At Kamenari you choose: cross the <a href={localePath('/blog/kamenari-lepetane-ferry')}>ferry to Lepetane</a> and round Tivat to re-enter the inner bay from the south (longer, more varied), or stay on the magistrala and follow the inner bay shoreline north and east through Morinj and Kostanjica. The stay-on-road option is the conventional choice — roughly 35 km from Herceg Novi and about 45 minutes in light traffic. The road hugs the water for most of its length, with Our Lady of the Rocks visible across the bay near Perast.</p>

      <h2>Arriving in Risan</h2>
      <p>Risan is set back slightly from the main road. The inner bay pinches tight here; the town lines the shore and climbs a little way up the slope behind. Parking is straightforward — roadside lay-bys along the waterfront or a small lot near the mosaics site. The archaeological park is signed from the main road with a small brown sign; it is easy to miss.</p>

      <img src="/img/blog-risan-roman-mosaics-drive.webp" alt="Roman floor mosaic" loading="lazy" />

      <h2>The Roman mosaics</h2>
      <p>What has been excavated at Risan is the remains of a Roman urban villa, usually dated broadly to the 2nd century AD. Five preserved floor mosaics are protected under a modern pavilion, with walkways above. Four of them are geometric — black-and-white or polychrome patterns of interlocking circles, waves, meanders. The fifth is the reason most visitors come: a reclining figure usually identified as Hypnos, the Greek god of sleep, depicted in an unusual pose. It is the only known mosaic of Hypnos found in this region and is the signature piece of the site.</p>
      <p>Opening hours are limited and seasonal; a small entrance fee is usually charged. Signage inside is basic. Expect a quiet half-hour — this is not a crowded attraction.</p>

      <h2>Illyrian Risan — Queen Teuta</h2>
      <p>Long before the Romans, Risan was the seat of the Illyrian Ardiaei tribe and, according to the historian Polybius, the stronghold to which Queen Teuta retreated in 229 BC after the First Illyrian War. Rome's subsequent wars in the region folded Risan into the empire, and it remained an important coastal town for centuries. Remnants of the Illyrian walls have been traced on the slope above the town; most are unexcavated and marked only by signs.</p>

      <h2>The church and the old core</h2>
      <p>Risan's older residential core sits just above the waterfront and is a handful of quiet, narrow lanes of stone houses with vine-shaded courtyards. The Orthodox Church of Saints Peter and Paul is the centrepiece of the old town and is usually open for a quiet look inside. Benches under plane trees, a cat or two, a shop selling homemade wine — this is the pace of Risan and it is a relief after the bustle of Kotor.</p>

      <h2>Why this stretch of the bay is different</h2>
      <p>The inner bay around Risan is the enclosed, glass-calm basin that the tour buses skirt to reach Perast's Our Lady of the Rocks. The water is darker, the hills rise steeper and the light reads softer than on the outer bay. It is also a completely different piece of geology — karst limestone cliffs meeting the sea — from the more open west bay around Herceg Novi.</p>

      <h2>Eating in Risan</h2>
      <p>A handful of small waterfront konobas serve grilled fish, seafood risotto and the bay's local mussels. Prices are markedly lower than in Kotor or Perast for comparable food. Nothing is polished; that is the appeal.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Pair with Perast.</strong> If you have a full day, do Risan on the way to Perast (10 minutes further around the bay) and stop at Our Lady of the Rocks on the return.</li>
        <li><strong>Check the pavilion opens.</strong> Off-season the mosaics pavilion keeps short hours; ask at the municipal tourist board in Herceg Novi before committing.</li>
        <li><strong>Photography.</strong> Flash is usually prohibited inside the pavilion; natural light is adequate on the walkways.</li>
        <li><strong>Return route.</strong> Come back the same way unless you want to extend the loop via Kotor, which adds an hour of waterfront traffic.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Risan is a half-day from Herceg Novi on its own, or a natural stop on a wider inner-bay loop. For the opposite approach — leaving Herceg Novi toward the outer bay and west — see our <a href={localePath('/blog/djenovici-west-bay-promenade')}>Đenovići promenade</a> guide.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance from HN</strong>~35 km</div>
          <div className="route-info__item"><strong>Drive time</strong>~45 min</div>
          <div className="route-info__item"><strong>Mosaics</strong>Roman villa, incl. Hypnos</div>
          <div className="route-info__item"><strong>Visit length</strong>~2 hours on site</div>
        </div>
      </div>
    </ContentPage>
  );
}
