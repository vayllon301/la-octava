export const RESTAURANT_DATA = {
  name: "La Octava",
  tagline: {
    es: "Jazz & Piano Bar en planta principal. Sub-Level House Club en el nivel inferior.",
    en: "Jazz & Piano Bar on main floor. Sub-Level House Club below."
  },
  address: "Paseo de la Castellana 88, Madrid",
  phone: "+34 918 888 888",
  conciergeWhatsApp: "+34 688 888 888",
  email: "hello@laoctava.com",
  membershipEmail: "blackkey@laoctava.com",
  hours: {
    pianoBar: "Martes – Domingo: 19:00 – 02:00 (Directos desde las 20:30)",
    houseClub: "Jueves – Domingo: 23:30 – 06:00 (Residentes & Invitados)",
    soundcheck: "Acceso con reserva de mesa o lista de puerta preferente"
  },
  stats: [
    { value: "02", labelEs: "Niveles de Sonido", labelEn: "Sound Levels" },
    { value: "Steinway", labelEs: "Grand Piano D-274", labelEn: "Grand Piano D-274" },
    { value: "Funktion-1", labelEs: "Custom Sound System", labelEn: "Custom Sound System" },
    { value: "124 BPM", labelEs: "Sub-Level Frequency", labelEn: "Sub-Level Frequency" }
  ],
  levels: [
    {
      id: "piano-bar",
      levelNumber: "01",
      nameEs: "Level 01: Jazz & Piano Bar",
      nameEn: "Level 01: Jazz & Piano Bar",
      taglineEs: "Diseño contemporáneo en madera acústica, piano de cola y coctelería de precisión",
      taglineEn: "Contemporary acoustic wood design, grand piano, and precision craft mixology",
      image: "/images/piano.jpg",
      vibe: "Acoustic Warmth, Minimal, Intimate",
      hours: "19:00 – 02:00",
      sound: "Steinway D-274 Concert Grand, Contrabajo & Jazz Vocal",
      dressCode: "Smart Casual / Night Minimal"
    },
    {
      id: "house-club",
      levelNumber: "-01",
      nameEs: "Level -01: Sub-Level House Club",
      nameEn: "Level -01: Sub-Level House Club",
      taglineEs: "Arquitectura de hormigón visto, iluminación lineal LED y Deep & Melodic House",
      taglineEn: "Architectural concrete, linear LED framework, and curated Deep & Melodic House",
      image: "/images/club.jpg",
      vibe: "Brutalist, Hypnotic, High-Fidelity",
      hours: "23:30 – 06:00",
      sound: "Funktion-One Sound Architecture + Technics 1210 MK7",
      dressCode: "Contemporary Club / All Black"
    }
  ],
  weeklyLineup: [
    {
      dayEs: "Martes",
      dayEn: "Tuesday",
      jazzActEs: "Tokyo-Madrid Modern Jazz Trio (Acoustic Standards)",
      jazzActEn: "Tokyo-Madrid Modern Jazz Trio (Acoustic Standards)",
      jazzTime: "20:30 – 23:30",
      clubActEs: "Vinyl Sessions: Deep Minimal & Ambient Grooves",
      clubActEn: "Vinyl Sessions: Deep Minimal & Ambient Grooves",
      clubTime: "23:30 – 03:30",
      curator: "David Sanz Trio + Selector K"
    },
    {
      dayEs: "Miércoles",
      dayEn: "Wednesday",
      jazzActEs: "Modern Bossa & Nu-Jazz Vocal Sessions",
      jazzActEn: "Modern Bossa & Nu-Jazz Vocal Sessions",
      jazzTime: "21:00 – 00:00",
      clubActEs: "Organic House & Afro-Electronic Textures",
      clubActEn: "Organic House & Afro-Electronic Textures",
      clubTime: "23:30 – 04:00",
      curator: "Elena Vance Quartet + Resident Sound"
    },
    {
      dayEs: "Jueves",
      dayEn: "Thursday",
      jazzActEs: "Contemporary Post-Bop & Piano Improvisation",
      jazzActEn: "Contemporary Post-Bop & Piano Improvisation",
      jazzTime: "21:00 – 00:30",
      clubActEs: "Deep Tech & Melodic House Selectors",
      clubActEn: "Deep Tech & Melodic House Selectors",
      clubTime: "00:00 – 05:30",
      curator: "The Octave Lab + Guest Berlin Resident"
    },
    {
      dayEs: "Viernes",
      dayEn: "Friday",
      jazzActEs: "Grand Piano Late Sessions & Modern Brass",
      jazzActEn: "Grand Piano Late Sessions & Modern Brass",
      jazzTime: "21:30 – 01:00",
      clubActEs: "Sub-Level Club Night: Pure Deep House (London / Berlin)",
      clubActEn: "Sub-Level Club Night: Pure Deep House (London / Berlin)",
      clubTime: "00:00 – 06:00",
      curator: "La Octava Collective + International Guests"
    },
    {
      dayEs: "Sábado",
      dayEn: "Saturday",
      jazzActEs: "Midnight Jazz Vocalists & Acoustic Solos",
      jazzActEn: "Midnight Jazz Vocalists & Acoustic Solos",
      jazzTime: "21:30 – 01:30",
      clubActEs: "The Octave Experience: 124 BPM All Night Long",
      clubActEn: "The Octave Experience: 124 BPM All Night Long",
      clubTime: "00:00 – 06:00",
      curator: "Sofi Q + Resident Headliners"
    },
    {
      dayEs: "Domingo",
      dayEn: "Sunday",
      jazzActEs: "Sunday Soul, Vinyl Listening & Rhodes Jam",
      jazzActEn: "Sunday Soul, Vinyl Listening & Rhodes Jam",
      jazzTime: "20:00 – 23:30",
      clubActEs: "Sundown to Sub-Level: Melodic Afterhours",
      clubActEn: "Sundown to Sub-Level: Melodic Afterhours",
      clubTime: "23:30 – 04:00",
      curator: "Vinyl Selectors Collective"
    }
  ],
  cocktails: [
    {
      name: "The Steinway 88",
      category: "Jazz Bar Signature",
      ingredientsEs: "Woodford Reserve Bourbon, vainilla de Madagascar, reducción de higos negros, bitter de cacao y humo de roble.",
      ingredientsEn: "Madagascar vanilla-infused Bourbon, black fig reduction, raw cacao bitters, and light oak smoke.",
      notes: "Amaderado, suave, elegante",
      priceEur: 18,
      priceUsd: 20,
      badge: "Level 01"
    },
    {
      name: "Clarified Yuzu Highball",
      category: "Jazz Bar Signature",
      ingredientsEs: "Whisky Japonés Nikka Coffey Grain, zumo de yuzu clarificado al vacío, soda artesana y hielo monolítico.",
      ingredientsEn: "Nikka Coffey Grain Japanese Whisky, vacuum-clarified yuzu, artisan soda, and monolithic hand-cut ice.",
      notes: "Cítrico, cristalino, sutil",
      priceEur: 19,
      priceUsd: 21,
      badge: "Level 01"
    },
    {
      name: "Sub-Level Paloma",
      category: "Sub-Level House",
      ingredientsEs: "Mezcal artesano Oaxaqueño, cordial de pomelo rosa sopleteado, licor de chile ancho y soda de romero.",
      ingredientsEn: "Artisanal Oaxacan Mezcal, torched pink grapefruit cordial, ancho chile liqueur, and rosemary soda.",
      notes: "Ahumado, vibrante, nítido",
      priceEur: 18,
      priceUsd: 20,
      badge: "Level -01"
    },
    {
      name: "124 BPM Nitro Espresso",
      category: "Sub-Level House",
      ingredientsEs: "Vodka Grey Goose, café espresso Geisha recién extraído, licor de café de especialidad y crema nitro ligera.",
      ingredientsEn: "Grey Goose Vodka, fresh pulled Geisha espresso, specialty coffee liqueur, and airy nitro cold foam.",
      notes: "Intenso, cremoso, tónico",
      priceEur: 18,
      priceUsd: 20,
      badge: "Level -01"
    }
  ],
  foodBites: [
    {
      nameEs: "Ostras Gillardeau N°2 con Mignonette de Champagne",
      nameEn: "Gillardeau N°2 Oysters with Champagne Mignonette",
      descEs: "Servidas sobre hielo picado con caviar Oscietra y perlas de yuzu.",
      descEn: "Served over ice with Oscietra caviar pearls and fresh yuzu.",
      priceEur: 34,
      priceUsd: 38
    },
    {
      nameEs: "Jamón Ibérico 100% Bellota '5 Jotas' & Pan de Cristal",
      nameEn: "100% Acorn-fed 5 Jotas Iberian Ham & Crystal Bread",
      descEs: "Cortado a cuchillo al momento con tomate rallado y aceite arbequina.",
      descEn: "Freshly carved, served with grated tomato and cold-pressed extra virgin olive oil.",
      priceEur: 36,
      priceUsd: 40
    },
    {
      nameEs: "Brioche Tostado de Wagyu Tartare & Trufa Negra",
      nameEn: "Toasted Wagyu Tartare Brioche & Black Truffle",
      descEs: "Mantequilla francesa, mostaza suave, yema curada y láminas de trufa de temporada.",
      descEn: "French butter brioche, cured egg yolk, and shaved seasonal black truffle.",
      priceEur: 26,
      priceUsd: 29
    },
    {
      nameEs: "Sándwich de Queso Comté 24 Meses & Pastrami Artesano",
      nameEn: "24-Month Comté & Artisan Pastrami Toast",
      descEs: "Pan brioche crujiente y mantequilla clarificada (disponible toda la noche).",
      descEn: "Crisp golden brioche and clarified herb butter (served all night).",
      priceEur: 22,
      priceUsd: 24
    }
  ],
  memberships: [
    {
      id: "preferred-guest",
      nameEs: "Acceso Preferente Guestlist",
      nameEn: "Priority Guestlist Pass",
      priceYear: "Free con Reserva / Prioridad",
      benefitsEs: [
        "Reserva garantizada de mesa en el Piano Bar",
        "Acceso directo sin esperas al Sub-Level House Club",
        "Notificaciones anticipadas del cartel semanal de artistas",
        "Cóctel de cortesía de bienvenida"
      ],
      benefitsEn: [
        "Guaranteed table hold at the Piano Bar",
        "Direct skip-the-line entry to the Sub-Level House Club",
        "Advance notifications for weekly lineups and secret sets",
        "Complimentary signature welcome drink"
      ],
      recommended: false
    },
    {
      id: "black-key",
      nameEs: "Membresía 'Black Key'",
      nameEn: "'Black Key' Annual Membership",
      priceYear: "2.200 € / año",
      benefitsEs: [
        "Acceso VIP ilimitado y prioritario para ti y 3 invitados a ambos niveles",
        "Mesa reservada perpetua en el Piano Bar y Cabina VIP en el House Club",
        "Casillero privado con control de temperatura para tus botellas",
        "Acceso a sesiones secretas de piano a puerta cerrada y Afterhours",
        "Línea directa de WhatsApp con el Director de Sala"
      ],
      benefitsEn: [
        "Unlimited VIP priority entry for member + 3 guests across both floors",
        "Perpetual table hold at the Piano Bar and VIP Booth at Sub-Level",
        "Temperature-controlled private locker for personal bottle collection",
        "Invitations to secret lock-in jam sessions and private after-hours",
        "Direct 24/7 WhatsApp concierge access"
      ],
      recommended: true
    },
    {
      id: "sound-patron",
      nameEs: "Sound Patron Circle",
      nameEn: "Sound Patron Circle",
      priceYear: "4.900 € / año",
      benefitsEs: [
        "Todos los beneficios de Black Key incluidos",
        "Reserva de la Sala Sub-Level para eventos privados",
        "Mesa Steinway preferente en todos los conciertos del año",
        "Asignación de añadas de Champagne Dom Pérignon & Krug",
        "Servicio de transporte privado en Madrid"
      ],
      benefitsEn: [
        "All Black Key privileges included",
        "Private hosting rights for the Sub-Level floor",
        "Front-row Steinway table at every live concert",
        "Annual magnum allocation of Dom Pérignon & Krug Champagne",
        "Private luxury transport within Madrid"
      ],
      recommended: false
    }
  ],
  pressQuotes: [
    {
      source: "Resident Advisor",
      quoteEs: "«La Octava redefine la noche contemporánea: un espacio de escucha acústica impecable arriba y un club de sonido Funktion-One minimalista abajo.»",
      quoteEn: "«La Octava redefines contemporary nightlife: a pristine acoustic listening room above, and a minimalist Funktion-One sound sanctuary below.»"
    },
    {
      source: "Monocle Magazine",
      quoteEs: "«El diseño limpio, las maderas acústicas y el Steinway D-274 sitúan a La Octava entre los mejores listening bars del mundo.»",
      quoteEn: "«The clean architectural lines, acoustic slats, and Steinway D-274 place La Octava among the finest listening bars globally.»"
    },
    {
      source: "Mixmag International",
      quoteEs: "«El nivel subterráneo ofrece la experiencia de clubbing más depurada y moderna de Madrid: arquitectura brutalista, luces lineales y puro deep house.»",
      quoteEn: "«The subterranean floor delivers Madrid’s most refined contemporary clubbing experience: brutalist lines, linear LEDs, and pure deep house.»"
    },
    {
      source: "GQ Nightlife",
      quoteEs: "«Elegante, minimalista y sin artificios. Dos niveles perfectamente conectados para una noche completa e inolvidable.»",
      quoteEn: "«Sleek, minimalist, and effortlessly cool. Two seamlessly connected levels for an unforgettable night.»"
    }
  ]
};
