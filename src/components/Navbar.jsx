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
      if (window.scrollY > 30) {
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
    { href: "#niveles", labelEs: "Niveles", labelEn: "Levels" },
    { href: "#cartel", labelEs: "Lineup", labelEn: "Lineup" },
    { href: "#cocteles", labelEs: "Drinks & Bites", labelEn: "Drinks & Bites" },
    { href: "#espacios", labelEs: "Espacios", labelEn: "Spaces" },
    { href: "#membresia", labelEs: "Black Key", labelEn: "Black Key" },
    { href: "#prensa", labelEs: "Press", labelEn: "Press" },
    { href: "#contacto", labelEs: "Info & Puertas", labelEn: "Access" }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo with modern minimalist lockup */}
        <a href="#" className="brand-logo-wrap" id="nav-brand-logo">
          <div className="brand-icon-frame">
            <img src="/icon.jpeg" alt="La Octava" className="brand-icon-img" />
          </div>
          <div className="brand-text">
            <span className="brand-title">LA OCTAVA</span>
            <span className="brand-subtitle font-mono">MADRID • 01 / -01</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="nav-link font-mono"
            >
              {lang === 'es' ? item.labelEs : item.labelEn}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="nav-actions">
          {/* Dual Audio Selector */}
          <div className="audio-mode-selector">
            <button 
              type="button"
              className={`audio-btn ${isPlayingAudio && audioMode === 'jazz' ? 'active' : ''}`}
              onClick={() => {
                if (isPlayingAudio && audioMode === 'jazz') toggleSound();
                else switchAudioMode('jazz');
              }}
              title="Acoustic Jazz Piano"
            >
              <Music size={13} />
              <span className="sound-label">Jazz</span>
            </button>

            <button 
              type="button"
              className={`audio-btn ${isPlayingAudio && audioMode === 'house' ? 'active' : ''}`}
              onClick={() => {
                if (isPlayingAudio && audioMode === 'house') toggleSound();
                else switchAudioMode('house');
              }}
              title="Sub-Level Deep House"
            >
              <Disc size={13} />
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
            className="currency-btn font-mono"
            onClick={() => setCurrency(currency === 'EUR' ? 'USD' : 'EUR')}
          >
            {currency === 'EUR' ? 'EUR' : 'USD'}
          </button>

          {/* Language Selector */}
          <button 
            type="button" 
            className="lang-btn font-mono"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          >
            <Globe size={13} />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Reserve CTA */}
          <button 
            type="button"
            id="nav-reserve-btn"
            className="btn-primary nav-reserve-cta"
            onClick={() => onOpenReservation()}
          >
            <Calendar size={13} />
            <span>{lang === 'es' ? 'Reservar' : 'Book'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
                <div className="brand-subtitle font-mono">Level 01 Piano Bar • Level -01 House Club</div>
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
                <Calendar size={15} />
                {lang === 'es' ? 'Reservar Mesa o Guestlist' : 'Book Table or Guestlist'}
              </button>

              <button 
                type="button"
                className="btn-secondary mobile-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMembership();
                }}
              >
                <Sparkles size={15} />
                {lang === 'es' ? 'Black Key Membership' : 'Black Key Membership'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
