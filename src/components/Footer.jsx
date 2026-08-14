import React, { useState } from 'react';
import { ArrowUp, Mail, Check } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function Footer({ lang, onOpenReservation, onOpenMembership }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Newsletter Banner */}
        <div className="footer-newsletter-banner glass-card">
          <div className="newsletter-text">
            <h3 className="newsletter-title font-display">
              {lang === 'es' ? 'La Octava Guestlist' : 'La Octava Guestlist'}
            </h3>
            <p className="newsletter-desc">
              {lang === 'es'
                ? 'Recibe los carteles semanales de jazz, directos de piano e invitados internacionales de deep house.'
                : 'Receive early announcements for live jazz lineups, piano sets, and international guest DJs.'}
            </p>
          </div>

          <div className="newsletter-form-wrap">
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input font-mono"
                  placeholder={lang === 'es' ? 'Tu email...' : 'Your email...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary newsletter-btn font-mono">
                  <span>{lang === 'es' ? 'Unirme' : 'Join'}</span>
                </button>
              </form>
            ) : (
              <div className="newsletter-success font-mono">
                <Check size={16} className="text-gold" />
                <span>{lang === 'es' ? 'Registrado en la lista de La Octava.' : 'Added to La Octava guestlist.'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-main-grid font-mono">
          {/* Col 1 */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img src="/icon.jpeg" alt="La Octava" className="footer-icon-img" />
              <div className="footer-brand-title font-display">LA OCTAVA</div>
            </div>
            <p className="footer-brand-desc">
              {lang === 'es'
                ? 'Contemporary Jazz & Piano Bar (Level 01) • Sub-Level House Club (Level -01). Madrid.'
                : 'Contemporary Jazz & Piano Bar (Level 01) • Sub-Level House Club (Level -01). Madrid.'}
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={`mailto:${RESTAURANT_DATA.email}`} className="social-icon" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="footer-links-list">
              <li><a href="#niveles">{lang === 'es' ? 'Niveles 01 / -01' : 'Levels 01 / -01'}</a></li>
              <li><a href="#cartel">{lang === 'es' ? 'Lineup Semanal' : 'Weekly Lineup'}</a></li>
              <li><a href="#cocteles">{lang === 'es' ? 'Drinks & Bites' : 'Drinks & Bites'}</a></li>
              <li><a href="#espacios">{lang === 'es' ? 'Espacios & Acústica' : 'Spaces & Sound'}</a></li>
              <li><a href="#membresia">{lang === 'es' ? 'Black Key' : 'Black Key'}</a></li>
              <li><a href="#contacto">{lang === 'es' ? 'Info & Puertas' : 'Doors & Access'}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">
              {lang === 'es' ? 'Reservas' : 'Bookings'}
            </h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenReservation({ level: 'piano' })}>
                  {lang === 'es' ? 'Mesa Level 01 (Piano)' : 'Level 01 Table'}
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenReservation({ level: 'club' })}>
                  {lang === 'es' ? 'Entrada Level -01 (Club)' : 'Level -01 Guestlist'}
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={onOpenMembership}>
                  {lang === 'es' ? 'Black Key Membership' : 'Black Key Membership'}
                </button>
              </li>
              <li>
                <a href="https://wa.me/34688888888" target="_blank" rel="noreferrer" className="footer-link">
                  {lang === 'es' ? 'WhatsApp Door Concierge' : 'WhatsApp Door Concierge'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">
              {lang === 'es' ? 'Horarios' : 'Hours'}
            </h4>
            <p className="footer-contact-item"><strong>{RESTAURANT_DATA.address}</strong></p>
            <p className="footer-contact-item">Level 01: 19:00 – 02:00</p>
            <p className="footer-contact-item">Level -01: 23:30 – 06:00</p>
            <div className="footer-hours-tag">
              <span className="gold-badge font-mono">{lang === 'es' ? 'Martes a Domingo' : 'Tuesday to Sunday'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar font-mono">
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} La Octava. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
            <span className="legal-dot">•</span>
            <a href="#" className="legal-link">{lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
            <span className="legal-dot">•</span>
            <a href="#" className="legal-link">{lang === 'es' ? 'Términos' : 'Terms'}</a>
          </div>

          <button 
            type="button" 
            className="scroll-top-btn font-mono"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <span>{lang === 'es' ? 'Arriba' : 'Top'}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
