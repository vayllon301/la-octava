import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Globe, Menu, X, Calendar, Sparkles, Disc, Music } from 'lucide-react';
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
  const [audioMode, setAudioMode] = useState('jazz'); // 'jazz' or 'house'

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

  const switchAudioMode = (mode) => {
    setAudioMode(mode);
    soundEngine.setMode(mode);
    if (!isPlayingAudio) {
      soundEngine.play();
      setIsPlayingAudio(true);
    }
  };

  const navLinks = [
    { href: "#niveles", labelEs: "Los 2 Niveles", labelEn: "The 2 Levels" },
    { href: "#cartel", labelEs: "Cartel Semanal", labelEn: "Weekly Lineup" },
    { href: "#cocteles", labelEs: "Cócteles & Carta", labelEn: "Cocktails & Bites" },
    { href: "#espacios", labelEs: "Piano & Sótano", labelEn: "Spaces" },
    { href: "#membresia", labelEs: "Llave Negra VIP", labelEn: "Black Key VIP" },
    { href: "#prensa", labelEs: "Críticas", labelEn: "Press & Sound" },
    { href: "#contacto", labelEs: "Acceso & Horarios", labelEn: "Access & Hours" }
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
              {lang === 'es' ? 'Jazz Bar • House Club' : 'Jazz Bar • House Club'}
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
          {/* Dual Audio Selector (Jazz / House) */}
          <div className="audio-mode-selector">
            <button 
              type="button"
              className={`audio-btn ${isPlayingAudio && audioMode === 'jazz' ? 'active' : ''}`}
              onClick={() => {
                if (isPlayingAudio && audioMode === 'jazz') toggleSound();
                else switchAudioMode('jazz');
              }}
              title="Escuchar Jazz Piano Lounge"
            >
              <Music size={14} />
              <span className="sound-label">Jazz</span>
            </button>

            <button 
              type="button"
              className={`audio-btn ${isPlayingAudio && audioMode === 'house' ? 'active' : ''}`}
              onClick={() => {
                if (isPlayingAudio && audioMode === 'house') toggleSound();
                else switchAudioMode('house');
              }}
              title="Escuchar Sub-Vault House Beats"
            >
              <Disc size={14} />
              <span className="sound-label">House</span>
            </button>

            {isPlayingAudio && (
              <span className="sound-wave">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
              </span>
            )}
          </div>

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
            onClick={() => onOpenReservation()}
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
                <div className="brand-subtitle">Jazz & Piano Bar • Sub-Vault House Club</div>
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
                {lang === 'es' ? 'Reservar Mesa o Pase VIP' : 'Book Table or VIP Pass'}
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
                {lang === 'es' ? 'Membresía Llave Negra' : 'Black Key Membership'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
