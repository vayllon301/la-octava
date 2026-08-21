import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Nav
    navPianoBar: 'Piano Bar',
    navHouseClub: 'House Club',
    navNights: 'Nights',
    navVisit: 'Visit',
    navFindUs: 'Find us',
    navAriaHome: 'La Octava — home',
    navAriaSections: 'Sections',

    // Hero
    heroEyebrow: 'Sant Cugat del Vallès · Barcelona',
    heroSubtitle: 'Piano Bar & House Club',
    heroUpstairs: 'Upstairs · Piano Bar',
    heroDownstairs: 'Downstairs · House Club',
    heroScrollAriaLabel: 'Scroll to the floors',

    // Floors
    floorsEyebrow: 'Two floors, one night',
    floorsTitle1: 'Piano upstairs.',
    floorsTitle2: 'House downstairs.',

    // Nights
    nightsEyebrow: 'Open three nights',
    nightsTitle: 'Thursday to Saturday',
    nightsNote: 'Tables are limited — worth asking ahead.',
    nightNames: ['Thursday', 'Friday', 'Saturday'],

    // Visit
    visitEyebrow: 'Visit',
    visitOpenMaps: 'Open in Maps',
    visitFacts: [
      ['Nights', 'Thu · Fri · Sat'],
      ['Getting here', '8 min from FGC Sant Cugat · parking adjacent'],
      ['Dress', 'Worth dressing up for'],
    ],

    // MiniMap
    miniMapAriaLabel: 'Open La Octava at Avinguda del Pla del Vinyet 57 in Google Maps',
    miniMapOpenMaps: 'Open in Maps',

    // Footer
    footerInstagramAriaLabel: 'La Octava on Instagram (@laoctavasantcugat)',

    // Site data (from site.js)
    tagline: 'An evening worth dressing up for.',
    summary: 'Piano Bar upstairs · House Club below',

    // Floors data
    floorPianoLevel: 'Upper floor',
    floorPianoName: 'Piano Bar',
    floorPianoKicker: 'Dinner · Piano · Live music',
    floorPianoDesc: 'Low light, a proper bar, and a piano that never quite stops.',
    floorPianoDetails: [
      ['Bar', 'From 8:30 pm'],
      ['Live music', 'From 10:00 pm'],
      ['Dress', 'Smart'],
    ],
    floorHouseLevel: 'Lower floor',
    floorHouseName: 'House Club',
    floorHouseKicker: 'House · Late · Downstairs',
    floorHouseDesc: 'A darker room, a serious sound system, house until late.',
    floorHouseDetails: [
      ['Doors', 'From 12:00 am'],
      ['Sound', 'House & guests'],
      ['Close', 'Late'],
    ],
  },
  es: {
    // Nav
    navPianoBar: 'Piano Bar',
    navHouseClub: 'House Club',
    navNights: 'Noches',
    navVisit: 'Visítanos',
    navFindUs: 'Encuéntranos',
    navAriaHome: 'La Octava — inicio',
    navAriaSections: 'Secciones',

    // Hero
    heroEyebrow: 'Sant Cugat del Vallès · Barcelona',
    heroSubtitle: 'Piano Bar & House Club',
    heroUpstairs: 'Arriba · Piano Bar',
    heroDownstairs: 'Abajo · House Club',
    heroScrollAriaLabel: 'Ir a las plantas',

    // Floors
    floorsEyebrow: 'Dos plantas, una noche',
    floorsTitle1: 'Piano arriba.',
    floorsTitle2: 'House abajo.',

    // Nights
    nightsEyebrow: 'Abrimos tres noches',
    nightsTitle: 'De jueves a sábado',
    nightsNote: 'Las mesas son limitadas — merece la pena reservar.',
    nightNames: ['Jueves', 'Viernes', 'Sábado'],

    // Visit
    visitEyebrow: 'Visítanos',
    visitOpenMaps: 'Abrir en Maps',
    visitFacts: [
      ['Noches', 'Jue · Vie · Sáb'],
      ['Cómo llegar', 'A 8 min del FGC Sant Cugat · parking contiguo'],
      ['Vestimenta', 'Merece vestirse para la ocasión'],
    ],

    // MiniMap
    miniMapAriaLabel: 'Abrir La Octava en Avinguda del Pla del Vinyet 57 en Google Maps',
    miniMapOpenMaps: 'Abrir en Maps',

    // Footer
    footerInstagramAriaLabel: 'La Octava en Instagram (@laoctavasantcugat)',

    // Site data
    tagline: 'Una velada que merece vestirse para la ocasión.',
    summary: 'Piano Bar arriba · House Club abajo',

    // Floors data
    floorPianoLevel: 'Planta superior',
    floorPianoName: 'Piano Bar',
    floorPianoKicker: 'Cena · Piano · Música en vivo',
    floorPianoDesc: 'Luz baja, un bar como debe ser, y un piano que nunca termina de callar.',
    floorPianoDetails: [
      ['Bar', 'Desde las 20:30'],
      ['Música en vivo', 'Desde las 22:00'],
      ['Vestimenta', 'Elegante'],
    ],
    floorHouseLevel: 'Planta inferior',
    floorHouseName: 'House Club',
    floorHouseKicker: 'House · Hasta tarde · Abajo',
    floorHouseDesc: 'Una sala más oscura, un sonido serio, house hasta tarde.',
    floorHouseDetails: [
      ['Apertura', 'Desde las 00:00'],
      ['Sonido', 'House e invitados'],
      ['Cierre', 'Tarde'],
    ],
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('es');
  const toggleLang = () => setLang((l) => (l === 'en' ? 'es' : 'en'));
  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const { lang, toggleLang } = useContext(I18nContext);
  return { lang, toggleLang };
}

export function useT() {
  const { t } = useContext(I18nContext);
  return t;
}
