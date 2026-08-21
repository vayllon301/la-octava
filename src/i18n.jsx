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
    nightsNote: 'Dinner and piano from the early evening upstairs; the club opens below at midnight. Tables are limited — worth asking ahead.',
    nightNames: ['Thursday', 'Friday', 'Saturday'],

    // Visit
    visitEyebrow: 'Visit',
    visitNote1: '15 minutes from Barcelona via C-16 Túnels de Vallvidrera.',
    visitNote2: '8-minute walk from FGC Sant Cugat · Underground parking adjacent.',
    visitOpenMaps: 'Open in Maps',
    visitNightsLabel: 'Nights',
    visitUpstairsLabel: 'Upstairs',
    visitUpstairsValue: 'Piano Bar — dinner, piano & live music',
    visitDownstairsLabel: 'Downstairs',
    visitDownstairsValue: 'House Club — house music, late',
    visitDressLabel: 'Dress',
    visitDressValue: 'An evening worth dressing up for',

    // MiniMap
    miniMapAriaLabel: 'Open La Octava at Avinguda del Pla del Vinyet 57 in Google Maps',
    miniMapOpenMaps: 'Open in Maps',

    // Footer
    footerInstagramAriaLabel: 'La Octava on Instagram (@laoctavasantcugat)',

    // Site data (from site.js)
    tagline: 'An evening worth dressing up for.',
    summary: 'Dinner, piano & live music.',

    // Floors data
    floorPianoLevel: 'Upper floor',
    floorPianoName: 'Piano Bar',
    floorPianoKicker: 'Dinner · Piano · Live music',
    floorPianoDesc: 'The evening opens upstairs. A proper bar under low light — something to eat if you want it, a piano that never quite stops, and live sets that carry the room from the first drink to the last.',
    floorPianoDetails: [
      ['Bar', 'From 8:30 pm'],
      ['Live music', 'From 10:00 pm'],
      ['Dress', 'Smart · Come dressed up'],
    ],
    floorHouseLevel: 'Lower floor',
    floorHouseName: 'House Club',
    floorHouseKicker: 'House · Late · Downstairs',
    floorHouseDesc: 'Then the night moves down a floor. A darker room, a proper sound system, and resident selectors playing house until the small hours.',
    floorHouseDetails: [
      ['Doors', 'From 12:00 am'],
      ['Sound', 'House & selected guests'],
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
    nightsNote: 'Cena y piano desde primera hora de la tarde en la planta de arriba; el club abre abajo a medianoche. Las mesas son limitadas — merece la pena reservar.',
    nightNames: ['Jueves', 'Viernes', 'Sábado'],

    // Visit
    visitEyebrow: 'Visítanos',
    visitNote1: 'A 15 minutos de Barcelona por la C-16 Túnels de Vallvidrera.',
    visitNote2: 'A 8 minutos andando del FGC Sant Cugat · Parking subterráneo contiguo.',
    visitOpenMaps: 'Abrir en Maps',
    visitNightsLabel: 'Noches',
    visitUpstairsLabel: 'Arriba',
    visitUpstairsValue: 'Piano Bar — cena, piano y música en vivo',
    visitDownstairsLabel: 'Abajo',
    visitDownstairsValue: 'House Club — house music, hasta tarde',
    visitDressLabel: 'Vestimenta',
    visitDressValue: 'Una velada que merece vestirse para la ocasión',

    // MiniMap
    miniMapAriaLabel: 'Abrir La Octava en Avinguda del Pla del Vinyet 57 en Google Maps',
    miniMapOpenMaps: 'Abrir en Maps',

    // Footer
    footerInstagramAriaLabel: 'La Octava en Instagram (@laoctavasantcugat)',

    // Site data
    tagline: 'Una velada que merece vestirse para la ocasión.',
    summary: 'Cena, piano y música en vivo.',

    // Floors data
    floorPianoLevel: 'Planta superior',
    floorPianoName: 'Piano Bar',
    floorPianoKicker: 'Cena · Piano · Música en vivo',
    floorPianoDesc: 'La noche empieza arriba. Un bar en penumbra — algo para picar si apetece, un piano que nunca termina de callar, y sesiones en directo que llevan la sala del primer trago al último.',
    floorPianoDetails: [
      ['Bar', 'Desde las 20:30'],
      ['Música en vivo', 'Desde las 22:00'],
      ['Vestimenta', 'Elegante · Ven arreglado'],
    ],
    floorHouseLevel: 'Planta inferior',
    floorHouseName: 'House Club',
    floorHouseKicker: 'House · Hasta tarde · Abajo',
    floorHouseDesc: 'Entonces la noche baja una planta. Una sala más oscura, un sistema de sonido como debe ser, y selectores residentes pinchando house hasta altas horas.',
    floorHouseDetails: [
      ['Apertura', 'Desde las 00:00'],
      ['Sonido', 'House e invitados selectos'],
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
