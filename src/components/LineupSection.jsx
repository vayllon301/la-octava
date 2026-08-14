import React, { useState } from 'react';
import { Calendar, Music, Disc, Clock, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function LineupSection({ lang, onOpenReservation }) {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const currentDay = RESTAURANT_DATA.weeklyLineup[selectedDayIdx];

  return (
    <section className="lineup-section" id="cartel">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Programación en Vivo' : 'Live Music Timetable'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'El Cartel Semanal de La Octava' : 'The Weekly Artist Lineup'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Dos programaciones simultáneas cada noche: recitales de piano y cuartetos de jazz en el piso principal, seguidos de los mejores selectores de deep house en el sótano.'
              : 'Two curated programs every evening: grand piano solos and jazz quartets upstairs, followed by premier deep house selectors below.'}
          </p>
        </div>

        {/* Days Selector Pills */}
        <div className="lineup-days-bar">
          {RESTAURANT_DATA.weeklyLineup.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`lineup-day-btn ${selectedDayIdx === idx ? 'active' : ''}`}
              onClick={() => setSelectedDayIdx(idx)}
            >
              <span className="day-name font-serif">{lang === 'es' ? item.dayEs : item.dayEn}</span>
              <span className="day-dot"></span>
            </button>
          ))}
        </div>

        {/* Featured Lineup Card */}
        <div className="lineup-card glass-card">
          <div className="lineup-card-header">
            <div className="day-title-wrap">
              <span className="gold-badge">
                <Calendar size={14} />
                <span>{lang === 'es' ? `PROGRAMA DEL ${currentDay.dayEs.toUpperCase()}` : `${currentDay.dayEn.toUpperCase()} PROGRAM`}</span>
              </span>
              <h3 className="lineup-curator-title font-serif">
                {lang === 'es' ? 'Comisariado por:' : 'Curated by:'} <span className="text-gold">{currentDay.curator}</span>
              </h3>
            </div>

            <button
              type="button"
              className="btn-primary lineup-book-btn"
              onClick={() => onOpenReservation({ day: currentDay.dayEs })}
            >
              <span>{lang === 'es' ? `Reservar para el ${currentDay.dayEs}` : `Book for ${currentDay.dayEn}`}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="lineup-dual-grid">
            {/* Upstairs Jazz Card */}
            <div className="lineup-stage-box stage-jazz">
              <div className="stage-top-tag">
                <div className="stage-badge font-serif">
                  <Music size={16} className="text-gold" />
                  <span>PISO 01 • PIANO & JAZZ BAR</span>
                </div>
                <div className="stage-time font-serif text-gold">
                  <Clock size={14} />
                  <span>{currentDay.jazzTime}</span>
                </div>
              </div>

              <h4 className="stage-artist-name font-serif">
                {lang === 'es' ? currentDay.jazzActEs : currentDay.jazzActEn}
              </h4>

              <p className="stage-artist-desc font-editorial">
                {lang === 'es' 
                  ? 'Afinación en directo en nuestro Steinway D-274 de gran cola, con tríos acústicos de contrabajo, saxo tenor y cantantes invitados.' 
                  : 'Live concert performance on our Steinway D-274 grand piano featuring upright acoustic bass, tenor sax, and guest vocalists.'}
              </p>

              <div className="stage-perks-row">
                <span className="gold-badge">{lang === 'es' ? 'Mesas con servicio de cócteles' : 'Table cocktail service'}</span>
                <span className="gold-badge">{lang === 'es' ? 'Carta de bocados disponible' : 'Gourmet bites available'}</span>
              </div>
            </div>

            {/* Downstairs House Club Card */}
            <div className="lineup-stage-box stage-club">
              <div className="stage-top-tag">
                <div className="stage-badge font-serif">
                  <Disc size={16} className="text-gold" />
                  <span>NIVEL -01 • SUB-VAULT HOUSE CLUB</span>
                </div>
                <div className="stage-time font-serif text-gold">
                  <Clock size={14} />
                  <span>{currentDay.clubTime}</span>
                </div>
              </div>

              <h4 className="stage-artist-name font-serif">
                {lang === 'es' ? currentDay.clubActEs : currentDay.clubActEn}
              </h4>

              <p className="stage-artist-desc font-editorial">
                {lang === 'es'
                  ? 'Sesiones envolventes de vinilo y directos en el sótano abovedado. Potencia sonora Funktion-One y atmósferas oscuras de club berlinés.'
                  : 'Immersive vinyl-only sessions and live sets inside the subterranean brick vault. Funktion-One precision sound.'}
              </p>

              <div className="stage-perks-row">
                <span className="gold-badge">{lang === 'es' ? 'Sonido Funktion-One Custom' : 'Custom Funktion-One Sound'}</span>
                <span className="gold-badge">{lang === 'es' ? 'Acceso preferente con lista' : 'Priority guestlist entry'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
