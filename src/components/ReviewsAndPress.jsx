import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
      author: "Alexandre R.",
      role: "Architect & Vinyl Collector",
      roleEn: "Architect & Vinyl Collector",
      rating: 5,
      date: "Madrid • 2026",
      textEs: "«El tratamiento acústico con lamas de roble y el Steinway D-274 crean un sonido increíblemente cálido. Es el listening bar definitivo en la ciudad.»",
      textEn: "«The acoustic wood slats and Steinway D-274 create an astonishingly warm sound. The definitive listening bar in the city.»"
    },
    {
      author: "Marc V.",
      role: "Music Producer & DJ",
      roleEn: "Music Producer & DJ",
      rating: 5,
      date: "Berlin / Madrid",
      textEs: "«El Sub-Level tiene ese espíritu brutalista y la precisión de Funktion-One que solo encuentras en los mejores clubs de Berlín o Londres.»",
      textEn: "«The Sub-Level delivers brutalist aesthetics and Funktion-One precision on par with top-tier clubs in Berlin or London.»"
    },
    {
      author: "Carla D.",
      role: "Creative Director",
      roleEn: "Creative Director",
      rating: 5,
      date: "Madrid",
      textEs: "«Empezar la noche con un highball clarificado escuchando jazz en directo y bajar a bailar house sin salir del edificio es insuperable.»",
      textEn: "«Starting the night with a clarified highball at the jazz lounge and moving downstairs for deep house without leaving the building is unmatched.»"
    }
  ];

  return (
    <section className="press-section" id="prensa">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'Prensa & Crítica' : 'Press & Sound Recognition'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Reconocimiento Internacional' : 'Sound & Culture Reviews'}
          </h2>
        </div>

        {/* Featured Press Carousel */}
        <div className="featured-press-card glass-card">
          <p className="press-quote-text font-display">
            {lang === 'es'
              ? RESTAURANT_DATA.pressQuotes[activeQuoteIdx].quoteEs
              : RESTAURANT_DATA.pressQuotes[activeQuoteIdx].quoteEn}
          </p>

          <div className="press-quote-source font-mono text-gold">
            <span>{RESTAURANT_DATA.pressQuotes[activeQuoteIdx].source}</span>
          </div>

          <div className="press-carousel-controls">
            <button 
              type="button" 
              className="carousel-arrow-btn"
              onClick={prevQuote}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="carousel-dots">
              {RESTAURANT_DATA.pressQuotes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot-pill ${activeQuoteIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveQuoteIdx(idx)}
                  aria-label={`Go to ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              type="button" 
              className="carousel-arrow-btn"
              onClick={nextQuote}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Guest Reviews Grid */}
        <div className="guest-reviews-grid">
          {guestReviews.map((rev, rIdx) => (
            <div key={rIdx} className="guest-review-card glass-card">
              <div className="review-stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={13} className="star-filled text-gold" fill="currentColor" />
                ))}
                <span className="review-date font-mono">{rev.date}</span>
              </div>
              <p className="review-text">
                {lang === 'es' ? rev.textEs : rev.textEn}
              </p>
              <div className="review-author-box">
                <span className="author-name font-display">{rev.author}</span>
                <span className="author-role font-mono">{lang === 'es' ? rev.role : rev.roleEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
