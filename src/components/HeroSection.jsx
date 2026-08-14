import React, { useState } from 'react';
import { Calendar, Users, Clock, Music, Disc, ArrowRight, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function HeroSection({ lang, onOpenReservation, onOpenMembership }) {
  const [activeLevel, setActiveLevel] = useState('piano');
  const [selectedExperience, setSelectedExperience] = useState('piano-table');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedGuests, setSelectedGuests] = useState('2');
  const [selectedTime, setSelectedTime] = useState('21:00');

  const handleHeroReserve = (e) => {
    e.preventDefault();
    onOpenReservation({
      space: selectedExperience,
      date: selectedDate,
      guests: selectedGuests,
      time: selectedTime,
      level: activeLevel
    });
  };

  return (
    <section className="hero-section" id="inicio">
      {/* Background Image with Smooth Fade */}
      <div className="hero-bg-media">
        <img 
          src={activeLevel === 'piano' ? '/images/piano.jpg' : '/images/club.jpg'} 
          alt={activeLevel === 'piano' ? 'La Octava Modern Jazz & Piano Bar' : 'La Octava Sub-Level House Club'} 
          className="hero-bg-img"
          key={activeLevel}
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-content-container">
        {/* Modern Level Switcher Toggle */}
        <div className="hero-level-switcher glass-card">
          <button
            type="button"
            className={`level-switch-btn ${activeLevel === 'piano' ? 'active' : ''}`}
            onClick={() => {
              setActiveLevel('piano');
              setSelectedExperience('piano-table');
            }}
          >
            <Music size={14} />
            <div className="switch-text font-mono">
              <span className="switch-level">LEVEL 01</span>
              <span className="switch-name">{lang === 'es' ? 'Jazz & Piano Bar' : 'Jazz & Piano Bar'}</span>
            </div>
          </button>

          <button
            type="button"
            className={`level-switch-btn ${activeLevel === 'club' ? 'active' : ''}`}
            onClick={() => {
              setActiveLevel('club');
              setSelectedExperience('club-subvault');
            }}
          >
            <Disc size={14} />
            <div className="switch-text font-mono">
              <span className="switch-level">LEVEL -01</span>
              <span className="switch-name">{lang === 'es' ? 'Sub-Level House Club' : 'Sub-Level House Club'}</span>
            </div>
          </button>
        </div>

        {/* Minimal Pill Badge */}
        <div className="hero-top-badge">
          <div className="hero-icon-emblem">
            <img src="/icon.jpeg" alt="8" className="emblem-img" />
          </div>
          <div className="badge-text-group font-mono">
            <span className="badge-kicker">
              {activeLevel === 'piano' ? 'MODERN ACOUSTIC JAZZ & PIANO LOUNGE' : 'ARCHITECTURAL SUB-LEVEL HOUSE CLUB'}
            </span>
            <span className="badge-city">MADRID • CASTELLANA 88</span>
          </div>
        </div>

        {/* Minimalist Hero Headline */}
        <h1 className="hero-headline font-display">
          {activeLevel === 'piano' ? (
            lang === 'es' ? (
              <>
                El sonido puro del <span className="text-gold-gradient">Steinway</span> y la coctelería contemporánea.
              </>
            ) : (
              <>
                Pure <span className="text-gold-gradient">Steinway</span> acoustics and contemporary craft mixology.
              </>
            )
          ) : (
            lang === 'es' ? (
              <>
                Arquitectura brutalista y <span className="text-gold-gradient">Deep House</span> bajo tierra.
              </>
            ) : (
              <>
                Architectural concrete and <span className="text-gold-gradient">Deep House</span> soundscapes.
              </>
            )
          )}
        </h1>

        <p className="hero-subline">
          {activeLevel === 'piano'
            ? (lang === 'es' 
                ? 'Un listening bar contemporáneo con directos diarios en piano de gran cola, diseño acústico en madera y destilados de precisión.' 
                : 'A contemporary listening bar with daily live grand piano jazz, architectural acoustic wood slats, and precision spirits.')
            : (lang === 'es'
                ? 'El espacio de clubbing más depurado de Madrid: ingeniería acústica Funktion-One, iluminación lineal y cultura electrónica sin concesiones.'
                : 'Madrid’s most refined electronic sanctuary: custom Funktion-One sound design, linear lighting, and uncompromising deep house.')}
        </p>

        {/* Minimal Hero CTAs */}
        <div className="hero-cta-group font-mono">
          <button 
            type="button" 
            className="btn-primary hero-btn-main"
            onClick={() => onOpenReservation({ level: activeLevel })}
          >
            <Calendar size={15} />
            <span>
              {activeLevel === 'piano'
                ? (lang === 'es' ? 'Reservar Mesa Piano Bar' : 'Reserve Piano Bar Table')
                : (lang === 'es' ? 'Guestlist & Mesas Sub-Level' : 'Guestlist & Sub-Level Tables')}
            </span>
            <ArrowRight size={14} />
          </button>

          <button 
            type="button" 
            className="btn-secondary hero-btn-sub"
            onClick={onOpenMembership}
          >
            <Sparkles size={14} />
            <span>{lang === 'es' ? 'Black Key Membership' : 'Black Key Membership'}</span>
          </button>
        </div>

        {/* Minimalist Quick Booking Bar */}
        <div className="hero-booking-bar glass-card">
          <form className="booking-form-grid" onSubmit={handleHeroReserve}>
            <div className="booking-field">
              <label className="field-label font-mono">
                <Music size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Espacio' : 'Space'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option value="piano-table">{lang === 'es' ? 'Mesa Frente al Piano (Directo)' : 'Steinway Piano-Side Table'}</option>
                <option value="velvet-booth">{lang === 'es' ? 'Lounge & Barra de Vinilo' : 'Vinyl Bar & Lounge'}</option>
                <option value="club-subvault">{lang === 'es' ? 'Acceso Sub-Level House' : 'Sub-Level House Entry'}</option>
                <option value="vip-dj-booth">{lang === 'es' ? 'Mesa VIP Cabina DJ' : 'VIP DJ Booth Table'}</option>
              </select>
            </div>

            <div className="booking-field">
              <label className="field-label font-mono">
                <Calendar size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Fecha' : 'Date'}</span>
              </label>
              <input 
                type="date" 
                className="booking-input font-mono"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>

            <div className="booking-field">
              <label className="field-label font-mono">
                <Users size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Personas' : 'Guests'}</span>
              </label>
              <select 
                className="booking-select font-mono"
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
              >
                <option value="1">1 {lang === 'es' ? 'persona' : 'guest'}</option>
                <option value="2">2 {lang === 'es' ? 'personas' : 'guests'}</option>
                <option value="4">4 {lang === 'es' ? 'personas' : 'guests'}</option>
                <option value="6">6 {lang === 'es' ? 'personas' : 'guests'}</option>
                <option value="8">8+ {lang === 'es' ? 'grupo VIP' : 'VIP group'}</option>
              </select>
            </div>

            <div className="booking-field">
              <label className="field-label font-mono">
                <Clock size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Hora' : 'Time'}</span>
              </label>
              <select 
                className="booking-select font-mono"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="20:00">20:00 - {lang === 'es' ? 'Apertura' : 'Opening'}</option>
                <option value="21:00">21:00 - {lang === 'es' ? 'Set 1' : 'Set 1'}</option>
                <option value="22:30">22:30 - {lang === 'es' ? 'Set 2' : 'Set 2'}</option>
                <option value="00:00">00:00 - {lang === 'es' ? 'Sub-Level House' : 'Sub-Level'}</option>
                <option value="01:30">01:30 - {lang === 'es' ? 'Late Hours' : 'Late'}</option>
              </select>
            </div>

            <div className="booking-submit-cell">
              <button type="submit" className="btn-primary booking-submit-btn">
                <span>{lang === 'es' ? 'Reservar' : 'Book'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>

        {/* Minimalist Metrics Strip */}
        <div className="hero-stats-row">
          {RESTAURANT_DATA.stats.map((stat, idx) => (
            <div key={idx} className="stat-pill">
              <span className="stat-num text-gold font-mono">{stat.value}</span>
              <span className="stat-desc font-mono">{lang === 'es' ? stat.labelEs : stat.labelEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
