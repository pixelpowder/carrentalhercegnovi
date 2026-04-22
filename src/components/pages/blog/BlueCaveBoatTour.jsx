'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BlueCaveBoatTour() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Blue Cave (Plava Špilja) — The Boat Tour from Herceg Novi"
      subtitle="A sea cave on the Luštica Peninsula that glows neon blue when the midday sun hits the water"
      description="Guide to the Blue Cave boat tour from Herceg Novi: timing the midday light, typical tour stops (Mamula, Our Lady of the Rocks), swimming, and best months to go."
      image="/img/blog-blue-cave.webp"
    >
      <h2>Why the Blue Cave is a must-do</h2>
      <p>Plava Špilja — the Blue Cave — sits on the outer side of the Luštica Peninsula, just outside the Bay of Kotor. It's a sea cave about 15 metres wide and 20 metres high, with a double entrance (one larger for boats, one smaller). What makes it worth the trip: for a few hours around midday, when the sun is high enough to hit the sandy seabed at the cave mouth, the entire interior glows an intense neon blue — a natural effect of sunlight refracting through the shallow water and reflecting off the light-coloured sand.</p>
      <p>Swimmers describe it as swimming in a lightbulb. The effect is strongest between 11:00 and 14:00 and is most intense on clear, calm days.</p>

      <h2>Boat tours from Herceg Novi</h2>
      <p>Daily tours run from Herceg Novi harbour throughout the summer (May-October). Most tours are 3-4 hours and include the Blue Cave plus two or three other stops. Typical itinerary:</p>
      <ul>
        <li><strong>Herceg Novi harbour</strong> — departure</li>
        <li><a href={localePath('/blog/mamula-island-history')}><strong>Mamula Island</strong></a> — pass-by or short stop for photos</li>
        <li><strong>Luštica submarine tunnels</strong> — Yugoslav-era navy tunnels carved into the cliff</li>
        <li><strong>Blue Cave</strong> — 20-30 minutes at the cave, with a swim stop</li>
        <li><strong>Return via coast</strong> — back to Herceg Novi</li>
      </ul>
      <p>Tickets €20-35 per person, children often half price. Booking at the harbour kiosks or through hotel concierges. In July-August, book the day before.</p>

      <img src="/img/blog-blue-cave.webp" alt="Blue Cave Montenegro" loading="lazy" />

      <h2>Timing the visit</h2>
      <p>For the brightest blue effect, you want the sun at its highest — which means mid-day, which also means peak tour traffic. Compromise options:</p>
      <ul>
        <li><strong>Early-morning tour</strong> (departure 08:30-09:00) — less blue but cave to yourself. Good for photographers who want sharp water and no people.</li>
        <li><strong>Midday tour</strong> (departure 11:00-11:30) — peak blue, peak crowds. Expect 3-5 boats at the cave simultaneously, queuing to enter.</li>
        <li><strong>Afternoon tour</strong> (departure 14:00-15:00) — still decent light, fewer boats, often the best balance.</li>
      </ul>

      <h2>Swimming at the cave</h2>
      <p>Most tours allow 10-15 minutes swimming inside the cave. The water is cool even in August. Bring:</p>
      <ul>
        <li>Swimwear — worn under clothes for easy change</li>
        <li>Towel</li>
        <li>Snorkel gear (rental on board, or bring your own)</li>
        <li>Waterproof phone pouch — the underwater photos are remarkable</li>
      </ul>
      <p>The cave floor is deep enough for swimming but visibility is excellent. Some small fish and sea urchins.</p>

      <h2>Weather dependency</h2>
      <p>The cave is accessible only in calm seas. When the Bora wind blows (typically November-March but also occasional summer days), swell at the cave mouth makes entry unsafe and tours are cancelled. Operators refund fully in these cases.</p>
      <p>Check the forecast: calm, sunny, warm = perfect. Windy = tour likely cancelled.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Peak season:</strong> July-August. Book one day ahead minimum.</li>
        <li><strong>Shoulder season:</strong> May-June and September — smaller crowds, same cave effect.</li>
        <li><strong>Sea temperature:</strong> warmest August (25°C+), cooling through October.</li>
        <li><strong>Cash:</strong> useful for tips, drinks on board, harbour snacks.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Blue Cave tours leave from Herceg Novi harbour, so combine with a morning in the <a href={localePath('/blog/herceg-novi-old-town')}>Old Town</a> before boarding. Most tours return by 14:00-15:00, leaving the afternoon free for a beach or the <a href={localePath('/blog/igalo-thermal-mud-spa')}>Igalo mud spa</a>.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Cave size</strong>15 m wide, 20 m high</div>
          <div className="route-info__item"><strong>Best light</strong>11:00-14:00</div>
          <div className="route-info__item"><strong>Tour length</strong>3-4 hrs</div>
          <div className="route-info__item"><strong>Price</strong>€20-35 per person</div>
        </div>
      </div>
    </ContentPage>
  );
}
