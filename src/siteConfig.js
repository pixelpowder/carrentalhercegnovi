const siteConfig = {
  name: "Car Rental Herceg Novi",
  tagline: "The western edge of the Adriatic — at the Croatian border",
  domain: "carrentalhercegnovi.com",
  phone: "",
  email: "info@carrentalhercegnovi.com",
  address: "Tabacina BB, Kotor, 85330",

  hero: {
    headline: "Rent a Car in Herceg Novi",
    subheadline: "The entrance to the Bay of Kotor — Dubrovnik 40 minutes one way, Kotor Old Town 30 minutes the other. Orjen Mountain behind. Mamula Island offshore.",
    image: "/img/hero-hercegnovi.webp",
  },

  cars: [
    { id: 1, slug: "vw-polo", name: "VW Polo", category: "Economy", price: 25, image: "/img/pexels-1035108.jpg", seats: 5, transmission: "Manual", fuel: "Petrol", doors: 4, luggage: 2, ac: true, features: ["Air Conditioning", "Bluetooth Audio", "USB Charging", "Central Locking"], popular: false },
    { id: 2, slug: "skoda-octavia", name: "Skoda Octavia", category: "Mid-Size", price: 35, image: "/img/pexels-116675.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Automatic Transmission", "Cruise Control", "Parking Sensors", "Large Boot"], popular: true },
    { id: 3, slug: "toyota-corolla", name: "Toyota Corolla", category: "Mid-Size", price: 38, image: "/img/pexels-170811.jpg", seats: 5, transmission: "Automatic", fuel: "Hybrid", doors: 4, luggage: 3, ac: true, features: ["Hybrid Engine", "Reversing Camera", "Apple CarPlay", "Keyless Start"], popular: false },
    { id: 4, slug: "mercedes-c-class", name: "Mercedes C-Class", category: "Premium", price: 65, image: "/img/pexels-120049.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["Leather Seats", "Navigation System", "Premium Sound", "Heated Seats"], popular: true },
    { id: 5, slug: "jeep-renegade", name: "Jeep Renegade", category: "SUV", price: 55, image: "/img/pexels-1638459.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["4x4 Drive", "Hill Descent Control", "Roof Rails", "Off-Road Mode"], popular: false },
    { id: 6, slug: "bmw-x3", name: "BMW X3", category: "Premium SUV", price: 85, image: "/img/pexels-892522.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Panoramic Roof", "Adaptive Cruise", "360 Camera", "Sport Mode"], popular: false },
    { id: 7, slug: "fiat-500", name: "Fiat 500", category: "City", price: 20, image: "/img/pexels-1007410.jpg", seats: 4, transmission: "Manual", fuel: "Petrol", doors: 2, luggage: 1, ac: true, features: ["Compact Size", "Easy Parking", "Sunroof", "Bluetooth"], popular: false },
    { id: 8, slug: "vw-transporter", name: "VW Transporter", category: "Van", price: 70, image: "/img/pexels-2533092.jpg", seats: 9, transmission: "Manual", fuel: "Diesel", doors: 4, luggage: 6, ac: true, features: ["9 Seats", "Airport Shuttle Ready", "Sliding Doors", "Ample Storage"], popular: false },
  ],

  features: [
    { icon: "map-pin", title: "Herceg Novi Pickup", description: "Meet us on the Herceg Novi waterfront, at your Igalo hotel, or at Tivat Airport 40 minutes away. Dubrovnik Airport pickup also supported for arrivals from Croatia." },
    { icon: "shield-check", title: "Border-Ready Insurance", description: "CDW, theft and third-party liability on every rental, plus Green Card cover for the Croatia crossing at Debeli Brijeg. Zero-excess upgrade recommended for Orjen mountain drives." },
    { icon: "clock", title: "24/7 Local Support", description: "Queue stuck at Debeli Brijeg, puncture on the Orjen road, last boat missed from Mamula — we answer any hour." },
    { icon: "ban", title: "No Hidden Charges", description: "The price you book is the price you pay. No summer premium, no fuel-tier tricks, no surprise airport fees." },
    { icon: "refresh-cw", title: "Flexible Cancellation", description: "Cancel free of charge up to seven days before pickup on most vehicles." },
    { icon: "globe", title: "Cross to Croatia", description: "Dubrovnik is 40 minutes away over the Debeli Brijeg border — Green Card included when you tell us at booking." },
  ],

  testimonials: [
    { name: "Pavel & Tereza", location: "Prague, Czech Republic", text: "Ferry from Italy to Igoumenitsa, drove north through Albania, arrived Herceg Novi in the evening. Hired a Skoda here for a week. Day trip to Dubrovnik, a boat to Mamula, Orjen hike on day four. The border queue was as bad as everyone warned but otherwise flawless.", rating: 5, avatar: "/img/avatar-1.webp" },
    { name: "Helen Whitaker", location: "Bath, England", text: "Flew Dubrovnik, took a taxi to the border, picked up the car in Herceg Novi. Saved a fortune on cross-border rental fees. Based at Igalo for the mud spa, did short coastal drives most afternoons. Car was spotless, staff helpful.", rating: 5, avatar: "/img/avatar-2.webp" },
    { name: "The Becker Family", location: "Munich, Germany", text: "Four of us in a Toyota Corolla hybrid. Best fuel economy we've had on any Balkan trip. Stayed in Herceg Novi for four nights, drove to Kotor and Budva on day trips. Boat day to the Blue Cave was the highlight for the kids.", rating: 5, avatar: "/img/avatar-3.webp" },
  ],

  faq: [
    { q: "Which airport is closest?", a: "Tivat Airport (TIV) is 40 minutes away and the main option. Dubrovnik Airport (DBV) in Croatia is 40 minutes in the other direction, plus border crossing time — sometimes faster overall from northern Europe." },
    { q: "Can I pick up in Croatia and drop off in Montenegro?", a: "Most operators charge substantial one-way fees for cross-border drops. Renting in Herceg Novi and taxiing across the border is often cheaper." },
    { q: "How long is the Dubrovnik border queue?", a: "Debeli Brijeg takes 15-60 minutes typically. Summer weekends can stretch to two hours. Avoid 10:00-13:00 on Saturdays." },
    { q: "Minimum age?", a: "21 with two years of driving experience. 21-24 year olds pay a young-driver surcharge." },
    { q: "Is a credit card required?", a: "Most vehicles hold €100-€350 on a credit card. A few economy options accept debit with a larger deposit — filter for 'no credit card required' at booking." },
    { q: "Cross-border paperwork?", a: "Croatia, Bosnia, Serbia, Albania and Kosovo all supported. Green Card insurance included when you tell us your plans at booking." },
    { q: "Winter driving?", a: "Coast is mild year-round. Orjen Mountain and the inland passes need winter tyres November-April — included on mountain-class vehicles." },
    { q: "Parking in Herceg Novi?", a: "The Old Town is pedestrianised (stairs, not streets). Park at the waterfront lots (€1-2/hr) and walk up." },
    { q: "Is one-way rental available?", a: "Yes — to Kotor, Tivat Airport, Budva, Podgorica and beyond. A small distance-based one-way fee applies." },
    { q: "Mileage limit?", a: "Most rentals are unlimited. Budget economy vehicles sometimes cap at 200 km/day — visible at booking." },
    { q: "Late-night airport arrivals?", a: "Every flight met at Tivat, no surcharge. Dubrovnik pickups require 24 hours notice." },
    { q: "What if my ferry is delayed?", a: "We track ferries from Bari, Ancona and Dubrovnik port and adjust pickup times. No surcharge for delays." },
  ],

  locations: [
    { name: "Herceg Novi", tag: "Most Popular" },
    { name: "Igalo", tag: "Spa Resort" },
    { name: "Tivat Airport", tag: "Airport Pickup" },
    { name: "Dubrovnik Airport", tag: "Cross-Border" },
    { name: "Bijela", tag: "" },
    { name: "Meljine", tag: "" },
  ],

  destinations: [
    { name: "Herceg Novi Old Town", slug: "blog/herceg-novi-old-town", tag: "City of Stairs", desc: "Kanli Kula fortress (1539), Ottoman walls and Mediterranean stone stairs.", image: "/img/blog-hercegnovi-oldtown.webp" },
    { name: "Savina Monastery", slug: "blog/savina-monastery", tag: "11th century", desc: "Three Orthodox churches, oldest foundations from 1030.", image: "/img/blog-savina.webp" },
    { name: "Dubrovnik Day Trip", slug: "blog/dubrovnik-day-trip", tag: "40 min + border", desc: "Across the Croatian border for the walled city.", image: "/img/blog-dubrovnik.webp" },
    { name: "Mamula Island", slug: "blog/mamula-island-history", tag: "10 km offshore", desc: "19th-century fort, WWII prison, now a luxury hotel.", image: "/img/blog-mamula.webp" },
    { name: "Blue Cave", slug: "blog/blue-cave-boat-tour", tag: "Luštica peninsula", desc: "Neon-blue sea cave 15m wide, best at noon.", image: "/img/blog-blue-cave.webp" },
    { name: "Igalo Mud Spa", slug: "blog/igalo-thermal-mud-spa", tag: "Spa since 1949", desc: "Radioactive marine mud and thermal treatment.", image: "/img/blog-igalo.webp" },
    { name: "Orjen Mountain", slug: "blog/orjen-mountain-hike", tag: "Above 1,800 m", desc: "Cretaceous limestone and 40 km of marked trails.", image: "/img/blog-orjen.webp" },
    { name: "Tivat Airport", slug: "blog/tivat-airport-to-hercegnovi", tag: "40 min drive", desc: "Main arrival point for summer flights.", image: "/img/blog-tivat-arrival.webp" },
  ],
};

export default siteConfig;
