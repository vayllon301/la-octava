import React from 'react';
import { MapPin, Phone, Clock, Shirt, MessageSquare, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function LocationAndContact({ lang, onOpenReservation }) {
  return (
    <section className="location-section" id="contacto">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'Acceso & Ubicación' : 'Access & Location'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Información & Puertas' : 'Doors & Access'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Paseo de la Castellana 88, Madrid. Acceso a Level 01 en planta principal y paso directo a Level -01 Sub-Level.'
              : 'Paseo de la Castellana 88, Madrid. Direct street level entry to Level 01 and subterranean access to Level -01.'}
          </p>
        </div>

        <div className="location-grid">
          {/* Information Column */}
          <div className="location-info-card glass-card">
            <h3 className="info-card-title font-display">
              {lang === 'es' ? 'Horarios & Código de Acceso' : 'Hours & Door Policy'}
            </h3>

            <div className="info-items-list">
              {/* Address */}
              <div className="info-row">
                <div className="info-icon"><MapPin size={18} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label font-mono">{lang === 'es' ? 'Dirección' : 'Address'}</span>
                  <span className="info-val">{RESTAURANT_DATA.address}</span>
                  <span className="info-hint font-mono">{lang === 'es' ? 'Entrada señalizada: Faro 8 ámbar' : 'Access marked with amber 8 beacon'}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="info-row">
                <div className="info-icon"><Clock size={18} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label font-mono">{lang === 'es' ? 'Horarios' : 'Operating Hours'}</span>
                  <p className="info-val-time font-mono"><strong>Level 01 Piano Bar:</strong> {RESTAURANT_DATA.hours.pianoBar}</p>
                  <p className="info-val-time font-mono"><strong>Level -01 House Club:</strong> {RESTAURANT_DATA.hours.houseClub}</p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="info-row">
                <div className="info-icon"><Shirt size={18} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label font-mono">{lang === 'es' ? 'Dress Code' : 'Dress Code'}</span>
                  <span className="info-val">{lang === 'es' ? 'Smart Casual / Night Minimal / All Black' : 'Smart Casual / Night Minimal / All Black'}</span>
                  <span className="info-hint">
                    {lang === 'es' ? 'Acceso garantizado con reserva de mesa confirmada.' : 'Guaranteed entry with confirmed table booking.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Concierge Contact Buttons */}
            <div className="concierge-buttons-group font-mono">
              <a 
                href={`tel:${RESTAURANT_DATA.phone}`} 
                className="btn-secondary concierge-btn"
              >
                <Phone size={14} />
                <span>{RESTAURANT_DATA.phone}</span>
              </a>

              <a 
                href={`https://wa.me/34688888888?text=Consulta%20reserva%20La%20Octava`} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary concierge-btn"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Guestlist</span>
              </a>
            </div>
          </div>

          {/* Map Simulation */}
          <div className="location-map-card glass-card">
            <div className="map-visual-container">
              <div className="map-visual-inner">
                <div className="map-grid-roads">
                  <div className="road road-castellana">
                    <span className="road-name font-mono">PASEO DE LA CASTELLANA</span>
                  </div>
                  <div className="road road-perpendicular"></div>
                </div>

                <div className="map-pin-pulse">
                  <div className="map-pin-badge">
                    <img src="/icon.jpeg" alt="8" className="map-pin-icon" />
                  </div>
                  <div className="map-pulse-ring ring-1"></div>
                  <div className="map-pulse-ring ring-2"></div>
                </div>

                <div className="map-location-tag">
                  <span className="tag-brand font-display">LA OCTAVA</span>
                  <span className="tag-desc font-mono">LEVEL 01 & LEVEL -01</span>
                </div>
              </div>
            </div>

            <div className="map-card-footer">
              <div className="footer-left">
                <span className="footer-title font-display">{lang === 'es' ? 'Reserva para esta noche' : 'Join us tonight'}</span>
                <span className="footer-sub font-mono">{lang === 'es' ? 'Acceso prioritario con reserva' : 'Priority door access'}</span>
              </div>
              <button 
                type="button" 
                className="btn-primary font-mono"
                onClick={onOpenReservation}
              >
                <span>{lang === 'es' ? 'Reservar' : 'Book'}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
