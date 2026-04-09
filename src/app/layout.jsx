import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Herceg Novi Car Rental — Bay of Kotor Gateway',
  description:
    'Rent a car in Herceg Novi from €13/day. Just 35 km from Tivat Airport and 30 km from Dubrovnik. Full insurance, free cancellation, and cross-border driving included.',
  metadataBase: new URL('https://www.carrentalhercegnovi.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Herceg Novi Car Rental",
            "url": "https://www.carrentalhercegnovi.com",
            "description": "Rent a car in Herceg Novi from trusted local providers with free cancellation, full insurance, and Tivat Airport pickup included with every booking.",
            "email": "info@carrentalhercegnovi.com",
            "image": "https://www.carrentalhercegnovi.com/img/schema-car.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Njego\u0161eva BB",
              "addressLocality": "Herceg Novi",
              "postalCode": "85340",
              "addressCountry": "ME"
            },
            "areaServed": [
              { "@type": "City", "name": "Herceg Novi" },
              { "@type": "City", "name": "Igalo" },
              { "@type": "City", "name": "Kotor" },
              { "@type": "City", "name": "Tivat" },
              { "@type": "City", "name": "Dubrovnik" }
            ],
            "priceRange": "€25–€120",
            "currenciesAccepted": "EUR",
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
            ],
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5" }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What documents do I need to rent?", "acceptedAnswer": { "@type": "Answer", "text": "You\u2019ll need a full driving licence with Latin-script details, your passport, and a physical credit card issued in the main driver\u2019s name. If your licence is from a country that uses a non-Latin script, bring an International Driving Permit as well. Photocopies and digital-only licences are not accepted at pickup." } },
              { "@type": "Question", "name": "Can I drive to Croatia or Albania?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cross-border travel is permitted to Croatia, Bosnia, Albania, Kosovo, and Serbia. Dubrovnik is the most popular run from Herceg Novi \u2014 just 30 km via the Debeli Brijeg border crossing. Flag the countries at booking and the Green Card is prepared for you." } },
              { "@type": "Question", "name": "Is there a minimum age to rent?", "acceptedAnswer": { "@type": "Answer", "text": "Age and licence experience requirements vary by vehicle class and are listed clearly in each car\u2019s details when you search. Younger drivers may see a small daily supplement depending on the model." } },
              { "@type": "Question", "name": "What\u2019s actually included in the price?", "acceptedAnswer": { "@type": "Answer", "text": "Third-party liability insurance and CDW come standard on most cars. VAT, a roadside safety kit, and a transparent fuel policy are included too. Mileage terms differ per vehicle \u2014 check the car listing. Zero-excess cover and extras like child seats can be added at booking." } },
              { "@type": "Question", "name": "Where can I pick up the car?", "acceptedAnswer": { "@type": "Answer", "text": "Pickup is available at Herceg Novi centre, Igalo, and Tivat Airport (35 km). Your agent meets you at the agreed location \u2014 no shuttle buses, no queues. Just select your preferred spot when you book." } },
              { "@type": "Question", "name": "Can I return the car somewhere different?", "acceptedAnswer": { "@type": "Answer", "text": "One-way rentals are available across 28+ towns and cities in Montenegro. Pick up in Herceg Novi, drop off at Tivat Airport, or vice versa \u2014 just select different locations when you book." } },
              { "@type": "Question", "name": "What is the cancellation policy?", "acceptedAnswer": { "@type": "Answer", "text": "Standard vehicles: free cancellation up to 7 days before pickup. Luxury cars and convertibles: free cancellation up to 30 days in advance. A 6% processing fee applies on all cancellations regardless of timing." } },
              { "@type": "Question", "name": "Do I need to pay a deposit?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the vehicle. Deposits typically fall between \u20ac100 and \u20ac500 for most riviera rentals. Some cars require no deposit at all. Where one applies, it sits on the main driver\u2019s physical credit card and is released when the car is returned undamaged." } },
              { "@type": "Question", "name": "What if I go over my mileage allowance?", "acceptedAnswer": { "@type": "Answer", "text": "Vehicles with a set mileage cap charge a per-kilometre fee for any distance above the limit. The exact overage rate is shown in the car details before you confirm \u2014 no surprises." } },
              { "@type": "Question", "name": "Is the price I see the price I pay?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All taxes and standard fees are folded into the booking price. There is no fuel surcharge, airport levy, or desk fee added when you collect the car." } },
              { "@type": "Question", "name": "How much do I pay to confirm the booking?", "acceptedAnswer": { "@type": "Answer", "text": "A deposit of roughly 15% to 20% of the total secures the reservation. The rest is settled directly with the rental agent when you pick up the car in Herceg Novi or at Tivat." } },
              { "@type": "Question", "name": "Can I rent without a credit card?", "acceptedAnswer": { "@type": "Answer", "text": "Certain vehicles in the fleet can be rented with a debit card or without a card altogether. These are labelled in the search results so you can filter accordingly." } }
            ]
          }) }}
        />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}
