import React, { useState } from 'react';
import { Users, Music, Disc, Sparkles, ArrowRight, Maximize2, Volume2, Shield } from 'lucide-react';

export default function SpacesGallery({ lang, onOpenReservation, onOpenLightbox }) {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);

  const spaces = [
    {
      id: "piano-bar-space",
      titleEs: "El Piano Bar & Velvet Lounge (Piso 01)",
      titleEn: "The Piano Bar & Velvet Lounge (Floor 01)",
      subtitleEs: "El epicentro del jazz en directo con nuestro Steinway Concert Grand D-274",
      subtitleEn: "The epicenter of live acoustic jazz with our Steinway Concert Grand D-274",
      capacity: "75 personas sentadas",
      vibe: "Acoustic Warmth, Intimista, Terciopelo Burdeos",
      hours: "19:00 – 02:00",
      image: "/images/piano.jpg",
      detailsEs: "Mesas de caoba pulida iluminadas por velas de cera de abeja, sofás curvos de terciopelo y un escenario íntimo donde cada nota resuena con pureza."
    },
    {
      id: "subvault-club-space",
      titleEs: "El Sub-Vault House Club (Nivel -01)",
      titleEn: "The Sub-Vault House Club (Level -01)",
      subtitleEs: "La catedral subterránea del Deep House y la cultura de clubbing madrileña",
      subtitleEn: "The underground sanctuary for Deep House and authentic club culture",
      capacity: "180 personas",
      vibe: "Raw Brick Arches, Crimson Laser Haze, Funktion-One",
      hours: "23:30 – 06:00",
      image: "/images/club.jpg",
      detailsEs: "Bóvedas originales del siglo XIX recuperadas, torre de sonido acústico Funktion-One calibrada, iluminación láser perimetral y cabina con Technics 1210."
    },
    {
      id: "vinyl-bar-space",
      titleEs: "La Barra de Vinilos & Cócteles Clásicos",
      titleEn: "The Vinyl Bar & Craft Cocktail Counter",
      subtitleEs: "Colección curada de 3.000 vinilos originales de Blue Note, Impulse! y Warp",
      subtitleEn: "A curated collection of 3,000 original vinyl records spanning Blue Note to Warp",
      capacity: "25 plazas en barra",
      vibe: "Analógico, Audiosanctuary, Conversación",
      hours: "19:00 – 03:00",
      image: "/images/vinyl.jpg",
      detailsEs: "Plato giradiscos Thorens vintage, amplificación a válvulas McIntosh y coctelería clásica ejecutada con licores de época y hielo tallado a mano."
    },
    {
      id: "vip-backstage-space",
      titleEs: "El Reservado VIP 'Llave Negra'",
      titleEn: "The 'Black Key' VIP Enclave",
      subtitleEs: "Salón privado exclusivo con acceso directo a la cabina del DJ y bodega secreta",
      subtitleEn: "Exclusive private salon with direct DJ booth access and secret wine cellar",
      capacity: "12 personas exclusivas",
      vibe: "Discreto, Ultra-VIP, Servicio Personal",
      hours: "19:00 – 06:00",
      image: "/images/hero.jpg",
      detailsEs: "Mayordomo y sommelier dedicado, casillero privado para botellas personales y pasadizo secreto entre el piano bar y el club."
    }
  ];

  const currentSpace = spaces[activeSpaceIdx];

  return (
    <section className="spaces-section" id="espacios">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Los Espacios & La Acústica' : 'The Spaces & Sound Design'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Recorre los Rincones de La Octava' : 'Explore the Sanctuaries of La Octava'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Dos mundos conectados por una escalera secreta: el calor acústico del jazz arriba y la vibración subterránea del house abajo.'
              : 'Two realms connected by a discrete stone staircase: the acoustic warmth of live jazz upstairs and the underground house pulse below.'}
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="spaces-selector-bar">
          {spaces.map((space, idx) => (
            <button
              key={space.id}
              type="button"
              className={`space-nav-pill ${activeSpaceIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveSpaceIdx(idx)}
            >
              <span className="pill-num font-serif">0{idx + 1}</span>
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
                className="lightbox-zoom-btn"
                onClick={() => onOpenLightbox(currentSpace.image, currentSpace.titleEs)}
                title={lang === 'es' ? 'Ver en alta resolución' : 'View full size'}
              >
                <Maximize2 size={18} />
                <span>{lang === 'es' ? 'Explorar' : 'Zoom'}</span>
              </button>
              <div className="space-overlay-badge">
                <span className="gold-badge">0{activeSpaceIdx + 1} / 04</span>
              </div>
            </div>
          </div>

          <div className="showcase-content-side">
            <div className="space-specs-row">
              <div className="spec-item">
                <Users size={16} className="text-gold" />
                <span>{currentSpace.capacity}</span>
              </div>
              <div className="spec-item">
                <Music size={16} className="text-gold" />
                <span>{currentSpace.vibe}</span>
              </div>
            </div>

            <h3 className="showcase-title font-serif">
              {lang === 'es' ? currentSpace.titleEs : currentSpace.titleEn}
            </h3>

            <p className="showcase-subtitle font-editorial">
              {lang === 'es' ? currentSpace.subtitleEs : currentSpace.subtitleEn}
            </p>

            <div className="showcase-details font-editorial">
              {lang === 'es' ? currentSpace.detailsEs : currentSpace.detailsEn}
            </div>

            <div className="showcase-features-list">
              <div className="feature-bullet">
                <Sparkles size={14} className="text-gold" />
                <span>{lang === 'es' ? `Horario: ${currentSpace.hours}` : `Hours: ${currentSpace.hours}`}</span>
              </div>
              <div className="feature-bullet">
                <Sparkles size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Aislamiento acústico y tratamiento sónico de alta fidelidad' : 'Hi-Fi acoustic engineering & sound isolation'}</span>
              </div>
              <div className="feature-bullet">
                <Sparkles size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Servicio de coctelería y botellas VIP en mesa' : 'Table cocktail & bottle service'}</span>
              </div>
            </div>

            <div className="showcase-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenReservation({ space: currentSpace.id })}
              >
                <span>{lang === 'es' ? 'Reservar en este Espacio' : 'Reserve in this Space'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
