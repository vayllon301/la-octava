import React, { useState } from 'react';
import { Sparkles, Wine, Flame, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ConceptSection({ lang, onOpenReservation, onOpenMembership }) {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: <Sparkles size={24} className="text-gold" />,
      tag: "I. Gastronomía",
      titleEs: "L'Atelier: Menú Sinfonía de 8 Pasos",
      titleEn: "L'Atelier: 8-Step Symphony Journey",
      excerptEs: "Una composición coreografiada donde cada pase es una nota que despierta un recuerdo dormido.",
      excerptEn: "A choreographed culinary composition where each plate represents a harmonious note.",
      detailsEs: "Ingredientes nobles de origen salvaje —caviar Oscietra, trufa negra melanosporum, wagyu A5 Miyazaki y mariscos del Atlántico— tratados con técnicas de cocción al sarmiento, destilaciones al vacío y maduraciones en cámara de sal.",
      detailsEn: "Pristine wild-caught ingredients —Oscietra caviar, black truffles, Miyazaki A5 Wagyu, and Atlantic seafood— elevated through wood-smoke infusions, vacuum distillations, and pink Himalayan salt chamber aging.",
      quoteEs: "«Cocinar no es transformar materia, es suscitar emociones imposibles de verbalizar.»",
      quoteEn: "«Culinary mastery is not transforming matter, but eliciting emotions that transcend words.»",
      ctaEs: "Explorar el Menú",
      ctaEn: "Explore the Menu",
      action: "menu"
    },
    {
      icon: <Wine size={24} className="text-gold" />,
      tag: "II. La Bóveda",
      titleEs: "La Cava Subterránea & Grand Crus",
      titleEn: "The Subterranean Vault & Grand Crus",
      excerptEs: "850 referencias mundiales protegidas a 14°C en galerías de piedra centenaria.",
      excerptEn: "Over 850 international references guarded at a strict 14°C inside historic stone vaults.",
      detailsEs: "Verticales históricas completas de Château Petrus, Domaine de la Romanée-Conti, Vega Sicilia Único y los Champagnes más exclusivos del planeta. Ofrecemos catas a ciegas en copa de cristal austríaco soplado a mano.",
      detailsEn: "Complete historic verticals of Château Petrus, Domaine de la Romanée-Conti, Vega Sicilia Único, and the rarest Champagnes on earth. Guided private blind tastings served in hand-blown Austrian crystal stemware.",
      quoteEs: "«El tiempo es el único enólogo que no acepta sobornos.»",
      quoteEn: "«Time is the only winemaker who accepts no compromises.»",
      ctaEs: "Descubrir la Cava",
      ctaEn: "Discover the Cellar",
      action: "sommelier"
    },
    {
      icon: <Flame size={24} className="text-gold" />,
      tag: "III. Altura & Fuego",
      titleEs: "Rooftop 360° & Alquimia Botánica",
      titleEn: "360° Rooftop & Botanical Alchemy",
      excerptEs: "El horizonte nocturno de la ciudad bañado por la lumbre de chimeneas y cócteles de autor.",
      excerptEn: "The glittering city skyline framed by dancing flames, soft ambient jazz, and signature alchemy.",
      detailsEs: "Mixología conceptual con destilados ahumados in situ, hielo tallado a mano con cuarzo, infusiones de hierbas silvestres y espumas de Champagne vintage. Un refugio cosmopolita con ambiente sonoro curado.",
      detailsEn: "Conceptual mixology featuring in-house smoked spirits, diamond-carved artisanal ice, wild botanical reductions, and vintage Champagne clouds.",
      quoteEs: "«Un cóctel no es una bebida; es una pausa sagrada en el tumulto del mundo.»",
      quoteEn: "«A cocktail is not just a drink; it is a sacred pause in the world's rush.»",
      ctaEs: "Reservar en Terraza",
      ctaEn: "Reserve on Rooftop",
      action: "reserve"
    },
    {
      icon: <Shield size={24} className="text-gold" />,
      tag: "IV. Círculo Íntimo",
      titleEs: "Salón VIII & Club de Socios Privado",
      titleEn: "Salon VIII & Private Members Sanctuary",
      excerptEs: "El enclave más discreto para coleccionistas, diplomáticos y amantes de la privacidad absoluta.",
      excerptEn: "The most discrete enclave tailored for collectors, executives, and connoisseurs of true privacy.",
      detailsEs: "Casilleros privados con cerradura biométrica para almacenar añadas personales, salón de fumadores con humidor de habanos reserva, servicio de chofer privado y reservas directas por línea roja de mayordomía.",
      detailsEn: "Private biometric wine lockers for personal reserves, walk-in humidor with vintage cigars, luxury chauffeur service, and direct concierge hotline.",
      quoteEs: "«El verdadero lujo no hace ruido: se reconoce en silencio.»",
      quoteEn: "«True luxury makes no noise: it recognizes itself in silence.»",
      ctaEs: "Solicitar Invitación",
      ctaEn: "Request Invitation",
      action: "membership"
    }
  ];

  const handlePillarAction = (action) => {
    if (action === 'reserve') onOpenReservation();
    else if (action === 'membership') onOpenMembership();
    else if (action === 'menu') {
      const el = document.getElementById('menu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'sommelier') {
      const el = document.getElementById('sommelier');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="concept-section" id="concepto">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'La Esencia de Nuestra Casa' : 'The Essence of Our House'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'El Misterio de la Octava' : 'The Mystery of the Eighth'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'En la música, la octava es la nota que eleva la escala a una frecuencia superior. En La Octava, es el espacio donde el gusto, el olfato, la vista y el espíritu alcanzan la plenitud.'
              : 'In music, an octave is the note that lifts the scale into a higher resonance. At La Octava, it is the threshold where taste, scent, sight, and spirit achieve absolute harmony.'}
          </p>
        </div>

        {/* Interactive Pillars Grid */}
        <div className="concept-layout">
          {/* Tab Navigation */}
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

          {/* Active Pillar Card */}
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
