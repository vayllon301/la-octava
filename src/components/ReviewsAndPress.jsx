import React, { useState } from 'react';
import { Award, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function ReviewsAndPress({ lang }) {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const prevQuote = () => {
    setActiveQuoteIdx((prev) => (prev === 0 ? RESTAURANT_DATA.pressQuotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setActiveQuoteIdx((prev) => (prev === RESTAURANT_DATA.pressQuotes.length - 1 ? 0 : prev + 1));
  };

  const guestReviews = [
    {
      author: "Dra. Elena de Borbón-Rivas",
      role: "Crítica Gastronómica Independiente",
      roleEn: "Independent Gastronomy Critic",
      rating: 5,
      date: "Octubre 2026",
      textEs: "«La armonía entre el rodaballo con hollandaise de erizo y el Meursault 2020 fue uno de los momentos culinarios más sublimes del año. El servicio sommelier es impecable.»",
      textEn: "«The pairing between the wild turbot with sea urchin hollandaise and Meursault 2020 was one of the most sublime culinary moments of the year. Flawless sommelier execution.»"
    },
    {
      author: "Philippe de Montmirail",
      role: "Coleccionista de Vino & Miembro Gran Cava",
      roleEn: "Wine Collector & Grand Cellar Member",
      rating: 5,
      date: "Noviembre 2026",
      textEs: "«Tener mi propio casillero en la bóveda subterránea y poder disfrutar de catas a ciegas en la mesa del chef con mis clientes no tiene comparación en Europa.»",
      textEn: "«Having my personal locker in the subterranean vault and enjoying guided blind tastings at the chef's table with clients has no peer in Europe.»"
    },
    {
      author: "Valeria Santoro",
      role: "Arquitecta & Huésped de Rooftop",
      roleEn: "Architect & Rooftop Patron",
      rating: 5,
      date: "Diciembre 2026",
      textEs: "«El cóctel Octava Sinfonía con humo de romero junto a la chimenea bajo las estrellas de Madrid es un ritual obligatorio. El diseño de iluminación es pura magia.»",
      textEn: "«The Octava Sinfonía cocktail with rosemary smoke beside the fire pit under Madrid starlight is an absolute ritual. The lighting design is pure magic.»"
    }
  ];

  return (
    <section className="press-section" id="prensa">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Reconocimientos & Crítica Internacional' : 'Accolades & Global Press'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'La Opinión de los Expertos' : 'The Connoisseur Verdict'}
          </h2>
        </div>

        {/* Featured Press Carousel */}
        <div className="featured-press-card glass-card">
          <div className="press-quote-icon">
            <Quote size={40} className="text-gold" />
          </div>

          <p className="press-quote-text font-editorial">
            {lang === 'es'
              ? RESTAURANT_DATA.pressQuotes[activeQuoteIdx].quoteEs
              : RESTAURANT_DATA.pressQuotes[activeQuoteIdx].quoteEn}
          </p>

          <div className="press-quote-source font-serif">
            <Award size={18} className="text-gold" />
            <span>{RESTAURANT_DATA.pressQuotes[activeQuoteIdx].source}</span>
          </div>

          <div className="press-carousel-controls">
            <button 
              type="button" 
              className="carousel-arrow-btn"
              onClick={prevQuote}
              aria-label="Previous quote"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="carousel-dots">
              {RESTAURANT_DATA.pressQuotes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot-pill ${activeQuoteIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveQuoteIdx(idx)}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              type="button" 
              className="carousel-arrow-btn"
              onClick={nextQuote}
              aria-label="Next quote"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Guest Reviews Grid */}
        <div className="guest-reviews-grid">
          {guestReviews.map((rev, rIdx) => (
            <div key={rIdx} className="guest-review-card glass-card">
              <div className="review-stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled text-gold" fill="currentColor" />
                ))}
                <span className="review-date">{rev.date}</span>
              </div>
              <p className="review-text font-editorial">
                {lang === 'es' ? rev.textEs : rev.textEn}
              </p>
              <div className="review-author-box">
                <span className="author-name font-serif">{rev.author}</span>
                <span className="author-role">{lang === 'es' ? rev.role : rev.roleEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
