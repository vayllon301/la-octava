import React, { useState } from 'react';
import { Calendar, Music, Disc, Clock, ArrowRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function LineupSection({ lang, onOpenReservation }) {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const currentDay = RESTAURANT_DATA.weeklyLineup[selectedDayIdx];

  const shortDaysEs = ['MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];
  const shortDaysEn = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <section className="lineup-section" id="cartel">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'Programación' : 'Weekly Lineup'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Cartel & Sesiones en Vivo' : 'Live Schedule & Selectors'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Dos experiencias musicales sincronizadas cada noche: recitales de piano y tríos de jazz en Level 01, y selectores de deep house en Level -01.'
              : 'Two synchronized musical programs every evening: live jazz in Level 01, and deep house selectors in Level -01.'}
          </p>
        </div>

        {/* Days Selector Pills */}
        <div className="lineup-days-bar">
          {RESTAURANT_DATA.weeklyLineup.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`lineup-day-btn font-mono ${selectedDayIdx === idx ? 'active' : ''}`}
              onClick={() => setSelectedDayIdx(idx)}
            >
              <span className="day-name">{lang === 'es' ? shortDaysEs[idx] : shortDaysEn[idx]}</span>
              <span className="day-full-label">{lang === 'es' ? item.dayEs : item.dayEn}</span>
            </button>
          ))}
        </div>

        {/* Featured Lineup Card */}
        <div className="lineup-card glass-card">
          <div className="lineup-card-header">
            <div className="day-title-wrap">
              <span className="gold-badge font-mono">
                <Calendar size={13} />
                <span>{lang === 'es' ? `PROGRAMA ${currentDay.dayEs.toUpperCase()}` : `${currentDay.dayEn.toUpperCase()} TIMETABLE`}</span>
              </span>
              <h3 className="lineup-curator-title font-display">
                {lang === 'es' ? 'Comisariado:' : 'Curated by:'} <span className="text-gold font-mono">{currentDay.curator}</span>
              </h3>
            </div>

            <button
              type="button"
              className="btn-primary lineup-book-btn font-mono"
              onClick={() => onOpenReservation({ day: currentDay.dayEs })}
            >
              <span>{lang === 'es' ? `Reservar ${currentDay.dayEs}` : `Book ${currentDay.dayEn}`}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="lineup-dual-grid">
            {/* Upstairs Jazz Card */}
            <div className="lineup-stage-box stage-jazz">
              <div className="stage-top-tag">
                <div className="stage-badge font-mono">
                  <Music size={14} className="text-gold" />
                  <span>LEVEL 01 • JAZZ & PIANO BAR</span>
                </div>
                <div className="stage-time font-mono text-gold">
                  <Clock size={13} />
                  <span>{currentDay.jazzTime}</span>
                </div>
              </div>

              <h4 className="stage-artist-name font-display">
                {lang === 'es' ? currentDay.jazzActEs : currentDay.jazzActEn}
              </h4>

              <p className="stage-artist-desc">
                {lang === 'es' 
                  ? 'Sesiones acústicas en directo con nuestro Steinway D-274 de gran cola, contrabajo y vocalistas invitados.' 
                  : 'Live acoustic sessions featuring our Steinway D-274 concert grand, upright bass, and guest vocalists.'}
              </p>

              <div className="stage-perks-row font-mono">
                <span className="gold-badge">{lang === 'es' ? 'Servicio de mesa & cócteles' : 'Table cocktail service'}</span>
                <span className="gold-badge">{lang === 'es' ? 'Carta gourmet disponible' : 'Gourmet bites available'}</span>
              </div>
            </div>

            {/* Downstairs House Club Card */}
            <div className="lineup-stage-box stage-club">
              <div className="stage-top-tag">
                <div className="stage-badge font-mono">
                  <Disc size={14} className="text-gold" />
                  <span>LEVEL -01 • SUB-LEVEL CLUB</span>
                </div>
                <div className="stage-time font-mono text-gold">
                  <Clock size={13} />
                  <span>{currentDay.clubTime}</span>
                </div>
              </div>

              <h4 className="stage-artist-name font-display">
                {lang === 'es' ? currentDay.clubActEs : currentDay.clubActEn}
              </h4>

              <p className="stage-artist-desc">
                {lang === 'es'
                  ? 'Sesiones continuas de vinilo y directos electrónicos. Sistema acústico Funktion-One y atmósferas envolventes.'
                  : 'Vinyl sessions and live electronic sets inside the brutalist sub-level. Funktion-One precision sound.'}
              </p>

              <div className="stage-perks-row font-mono">
                <span className="gold-badge">{lang === 'es' ? 'Funktion-One System' : 'Funktion-One System'}</span>
                <span className="gold-badge">{lang === 'es' ? 'Acceso preferente con lista' : 'Priority guestlist entry'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
