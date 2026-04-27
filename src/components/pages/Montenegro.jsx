'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function Montenegro() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  return (
    <ContentPage
      title={tf('montenegroPage.title', 'Driving Montenegro from the Western Bay')}
      subtitle={tf('montenegroPage.subtitle', 'The country from Herceg Novi as a base, two-country access and the quickest route to every major destination')}
      description={tf('montenegroPage.description', 'Overview of Montenegro for Herceg Novi-based drivers: typical drive times to Kotor, Budva, Podgorica, and across the Croatian border.')}
      image="/img/blog-ledenice-viewpoint-loop.webp"
    >
      <h2>{tf('montenegroPage.h2Base', 'Herceg Novi as a base, the two-country advantage')}</h2>
      <p>{tf('montenegroPage.p1', "Herceg Novi is the westernmost town on the Montenegrin coast. It's the only base from which you can do a morning in Croatia and an afternoon back in Montenegro without packing a bag. That geographical position defines what Montenegro looks like from here.")}</p>

      <h2>{tf('montenegroPage.h2WithinHour', 'Within an hour by car')}</h2>
      <ul>
        <li><a href={localePath('/blog/tivat-vs-dubrovnik-airport-choice')}>{tf('montenegroPage.li1Tivat', 'Tivat Airport')}</a>{tf('montenegroPage.li1After', ', 30-60 min depending on ferry')}</li>
        <li>{tf('montenegroPage.li2', 'Kotor Old Town, 45 min around the bay')}</li>
        <li>{tf('montenegroPage.li3', 'Perast, 35 min')}</li>
        <li>{tf('montenegroPage.li4', 'Budva, 60 min')}</li>
        <li><strong>{tf('montenegroPage.li5Strong', 'Dubrovnik, Croatia')}</strong>{tf('montenegroPage.li5After', ', 45 min + border')}</li>
      </ul>

      <h2>{tf('montenegroPage.h2Inside90', 'Inside 90 minutes')}</h2>
      <ul>
        <li>{tf('montenegroPage.li6', 'Cetinje royal capital, 1.5 hrs')}</li>
        <li>{tf('montenegroPage.li7', 'Tara Canyon first viewpoints, 1.5 hrs')}</li>
        <li>{tf('montenegroPage.li8', 'Trebinje, Bosnia, 1 hr (border + drive)')}</li>
        <li>{tf('montenegroPage.li9', 'Podgorica, 1.5 hrs')}</li>
      </ul>

      <h2>{tf('montenegroPage.h2DayTrips', 'Day trips with real variety')}</h2>
      <p>{tf('montenegroPage.p2', 'In a week from Herceg Novi you can reasonably tick off the Croatian walled city, a Montenegrin old town, a mountain hike, a beach day, a monastery morning, and a border-crossing into Bosnia, all without moving accommodation. Few Mediterranean bases offer that kind of geographic density.')}</p>

      <h2>{tf('montenegroPage.h2Borders', 'Borders from Herceg Novi')}</h2>
      <ul>
        <li>
          <strong>{tf('montenegroPage.borderCroatiaStrong', 'Croatia (Debeli Brijeg):')}</strong>
          {tf('montenegroPage.borderCroatiaBefore', ' 15 min to the border. Queue variable, see our ')}
          <a href={localePath('/blog/tivat-vs-dubrovnik-airport-choice')}>{tf('montenegroPage.borderCroatiaLink', 'airport choice guide')}</a>
          {tf('montenegroPage.borderCroatiaAfter', ' for cross-border arrival tips.')}
        </li>
        <li>
          <strong>{tf('montenegroPage.borderBosniaStrong', 'Bosnia (Sutorina / Ivanica):')}</strong>
          {tf('montenegroPage.borderBosniaBefore', ' 20 min to the border, then straight into Trebinje country, see the ')}
          <a href={localePath('/blog/sutorina-bosnia-corridor')}>{tf('montenegroPage.borderBosniaLink', 'Sutorina corridor')}</a>
          {tf('montenegroPage.borderBosniaAfter', ' guide.')}
        </li>
        <li>
          <strong>{tf('montenegroPage.borderAlbaniaStrong', 'Albania:')}</strong>
          {tf('montenegroPage.borderAlbaniaText', ' requires an hour through coastal Montenegro first, then the Božaj crossing near Podgorica.')}
        </li>
      </ul>

      <h2>{tf('montenegroPage.h2Seasons', 'Best seasons')}</h2>
      <p>{tf('montenegroPage.p3', 'May-June and September are ideal, warm sea, mild interior, shorter border queues. July-August is hot, busy, and the border waits peak. October-April is quieter but most tourist infrastructure scales back.')}</p>
    </ContentPage>
  );
}
