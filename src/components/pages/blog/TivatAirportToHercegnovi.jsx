'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatAirportToHercegnovi() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Tivat Airport to Herceg Novi — Three Routes, Three Different Drives"
      subtitle="40 kilometres by road, or a ferry shortcut that halves the distance — and when each is worth taking"
      description="Guide to the drive from Tivat Airport to Herceg Novi: the Kamenari ferry shortcut (30 min), the full bay route (1 hr), and the winter detour via Trebinje."
      image="/img/blog-tivat-arrival.webp"
    >
      <h2>The three routes</h2>
      <p>From Tivat Airport (TIV) to Herceg Novi, you have three options, each with different time, distance and scenery trade-offs.</p>

      <h2>Route 1 — Via the Kamenari ferry (fastest)</h2>
      <p>Leave Tivat going west toward Kamenari. Take the car ferry across the Verige Strait (10 minutes, €5-10). Continue on the coastal road through Kumbor to Herceg Novi. Total: 30-35 minutes, roughly 20 km. This is the fastest route outside of ferry queue times.</p>
      <p>Ferry runs every 10-15 minutes from 05:00-23:00. In summer, Saturday changeovers can see a 20-30 minute wait for the ferry itself. Otherwise seamless.</p>

      <h2>Route 2 — Around the bay (longer, fully scenic)</h2>
      <p>Leave Tivat going north. Drive the head of the Bay of Kotor via Kotor's Old Town, cross through the Verige Strait at Kamenari (now on the right), continue west through Morinj and Risan, finally arriving in Herceg Novi. Total: around 1 hour, 40 km.</p>
      <p>Longer but immeasurably more scenic. Recommended for afternoon arrivals when there's time to stop in Kotor for a coffee under the fortress walls. Not recommended for late-night arrivals when you just want to get to the hotel.</p>

      <img src="/img/blog-tivat-arrival.webp" alt="Tivat airport and Bay of Kotor" loading="lazy" />

      <h2>Route 3 — Via Trebinje (winter only, for hardcore drivers)</h2>
      <p>When the Kamenari ferry is closed in rough weather (rare, usually brief), and you want to skip Kotor Bay traffic, there's a mountain route via Grahovo and Trebinje in Bosnia. Not a practical option in summer — it's 2.5 hours minimum and crosses an international border. But in a deep winter storm, with the ferry closed, it's the backup. Cross-border insurance required.</p>

      <h2>Tivat Airport arrival procedure</h2>
      <p>After landing, clear immigration and collect luggage. Our representative meets you in arrivals with a sign bearing your name. Documents checked, keys handed over — the car is parked in the terminal lot, no shuttle needed. Typical pickup time: 15-20 minutes from wheels-down.</p>

      <h2>Arrival-day tips</h2>
      <ul>
        <li><strong>Timing your arrival:</strong> mid-afternoon flights (land 14:00-16:00) give you daylight driving plus time for a stop in Kotor.</li>
        <li><strong>Late-night arrivals:</strong> take Route 1 (ferry route) directly. Ferry runs until 23:00; after that, take Route 2 around the bay, which is empty at night and fast.</li>
        <li><strong>Car seats for children:</strong> book at least 48 hours ahead.</li>
        <li><strong>Fuel:</strong> a small fuel station sits just outside Tivat Airport — fill up before heading off.</li>
        <li><strong>Dubrovnik via Herceg Novi:</strong> if your next stop is Croatia, factor in the Debeli Brijeg border (40 km west of Herceg Novi, variable queue).</li>
      </ul>

      <h2>Return to airport</h2>
      <p>Same routes in reverse. For Saturday morning flights (the busiest ferry changeover times), either use Route 2 (around the bay) or aim for the 06:00-07:00 ferries which are quiet.</p>
      <p>Drop-off procedure: return the car to the same terminal lot, hand over the keys, done. Under 10 minutes in practice.</p>

      <h2>Cross-border alternative: Dubrovnik Airport</h2>
      <p>Dubrovnik Airport is roughly 40 minutes from Herceg Novi the other way — plus the border crossing time at Debeli Brijeg (15-60 minutes typically, longer on summer weekends). For travellers coming from northern Europe, a Dubrovnik flight sometimes works out cheaper and faster overall. See our <a href={localePath('/blog/dubrovnik-day-trip')}>Dubrovnik day trip guide</a> for the border logistics.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Ferry route</strong>30-35 min, 20 km</div>
          <div className="route-info__item"><strong>Around-bay route</strong>1 hr, 40 km</div>
          <div className="route-info__item"><strong>Ferry price</strong>€5-10 per car</div>
          <div className="route-info__item"><strong>Pickup time</strong>~15 min from arrival</div>
        </div>
      </div>
    </ContentPage>
  );
}
