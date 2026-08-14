import React, { useState } from 'react';
import { ArrowUp, Mail, Shield, Check, Music, Disc } from 'lucide-react';
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
            <h3 className="newsletter-title font-serif">
              {lang === 'es' ? 'La Lista Secreta de La Octava' : 'The La Octava Secret Guestlist'}
            </h3>
            <p className="newsletter-desc font-editorial">
              {lang === 'es'
                ? 'Recibe los carteles semanales de conciertos de jazz, invitados internacionales de deep house y convocatorias a puerta cerrada.'
                : 'Receive early announcements for live jazz lineups, international guest DJs, and secret after-hours jam sessions.'}
            </p>
          </div>

          <div className="newsletter-form-wrap">
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder={lang === 'es' ? 'Tu correo electrónico...' : 'Your email address...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary newsletter-btn">
                  <span>{lang === 'es' ? 'Unirme' : 'Join'}</span>
                </button>
              </form>
            ) : (
              <div className="newsletter-success">
                <Check size={18} className="text-gold" />
                <span>{lang === 'es' ? 'Registrado en la lista secreta de La Octava.' : 'Successfully registered on our secret list.'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-main-grid">
          {/* Col 1 */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img src="/icon.jpeg" alt="La Octava" className="footer-icon-img" />
              <div className="footer-brand-title font-serif">LA OCTAVA</div>
            </div>
            <p className="footer-brand-desc font-editorial">
              {lang === 'es'
                ? 'El templo nocturno donde el jazz acústico y el piano de cola arriba se encuentran con la energía del house club subterráneo abajo.'
                : 'The nocturnal temple where acoustic grand piano jazz upstairs meets subterranean house club culture below.'}
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={`mailto:${RESTAURANT_DATA.email}`} className="social-icon" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="footer-links-list">
              <li><a href="#niveles">{lang === 'es' ? 'Los Dos Niveles' : 'The Two Levels'}</a></li>
              <li><a href="#cartel">{lang === 'es' ? 'Cartel Semanal en Vivo' : 'Weekly Live Timetable'}</a></li>
              <li><a href="#cocteles">{lang === 'es' ? 'Cócteles de Jazz & House' : 'Cocktails & Mixology'}</a></li>
              <li><a href="#espacios">{lang === 'es' ? 'Piano Bar & Sótano' : 'Piano Bar & Sub-Vault'}</a></li>
              <li><a href="#membresia">{lang === 'es' ? 'Llave Negra VIP' : 'Black Key VIP'}</a></li>
              <li><a href="#contacto">{lang === 'es' ? 'Ubicación & Horarios' : 'Location & Hours'}</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">
              {lang === 'es' ? 'Pases & Reservas' : 'Passes & Booking'}
            </h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenReservation({ level: 'piano' })}>
                  {lang === 'es' ? 'Mesa en Piano Bar (Jazz)' : 'Piano Bar Table Booking'}
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenReservation({ level: 'club' })}>
                  {lang === 'es' ? 'Entrada / Mesa VIP House Club' : 'Sub-Vault VIP Pass'}
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={onOpenMembership}>
                  {lang === 'es' ? 'Solicitar Llave Negra' : 'Apply for Black Key'}
                </button>
              </li>
              <li>
                <a href="https://wa.me/34688888888" target="_blank" rel="noreferrer" className="footer-link">
                  {lang === 'es' ? 'WhatsApp Puerta & Concierge' : 'WhatsApp Door Concierge'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">
              {lang === 'es' ? 'Horarios & Puertas' : 'Hours & Location'}
            </h4>
            <p className="footer-contact-item"><strong>{RESTAURANT_DATA.address}</strong></p>
            <p className="footer-contact-item">🎹 Piano Bar: 19:00 – 02:00</p>
            <p className="footer-contact-item">🎛️ House Club: 23:30 – 06:00</p>
            <div className="footer-hours-tag">
              <span className="gold-badge">{lang === 'es' ? 'Martes a Domingo' : 'Tuesday to Sunday'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} La Octava Jazz & House Club. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
            <span className="legal-dot">•</span>
            <a href="#" className="legal-link">{lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}</a>
            <span className="legal-dot">•</span>
            <a href="#" className="legal-link">{lang === 'es' ? 'Términos de Acceso' : 'Terms of Admission'}</a>
          </div>

          <button 
            type="button" 
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Volver arriba"
          >
            <span>{lang === 'es' ? 'Arriba' : 'Top'}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
