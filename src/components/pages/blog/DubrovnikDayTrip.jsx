'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function DubrovnikDayTrip() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Dubrovnik Day Trip from Herceg Novi — The Border Crossing Guide"
      subtitle="Forty kilometres west over the Debeli Brijeg border — plus the variable border-queue time that breaks itineraries"
      description="Practical guide to driving from Herceg Novi to Dubrovnik, Croatia: the Debeli Brijeg border, wait times, rental paperwork, what to see in Dubrovnik, return timing."
      image="/img/blog-dubrovnik.webp"
    >
      <h2>The closest-from-Montenegro Dubrovnik access</h2>
      <p>Herceg Novi is the last Montenegrin town before the Croatian border. Dubrovnik is 40 kilometres west. On a clear day with no border delay, you're in Dubrovnik's old city within an hour. On a summer Saturday, you might add another hour or two at the crossing.</p>

      <h2>The border — Debeli Brijeg / Karasovići</h2>
      <p>Debeli Brijeg is the Montenegrin checkpoint, Karasovići is the Croatian side. Roughly 5 km of no-man's land between them — strange stretch of road with both-country signage.</p>
      <p>Wait times:</p>
      <ul>
        <li><strong>Off-season (October-April):</strong> 5-15 minutes total</li>
        <li><strong>Shoulder (May, September):</strong> 15-30 minutes</li>
        <li><strong>Summer weekday:</strong> 30-60 minutes</li>
        <li><strong>Summer Saturday (the cruise-ship changeover day):</strong> 2-3 hours possible</li>
      </ul>
      <p>Aim to cross before 09:30 outbound and before 16:00 on the return to avoid the worst. Avoid the Saturday 10:00-14:00 window.</p>

      <img src="/img/blog-dubrovnik.webp" alt="Dubrovnik city walls" loading="lazy" />

      <h2>Rental paperwork</h2>
      <p>You need the Green Card cross-border insurance on your rental. We include it when you tell us at booking that Croatia is on your itinerary. Keep the registration booklet and Green Card in the glovebox — Croatian border officers occasionally check both.</p>

      <h2>Driving into Dubrovnik</h2>
      <p>From the border, the road winds along the Croatian coast for 35 km. Passes through Cavtat (worth a coffee stop if you have time), then around Dubrovnik Airport, then into Dubrovnik's suburbs.</p>
      <p>Old Town access: cars are NOT allowed inside the walls. Park at:</p>
      <ul>
        <li><strong>Pile Gate car park</strong> (near main entrance) — expensive (€8-10/hour) but closest</li>
        <li><strong>Srđ cable-car station car park</strong> — cheaper (€3-4/hour), walkable down to Old Town</li>
        <li><strong>Gruž harbour</strong> — free-to-cheap, 15-20 min walk or short bus ride</li>
      </ul>

      <h2>A day in Dubrovnik</h2>
      <p>Main sights inside the walls:</p>
      <ul>
        <li><strong>The City Walls walk</strong> — 2 km circuit, 1-2 hours, €40-45 adult ticket. Book online to skip the queue.</li>
        <li><strong>Stradun</strong> — the main marble street, the centre of Old Town life.</li>
        <li><strong>Rector's Palace and Cathedral</strong> — separate €10-15 tickets each.</li>
        <li><strong>Srđ cable car</strong> — up to the mountain behind for panoramic views. €27 return.</li>
      </ul>
      <p>For Game of Thrones fans: the walls were used as King's Landing. The Iron Throne spot at the top of the Lovrijenac fortress is walkable from the Pile Gate.</p>

      <h2>Lunch</h2>
      <p>Inside the walls is tourist-priced. For better value, walk out through Ploče Gate to Barba (seafood sandwich bar) or take the cable car up to Panorama (views plus good food, still not cheap but fair).</p>

      <h2>Timing your day</h2>
      <p>Depart Herceg Novi by 08:30. Arrive Dubrovnik around 09:30-10:00. Walls walk, old town wander, lunch. Leave Dubrovnik by 17:00 to clear the return border before peak. Back in Herceg Novi around 19:30 with an off-peak return, later on a Saturday.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Currency:</strong> Croatia uses the euro since 2023. Same currency as Montenegro now — no exchange needed.</li>
        <li><strong>Phone:</strong> Croatian roaming is fine within the EU; from Montenegro it depends on your contract. Check before crossing.</li>
        <li><strong>Passports:</strong> Required. Montenegro isn't in the Schengen Area, so you get stamps in and out.</li>
        <li><strong>Car documents:</strong> Registration, insurance, Green Card. All in the glovebox.</li>
      </ul>

      <h2>Also worth considering</h2>
      <p>If you want to avoid the border queue entirely, consider <a href={localePath('/blog/mamula-island-history')}>Mamula Island</a> as an alternative half-day trip, or the <a href={localePath('/blog/blue-cave-boat-tour')}>Blue Cave boat tour</a> from Herceg Novi harbour.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>40 km to border + 35 km more</div>
          <div className="route-info__item"><strong>Drive time</strong>~1 hr + border wait</div>
          <div className="route-info__item"><strong>Border post</strong>Debeli Brijeg / Karasovići</div>
          <div className="route-info__item"><strong>Walls ticket</strong>€40-45</div>
        </div>
      </div>
    </ContentPage>
  );
}
