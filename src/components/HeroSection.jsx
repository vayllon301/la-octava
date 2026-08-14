import React, { useState } from 'react';
import { Calendar, Users, Clock, Compass, ArrowRight, Sparkles, Award } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function HeroSection({ lang, onOpenReservation, onOpenMembership }) {
  const [selectedSpace, setSelectedSpace] = useState('salon-principal');
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedGuests, setSelectedGuests] = useState('2');
  const [selectedTime, setSelectedTime] = useState('21:00');

  const handleHeroReserve = (e) => {
    e.preventDefault();
    onOpenReservation({
      space: selectedSpace,
      date: selectedDate,
      guests: selectedGuests,
      time: selectedTime
    });
  };

  return (
    <section className="hero-section" id="inicio">
      {/* Background Image with Deep Velvet Gradient */}
      <div className="hero-bg-media">
        <img 
          src="/images/hero.jpg" 
          alt="La Octava Grand Hall Interior" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-content-container">
        {/* Floating Brand Badge with the icon */}
        <div className="hero-top-badge animate-float">
          <div className="hero-icon-emblem">
            <img src="/icon.jpeg" alt="8" className="emblem-img" />
          </div>
          <div className="badge-text-group">
            <span className="badge-kicker">HAUTE GASTRONOMIE & ROOFTOP</span>
            <span className="badge-city">MADRID • CASTELLANA 88</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-headline">
          {lang === 'es' ? (
            <>
              Donde la alta cocina, el vino de colección y la noche encuentran su <span className="text-gold-gradient">octava dimensión</span>.
            </>
          ) : (
            <>
              Where haute gastronomy, vintage grand crus, and the night meet their <span className="text-gold-gradient">eighth dimension</span>.
            </>
          )}
        </h1>

        <p className="hero-subline font-editorial">
          {lang === 'es'
            ? 'Un santuario sensorial clandestino con menú degustación de 8 pasos, bóveda subterránea de añadas míticas y terraza rooftop con fuego vivo bajo las estrellas.'
            : 'An exclusive sensory sanctuary featuring an 8-step tasting journey, subterranean cellar of historic vintages, and a starlight rooftop lounge with living fire.'}
        </p>

        {/* Hero CTAs */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn-primary hero-btn-main"
            onClick={() => onOpenReservation()}
          >
            <Calendar size={18} />
            <span>{lang === 'es' ? 'Reservar Experiencia' : 'Reserve an Experience'}</span>
            <ArrowRight size={16} />
          </button>

          <button 
            type="button" 
            className="btn-secondary hero-btn-sub"
            onClick={onOpenMembership}
          >
            <Sparkles size={16} />
            <span>{lang === 'es' ? 'El Círculo Octava Privado' : 'Private Eighth Circle'}</span>
          </button>
        </div>

        {/* Interactive Quick Booking Bar */}
        <div className="hero-booking-bar glass-card">
          <form className="booking-form-grid" onSubmit={handleHeroReserve}>
            {/* Space selector */}
            <div className="booking-field">
              <label className="field-label">
                <Compass size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Espacio & Ambiente' : 'Space & Ambiance'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedSpace}
                onChange={(e) => setSelectedSpace(e.target.value)}
              >
                <option value="salon-principal">{lang === 'es' ? 'Salón Abovedado Principal' : 'Main Vaulted Dining Hall'}</option>
                <option value="cava-subterranea">{lang === 'es' ? 'Bóveda Cava Subterránea' : 'Subterranean Wine Vault'}</option>
                <option value="rooftop-skyline">{lang === 'es' ? 'Terraza Rooftop & Cócteles' : 'Rooftop & Cocktail Terrace'}</option>
                <option value="atelier-culinario">{lang === 'es' ? "Mesa del Chef L'Atelier" : "Chef's Table L'Atelier"}</option>
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
                <span>{lang === 'es' ? 'Comensales' : 'Guests'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
              >
                <option value="1">1 {lang === 'es' ? 'Invitado' : 'Guest'}</option>
                <option value="2">2 {lang === 'es' ? 'Invitados (Mesa Íntima)' : 'Guests (Intimate Table)'}</option>
                <option value="3">3 {lang === 'es' ? 'Invitados' : 'Guests'}</option>
                <option value="4">4 {lang === 'es' ? 'Invitados' : 'Guests'}</option>
                <option value="6">6 {lang === 'es' ? 'Invitados (Mesa Gran Reserva)' : 'Guests'}</option>
                <option value="8">8 {lang === 'es' ? 'Invitados (Mesa Privada)' : 'Guests'}</option>
                <option value="12">12+ {lang === 'es' ? 'Evento Privado / Bóveda' : 'Private Vault / Event'}</option>
              </select>
            </div>

            {/* Time selector */}
            <div className="booking-field">
              <label className="field-label">
                <Clock size={14} className="text-gold" />
                <span>{lang === 'es' ? 'Turno' : 'Time'}</span>
              </label>
              <select 
                className="booking-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="13:30">13:30 - {lang === 'es' ? 'Almuerzo' : 'Lunch'}</option>
                <option value="14:30">14:30 - {lang === 'es' ? 'Almuerzo' : 'Lunch'}</option>
                <option value="20:30">20:30 - {lang === 'es' ? 'Cena Primer Turno' : 'Dinner First Seating'}</option>
                <option value="21:30">21:30 - {lang === 'es' ? 'Cena Velada' : 'Dinner Prime'}</option>
                <option value="22:30">22:30 - {lang === 'es' ? 'Noche & Cócteles' : 'Late Night Dining'}</option>
              </select>
            </div>

            {/* Submit button */}
            <div className="booking-submit-cell">
              <button type="submit" className="btn-primary booking-submit-btn">
                <span>{lang === 'es' ? 'Disponibilidad' : 'Check Table'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Key Credentials Badges */}
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
