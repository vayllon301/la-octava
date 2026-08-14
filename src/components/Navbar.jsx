import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Globe, Menu, X, Calendar, Sparkles, PhoneCall } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function Navbar({ 
  lang, 
  setLang, 
  currency, 
  setCurrency, 
  onOpenReservation, 
  onOpenMembership 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundEngine.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { href: "#concepto", labelEs: "El Concepto", labelEn: "The Concept" },
    { href: "#menu", labelEs: "Menús & Cava", labelEn: "Menus & Cellar" },
    { href: "#sommelier", labelEs: "Maridaje", labelEn: "Sommelier Flight" },
    { href: "#espacios", labelEs: "Los Espacios", labelEn: "The Spaces" },
    { href: "#membresia", labelEs: "Membresía", labelEn: "Membership" },
    { href: "#prensa", labelEs: "Críticas & Guía", labelEn: "Press & Awards" },
    { href: "#contacto", labelEs: "Ubicación", labelEn: "Contact" }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo with the icon */}
        <a href="#" className="brand-logo-wrap" id="nav-brand-logo">
          <div className="brand-icon-frame">
            <img src="/icon.jpeg" alt="La Octava Icon" className="brand-icon-img" />
          </div>
          <div className="brand-text">
            <span className="brand-title">LA OCTAVA</span>
            <span className="brand-subtitle">
              {lang === 'es' ? 'Alta Cocina & Cava' : 'Haute Cuisine & Cellar'}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="nav-link"
            >
              {lang === 'es' ? item.labelEs : item.labelEn}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="nav-actions">
          {/* Ambient Soundscape Button */}
          <button 
            type="button"
            className={`audio-btn ${isPlayingAudio ? 'active' : ''}`}
            onClick={toggleSound}
            title={isPlayingAudio ? (lang === 'es' ? "Silenciar Lounge Audio" : "Mute Lounge Audio") : (lang === 'es' ? "Activar Música Lounge" : "Play Ambient Lounge Soundscape")}
            aria-label="Toggle ambient music"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 size={16} className="text-gold" />
                <span className="sound-wave">
                  <span className="bar bar-1"></span>
                  <span className="bar bar-2"></span>
                  <span className="bar bar-3"></span>
                </span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span className="sound-label">{lang === 'es' ? 'Lounge' : 'Lounge'}</span>
              </>
            )}
          </button>

          {/* Currency Toggle */}
          <button 
            type="button" 
            className="currency-btn"
            onClick={() => setCurrency(currency === 'EUR' ? 'USD' : 'EUR')}
            title="Cambiar divisa / Change currency"
          >
            {currency === 'EUR' ? '€ EUR' : '$ USD'}
          </button>

          {/* Language Selector */}
          <button 
            type="button" 
            className="lang-btn"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            title="Cambiar idioma / Switch language"
          >
            <Globe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Quick Reserve CTA */}
          <button 
            type="button"
            id="nav-reserve-btn"
            className="btn-primary nav-reserve-cta"
            onClick={onOpenReservation}
          >
            <Calendar size={14} />
            <span>{lang === 'es' ? 'Reservar' : 'Reserve'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <div className="mobile-logo-header">
              <img src="/icon.jpeg" alt="Logo" className="mobile-drawer-icon" />
              <div>
                <div className="brand-title">LA OCTAVA</div>
                <div className="brand-subtitle">Madrid • Rooftop & Cava</div>
              </div>
            </div>

            <nav className="mobile-nav-list">
              {navLinks.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === 'es' ? item.labelEs : item.labelEn}
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-actions">
              <button 
                type="button"
                className="btn-primary mobile-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
              >
                <Calendar size={16} />
                {lang === 'es' ? 'Reservar Mesa' : 'Book a Table'}
              </button>

              <button 
                type="button"
                className="btn-secondary mobile-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMembership();
                }}
              >
                <Sparkles size={16} />
                {lang === 'es' ? 'Solicitar Membresía' : 'Private Membership'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
