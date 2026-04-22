'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SavinaMonastery() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Savina Monastery — Three Churches, a Thousand Years of Orthodox History"
      subtitle="The monastery complex 2 km east of Herceg Novi with a small chapel from 1030 and holy relics from Bosnia and Herzegovina"
      description="Guide to Savina Monastery in Herceg Novi: the three churches, the relics of St Sava, the 11th-century foundation, how to visit and where to park."
      image="/img/blog-savina.webp"
    >
      <h2>A monastery older than Herceg Novi itself</h2>
      <p>Savina Monastery sits on a wooded hillside 2 kilometres east of Herceg Novi, surrounded by dense Mediterranean vegetation. It's a Serbian Orthodox complex of three churches. The oldest, the small Church of the Assumption, has foundations dated to 1030 — older than the town of Herceg Novi (founded 1382) by more than three centuries.</p>
      <p>The monastery takes its name from Saint Sava (c. 1169-1236), founder of the Serbian Orthodox Church and the most revered figure in Serbian religious history. Relics and a crystal crucifix associated with Saint Sava are preserved in the monastery treasury.</p>

      <h2>The three churches</h2>
      <p><strong>The small Church of the Assumption</strong> — 11th-century foundations. Modest stone chapel, partly carved into the hillside. The oldest written record of it dates from 1648, but archaeological evidence places construction several centuries earlier. Reconstruction began in the late 17th century with the arrival of refugee monks fleeing Ottoman advances in Herzegovina, and finished in 1831.</p>
      <p><strong>The Great Temple of the Assumption</strong> — built 1777-1799, overseen by the architect Nikola Foretić. This is the large church that visitors see first. Substantial, traditional Orthodox layout, with an iconostasis and wall frescoes.</p>
      <p><strong>The Church of St Sava</strong> — smaller, newer. Dedicated to the monastery's namesake.</p>

      <img src="/img/blog-savina.webp" alt="Savina Monastery" loading="lazy" />

      <h2>Why it matters historically</h2>
      <p>Savina served for centuries as the summer residence of the Orthodox Bishop of Cattaro (Kotor), making it the senior Orthodox institution in the western Bay of Kotor during the Venetian period. When Ottoman forces advanced into Herzegovina in the 17th century, monks from Tvrdoš Monastery (near Trebinje) fled to Savina, bringing with them holy relics and manuscripts that had been in Tvrdoš for centuries. Several of those items — including the crystal crucifix of St Sava — are now in the Savina treasury.</p>
      <p>The monastery was also, for a period, the seat of the Serbian Orthodox Metropolitanate for this region. Its historical importance in the wider Serbian Orthodox tradition is considerably greater than its physical scale suggests.</p>

      <h2>The relics</h2>
      <p>Among items held in the monastery's treasury:</p>
      <ul>
        <li>The crystal crucifix of Saint Sava</li>
        <li>Ashes attributed to Tsaritsa Elena, Apostle Thomas, and Saint George</li>
        <li>Medieval manuscripts and icons, particularly a 16th-century icon of Our Lady of Savina</li>
        <li>Religious objects brought by refugee monks from Tvrdoš Monastery in Herzegovina</li>
      </ul>
      <p>The treasury is only partially open to visitors. The monks will show specific items on request for respectful visitors.</p>

      <h2>Visiting — practical</h2>
      <p>The monastery is a working religious community. Modest dress is essential — shoulders covered, knees covered, no short skirts. Scarves for women's heads are usually available at the entrance.</p>
      <p>Open daily during daylight hours. Free entry. Donations welcome. The monks appreciate quiet — keep conversations low, turn phones to silent, no flash photography in the interior of the churches.</p>
      <p>Parking: small free lot beside the monastery approach road. Fills on weekend mornings; arrive before 10:30 or after 13:00 for a spot.</p>

      <h2>The setting</h2>
      <p>The monastery's gardens are as striking as its buildings. Cypress, laurel, olive, and Mediterranean maquis growing up the hillside, with stone paths and benches offering shaded views toward the bay. It's one of the quietest, most meditative spots on the entire western Adriatic coast — an excellent hour's escape from the summer crowds of Herceg Novi.</p>

      <h2>Pair with</h2>
      <p>Savina is a natural morning stop before heading into <a href={localePath('/blog/herceg-novi-old-town')}>Herceg Novi Old Town</a>. A very different pace, 5 minutes' drive apart.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Oldest foundation</strong>1030 (Small Church)</div>
          <div className="route-info__item"><strong>Great Temple</strong>1777-1799</div>
          <div className="route-info__item"><strong>Churches</strong>3 total</div>
          <div className="route-info__item"><strong>Distance</strong>2 km east of Herceg Novi</div>
        </div>
      </div>
    </ContentPage>
  );
}
