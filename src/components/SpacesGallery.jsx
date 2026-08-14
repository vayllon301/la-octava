import React, { useState } from 'react';
import { Eye, Users, Music, Compass, Sparkles, ArrowRight, Maximize2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function SpacesGallery({ lang, onOpenReservation, onOpenLightbox }) {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const currentSpace = RESTAURANT_DATA.spaces[activeSpaceIdx];

  return (
    <section className="spaces-section" id="espacios">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Arquitectura & Atmósfera' : 'Architecture & Atmosphere'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Los Cuatro Santuarios' : 'The Four Sanctuaries'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Cada rincón de La Octava ha sido concebido como una obra de arte arquitectónica donde la luz, el mármol y el sonido dialogan con la noche.'
              : 'Every corner of La Octava was conceived as an architectural artwork where light, stone, and acoustic warmth converse with the night.'}
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="spaces-selector-bar">
          {RESTAURANT_DATA.spaces.map((space, idx) => (
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
                <span>{lang === 'es' ? 'Servicio sommelier dedicado de alta discreción' : 'Dedicated discrete sommelier service'}</span>
              </div>
              <div className="feature-bullet">
                <Sparkles size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Iluminación escenográfica regulada según la hora solar' : 'Lighting tailored to astronomical sunset hour'}</span>
              </div>
              <div className="feature-bullet">
                <Sparkles size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Control térmico y acústico de precisión milimétrica' : 'Millimeter precision thermal and acoustic treatment'}</span>
              </div>
            </div>

            <div className="showcase-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenReservation({ space: currentSpace.id })}
              >
                <span>{lang === 'es' ? `Reservar en ${currentSpace.titleEs.split(' ')[1] || 'este Espacio'}` : `Reserve in this Space`}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
