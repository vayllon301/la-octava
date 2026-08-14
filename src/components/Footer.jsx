import React, { useState } from 'react';
import { ArrowUp, Mail, Shield, Check, Globe, Share2 } from 'lucide-react';
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
        {/* Newsletter Section */}
        <div className="footer-newsletter-banner glass-card">
          <div className="newsletter-text">
            <h3 className="newsletter-title font-serif">
              {lang === 'es' ? 'La Gaceta Clandestina de La Octava' : 'The La Octava Private Gazette'}
            </h3>
            <p className="newsletter-desc font-editorial">
              {lang === 'es'
                ? 'Reciba con prioridad nuestras aperturas de barricas históricas, invitaciones a chefs estrella internacionales y eventos privados.'
                : 'Receive early announcements on rare barrel allocations, guest Michelin star chef dinners, and private salon events.'}
            </p>
          </div>

          <div className="newsletter-form-wrap">
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder={lang === 'es' ? 'Su correo electrónico privado...' : 'Your private email address...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary newsletter-btn">
                  <span>{lang === 'es' ? 'Suscribirse' : 'Subscribe'}</span>
                </button>
              </form>
            ) : (
              <div className="newsletter-success">
                <Check size={18} className="text-gold" />
                <span>{lang === 'es' ? 'Gracias por suscribirse a nuestra lista privada.' : 'Thank you for joining our private registry.'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="footer-main-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img src="/icon.jpeg" alt="La Octava" className="footer-icon-img" />
              <div className="footer-brand-title font-serif">LA OCTAVA</div>
            </div>
            <p className="footer-brand-desc font-editorial">
              {lang === 'es'
                ? 'El santuario sensorial donde la alta gastronomía, los grandes vinos de colección y las noches bajo las estrellas se encuentran.'
                : 'The sensory sanctuary where haute cuisine, collectible grand crus, and starlit evenings converge in Madrid.'}
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

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">
              {lang === 'es' ? 'Explorar' : 'Explore'}
            </h4>
            <ul className="footer-links-list">
              <li><a href="#concepto">{lang === 'es' ? 'El Concepto & Filosofía' : 'The Concept & Philosophy'}</a></li>
              <li><a href="#menu">{lang === 'es' ? 'Menú Degustación 8 Pasos' : '8-Step Tasting Journey'}</a></li>
              <li><a href="#sommelier">{lang === 'es' ? 'Vuelos de Sommelier' : 'Sommelier Wine Flights'}</a></li>
              <li><a href="#espacios">{lang === 'es' ? 'Los Cuatro Espacios' : 'The Four Sanctuaries'}</a></li>
              <li><a href="#prensa">{lang === 'es' ? 'Guía Michelin & Prensa' : 'Michelin Guide & Press'}</a></li>
              <li><a href="#contacto">{lang === 'es' ? 'Ubicación & Dress Code' : 'Location & Dress Code'}</a></li>
            </ul>
          </div>

          {/* Col 3: Services & Membership */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">
              {lang === 'es' ? 'Experiencias VIP' : 'VIP Experiences'}
            </h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-btn-link" onClick={onOpenReservation}>
                  {lang === 'es' ? 'Reserva de Mesa y Bóveda' : 'Table & Vault Reservations'}
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={onOpenMembership}>
                  {lang === 'es' ? 'El Círculo Octava (Membresía)' : 'The Eighth Circle Membership'}
                </button>
              </li>
              <li>
                <a href="#sommelier" className="footer-link">
                  {lang === 'es' ? 'Catas a Ciegas Privadas' : 'Private Blind Tastings'}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/34688888888`} target="_blank" rel="noreferrer" className="footer-link">
                  {lang === 'es' ? 'Mayordomía WhatsApp Concierge' : 'WhatsApp Private Concierge'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-col-title font-serif">
              {lang === 'es' ? 'Contacto & Horarios' : 'Contact & Hours'}
            </h4>
            <p className="footer-contact-item"><strong>{RESTAURANT_DATA.address}</strong></p>
            <p className="footer-contact-item">{RESTAURANT_DATA.phone}</p>
            <p className="footer-contact-item">{RESTAURANT_DATA.email}</p>
            <div className="footer-hours-tag">
              <span className="gold-badge">{lang === 'es' ? 'Abierto Mar – Dom' : 'Open Tue – Sun'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} La Octava S.L. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
            <span className="legal-dot">•</span>
            <a href="#" className="legal-link">{lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}</a>
            <span className="legal-dot">•</span>
            <a href="#" className="legal-link">{lang === 'es' ? 'Términos & Condiciones' : 'Terms & Conditions'}</a>
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
