import React, { useState } from 'react';
import { Users, Music, Disc, Sparkles, ArrowRight, Maximize2 } from 'lucide-react';

export default function SpacesGallery({ lang, onOpenReservation, onOpenLightbox }) {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);

  const spaces = [
    {
      id: "piano-bar-space",
      titleEs: "Level 01: The Acoustic Piano Bar",
      titleEn: "Level 01: The Acoustic Piano Bar",
      subtitleEs: "Diseño contemporáneo en roble oscuro y Steinway Concert Grand D-274",
      subtitleEn: "Contemporary dark oak acoustic slats and Steinway Concert Grand D-274",
      capacity: "75 personas sentadas",
      vibe: "Acoustic Warmth, Minimal, Intimate",
      hours: "19:00 – 02:00",
      image: "/images/piano.jpg",
      detailsEs: "Madera acústica ranurada, mesas bajas en piel y mármol Nero Marquina, iluminación lineal cálida y acústica pura."
    },
    {
      id: "subvault-club-space",
      titleEs: "Level -01: Sub-Level House Club",
      titleEn: "Level -01: Sub-Level House Club",
      subtitleEs: "Arquitectura brutalista de hormigón, estructuras lineales LED y Funktion-One",
      subtitleEn: "Brutalist concrete architecture, linear LED framework, and Funktion-One sound",
      capacity: "180 personas",
      vibe: "Brutalist, Hypnotic, High-Fidelity",
      hours: "23:30 – 06:00",
      image: "/images/club.jpg",
      detailsEs: "Ingeniería de sonido Funktion-One calibrada al milímetro, cabina minimalista con Technics 1210 MK7 y diseño de luces suspendidas."
    },
    {
      id: "vinyl-bar-space",
      titleEs: "The Modern Vinyl & Cocktail Counter",
      titleEn: "The Modern Vinyl & Cocktail Counter",
      subtitleEs: "Colección curada de 3.000 vinilos originales y amplificación analógica",
      subtitleEn: "Curated collection of 3,000 vinyl records and pure analog amplification",
      capacity: "25 plazas en barra",
      vibe: "Analog Listening, Minimal, Precision",
      hours: "19:00 – 03:00",
      image: "/images/vinyl.jpg",
      detailsEs: "Platos giradiscos de alta precisión, amplificación McIntosh y coctelería contemporánea con hielo monolítico."
    },
    {
      id: "vip-backstage-space",
      titleEs: "The Black Key VIP Enclave",
      titleEn: "The Black Key VIP Enclave",
      subtitleEs: "Salón privado exclusivo con acceso directo a ambos niveles",
      subtitleEn: "Exclusive private salon with seamless dual-level connectivity",
      capacity: "12 personas",
      vibe: "Discrete, Ultra-VIP, Dedicated Concierge",
      hours: "19:00 – 06:00",
      image: "/images/hero.jpg",
      detailsEs: "Servicio personal dedicado, casillero privado para botellas y paso prioritario entre el piano bar y el club."
    }
  ];

  const currentSpace = spaces[activeSpaceIdx];

  return (
    <section className="spaces-section" id="espacios">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'Arquitectura & Acústica' : 'Spaces & Sound'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Los Espacios de La Octava' : 'The Architectural Sanctuaries'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Líneas limpias, materiales nobles y dos atmósferas complementarias conectadas en un mismo edificio.'
              : 'Clean lines, noble materials, and two complementary atmospheres seamlessly connected under one roof.'}
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="spaces-selector-bar">
          {spaces.map((space, idx) => (
            <button
              key={space.id}
              type="button"
              className={`space-nav-pill font-mono ${activeSpaceIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveSpaceIdx(idx)}
            >
              <span className="pill-num">0{idx + 1}</span>
              <span className="pill-title">{lang === 'es' ? space.titleEs : space.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Main Space Showcase Card */}
        <div className="space-showcase-card glass-card">
          <div className="showcase-media-side">
            <div className="media-wrapper">
              <img 
                src={currentSpace.image} 
                alt={currentSpace.titleEs} 
                className="showcase-img"
              />
              <button 
                type="button" 
                className="lightbox-zoom-btn font-mono"
                onClick={() => onOpenLightbox(currentSpace.image, currentSpace.titleEs)}
                title="Zoom"
              >
                <Maximize2 size={14} />
                <span>{lang === 'es' ? 'Zoom' : 'Zoom'}</span>
              </button>
              <div className="space-overlay-badge font-mono">
                <span className="gold-badge">0{activeSpaceIdx + 1} / 04</span>
              </div>
            </div>
          </div>

          <div className="showcase-content-side">
            <div className="space-specs-row font-mono">
              <div className="spec-item">
                <Users size={14} className="text-gold" />
                <span>{currentSpace.capacity}</span>
              </div>
              <div className="spec-item">
                <Music size={14} className="text-gold" />
                <span>{currentSpace.vibe}</span>
              </div>
            </div>

            <h3 className="showcase-title font-display">
              {lang === 'es' ? currentSpace.titleEs : currentSpace.titleEn}
            </h3>

            <p className="showcase-subtitle font-mono">
              {lang === 'es' ? currentSpace.subtitleEs : currentSpace.subtitleEn}
            </p>

            <div className="showcase-details">
              {lang === 'es' ? currentSpace.detailsEs : currentSpace.detailsEn}
            </div>

            <div className="showcase-features-list font-mono">
              <div className="feature-bullet">
                <Sparkles size={13} className="text-gold" />
                <span>{lang === 'es' ? `Horario: ${currentSpace.hours}` : `Hours: ${currentSpace.hours}`}</span>
              </div>
              <div className="feature-bullet">
                <Sparkles size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Aislamiento acústico y alta fidelidad' : 'High-fidelity acoustic engineering'}</span>
              </div>
              <div className="feature-bullet">
                <Sparkles size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Servicio de coctelería y botellas VIP' : 'Table cocktail & bottle service'}</span>
              </div>
            </div>

            <div className="showcase-actions font-mono">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenReservation({ space: currentSpace.id })}
              >
                <span>{lang === 'es' ? 'Reservar en este Espacio' : 'Reserve in this Space'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
