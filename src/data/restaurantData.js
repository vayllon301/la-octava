export const RESTAURANT_DATA = {
  name: "La Octava",
  tagline: {
    es: "Donde la alta cocina, el vino de colección y la noche encuentran su octava dimensión.",
    en: "Where haute gastronomy, vintage cellar wines, and the night meet their eighth dimension."
  },
  address: "Paseo de la Castellana 88, Madrid",
  phone: "+34 918 888 888",
  conciergeWhatsApp: "+34 688 888 888",
  email: "reservas@laoctava.com",
  membershipEmail: "circulo@laoctava.com",
  hours: {
    dining: "Martes a Domingo: 13:30 – 16:30 | 20:30 – 00:30",
    rooftop: "Martes a Domingo: 18:00 – 02:30",
    cellar: "Degustaciones privadas con previa reserva"
  },
  stats: [
    { value: "8", labelEs: "Pasos Gastronómicos", labelEn: "Gastronomic Steps" },
    { value: "850+", labelEs: "Grand Crus en Cava", labelEn: "Grand Crus in Cellar" },
    { value: "360°", labelEs: "Vistas en Rooftop", labelEn: "Skyline Views" },
    { value: "2026", labelEs: "Guía Michelin Selection", labelEn: "Michelin Guide Selection" }
  ],
  tastingMenu: [
    {
      id: "step-1",
      step: "Paso 01",
      nameEs: "Ostra Gillardeau N°2 en Escabeche de Flor de Sauco y Caviar Imperial",
      nameEn: "Gillardeau N°2 Oyster in Elderflower Escabeche with Imperial Caviar",
      descriptionEs: "Emulsión sedosa de mantequilla noisette ahumada, perlas de caviar Oscietra y aire de manzana verde ácida.",
      descriptionEn: "Silky smoked noisette butter emulsion, Oscietra caviar pearls, and green apple tart foam.",
      pairingEs: "Champagne Dom Pérignon Vintage 2015 Brut",
      pairingEn: "Champagne Dom Pérignon Vintage 2015 Brut",
      allergens: ["Moluscos", "Pescado", "Lácteos"]
    },
    {
      id: "step-2",
      step: "Paso 02",
      nameEs: "Carpaccio de Cigala Real de Tronco con Tuétano Asado y Yuzu",
      nameEn: "Royal Norway Lobster Carpaccio with Roasted Bone Marrow and Yuzu",
      descriptionEs: "Cigala macerada en aceite de oliva virgen extra arbequina, consomé clarificado de crustáceos y crujiente de alga nori.",
      descriptionEn: "Arbequina virgin olive oil macerated scampi, clarified shellfish consommé, and crispy nori wafer.",
      pairingEs: "Meursault Premier Cru 'Les Charmes' 2020, Domaine des Comtes Lafon",
      pairingEn: "Meursault Premier Cru 'Les Charmes' 2020, Domaine des Comtes Lafon",
      allergens: ["Crustáceos"]
    },
    {
      id: "step-3",
      step: "Paso 03",
      nameEs: "Raviolo Abierto de Trufa Negra Melanosporum y Ricotta de Bufala",
      nameEn: "Open Raviolo with Melanosporum Black Truffle & Buffalo Ricotta",
      descriptionEs: "Yema de huevo campero curada en soja añeja, velo de panceta ibérica de bellota 100% y caldo denso de hongos silvestres.",
      descriptionEn: "Free-range egg yolk cured in aged soy, 100% acorn-fed Iberian pork veil, and dense wild mushroom reduction.",
      pairingEs: "Barolo DOCG 'Cannubi' 2018, Damilano",
      pairingEn: "Barolo DOCG 'Cannubi' 2018, Damilano",
      allergens: ["Gluten", "Huevo", "Lácteos"]
    },
    {
      id: "step-4",
      step: "Paso 04",
      nameEs: "Rodaballo Salvaje a la Brasa de Roble con Hollandaise de Erizo de Mar",
      nameEn: "Oak-Grilled Wild Turbot with Sea Urchin Hollandaise",
      descriptionEs: "Piel crujiente glaseada con jugo de espinas reducidas, hinojo marino confitado y pil-pil emulsionado al momento.",
      descriptionEn: "Crisp glazed skin with roasted fish bone reduction, candied samphire, and freshly emulsified pil-pil.",
      pairingEs: "Chassagne-Montrachet 1er Cru 2021, Domaine Ramonet",
      pairingEn: "Chassagne-Montrachet 1er Cru 2021, Domaine Ramonet",
      allergens: ["Pescado", "Moluscos", "Lácteos", "Huevo"]
    },
    {
      id: "step-5",
      step: "Paso 05",
      nameEs: "Solomillo de Wagyu A5 Miyazaki con Demi-Glace de Oporto y Colmenillas",
      nameEn: "Miyazaki A5 Wagyu Tenderloin with Vintage Port Demi-Glace & Morels",
      descriptionEs: "Maduración controlada de 45 días, milhojas de patata trufada, chalotas caramelizadas al sarmiento y brotes tiernos.",
      descriptionEn: "45-day controlled dry-aging, truffled potato millefeuille, vine-smoked caramelized shallots, and micro herbs.",
      pairingEs: "Château Margaux 1er Grand Cru Classé 2012, Bordeaux",
      pairingEn: "Château Margaux 1er Grand Cru Classé 2012, Bordeaux",
      allergens: ["Lácteos", "Sulfitos"]
    },
    {
      id: "step-6",
      step: "Paso 06",
      nameEs: "Sorbete Limpiador de Shiso Rojo, Ruibarbo y Pomelo Rosa",
      nameEn: "Red Shiso, Rhubarb and Pink Grapefruit Palate Cleanser",
      descriptionEs: "Granizado de ginebra botánica infusionada, perlas de nitrógeno y crujiente de miel de romero.",
      descriptionEn: "Infused botanical gin slush, nitrogen citrus pearls, and rosemary honey crisp.",
      pairingEs: "Cocktail Efervescente de Champagne & Flor de Saúco",
      pairingEn: "Sparkling Elderflower & Champagne Elixir",
      allergens: []
    },
    {
      id: "step-7",
      step: "Paso 07",
      nameEs: "La Esfera de Oro: Chocolate Gran Cru Valrhona 70% & Haba Tonka",
      nameEn: "The Golden Sphere: 70% Grand Cru Valrhona Chocolate & Tonka Bean",
      descriptionEs: "Interior líquido de praliné de avellanas del Piamonte, crujiente de cacao especiado y helado de vainilla Bourbon de Madagascar.",
      descriptionEn: "Molten center of Piedmont hazelnut praline, spiced cocoa brittle, and Madagascar Bourbon vanilla gelato.",
      pairingEs: "Château d'Yquem Premier Cru Supérieur 2011, Sauternes",
      pairingEn: "Château d'Yquem Premier Cru Supérieur 2011, Sauternes",
      allergens: ["Lácteos", "Frutos de cáscara", "Gluten"]
    },
    {
      id: "step-8",
      step: "Paso 08",
      nameEs: "Petit Fours de la Octava Dimensión & Café de Finca Geisha",
      nameEn: "Eighth Dimension Mignardises & Geisha Estate Pour-Over",
      descriptionEs: "Macarons de violeta y frambuesa, bombón de oro de 24k con licor de orujo añejo y nube de cardamomo.",
      descriptionEn: "Violet and raspberry macarons, 24k gold leaf truffle with aged herbal liqueur, and cardamom cloud.",
      pairingEs: "Cognac Hennessy Paradis Rare / Armagnac Millésimé",
      pairingEn: "Cognac Hennessy Paradis Rare / Armagnac Millésimé",
      allergens: ["Lácteos", "Frutos de cáscara", "Huevo"]
    }
  ],
  aLaCarte: [
    {
      categoryEs: "Entrantes de Alta Costura",
      categoryEn: "Haute Couture Starters",
      items: [
        {
          nameEs: "Jamón Ibérico 100% Bellota 'Gran Selección 5 Jotas' cortado a mano",
          nameEn: "100% Acorn-fed Hand-Carved 5 Jotas Iberian Ham",
          descEs: "Acompañado de pan de cristal hojaldrado con tomate raf de Almería y aceite arbequina.",
          descEn: "Served with crystal bread, grated Almeria Raf tomatoes, and Arbequina olive oil.",
          priceEur: 42,
          priceUsd: 46
        },
        {
          nameEs: "Tartar de Atún Rojo Balfegó con Helado de Wasabi y Crujiente de Arroz",
          nameEn: "Balfegó Bluefin Tuna Tartare with Fresh Wasabi Gelato & Rice Crisp",
          descEs: "Lomo y ventresca aliñados con sésamo negro tostado y ponzu trufada.",
          descEn: "Loin and belly dressed with toasted black sesame and truffled ponzu.",
          priceEur: 38,
          priceUsd: 42
        },
        {
          nameEs: "Foie Gras Poêlé con Brioche Tostado y Gelee de Higos al Oporto",
          nameEn: "Pan-Seared Duck Foie Gras with Toasted Brioche & Port Fig Gelee",
          descEs: "Escamas de sal Maldon ahumada, reducción balsámica de 25 años y brotes de albahaca.",
          descEn: "Smoked Maldon salt flakes, 25-year balsamic reduction, and micro basil.",
          priceEur: 36,
          priceUsd: 40
        }
      ]
    },
    {
      categoryEs: "Pesca Salvaje & Cortes Nobles",
      categoryEn: "Wild Catch & Prime Cuts",
      items: [
        {
          nameEs: "Lubina Salvaje de Estero al Horno con Emulsión de Almejas de Carril",
          nameEn: "Baked Wild Sea Bass with Carril Clam Emulsion",
          descEs: "Acompañada de tirabeques salteados y crujiente de salicornia marina.",
          descEn: "Paired with sautéed snow peas and crispy samphire greens.",
          priceEur: 52,
          priceUsd: 58
        },
        {
          nameEs: "Chuletón de Rubia Gallega Maduración Dry Aged 60 Días al Carbón",
          nameEn: "Galician Blond Beef Prime Rib (60-Day Dry Aged) Charcoal Grilled",
          descEs: "Corte de 1kg para compartir, pimientos de piquillo confitados en leña y papas arrugadas.",
          descEn: "1kg prime cut to share, wood-confit piquillo peppers, and roasted canary baby potatoes.",
          priceEur: 110,
          priceUsd: 122
        },
        {
          nameEs: "Arroz Meloso de Bogavante Azul del Cantábrico y Azafrán de la Mancha",
          nameEn: "Creamy Cantabrian Blue Lobster Rice with Spanish La Mancha Saffron",
          descEs: "Fondo marino intenso cocinado en fuego lento de sarmiento para 2 personas.",
          descEn: "Intense seafood reduction cooked slowly over vine branches for 2 guests.",
          priceEur: 88,
          priceUsd: 96
        }
      ]
    }
  ],
  cocktails: [
    {
      name: "Octava Sinfonía N°8",
      ingredientsEs: "Mezcal Oaxaqueño añejo, licor de higo negro, cordial de moras silvestres, humo de romero y polvo de oro 24k.",
      ingredientsEn: "Aged Oaxacan Mezcal, black fig liqueur, wild blackberry cordial, rosemary smoke, and 24k edible gold dust.",
      notes: "Ahumado, complejo, aterciopelado",
      priceEur: 24,
      priceUsd: 26,
      badge: "Signature"
    },
    {
      name: "Bordeaux Velvet",
      ingredientsEs: "Cognac Rémy Martin 1738, reducción de vino tinto Grand Cru, licor marrasquino, perfume de trufa y cereza amarena.",
      ingredientsEn: "Rémy Martin 1738 Cognac, Grand Cru red wine reduction, Maraschino liqueur, truffle mist, and amarena cherry.",
      notes: "Sedoso, noble, profundo",
      priceEur: 26,
      priceUsd: 29,
      badge: "Private Reserve"
    },
    {
      name: "Celestial Skyline",
      ingredientsEs: "Gin Monkey 47 infusionada con lavanda, licor St-Germain de flor de saúco, jugo de yuzu fresco y espuma de Champagne brut.",
      ingredientsEn: "Lavender-infused Monkey 47 Gin, St-Germain elderflower liqueur, fresh yuzu juice, and Champagne brut foam.",
      notes: "Floral, cítrico, chispeante",
      priceEur: 22,
      priceUsd: 24,
      badge: "Rooftop Favorite"
    },
    {
      name: "Infierno & Canela",
      ingredientsEs: "Bourbon Woodford Reserve, vermut rojo reserva, bitter de chocolate ahumado y sopleteado con corteza de canela.",
      ingredientsEn: "Woodford Reserve Bourbon, red reserve vermouth, smoked chocolate bitters, and torched cinnamon bark.",
      notes: "Especiado, robusto, cálido",
      priceEur: 24,
      priceUsd: 26,
      badge: "Fire Pit Classic"
    }
  ],
  cellarHighlights: [
    {
      name: "Château Petrus, Pomerol",
      vintage: "2010",
      region: "Bordeaux, Francia",
      priceEur: 4200,
      tastingNotes: "Ciruelas negras maduras, trufa húmeda, violetas y taninos de seda eterna."
    },
    {
      name: "Domaine de la Romanée-Conti, La Tâche Grand Cru",
      vintage: "2015",
      region: "Bourgogne, Francia",
      priceEur: 5800,
      tastingNotes: "Pétalos de rosa marchita, especias exóticas, sotobosque y una persistencia hipnótica."
    },
    {
      name: "Vega Sicilia Único 'Reserva Especial'",
      vintage: "Edición 2024",
      region: "Ribera del Duero, España",
      priceEur: 890,
      tastingNotes: "Tabaco noble, cedro, fruta negra compotada y una acidez vibrante aristocrática."
    },
    {
      name: "Krug Clos d'Ambonnay Blanc de Noirs",
      vintage: "2002",
      region: "Champagne, Francia",
      priceEur: 3400,
      tastingNotes: "Brioche tostado, miel de castaño, avellanas caramelizadas y burbuja minúscula."
    }
  ],
  spaces: [
    {
      id: "salon-principal",
      titleEs: "El Salón Abovedado",
      titleEn: "The Grand Vaulted Hall",
      subtitleEs: "Arquitectura gótica modernizada, terciopelo burdeos y luminarias de ámbar",
      subtitleEn: "Modernized vaulted arches, merlot velvet banquettes, and amber chandeliers",
      capacity: "60 comensales",
      vibe: "Intimista, glamuroso, orquestado",
      image: "/images/hero.jpg",
      detailsEs: "Mesas de mármol negro veteado en oro, cubertería de plata maciza y acústica tratada para conversaciones secretas."
    },
    {
      id: "cava-subterranea",
      titleEs: "La Cava Subterránea & Bóveda Secreta",
      titleEn: "The Subterranean Vault & Grand Cellar",
      subtitleEs: "Más de 850 referencias históricas custodiadas a 14°C constantes",
      subtitleEn: "Over 850 historic vintage labels kept at constant 14°C perfection",
      capacity: "14 invitados exclusivos",
      vibe: "Místico, exclusivo, aromático",
      image: "/images/cellar.jpg",
      detailsEs: "Paredes de piedra centenaria, catas guiadas por nuestro Head Sommelier y acceso a añadas imposibles de encontrar."
    },
    {
      id: "rooftop-skyline",
      titleEs: "Terraza Rooftop & Fogatas Celestiales",
      titleEn: "The Skyline Rooftop & Celestial Fire Pits",
      subtitleEs: "Cócteles de autor bajo las estrellas con vistas panorámicas 360°",
      subtitleEn: "Signature craft cocktails under the stars with 360° city skyline views",
      capacity: "80 personas",
      vibe: "Cosmopolita, vibrante, hipnótico",
      image: "/images/rooftop.jpg",
      detailsEs: "Chimeneas de cristal con fuego vivo, sofás de terciopelo exterior climatizados y selectos DJ sets en directo."
    },
    {
      id: "atelier-culinario",
      titleEs: "L'Atelier Gastronomique",
      titleEn: "L'Atelier Gastronomique",
      subtitleEs: "La experiencia de 8 pasos donde el fuego y el arte convergen",
      subtitleEn: "The 8-step journey where culinary alchemy and raw passion meet",
      capacity: "Mesa del Chef: 8 personas",
      vibe: "Vanguardista, teatral, sensorial",
      image: "/images/culinary.jpg",
      detailsEs: "Interactúa directamente con nuestro equipo de cocina viendo el emplatado milimétrico en vajillas de diseño único."
    }
  ],
  memberships: [
    {
      id: "burgundy",
      nameEs: "Membresía Burdeos",
      nameEn: "Bordeaux Membership",
      priceYear: "3.500 € / año",
      benefitsEs: [
        "Acceso prioritario a reservas en Salón Principal y Rooftop",
        "Mesa garantizada con 24h de antelación",
        "Invitación a 4 catas privadas anuales con bodegueros invitados",
        "Copa de bienvenida Champagne Grand Cru en cada visita",
        "Acceso a la carta secreta de destilados y cócteles"
      ],
      benefitsEn: [
        "Priority reservation booking for Grand Hall & Rooftop",
        "Guaranteed table with 24h notice",
        "Invitations to 4 private annual tastings with guest winemakers",
        "Complimentary Grand Cru Champagne toast upon arrival",
        "Access to secret cellar reserve spirits menu"
      ],
      recommended: false
    },
    {
      id: "amber-vip",
      nameEs: "Círculo Octava Imperial",
      nameEn: "Imperial Eighth Circle",
      priceYear: "7.800 € / año",
      benefitsEs: [
        "Acceso ilimitado al Salón Privado VIII y Rooftop VIP",
        "Mesa del Chef reservada automáticamente sin lista de espera",
        "Casillero personal climatizado para 24 botellas en nuestra Cava",
        "Servicio de chófer privado de cortesía (hasta 20 km)",
        "Degustaciones exclusivas 'En Primeur' en Burdeos y Borgoña",
        "Conserje gastronómico 24/7 para eventos personalizados"
      ],
      benefitsEn: [
        "Unlimited access to Private Salon VIII and VIP Rooftop",
        "Chef's Table priority booking bypassing waiting lists",
        "Personal temperature-controlled private locker for 24 bottles",
        "Complimentary luxury chauffeur service (up to 20 km)",
        "Exclusive 'En Primeur' private barrel tastings in France & Spain",
        "24/7 dedicated gastronomy concierge for bespoke events"
      ],
      recommended: true
    },
    {
      id: "cellar-patron",
      nameEs: "Patrón de Gran Cava",
      nameEn: "Grand Cellar Patron",
      priceYear: "14.000 € / año",
      benefitsEs: [
        "Todos los beneficios del Círculo Imperial incluidos",
        "Bóveda privada en la Cava subterránea para cenas de hasta 12 personas",
        "Acceso a las 10 botellas más raras y limitadas del mundo",
        "Cena privada anual cocinada por el Chef Ejecutivo en tu residencia",
        "Membresía transferible a familiares directos o ejecutivos clave"
      ],
      benefitsEn: [
        "All Imperial Circle benefits included",
        "Private historic vault reservation for up to 12 guests at no fee",
        "Access to the top 10 rarest vintage allocations worldwide",
        "Annual private dinner prepared by our Executive Chef at your residence",
        "Membership transferable to immediate family or C-suite executives"
      ],
      recommended: false
    }
  ],
  pressQuotes: [
    {
      source: "Guía Michelin 2026",
      quoteEs: "«La Octava redefine la elegancia nocturna madrileña: un templo de precisión culinaria, una cava de magnitud asombrosa y una atmósfera insuperable.»",
      quoteEn: "«La Octava redefines nighttime luxury: culinary precision, an awe-inspiring grand cellar, and an intoxicating atmosphere.»"
    },
    {
      source: "World's 50 Best Discovery",
      quoteEs: "«Un viaje multisensorial donde cada plato del menú de 8 pasos está armonizado con una precisión armónica digna de las mejores casas europeas.»",
      quoteEn: "«A multisensory triumph where each step of the 8-course symphony is paired with unmatched European excellence.»"
    },
    {
      source: "Condé Nast Traveler",
      quoteEs: "«El Rooftop de La Octava ofrece el cóctel más codiciado de la capital frente a chimeneas de cristal y un horizonte iluminado incomparable.»",
      quoteEn: "«La Octava's Rooftop offers the most coveted cocktail experience against flickering crystal fire pits and illuminated skies.»"
    },
    {
      source: "Wine Spectator Grand Award",
      quoteEs: "«Una de las colecciones vinícolas subterráneas más extraordinarias de la Península Ibérica, con añadas míticas perfectamente conservadas.»",
      quoteEn: "«One of the most extraordinary subterranean wine collections in Southern Europe, housing legendary vintages.»"
    }
  ]
};
