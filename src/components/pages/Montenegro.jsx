'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function Montenegro() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Driving Montenegro from the Western Bay"
      subtitle="The country from Herceg Novi as a base — two-country access and the quickest route to every major destination"
      description="Overview of Montenegro for Herceg Novi-based drivers: typical drive times to Kotor, Budva, Podgorica, and across the Croatian border."
      image="/img/blog-hercegnovi-oldtown.webp"
    >
      <h2>Herceg Novi as a base — the two-country advantage</h2>
      <p>Herceg Novi is the westernmost town on the Montenegrin coast. It's the only base from which you can do a morning in Croatia and an afternoon back in Montenegro without packing a bag. That geographical position defines what Montenegro looks like from here.</p>

      <h2>Within an hour by car</h2>
      <ul>
        <li><a href={localePath('/blog/tivat-airport-to-hercegnovi')}>Tivat Airport</a> — 30-60 min depending on ferry</li>
        <li>Kotor Old Town — 45 min around the bay</li>
        <li>Perast — 35 min</li>
        <li>Budva — 60 min</li>
        <li><strong>Dubrovnik, Croatia</strong> — 45 min + border</li>
      </ul>

      <h2>Inside 90 minutes</h2>
      <ul>
        <li>Cetinje royal capital — 1.5 hrs</li>
        <li>Tara Canyon first viewpoints — 1.5 hrs</li>
        <li>Trebinje, Bosnia — 1 hr (border + drive)</li>
        <li>Podgorica — 1.5 hrs</li>
      </ul>

      <h2>Day trips with real variety</h2>
      <p>In a week from Herceg Novi you can reasonably tick off the Croatian walled city, a Montenegrin UNESCO old town, a mountain hike, a beach day, a monastery morning, and a border-crossing into Bosnia — all without moving accommodation. Few Mediterranean bases offer that kind of geographic density.</p>

      <h2>Borders from Herceg Novi</h2>
      <ul>
        <li><strong>Croatia (Debeli Brijeg):</strong> 15 min to the border. Queue variable — see our <a href={localePath('/blog/dubrovnik-day-trip')}>Dubrovnik guide</a>.</li>
        <li><strong>Bosnia (Sutorina):</strong> 20 min to the border, then straight into Trebinje country.</li>
        <li><strong>Albania:</strong> requires an hour through coastal Montenegro first, then the Božaj crossing near Podgorica.</li>
      </ul>

      <h2>Best seasons</h2>
      <p>May-June and September are ideal — warm sea, mild interior, shorter border queues. July-August is hot, busy, and the border waits peak. October-April is quieter but most tourist infrastructure scales back.</p>
    </ContentPage>
  );
}
