import React, { useState } from 'react';
import { Utensils, Wine, Disc, Music, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MenuSection({ lang, currency, onOpenReservation }) {
  const [activeTab, setActiveTab] = useState('jazz-cocktails');

  const formatPrice = (eur, usd) => {
    return currency === 'EUR' ? `${eur} €` : `$ ${usd}`;
  };

  const jazzCocktails = RESTAURANT_DATA.cocktails.filter(c => c.category === 'Jazz Bar Signature');
  const houseCocktails = RESTAURANT_DATA.cocktails.filter(c => c.category === 'Sub-Vault House' || c.category === 'Sub-Level House');

  return (
    <section className="menu-section" id="cocteles">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'Carta Líquida & Bocados' : 'Drinks & Night Bites'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Mixología de Precisión & Cocina' : 'Craft Mixology & Raw Bar'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Destilados nobles clarificados, hielo artesano y bocados selectos servidos toda la noche en ambos niveles.'
              : 'Clarified noble spirits, hand-carved ice, and refined nocturnal bites served across both levels.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu-tab-nav">
          <button
            type="button"
            className={`menu-tab-btn font-mono ${activeTab === 'jazz-cocktails' ? 'active' : ''}`}
            onClick={() => setActiveTab('jazz-cocktails')}
          >
            <Music size={14} />
            <span>{lang === 'es' ? 'Level 01 Cocktails' : 'Level 01 Cocktails'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn font-mono ${activeTab === 'house-cocktails' ? 'active' : ''}`}
            onClick={() => setActiveTab('house-cocktails')}
          >
            <Disc size={14} />
            <span>{lang === 'es' ? 'Level -01 Sub-Level' : 'Level -01 Sub-Level'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn font-mono ${activeTab === 'food-bites' ? 'active' : ''}`}
            onClick={() => setActiveTab('food-bites')}
          >
            <Utensils size={14} />
            <span>{lang === 'es' ? 'Bocados Gourmet' : 'Gourmet Bites'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn font-mono ${activeTab === 'wines' ? 'active' : ''}`}
            onClick={() => setActiveTab('wines')}
          >
            <Wine size={14} />
            <span>{lang === 'es' ? 'Champagnes & Wines' : 'Champagnes & Wines'}</span>
          </button>
        </div>

        {/* TAB 1: JAZZ COCKTAILS */}
        {activeTab === 'jazz-cocktails' && (
          <div className="cocktails-grid">
            {jazzCocktails.map((cocktail, idx) => (
              <div key={idx} className="cocktail-card glass-card">
                <div className="cocktail-header">
                  <span className="gold-badge font-mono">{cocktail.badge}</span>
                  <span className="cocktail-price font-mono text-gold">
                    {formatPrice(cocktail.priceEur, cocktail.priceUsd)}
                  </span>
                </div>
                <h3 className="cocktail-name font-display">{cocktail.name}</h3>
                <p className="cocktail-ingredients">
                  {lang === 'es' ? cocktail.ingredientsEs : cocktail.ingredientsEn}
                </p>
                <div className="cocktail-notes font-mono">
                  <span className="notes-label">{lang === 'es' ? 'Perfil:' : 'Profile:'}</span>
                  <span className="notes-value">{cocktail.notes}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: HOUSE COCKTAILS */}
        {activeTab === 'house-cocktails' && (
          <div className="cocktails-grid">
            {houseCocktails.map((cocktail, idx) => (
              <div key={idx} className="cocktail-card glass-card">
                <div className="cocktail-header">
                  <span className="gold-badge font-mono">{cocktail.badge}</span>
                  <span className="cocktail-price font-mono text-gold">
                    {formatPrice(cocktail.priceEur, cocktail.priceUsd)}
                  </span>
                </div>
                <h3 className="cocktail-name font-display">{cocktail.name}</h3>
                <p className="cocktail-ingredients">
                  {lang === 'es' ? cocktail.ingredientsEs : cocktail.ingredientsEn}
                </p>
                <div className="cocktail-notes font-mono">
                  <span className="notes-label">{lang === 'es' ? 'Frecuencia:' : 'Frequency:'}</span>
                  <span className="notes-value">{cocktail.notes}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: FOOD BITES */}
        {activeTab === 'food-bites' && (
          <div className="alacarte-grid">
            <div className="alacarte-category-card glass-card" style={{ gridColumn: '1 / -1' }}>
              <h3 className="alacarte-cat-title font-display">
                {lang === 'es' ? 'Cocina & Raw Bar (Servicio Continuo)' : 'Kitchen & Raw Bar (Continuous Service)'}
              </h3>
              <div className="alacarte-items-list">
                {RESTAURANT_DATA.foodBites.map((dish, dIdx) => (
                  <div key={dIdx} className="alacarte-item-row">
                    <div className="alacarte-item-info">
                      <div className="item-name-price">
                        <span className="item-name font-display">{lang === 'es' ? dish.nameEs : dish.nameEn}</span>
                        <span className="item-price font-mono text-gold">
                          {formatPrice(dish.priceEur, dish.priceUsd)}
                        </span>
                      </div>
                      <p className="item-desc">
                        {lang === 'es' ? dish.descEs : dish.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WINES & CHAMPAGNE */}
        {activeTab === 'wines' && (
          <div className="cellar-grid">
            {[
              { name: "Dom Pérignon Vintage 2015", region: "Champagne, Francia", vintage: "2015", priceEur: 360, notes: "Brioche, avellana tostada y burbuja fina" },
              { name: "Krug Grande Cuvée 171ème", region: "Champagne, Francia", vintage: "Édition", priceEur: 420, notes: "Fruta confitada, jengibre y acidez vibrante" },
              { name: "Vega Sicilia Valbuena 5°", region: "Ribera del Duero", vintage: "2018", priceEur: 240, notes: "Cedro, fruta negra y taninos sedosos" },
              { name: "Chassagne-Montrachet 1er Cru", region: "Bourgogne, Francia", vintage: "2021", priceEur: 210, notes: "Mineralidad, flor blanca y frescura pura" }
            ].map((wine, idx) => (
              <div key={idx} className="cellar-wine-card glass-card">
                <div className="wine-card-top">
                  <div className="wine-vintage-tag font-mono">{wine.vintage}</div>
                  <span className="wine-price font-mono text-gold">
                    {formatPrice(wine.priceEur, Math.round(wine.priceEur * 1.1))}
                  </span>
                </div>
                <h3 className="wine-name font-display">{wine.name}</h3>
                <span className="wine-region font-mono">{wine.region}</span>
                <p className="wine-tasting-notes">«{wine.notes}»</p>
                <div className="wine-badge-row font-mono">
                  <span className="gold-badge">{lang === 'es' ? 'Servicio en Mesa' : 'Table Service'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button 
            type="button" 
            className="btn-primary font-mono"
            onClick={() => onOpenReservation()}
          >
            <Sparkles size={14} />
            <span>{lang === 'es' ? 'Reservar Mesa o Botella VIP' : 'Reserve Table or VIP Bottle'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
