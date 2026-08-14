import React, { useState } from 'react';
import { Wine, Utensils, GlassWater, Award, Sparkles, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MenuSection({ lang, currency, onOpenReservation }) {
  const [activeMenuTab, setActiveMenuTab] = useState('tasting');
  const [expandedStep, setExpandedStep] = useState('step-1');

  const formatPrice = (eur, usd) => {
    return currency === 'EUR' ? `${eur} €` : `$ ${usd}`;
  };

  const toggleStep = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Alta Gastronomía de Temporada' : 'Seasonal Haute Cuisine'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Menús & Alquimia Líquida' : 'Menus & Liquid Alchemy'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Una sinfonía de productos excelsos donde la técnica de vanguardia respeta la pureza de cada origen.'
              : 'A symphony of noble ingredients where avant-garde technique honors the pristine essence of origin.'}
          </p>
        </div>

        {/* Menu Category Switcher */}
        <div className="menu-tab-nav">
          <button
            type="button"
            className={`menu-tab-btn ${activeMenuTab === 'tasting' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('tasting')}
          >
            <Sparkles size={16} />
            <span>{lang === 'es' ? 'Menú Degustación (8 Pasos)' : '8-Step Tasting Journey'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn ${activeMenuTab === 'alacarte' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('alacarte')}
          >
            <Utensils size={16} />
            <span>{lang === 'es' ? 'Carta de Temporada' : 'A La Carte Selection'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn ${activeMenuTab === 'cocktails' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('cocktails')}
          >
            <GlassWater size={16} />
            <span>{lang === 'es' ? 'Mixología de Autor' : 'Signature Cocktails'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn ${activeMenuTab === 'cellar' ? 'active' : ''}`}
            onClick={() => setActiveMenuTab('cellar')}
          >
            <Wine size={16} />
            <span>{lang === 'es' ? 'Tesoros de la Cava' : 'Grand Cellar Icons'}</span>
          </button>
        </div>

        {/* TAB 1: 8-STEP TASTING MENU */}
        {activeMenuTab === 'tasting' && (
          <div className="tasting-menu-wrapper">
            {/* Header Highlight Banner */}
            <div className="tasting-hero-banner glass-card">
              <div className="banner-badge-group">
                <span className="gold-badge">OPUS 2026</span>
                <span className="banner-duration font-serif">8 TIEMPOS • 3 HORAS DE VIAJE</span>
              </div>
              <div className="banner-pricing-row">
                <div className="pricing-item">
                  <span className="pricing-title">
                    {lang === 'es' ? 'Menú "Octava Sinfonía"' : '"Octave Symphony" Menu'}
                  </span>
                  <span className="pricing-value font-serif text-gold">
                    {formatPrice(185, 205)} <span className="pricing-sub">/ {lang === 'es' ? 'persona' : 'guest'}</span>
                  </span>
                </div>
                <div className="pricing-divider"></div>
                <div className="pricing-item">
                  <span className="pricing-title">
                    {lang === 'es' ? 'Maridaje Armonía Grand Cru' : 'Grand Cru Wine Pairing'}
                  </span>
                  <span className="pricing-value font-serif text-gold">
                    {formatPrice(110, 125)} <span className="pricing-sub">/ {lang === 'es' ? 'persona' : 'guest'}</span>
                  </span>
                </div>
                <div className="pricing-divider"></div>
                <div className="pricing-item">
                  <span className="pricing-title">
                    {lang === 'es' ? 'Maridaje Añadas Míticas Icono' : 'Legendary Icons Flight'}
                  </span>
                  <span className="pricing-value font-serif text-gold">
                    {formatPrice(230, 255)} <span className="pricing-sub">/ {lang === 'es' ? 'persona' : 'guest'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Steps Accordion List */}
            <div className="tasting-steps-grid">
              {RESTAURANT_DATA.tastingMenu.map((item) => {
                const isOpen = expandedStep === item.id;
                return (
                  <div 
                    key={item.id} 
                    className={`tasting-step-card glass-card ${isOpen ? 'is-open' : ''}`}
                  >
                    <div 
                      className="step-card-header"
                      onClick={() => toggleStep(item.id)}
                    >
                      <div className="step-tag-circle font-serif">{item.step}</div>
                      <div className="step-title-wrap">
                        <h4 className="step-dish-name">
                          {lang === 'es' ? item.nameEs : item.nameEn}
                        </h4>
                      </div>
                      <button type="button" className="step-toggle-btn" aria-label="Toggle dish details">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="step-expanded-content">
                        <p className="step-dish-desc font-editorial">
                          {lang === 'es' ? item.descriptionEs : item.descriptionEn}
                        </p>

                        <div className="step-pairing-box">
                          <div className="pairing-label">
                            <Wine size={16} className="text-gold" />
                            <span>{lang === 'es' ? 'Armonía Sommelier Seleccionada:' : 'Sommelier Pairing Selection:'}</span>
                          </div>
                          <div className="pairing-wine-name font-serif">
                            {lang === 'es' ? item.pairingEs : item.pairingEn}
                          </div>
                        </div>

                        {item.allergens.length > 0 && (
                          <div className="step-allergens-row">
                            <span className="allergens-tag">{lang === 'es' ? 'Alérgenos:' : 'Allergens:'}</span>
                            {item.allergens.map((alg, aIdx) => (
                              <span key={aIdx} className="allergen-pill">{alg}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tasting CTA */}
            <div className="tasting-bottom-cta">
              <button 
                type="button" 
                className="btn-primary"
                onClick={() => onOpenReservation({ experience: 'tasting-menu' })}
              >
                <Sparkles size={16} />
                <span>{lang === 'es' ? 'Reservar Menú Degustación' : 'Book Tasting Journey'}</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: A LA CARTE */}
        {activeMenuTab === 'alacarte' && (
          <div className="alacarte-grid">
            {RESTAURANT_DATA.aLaCarte.map((cat, cIdx) => (
              <div key={cIdx} className="alacarte-category-card glass-card">
                <h3 className="alacarte-cat-title">
                  {lang === 'es' ? cat.categoryEs : cat.categoryEn}
                </h3>
                <div className="alacarte-items-list">
                  {cat.items.map((dish, dIdx) => (
                    <div key={dIdx} className="alacarte-item-row">
                      <div className="alacarte-item-info">
                        <div className="item-name-price">
                          <span className="item-name">{lang === 'es' ? dish.nameEs : dish.nameEn}</span>
                          <span className="item-price font-serif text-gold">
                            {formatPrice(dish.priceEur, dish.priceUsd)}
                          </span>
                        </div>
                        <p className="item-desc font-editorial">
                          {lang === 'es' ? dish.descEs : dish.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: SIGNATURE COCKTAILS */}
        {activeMenuTab === 'cocktails' && (
          <div className="cocktails-grid">
            {RESTAURANT_DATA.cocktails.map((cocktail, kIdx) => (
              <div key={kIdx} className="cocktail-card glass-card">
                <div className="cocktail-header">
                  <span className="gold-badge">{cocktail.badge}</span>
                  <span className="cocktail-price font-serif text-gold">
                    {formatPrice(cocktail.priceEur, cocktail.priceUsd)}
                  </span>
                </div>
                <h3 className="cocktail-name font-serif">{cocktail.name}</h3>
                <p className="cocktail-ingredients font-editorial">
                  {lang === 'es' ? cocktail.ingredientsEs : cocktail.ingredientsEn}
                </p>
                <div className="cocktail-notes">
                  <span className="notes-label">{lang === 'es' ? 'Perfil sensorial:' : 'Sensory Profile:'}</span>
                  <span className="notes-value">{cocktail.notes}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: CELLAR ICONS */}
        {activeMenuTab === 'cellar' && (
          <div className="cellar-grid">
            {RESTAURANT_DATA.cellarHighlights.map((wine, wIdx) => (
              <div key={wIdx} className="cellar-wine-card glass-card">
                <div className="wine-card-top">
                  <div className="wine-vintage-tag font-serif">{wine.vintage}</div>
                  <span className="wine-price font-serif text-gold">
                    {formatPrice(wine.priceEur, Math.round(wine.priceEur * 1.1))}
                  </span>
                </div>
                <h3 className="wine-name font-serif">{wine.name}</h3>
                <span className="wine-region">{wine.region}</span>
                <p className="wine-tasting-notes font-editorial">
                  «{wine.tastingNotes}»
                </p>
                <div className="wine-badge-row">
                  <span className="gold-badge">{lang === 'es' ? 'Cava Climatizada 14°C' : 'Guarded at 14°C'}</span>
                  <span className="gold-badge">{lang === 'es' ? 'Servicio Sommelier' : 'Sommelier Service'}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
