import React, { useState } from 'react';
import { Wine, Sparkles, Check, Flame, Heart, Briefcase, Compass, ArrowRight } from 'lucide-react';

export default function SommelierExperience({ lang, onOpenReservation }) {
  const [selectedVibe, setSelectedVibe] = useState('romance');
  const [selectedProfile, setSelectedProfile] = useState('bourgogne');

  const vibes = [
    { id: 'romance', labelEs: 'Velada Romántica & Sensual', labelEn: 'Romantic & Sensual Evening', icon: <Heart size={18} /> },
    { id: 'celebration', labelEs: 'Gran Celebración & Festín', labelEn: 'Grand Celebration & Feast', icon: <Flame size={18} /> },
    { id: 'business', labelEs: 'Negocios & Discreción VIP', labelEn: 'Business & VIP Discretion', icon: <Briefcase size={18} /> },
    { id: 'connoisseur', labelEs: 'Connoisseur & Enófilo Experto', labelEn: 'Wine Connoisseur & Explorer', icon: <Compass size={18} /> }
  ];

  const profiles = [
    { id: 'bourgogne', nameEs: 'Borgoña & Sutileza Mineral', nameEn: 'Burgundy & Mineral Finesse' },
    { id: 'bordeaux', nameEs: 'Burdeos & Potencia Estructurada', nameEn: 'Bordeaux & Structured Power' },
    { id: 'champagne', nameEs: 'Champagne Vintage & Alta Tensión', nameEn: 'Vintage Champagne & High Tension' },
    { id: 'spain-icons', nameEs: 'Iconos Españoles & Leyendas de Ribera', nameEn: 'Spanish Icons & Legendary Ribera' }
  ];

  // Dynamic recommendations based on selections
  const getFlightRecommendation = () => {
    if (selectedProfile === 'bourgogne') {
      return {
        titleEs: "Vuelo Sommelier 'Elegancia y Seda de la Côte d'Or'",
        titleEn: "Sommelier Flight 'Côte d'Or Silk & Finesse'",
        decant: "Copas Borgoña Grand Cru a 16°C",
        wines: [
          {
            step: "Copa I",
            name: "Domaine Leflaive Puligny-Montrachet 2021",
            noteEs: "Piedra de fusil, cítricos confitados y una mineralidad eléctrica.",
            noteEn: "Flint stone, candied citrus, and an electric mineral backbone."
          },
          {
            step: "Copa II",
            name: "Domaine Dujac Morey-Saint-Denis 1er Cru 2019",
            noteEs: "Cereza silvestre, violetas frescas, especias orientales y textura aterciopelada.",
            noteEn: "Wild cherry, fresh violets, oriental spices, and velvety texture."
          },
          {
            step: "Copa III",
            name: "Chambolle-Musigny 1er Cru 'Les Amoureuses' 2017",
            noteEs: "Pura poesía etérea, pétalos secos, trufa blanca y final infinito.",
            noteEn: "Pure ethereal poetry, dried petals, white truffle, and infinite finish."
          }
        ]
      };
    } else if (selectedProfile === 'bordeaux') {
      return {
        titleEs: "Vuelo Sommelier 'Poder Aristocrático de Médoc & Pomerol'",
        titleEn: "Sommelier Flight 'Aristocratic Médoc & Pomerol'",
        decant: "Decantado en cristal Zalto 45 min antes a 17°C",
        wines: [
          {
            step: "Copa I",
            name: "Pavillon Blanc du Château Margaux 2020",
            noteEs: "Flores blancas, pomelo y una opulencia fresca deslumbrante.",
            noteEn: "White blossom, grapefruit, and stunning fresh opulence."
          },
          {
            step: "Copa II",
            name: "Château Lynch-Bages Grand Cru Classé 2014",
            noteEs: "Grosella negra, caja de puros, grafito y taninos nobles.",
            noteEn: "Blackcurrant, cigar box, graphite, and noble tannins."
          },
          {
            step: "Copa III",
            name: "Château Palmer Margaux 2010",
            noteEs: "Ciruelas oscuras, cacao amargo, trufa negra y persistencia eterna.",
            noteEn: "Dark plums, bitter cocoa, black truffle, and eternal length."
          }
        ]
      };
    } else if (selectedProfile === 'champagne') {
      return {
        titleEs: "Vuelo Sommelier 'Efervescencia Imperial de Reims & Épernay'",
        titleEn: "Sommelier Flight 'Imperial Champagne Effervescence'",
        decant: "Copas tulipán a 9°C",
        wines: [
          {
            step: "Copa I",
            name: "Ruinart Blanc de Blancs Brut",
            noteEs: "Flores blancas, brioche tierno y burbuja ultra-fina.",
            noteEn: "White flowers, fresh brioche, and ultra-fine bead."
          },
          {
            step: "Copa II",
            name: "Dom Pérignon Vintage 2015",
            noteEs: "Tostados nobles, frutas amarillas, menta seca y textura cremosa.",
            noteEn: "Noble toast, yellow orchard fruits, dried mint, and creamy texture."
          },
          {
            step: "Copa III",
            name: "Krug Grande Cuvée 171ème Édition",
            noteEs: "Miel de flores, avellanas caramelizadas, jengibre y complejidad sin fin.",
            noteEn: "Blossom honey, candied hazelnuts, ginger, and boundless depth."
          }
        ]
      };
    } else {
      return {
        titleEs: "Vuelo Sommelier 'Leyendas Eternas del Duero & Rioja Alta'",
        titleEn: "Sommelier Flight 'Timeless Duero & Rioja Legends'",
        decant: "Aireación en decantador Riedel sommelier a 17°C",
        wines: [
          {
            step: "Copa I",
            name: "Viña Tondonia Blanco Gran Reserva 2004",
            noteEs: "Cera de abeja, almendra amarga, corteza de naranja seca y acidez viva.",
            noteEn: "Beeswax, bitter almond, dried orange peel, and vibrant acidity."
          },
          {
            step: "Copa II",
            name: "Vega Sicilia Valbuena 5° 2018",
            noteEs: "Fruta roja madura, cedro, fondo de café tostado y equilibrio sublime.",
            noteEn: "Ripe red berries, cedar, roasted coffee bean, and sublime balance."
          },
          {
            step: "Copa III",
            name: "Vega Sicilia Único Reserva Especial",
            noteEs: "La cúspide del vino español: complejidad abrumadora y tanino de terciopelo.",
            noteEn: "The pinnacle of Spanish wine: overwhelming nuance and velvet tannins."
          }
        ]
      };
    }
  };

  const currentFlight = getFlightRecommendation();

  return (
    <section className="sommelier-section" id="sommelier">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'La Bóveda de los Sentidos' : 'The Vault of Senses'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Experiencia & Maridaje Sommelier' : 'Sommelier Flight & Pairing Engine'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Configura la atmósfera de tu velada y nuestro Head Sommelier preparará un vuelo de 3 copas exclusivas armonizadas al momento.'
              : 'Tailor the atmosphere of your evening, and our Head Sommelier will curate a bespoke 3-glass flight harmonized to perfection.'}
          </p>
        </div>

        {/* Sommelier Interactive Tool */}
        <div className="sommelier-interactive-grid">
          {/* Controls Column */}
          <div className="sommelier-controls-card glass-card">
            <h3 className="controls-title font-serif">
              <Sparkles size={18} className="text-gold" />
              <span>{lang === 'es' ? '1. Elige el Carácter de tu Velada' : '1. Select Your Evening Vibe'}</span>
            </h3>

            <div className="vibes-selector-grid">
              {vibes.map((vibe) => (
                <button
                  key={vibe.id}
                  type="button"
                  className={`vibe-btn ${selectedVibe === vibe.id ? 'active' : ''}`}
                  onClick={() => setSelectedVibe(vibe.id)}
                >
                  <div className="vibe-icon">{vibe.icon}</div>
                  <span className="vibe-label">{lang === 'es' ? vibe.labelEs : vibe.labelEn}</span>
                </button>
              ))}
            </div>

            <h3 className="controls-title font-serif" style={{ marginTop: '2rem' }}>
              <Wine size={18} className="text-gold" />
              <span>{lang === 'es' ? '2. Preferencia de Terroir & Estilo' : '2. Terroir & Style Preference'}</span>
            </h3>

            <div className="profiles-selector-grid">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  className={`profile-btn ${selectedProfile === profile.id ? 'active' : ''}`}
                  onClick={() => setSelectedProfile(profile.id)}
                >
                  <span className="profile-name">{lang === 'es' ? profile.nameEs : profile.nameEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Column */}
          <div className="sommelier-result-card glass-card">
            <div className="result-header">
              <div className="gold-badge">
                <Wine size={14} />
                <span>{lang === 'es' ? 'SELECCIÓN HEAD SOMMELIER' : 'HEAD SOMMELIER SELECTION'}</span>
              </div>
              <span className="result-temp font-serif">{currentFlight.decant}</span>
            </div>

            <h3 className="flight-title font-serif">
              {lang === 'es' ? currentFlight.titleEs : currentFlight.titleEn}
            </h3>

            <div className="flight-wines-list">
              {currentFlight.wines.map((wine, idx) => (
                <div key={idx} className="flight-wine-item">
                  <div className="flight-step-badge font-serif">{wine.step}</div>
                  <div className="flight-wine-info">
                    <h4 className="flight-wine-name font-serif">{wine.name}</h4>
                    <p className="flight-wine-note font-editorial">
                      {lang === 'es' ? wine.noteEs : wine.noteEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="result-footer-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenReservation({ experience: 'sommelier-flight', flightNotes: currentFlight.titleEs })}
              >
                <span>{lang === 'es' ? 'Solicitar este Maridaje al Reservar' : 'Request This Pairing With Booking'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
