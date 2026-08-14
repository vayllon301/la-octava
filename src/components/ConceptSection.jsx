import React, { useState } from 'react';
import { Music, Disc, Sparkles, KeyRound, ArrowUpRight, Flame, Volume2 } from 'lucide-react';

export default function ConceptSection({ lang, onOpenReservation, onOpenMembership }) {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: <Music size={24} className="text-gold" />,
      tag: "PISO 01 • JAZZ & PIANO BAR",
      titleEs: "El Santuario del Steinway & Terciopelo Burdeos",
      titleEn: "The Steinway Grand Piano & Merlot Velvet Sanctuary",
      excerptEs: "Afinado cada tarde a 440 Hz, nuestro gran cola preside un salón de acústica perfecta para veladas íntimas.",
      excerptEn: "Tuned daily to 440 Hz, our concert grand piano commands an intimate room crafted for supreme acoustic warmth.",
      detailsEs: "Cada noche, maestros del piano clásico y moderno, tríos de contrabajo y saxofón, y vocalistas de jazz llenan la atmósfera mientras disfrutas de cócteles clásicos ahumados y bocados gourmet a la luz de las velas.",
      detailsEn: "Every evening, master pianists, acoustic double bass trios, and jazz vocalists fill the air while guests sip wood-smoked classics and delicate raw bar bites by candlelight.",
      quoteEs: "«El jazz no es sólo música; es una conversación íntima que ocurre en tiempo real entre el piano y tu copa.»",
      quoteEn: "«Jazz is not merely music; it is an intimate dialogue unfolding between the piano and your glass.»",
      ctaEs: "Reservar en Piano Bar",
      ctaEn: "Book Piano Bar Table",
      action: "reserve-piano"
    },
    {
      icon: <Disc size={24} className="text-gold" />,
      tag: "NIVEL -01 • EL SUB-VAULT",
      titleEs: "El Club de House Subterráneo en Bóvedas Centenarias",
      titleEn: "The Subterranean House Club Inside Ancient Vaults",
      excerptEs: "Descendiendo por una escalera discreta de piedra, la energía se transforma en puro Deep & Melodic House.",
      excerptEn: "Descending through a discrete stone stairwell, the frequency transforms into raw, hypnotic Deep House.",
      detailsEs: "Construido en los antiguos sótanos abovedados de la Castellana, equipado con una torre de sonido Funktion-One diseñada a medida, niebla carmesí y una cabina de DJ con platos Technics para sesiones en vinilo hasta las 06:00.",
      detailsEn: "Housed within historic brick vaults, engineered with custom Funktion-One sound stacks, crimson laser haze, and Technics 1210 MK7 vinyl turntables running until 06:00.",
      quoteEs: "«Cuando el reloj marca la medianoche, las frecuencias bajas toman el control del templo.»",
      quoteEn: "«When midnight strikes, the low frequencies assume total command of the sanctuary.»",
      ctaEs: "Acceso al House Club",
      ctaEn: "Access House Club",
      action: "reserve-club"
    },
    {
      icon: <Flame size={24} className="text-gold" />,
      tag: "ALQUIMIA • CÓCTELES DE AUTOR",
      titleEs: "Mixología Inspirada en Acordes de Jazz & Frecuencias",
      titleEn: "Mixology Inspired by Jazz Chords & Sound Frequencies",
      excerptEs: "Bebidas que evolucionan desde notas amaderadas y complejas hasta elixires energéticos de madrugada.",
      excerptEn: "Spirits that transition from warm oak-aged jazz classics to high-voltage midnight elixirs.",
      detailsEs: "Nuestra carta divide sus creaciones entre las 'Velvet Jazz Signatures' (Bourbon macerado, jereces añejos, perfume de trufa) y las 'Sub-Vault Energy Libations' (Mezcal volcánico, Nitro Espresso con café Geisha de especialidad).",
      detailsEn: "Our cocktail list is split between 'Velvet Jazz Signatures' (vanilla-infused bourbons, vintage ports, truffle essences) and 'Sub-Vault Energy Libations' (volcanic mezcals, Nitro Geisha espresso martinis).",
      quoteEs: "«El hielo se talla con cuarzo; el destilado se sirve al compás de la música.»",
      quoteEn: "«Artisanal diamond ice; spirits poured strictly to the cadence of the sound.»",
      ctaEs: "Ver Carta de Cócteles",
      ctaEn: "Explore Drinks Menu",
      action: "menu"
    },
    {
      icon: <KeyRound size={24} className="text-gold" />,
      tag: "PRIVADO • LLAVE NEGRA",
      titleEs: "El Círculo de la Llave Negra: Ambos Mundos Sin Límites",
      titleEn: "The Black Key Circle: Both Worlds Without Boundaries",
      excerptEs: "El pase definitivo para quienes desean cenar escuchando un solo de piano y bajar a bailar sin colas.",
      excerptEn: "The ultimate pass for connoisseurs who dine by the grand piano and transition seamlessly to the club floor.",
      detailsEs: "Socios titulares disfrutan de acceso preferente permanente a ambos niveles, casillero personal para botellas privadas en la cava del sótano, línea directa de WhatsApp con la dirección y acceso a sesiones secretas de piano después del cierre.",
      detailsEn: "Keyholders enjoy permanent skip-the-line VIP entry to both floors, personal private spirit lockers in the cellar vault, direct concierge access, and invitations to secret lock-in jam sessions.",
      quoteEs: "«Una sola llave abre las dos caras de la noche madrileña.»",
      quoteEn: "«A single key unlocks both faces of Madrid’s defining night.»",
      ctaEs: "Solicitar Llave Negra",
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
          <span className="section-subtitle">
            {lang === 'es' ? 'La Dualidad de La Octava' : 'The Dual Identity of La Octava'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Dos Frecuencias. Un Santuario.' : 'Two Frequencies. One Sanctuary.'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Arriba, la calidez acústica del piano y el jazz en directo. Abajo, el pulso envolvente de la música electrónica en nuestras bóvedas subterráneas.'
              : 'Above, the acoustic warmth of live grand piano jazz. Below, the hypnotic subterranean pulse of deep house inside ancient brick vaults.'}
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
                  <span className="tab-tag">{pillar.tag}</span>
                  <span className="tab-title">
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
                <span className="gold-badge">{pillars[activeTab].tag}</span>
              </div>

              <h3 className="detail-card-title">
                {lang === 'es' ? pillars[activeTab].titleEs : pillars[activeTab].titleEn}
              </h3>

              <p className="detail-card-excerpt">
                {lang === 'es' ? pillars[activeTab].excerptEs : pillars[activeTab].excerptEn}
              </p>

              <div className="detail-card-body font-editorial">
                {lang === 'es' ? pillars[activeTab].detailsEs : pillars[activeTab].detailsEn}
              </div>

              <blockquote className="detail-card-quote">
                <p className="quote-text font-editorial">
                  {lang === 'es' ? pillars[activeTab].quoteEs : pillars[activeTab].quoteEn}
                </p>
              </blockquote>

              <div className="detail-card-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handlePillarAction(pillars[activeTab].action)}
                >
                  <span>{lang === 'es' ? pillars[activeTab].ctaEs : pillars[activeTab].ctaEn}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
