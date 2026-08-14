export const RESTAURANT_DATA = {
  name: "La Octava",
  tagline: {
    es: "Jazz & Piano Bar arriba. House Club subterráneo abajo.",
    en: "Jazz & Piano Bar above. Subterranean House Club below."
  },
  address: "Paseo de la Castellana 88, Madrid",
  phone: "+34 918 888 888",
  conciergeWhatsApp: "+34 688 888 888",
  email: "contacto@laoctava.com",
  membershipEmail: "llavenegra@laoctava.com",
  hours: {
    pianoBar: "Martes a Domingo: 19:00 – 02:00 (Conciertos en directo desde las 20:30)",
    houseClub: "Jueves a Domingo: 23:30 – 06:00 (Residentes & DJs Internacionales)",
    soundcheck: "Acceso con reserva de mesa o lista de puerta preferente"
  },
  stats: [
    { value: "2", labelEs: "Niveles Sensoriales", labelEn: "Sensory Levels" },
    { value: "Steinway", labelEs: "Piano de Gran Cola D-274", labelEn: "Grand Concert Piano" },
    { value: "Funktion-1", labelEs: "Sistema Acústico Custom", labelEn: "Custom Sound System" },
    { value: "06:00", labelEs: "Cierre House Sub-Vault", labelEn: "Sub-Vault Closing" }
  ],
  levels: [
    {
      id: "piano-bar",
      levelNumber: "01",
      nameEs: "El Piano Bar & Velvet Jazz Lounge",
      nameEn: "The Piano Bar & Velvet Jazz Lounge",
      taglineEs: "Acústica pura, terciopelo burdeos y coctelería de autor al calor del piano",
      taglineEn: "Pure acoustic intimacy, merlot velvet, and artisan cocktails around the grand piano",
      image: "/images/piano.jpg",
      vibe: "Intimista, sutil, sofisticado, directo",
      hours: "19:00 – 02:00",
      sound: "Steinway D-274 Grand Piano, Saxofón, Contrabajo & Voces Jazz en vivo",
      dressCode: "Smart Elegant / Night Chic"
    },
    {
      id: "house-club",
      levelNumber: "-01",
      nameEs: "El Sótano / Sub-Vault House Club",
      nameEn: "The Basement / Sub-Vault House Club",
      taglineEs: "Bóvedas de ladrillo centenario, niebla roja y los beats más selectos de Deep & Melodic House",
      taglineEn: "Historic brick vaults, crimson laser haze, and cutting-edge Deep & Melodic House",
      image: "/images/club.jpg",
      vibe: "Electrizante, hipnótico, underground, libre",
      hours: "23:30 – 06:00",
      sound: "Funktion-One Resolution 4 & Vinyl Turntables Technics 1210 MK7",
      dressCode: "Underground Chic / Black Attire"
    }
  ],
  weeklyLineup: [
    {
      dayEs: "Martes",
      dayEn: "Tuesday",
      jazzActEs: "Blue Note Piano Trio (Standards & Hard Bop)",
      jazzActEn: "Blue Note Piano Trio (Standards & Hard Bop)",
      jazzTime: "20:30 – 23:30",
      clubActEs: "Vinyl Only: Deep House & Rare Grooves",
      clubActEn: "Vinyl Only: Deep House & Rare Grooves",
      clubTime: "23:30 – 03:30",
      curator: "Resident Trio + DJ Marcos V"
    },
    {
      dayEs: "Miércoles",
      dayEn: "Wednesday",
      jazzActEs: "Nocturno Bossa & Jazz Vocal Sessions",
      jazzActEn: "Midnight Bossa & Vocal Jazz Sessions",
      jazzTime: "21:00 – 00:00",
      clubActEs: "Organic House & Afro Rhythms",
      clubActEn: "Organic House & Afro Rhythms",
      clubTime: "23:30 – 04:00",
      curator: "Sofi & The Quartet + Arkham Sound"
    },
    {
      dayEs: "Jueves",
      dayEn: "Thursday",
      jazzActEs: "The Modern Jazz Quartet Live (Bebop & Fusion)",
      jazzActEn: "The Modern Jazz Quartet Live (Bebop & Fusion)",
      jazzTime: "21:00 – 00:30",
      clubActEs: "Minimal Deep Tech & Melodic Journey",
      clubActEn: "Minimal Deep Tech & Melodic Journey",
      clubTime: "00:00 – 05:30",
      curator: "Maestro David Sanz + Guest Berlin Resident"
    },
    {
      dayEs: "Viernes",
      dayEn: "Friday",
      jazzActEs: "Grand Piano Duel & Late Night Brass Ensemble",
      jazzActEn: "Grand Piano Duel & Late Night Brass Ensemble",
      jazzTime: "21:30 – 01:00",
      clubActEs: "Sub-Vault Club Night: Pure Deep House & Melodic Techno",
      clubActEn: "Sub-Vault Club Night: Pure Deep House & Melodic Techno",
      clubTime: "00:00 – 06:00",
      curator: "La Octava All-Stars + International Guest DJ"
    },
    {
      dayEs: "Sábado",
      dayEn: "Saturday",
      jazzActEs: "Sultry Jazz Diva & Midnight Piano Improvisations",
      jazzActEn: "Sultry Jazz Diva & Midnight Piano Improvisations",
      jazzTime: "21:30 – 01:30",
      clubActEs: "The Eighth Frequency: House Culture All Night Long",
      clubActEn: "The Eighth Frequency: House Culture All Night Long",
      clubTime: "00:00 – 06:00",
      curator: "Elena Vance (Vocal) + resident DJ collective"
    },
    {
      dayEs: "Domingo",
      dayEn: "Sunday",
      jazzActEs: "Sunday Soul & Acoustic Piano Jam Session",
      jazzActEn: "Sunday Soul & Acoustic Piano Jam Session",
      jazzTime: "20:00 – 23:30",
      clubActEs: "Sundown to Sub-Vault: Balearic & Melodic Sunset Afterhours",
      clubActEn: "Sundown to Sub-Vault: Balearic & Melodic Sunset Afterhours",
      clubTime: "23:30 – 04:00",
      curator: "Guest Jazz Collective + DJ Oliver K"
    }
  ],
  cocktails: [
    {
      name: "The Steinway 88",
      category: "Jazz Bar Signature",
      ingredientsEs: "Bourbon Woodford Reserve infusionado con vainilla de Madagascar, reducción de higos negros, bitter de chocolate amargo y humo de madera de roble.",
      ingredientsEn: "Vanilla-infused Woodford Reserve Bourbon, black fig reduction, dark chocolate bitters, and toasted oak smoke.",
      notes: "Cálido, amaderado, aterciopelado",
      priceEur: 20,
      priceUsd: 22,
      badge: "Piano Bar Classic"
    },
    {
      name: "Round Midnight Velvet",
      category: "Jazz Bar Signature",
      ingredientsEs: "Cognac Pierre Ferrand, licor marrasquino, reducción de vino de Oporto reserva, perfume de trufa y cereza amarena silvestre.",
      ingredientsEn: "Pierre Ferrand Cognac, Maraschino liqueur, Port wine reduction, truffle mist, and wild amarena cherry.",
      notes: "Complejo, noble, sedoso",
      priceEur: 22,
      priceUsd: 24,
      badge: "Late Night Jazz"
    },
    {
      name: "Sub-Bass Paloma",
      category: "Sub-Vault House",
      ingredientsEs: "Mezcal Oaxaqueño artesanal, cordial de pomelo rosa sopleteado con sal volcánica negra, licor de chile ancho y soda de romero.",
      ingredientsEn: "Artisanal Oaxacan Mezcal, torched pink grapefruit cordial with black volcanic salt, ancho chile liqueur, and rosemary soda.",
      notes: "Ahumado, vibrante, electrizante",
      priceEur: 19,
      priceUsd: 21,
      badge: "House Club Icon"
    },
    {
      name: "128 BPM Nitro Espresso",
      category: "Sub-Vault House",
      ingredientsEs: "Vodka Grey Goose, licor de café Kahlúa reserva especial, café espresso Geisha recién extraído y espuma densa de avellana nitro.",
      ingredientsEn: "Grey Goose Vodka, special reserve coffee liqueur, fresh pulled Geisha espresso shot, and dense nitro hazelnut foam.",
      notes: "Energético, cremoso, profundo",
      priceEur: 19,
      priceUsd: 21,
      badge: "Energy Signature"
    }
  ],
  foodBites: [
    {
      nameEs: "Ostras Gillardeau N°2 con Mignonette de Champagne",
      nameEn: "Gillardeau N°2 Oysters with Champagne Mignonette",
      descEs: "Servidas sobre hielo picado con emulsión cítrica de yuzu y perlas de caviar Oscietra.",
      descEn: "Served over crushed ice with citrus yuzu emulsion and Oscietra caviar pearls.",
      priceEur: 36,
      priceUsd: 40
    },
    {
      nameEs: "Jamón Ibérico 100% Bellota '5 Jotas' & Pan de Cristal",
      nameEn: "100% Acorn-fed 5 Jotas Iberian Ham & Crystal Bread",
      descEs: "Cortado a cuchillo al momento, acompañado de tomate raf emulsionado y aceite arbequina.",
      descEn: "Freshly hand-carved, served with Raf tomato emulsion and virgin olive oil.",
      priceEur: 38,
      priceUsd: 42
    },
    {
      nameEs: "Brioche de Steak Tartar de Wagyu con Yema Curada y Trufa",
      nameEn: "Wagyu Steak Tartare Brioche with Cured Yolk & Black Truffle",
      descEs: "Mantequilla tostada francesa, mostaza antigua, alcaparras crujientes y láminas de trufa negra.",
      descEn: "Toasted French brioche, aged mustard, crispy capers, and shaved black truffle.",
      priceEur: 28,
      priceUsd: 31
    },
    {
      nameEs: "Sandwich de Queso Comté 24 Meses, Pastrami Artesano & Trufa",
      nameEn: "24-Month Comté, Artisan Pastrami & Truffle Toast",
      descEs: "Pan brioche crujiente, mantequilla de hierbas y mostaza ahumada (servido toda la noche).",
      descEn: "Crisp toasted brioche, herb butter, and smoked mustard (available all night).",
      priceEur: 24,
      priceUsd: 26
    }
  ],
  memberships: [
    {
      id: "velvet-guest",
      nameEs: "Acceso Preferente Jazz & Club",
      nameEn: "Preferred Jazz & Club Pass",
      priceYear: "Acceso con Reserva / Free Guestlist",
      benefitsEs: [
        "Reserva de mesa frente al Steinway Grand Piano",
        "Acceso directo sin cola a la Cripta House Club a partir de las 23:30",
        "Cóctel de cortesía de bienvenida en el Piano Bar",
        "Notificaciones anticipadas del cartel de artistas de la semana"
      ],
      benefitsEn: [
        "Table reservation by the Steinway Grand Piano",
        "Direct skip-the-line entry to the Sub-Vault House Club after 23:30",
        "Complimentary welcome signature cocktail at the Piano Bar",
        "Early weekly artist lineup announcements"
      ],
      recommended: false
    },
    {
      id: "black-key",
      nameEs: "Membresía 'Llave Negra' (Black Key)",
      nameEn: "'Black Key' Private Society",
      priceYear: "2.400 € / año",
      benefitsEs: [
        "Acceso VIP ilimitado y prioritario para ti y 3 invitados a ambos niveles",
        "Mesa reservada perpetua en el Piano Bar y Cabina VIP en el House Club",
        "Casillero privado para tus botellas de licor y vino en la cava del sótano",
        "Acceso a sesiones secretas de piano a puerta cerrada y Afterhours VIP",
        "Línea roja directa de WhatsApp con el Director de Sala"
      ],
      benefitsEn: [
        "Unlimited VIP priority entry for member + 3 guests across both floors",
        "Perpetual table hold at the Piano Bar and VIP Booth at Sub-Vault Club",
        "Personal private spirit & wine locker in the underground vault",
        "Invitation to secret after-hours piano jam sessions & VIP backrooms",
        "Direct 24/7 WhatsApp concierge hotline with Night Manager"
      ],
      recommended: true
    },
    {
      id: "patron-d-or",
      nameEs: "Patrón de Oro & Sound Circle",
      nameEn: "Gold Patron & Sound Circle",
      priceYear: "5.800 € / año",
      benefitsEs: [
        "Todos los privilegios de la Llave Negra incluidos",
        "Uso exclusivo del reservado privado del Sótano para fiestas privadas",
        "Mesa del Steinway asignada en todos los conciertos de jazz del año",
        "Cava privada con añadas exclusivas de Champagne Dom Pérignon & Krug",
        "Servicio de chófer privado de regreso en Madrid (hasta 25 km)"
      ],
      benefitsEn: [
        "All Black Key privileges included",
        "Exclusive private hosting rights for the Sub-Vault for private events",
        "Prime Steinway front-row table at every live jazz concert",
        "Complimentary magnum allocation of Dom Pérignon & Krug Champagne",
        "Complimentary luxury chauffeur service home within Madrid (up to 25 km)"
      ],
      recommended: false
    }
  ],
  pressQuotes: [
    {
      source: "Rolling Stone Culture & Nightlife",
      quoteEs: "«La Octava ha logrado el santo grial de la noche: comenzar con un solo de piano y un cóctel de terciopelo arriba, para terminar bailando el house más exquisito en su bóveda subterránea.»",
      quoteEn: "«La Octava achieved nightlife perfection: starting with an intimate grand piano solo upstairs, before sinking into hypnotic deep house below.»"
    },
    {
      source: "DownBeat Magazine",
      quoteEs: "«El Steinway D-274 de La Octava suena con una claridad acústica sobrecogedora. Es el refugio de jazz más sofisticado de la capital.»",
      quoteEn: "«The Steinway D-274 at La Octava resonates with breathtaking acoustic purity. Madrid's premier modern jazz sanctuary.»"
    },
    {
      source: "Mixmag Underground",
      quoteEs: "«El Sub-Vault de La Octava tiene ese espíritu berlinés y londinense que tanto faltaba: acústica Funktion-One demoledora, ladrillo visto y cero pretensiones, solo puro house.»",
      quoteEn: "«The Sub-Vault at La Octava channels London and Berlin underground energy: pristine Funktion-One sound, raw brick arches, and pure house music.»"
    },
    {
      source: "Condé Nast Traveler",
      quoteEs: "«Dos frecuencias, un solo edificio. La transición del jazz clásico a los ritmos electrónicos en La Octava es la experiencia nocturna definitiva.»",
      quoteEn: "«Two frequencies under one roof. The seamless journey from classic jazz to underground electronic grooves is Madrid's defining night.»"
    }
  ]
};
