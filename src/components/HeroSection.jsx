import React, { useState } from 'react';
import { Calendar, Users, Clock, Music, Disc, ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function HeroSection({ lang, onOpenReservation, onOpenMembership }) {
  const [activeLevel, setActiveLevel] = useState('piano'); // 'piano' or 'club'
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
      {/* Dynamic Background Image with Smooth Fade */}
      <div className="hero-bg-media">
        <img 
          src={activeLevel === 'piano' ? '/images/piano.jpg' : '/images/club.jpg'} 
          alt={activeLevel === 'piano' ? 'La Octava Jazz & Piano Bar' : 'La Octava Sub-Vault House Club'} 
          className="hero-bg-img"
          key={activeLevel}
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-content-container">
        {/* Dual Level Switcher Toggle */}
        <div className="hero-level-switcher glass-card">
          <button
            type="button"
            className={`level-switch-btn ${activeLevel === 'piano' ? 'active' : ''}`}
            onClick={() => {
              setActiveLevel('piano');
              setSelectedExperience('piano-table');
            }}
          >
            <Music size={16} />
            <div className="switch-text">
              <span className="switch-level">NIVEL 01</span>
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
            <Disc size={16} />
            <div className="switch-text">
              <span className="switch-level">NIVEL -01</span>
              <span className="switch-name">{lang === 'es' ? 'Sub-Vault House Club' : 'Sub-Vault House Club'}</span>
            </div>
          </button>
        </div>

        {/* Floating Brand Badge */}
        <div className="hero-top-badge animate-float">
          <div className="hero-icon-emblem">
            <img src="/icon.jpeg" alt="8" className="emblem-img" />
          </div>
          <div className="badge-text-group">
            <span className="badge-kicker">
              {activeLevel === 'piano' ? 'LIVE ACOUSTIC JAZZ & PIANO LOUNGE' : 'SUBTERRANEAN HOUSE MUSIC CLUB'}
            </span>
            <span className="badge-city">MADRID • CASTELLANA 88 • 19:00 – 06:00</span>
          </div>
        </div>

        {/* Dynamic Hero Headline */}
        <h1 className="hero-headline">
          {activeLevel === 'piano' ? (
            lang === 'es' ? (
              <>
                Donde el sonido del <span className="text-gold-gradient">Steinway</span> y la coctelería de terciopelo se funden con la noche.
              </>
            ) : (
              <>
                Where the resonance of the <span className="text-gold-gradient">Steinway</span> and velvet cocktails melt into the night.
              </>
            )
          ) : (
            lang === 'es' ? (
              <>
                Bajo las bóvedas centenarias, el <span className="text-gold-gradient">Deep House</span> late hasta el amanecer.
              </>
            ) : (
              <>
                Beneath historic brick vaults, <span className="text-gold-gradient">Deep House</span> pulses until dawn.
              </>
            )
          )}
        </h1>

        <p className="hero-subline font-editorial">
          {activeLevel === 'piano'
            ? (lang === 'es' 
                ? 'Un íntimo piano bar de terciopelo burdeos con conciertos acústicos de jazz en directo, ostras, bocados gourmet y destilados de colección.' 
                : 'An intimate merlot-velvet piano bar with live acoustic jazz quartets, oysters, gourmet bites, and collectible spirits.')
            : (lang === 'es'
                ? 'El templo subterráneo de la música electrónica madrileña: sonido Funktion-One personalizado, niebla roja y sets de Deep & Melodic House.'
                : 'Madrid’s subterranean sanctuary for electronic music: custom Funktion-One acoustics, crimson haze, and hypnotic deep house.')}
        </p>

        {/* Hero CTAs */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn-primary hero-btn-main"
            onClick={() => onOpenReservation({ level: activeLevel })}
          >
            <Calendar size={18} />
            <span>
              {activeLevel === 'piano'
                ? (lang === 'es' ? 'Reservar Mesa en Piano Bar' : 'Reserve Piano Bar Table')
                : (lang === 'es' ? 'Lista & Mesas VIP Sub-Vault' : 'Guestlist & Sub-Vault VIP')}
            </span>
            <ArrowRight size={16} />
          </button>

          <button 
            type="button" 
            className="btn-secondary hero-btn-sub"
            onClick={onOpenMembership}
          >
            <Sparkles size={16} />
            <span>{lang === 'es' ? 'Llave Negra VIP (Acceso a Ambos Pisos)' : 'Black Key VIP (All-Access Pass)'}</span>
          </button>
        </div>

        {/* Interactive Quick Booking Bar */}
        <div className="hero-booking-bar glass-card">
          <form className="booking-form-grid" onSubmit={handleHeroReserve}>
            {/* Experience Selector */}
            <div className="booking-field">
              <label className="field-label">
                <Music size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Espacio & Ambiente' : 'Space & Mood'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option value="piano-table">{lang === 'es' ? 'Mesa Frente al Piano (Jazz en Vivo)' : 'Steinway Piano-Side Table'}</option>
                <option value="velvet-booth">{lang === 'es' ? 'Reservado de Terciopelo Burdeos' : 'Velvet Merlot Booth'}</option>
                <option value="club-subvault">{lang === 'es' ? 'Acceso General Sub-Vault House' : 'Sub-Vault House Club Entry'}</option>
                <option value="vip-dj-booth">{lang === 'es' ? 'Mesa VIP Cabina DJ / Backstage' : 'VIP DJ Booth / Backstage Table'}</option>
              </select>
            </div>

            {/* Date selector */}
            <div className="booking-field">
              <label className="field-label">
                <Calendar size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Fecha' : 'Date'}</span>
              </label>
              <input 
                type="date" 
                className="booking-input"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>

            {/* Guests selector */}
            <div className="booking-field">
              <label className="field-label">
                <Users size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Invitados' : 'Guests'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
              >
                <option value="1">1 {lang === 'es' ? 'Persona' : 'Guest'}</option>
                <option value="2">2 {lang === 'es' ? 'Personas (Mesa Íntima)' : 'Guests'}</option>
                <option value="4">4 {lang === 'es' ? 'Personas (Sofá Lounge)' : 'Guests'}</option>
                <option value="6">6 {lang === 'es' ? 'Personas (Mesa Grupo)' : 'Guests'}</option>
                <option value="8">8+ {lang === 'es' ? 'Reservado VIP Privado' : 'VIP Private Table'}</option>
              </select>
            </div>

            {/* Time selector */}
            <div className="booking-field">
              <label className="field-label">
                <Clock size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Horario' : 'Time'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="20:00">20:00 - {lang === 'es' ? 'Apertura & Cocktail Hour' : 'Opening & Cocktails'}</option>
                <option value="21:00">21:00 - {lang === 'es' ? 'Live Jazz Primer Pase' : 'Live Jazz First Set'}</option>
                <option value="22:30">22:30 - {lang === 'es' ? 'Live Jazz Midnight Set' : 'Live Jazz Late Set'}</option>
                <option value="00:00">00:00 - {lang === 'es' ? 'Sub-Vault House Opening' : 'Sub-Vault House Opening'}</option>
                <option value="01:30">01:30 - {lang === 'es' ? 'Sub-Vault Peak Hours' : 'Sub-Vault Peak Hours'}</option>
              </select>
            </div>

            {/* Submit button */}
            <div className="booking-submit-cell">
              <button type="submit" className="btn-primary booking-submit-btn">
                <span>{lang === 'es' ? 'Ver Pases' : 'Get Passes'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Live Lineup Ticker Banner */}
        <div className="hero-stats-row">
          {RESTAURANT_DATA.stats.map((stat, idx) => (
            <div key={idx} className="stat-pill">
              <span className="stat-num text-gold font-serif">{stat.value}</span>
              <span className="stat-desc">{lang === 'es' ? stat.labelEs : stat.labelEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
