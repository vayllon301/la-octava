import React, { useState } from 'react';
import { Music, Disc, Sparkles, KeyRound, ArrowUpRight, Flame } from 'lucide-react';

export default function ConceptSection({ lang, onOpenReservation, onOpenMembership }) {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: <Music size={20} className="text-gold" />,
      tag: "LEVEL 01 • JAZZ & LISTENING BAR",
      titleEs: "Acústica de Madera, Steinway & Iluminación Lineal",
      titleEn: "Acoustic Slats, Steinway Grand & Recessed Lighting",
      excerptEs: "Un listening lounge contemporáneo diseñado para apreciar el sonido puro del piano y los cuartetos de jazz.",
      excerptEn: "A contemporary listening lounge engineered for the pristine resonance of live grand piano and jazz quartets.",
      detailsEs: "Paneles acústicos de roble oscuro, mesas de diseño bajo en cuero y mármol negro, y una programación diaria con los mejores pianistas y vocalistas de la escena internacional.",
      detailsEn: "Dark oak acoustic slat paneling, low leather lounge tables, and a daily curated rotation of master pianists and jazz artists.",
      quoteEs: "«Diseñado como un templo de escucha contemporáneo donde cada detalle arquitectónico está al servicio del sonido.»",
      quoteEn: "«Engineered as a contemporary listening sanctuary where every architectural detail serves pure acoustic fidelity.»",
      ctaEs: "Reservar Mesa en Level 01",
      ctaEn: "Book Level 01 Table",
      action: "reserve-piano"
    },
    {
      icon: <Disc size={20} className="text-gold" />,
      tag: "LEVEL -01 • SUB-LEVEL CLUB",
      titleEs: "Hormigón Visto, Funktion-One & Deep House",
      titleEn: "Architectural Concrete, Funktion-One & Deep House",
      excerptEs: "Un espacio de clubbing subterráneo con líneas minimalistas y sonido de alta fidelidad.",
      excerptEn: "An underground clubbing sanctuary defined by minimalist lines and high-fidelity sound architecture.",
      detailsEs: "Ingeniería acústica personalizada por Funktion-One, estructuras lineales de luz suspendidas, cabina con Technics 1210 MK7 y sesiones continuas de Deep & Melodic House hasta las 06:00.",
      detailsEn: "Custom acoustic tuning by Funktion-One, suspended geometric LED light framework, Technics 1210 vinyl decks, and seamless Deep House running until 06:00.",
      quoteEs: "«Minimalismo visual absoluto. La música y la vibración de las frecuencias bajas son las únicas protagonistas.»",
      quoteEn: "«Pure visual minimalism. The music and sub-bass frequencies take total command.»",
      ctaEs: "Acceso a Sub-Level",
      ctaEn: "Access Sub-Level",
      action: "reserve-club"
    },
    {
      icon: <Flame size={20} className="text-gold" />,
      tag: "MIXOLOGY & RAW BAR",
      titleEs: "Coctelería de Precisión & Bocados de Noche",
      titleEn: "Precision Mixology & Late Night Raw Bar",
      excerptEs: "Destilados clarificados, hielo artesano y materias primas excepcionales servidas toda la noche.",
      excerptEn: "Clarified spirits, monolithic ice, and pristine ingredients served throughout the night.",
      detailsEs: "Cócteles diseñados con técnicas contemporáneas: Highballs clarificados con yuzu fresco, sours ahumados con soplete, ostras Gillardeau N°2, jamón 5 Jotas y brioches calientes de wagyu.",
      detailsEn: "Cocktails crafted through modern techniques: vacuum-clarified yuzu highballs, oak-smoked sours, Gillardeau N°2 oysters, and toasted wagyu tartare brioche.",
      quoteEs: "«Ingredientes nobles, técnica depurada y equilibrio milimétrico en cada copa.»",
      quoteEn: "«Noble ingredients, refined technique, and millimeter balance in every glass.»",
      ctaEs: "Ver Carta de Cócteles",
      ctaEn: "Explore Drinks Menu",
      action: "menu"
    },
    {
      icon: <KeyRound size={20} className="text-gold" />,
      tag: "MEMBERSHIP • BLACK KEY",
      titleEs: "Black Key Society: Acceso Total a Ambos Niveles",
      titleEn: "Black Key Society: Seamless Dual-Level Access",
      excerptEs: "La membresía anual para quienes buscan transitar con total fluidez entre el jazz y el club.",
      excerptEn: "The annual membership for those who transition seamlessly from live jazz to the underground club floor.",
      detailsEs: "Acceso VIP preferente permanente, casillero personal con control térmico para botellas de colección, mesas reservadas y línea directa con el equipo de dirección nocturna.",
      detailsEn: "Permanent priority VIP access, personal temperature-controlled bottle lockers, priority table holds, and direct concierge hotline.",
      quoteEs: "«Una sola llave. Dos frecuencias nocturnas sin esperas.»",
      quoteEn: "«A single key. Two distinct nocturnal frequencies with zero friction.»",
      ctaEs: "Solicitar Black Key",
      ctaEn: "Apply for Black Key",
      action: "membership"
    }
  ];

  const handlePillarAction = (action) => {
    if (action === 'reserve-piano') onOpenReservation({ level: 'piano' });
    else if (action === 'reserve-club') onOpenReservation({ level: 'club' });
    else if (action === 'membership') onOpenMembership();
    else if (action === 'menu') {
      const el = document.getElementById('cocteles');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="concept-section" id="niveles">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'El Concepto' : 'The Architecture'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Dos Niveles. Dos Frecuencias.' : 'Two Levels. Two Frequencies.'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Arriba, la calidez acústica del piano y el jazz en directo. Abajo, la pulsación envolvente de la música electrónica.'
              : 'Above, the acoustic warmth of grand piano jazz. Below, the subterranean pulse of contemporary deep house.'}
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="concept-layout">
          {/* Tabs */}
          <div className="concept-nav-column">
            {pillars.map((pillar, idx) => (
              <button
                key={idx}
                type="button"
                className={`concept-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="tab-icon-box">{pillar.icon}</div>
                <div className="tab-text-box">
                  <span className="tab-tag font-mono">{pillar.tag}</span>
                  <span className="tab-title font-display">
                    {lang === 'es' ? pillar.titleEs : pillar.titleEn}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Detail Card */}
          <div className="concept-detail-column">
            <div className="glass-card concept-detail-card">
              <div className="detail-card-badge">
                <span className="gold-badge font-mono">{pillars[activeTab].tag}</span>
              </div>

              <h3 className="detail-card-title font-display">
                {lang === 'es' ? pillars[activeTab].titleEs : pillars[activeTab].titleEn}
              </h3>

              <p className="detail-card-excerpt">
                {lang === 'es' ? pillars[activeTab].excerptEs : pillars[activeTab].excerptEn}
              </p>

              <div className="detail-card-body">
                {lang === 'es' ? pillars[activeTab].detailsEs : pillars[activeTab].detailsEn}
              </div>

              <blockquote className="detail-card-quote">
                <p className="quote-text">
                  {lang === 'es' ? pillars[activeTab].quoteEs : pillars[activeTab].quoteEn}
                </p>
              </blockquote>

              <div className="detail-card-actions font-mono">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handlePillarAction(pillars[activeTab].action)}
                >
                  <span>{lang === 'es' ? pillars[activeTab].ctaEs : pillars[activeTab].ctaEn}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
