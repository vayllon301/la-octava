import React, { useState } from 'react';
import { GlassWater, Utensils, Wine, Disc, Music, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MenuSection({ lang, currency, onOpenReservation }) {
  const [activeTab, setActiveTab] = useState('jazz-cocktails');

  const formatPrice = (eur, usd) => {
    return currency === 'EUR' ? `${eur} €` : `$ ${usd}`;
  };

  const jazzCocktails = RESTAURANT_DATA.cocktails.filter(c => c.category === 'Jazz Bar Signature');
  const houseCocktails = RESTAURANT_DATA.cocktails.filter(c => c.category === 'Sub-Vault House');

  return (
    <section className="menu-section" id="cocteles">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Alquimia & Bocados Nocturnos' : 'Liquid Alchemy & Night Bites'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'La Carta Líquida & Gourmet' : 'Cocktails, Vinyl & Culinary Bites'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Destilados selectos ahumados con madera de roble para el piano bar y elixires energéticos de alta tensión para la pista de baile del sótano.'
              : 'Oak-smoked vintage spirits crafted for the piano lounge and high-voltage energy elixirs for the subterranean dance floor.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="menu-tab-nav">
          <button
            type="button"
            className={`menu-tab-btn ${activeTab === 'jazz-cocktails' ? 'active' : ''}`}
            onClick={() => setActiveTab('jazz-cocktails')}
          >
            <Music size={16} />
            <span>{lang === 'es' ? 'Cócteles de Piano Bar' : 'Piano Bar Cocktails'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn ${activeTab === 'house-cocktails' ? 'active' : ''}`}
            onClick={() => setActiveTab('house-cocktails')}
          >
            <Disc size={16} />
            <span>{lang === 'es' ? 'Mixología Sub-Vault House' : 'Sub-Vault Energy Libations'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn ${activeTab === 'food-bites' ? 'active' : ''}`}
            onClick={() => setActiveTab('food-bites')}
          >
            <Utensils size={16} />
            <span>{lang === 'es' ? 'Bocados Gourmet (Toda la Noche)' : 'Gourmet Bites (All Night)'}</span>
          </button>

          <button
            type="button"
            className={`menu-tab-btn ${activeTab === 'wines' ? 'active' : ''}`}
            onClick={() => setActiveTab('wines')}
          >
            <Wine size={16} />
            <span>{lang === 'es' ? 'Champagnes & Grand Crus' : 'Champagnes & Grand Crus'}</span>
          </button>
        </div>

        {/* TAB 1: JAZZ COCKTAILS */}
        {activeTab === 'jazz-cocktails' && (
          <div className="cocktails-grid">
            {jazzCocktails.map((cocktail, idx) => (
              <div key={idx} className="cocktail-card glass-card">
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
                  <span className="notes-label">{lang === 'es' ? 'Perfil acústico:' : 'Acoustic Profile:'}</span>
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
              <h3 className="alacarte-cat-title">
                {lang === 'es' ? 'Bocados Servidos Hasta las 04:00 AM' : 'Bites Served Until 04:00 AM'}
              </h3>
              <div className="alacarte-items-list">
                {RESTAURANT_DATA.foodBites.map((dish, dIdx) => (
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
          </div>
        )}

        {/* TAB 4: WINES & CHAMPAGNE */}
        {activeTab === 'wines' && (
          <div className="cellar-grid">
            {[
              { name: "Dom Pérignon Vintage 2015", region: "Champagne, Francia", vintage: "2015", priceEur: 360, notes: "Tostados, avellana y burbuja de terciopelo" },
              { name: "Krug Grande Cuvée 171ème", region: "Champagne, Francia", vintage: "Édition", priceEur: 420, notes: "Frutas confitadas, pan de especias y vibración infinita" },
              { name: "Vega Sicilia Valbuena 5°", region: "Ribera del Duero", vintage: "2018", priceEur: 240, notes: "Fruta negra madura, cedro y taninos nobles sedosos" },
              { name: "Chassagne-Montrachet 1er Cru", region: "Bourgogne, Francia", vintage: "2021", priceEur: 210, notes: "Mantequilla fresca, mineralidad y flores blancas" }
            ].map((wine, idx) => (
              <div key={idx} className="cellar-wine-card glass-card">
                <div className="wine-card-top">
                  <div className="wine-vintage-tag font-serif">{wine.vintage}</div>
                  <span className="wine-price font-serif text-gold">
                    {formatPrice(wine.priceEur, Math.round(wine.priceEur * 1.1))}
                  </span>
                </div>
                <h3 className="wine-name font-serif">{wine.name}</h3>
                <span className="wine-region">{wine.region}</span>
                <p className="wine-tasting-notes font-editorial">«{wine.notes}»</p>
                <div className="wine-badge-row">
                  <span className="gold-badge">{lang === 'es' ? 'Servicio de Cubitera de Plata' : 'Silver Ice Bucket Service'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            type="button" 
            className="btn-primary"
            onClick={() => onOpenReservation()}
          >
            <Sparkles size={16} />
            <span>{lang === 'es' ? 'Reservar Mesa o Botella VIP' : 'Reserve Table or VIP Bottle'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
