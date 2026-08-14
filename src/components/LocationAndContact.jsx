import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Shirt, MessageSquare, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function LocationAndContact({ lang, onOpenReservation }) {
  return (
    <section className="location-section" id="contacto">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Santuario & Acceso' : 'Sanctuary & Access'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Ubicación & Concierge' : 'Location & Concierge'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Situado en la arteria más prestigiosa de Madrid, con acceso privado por ascensor exclusivo y servicio de aparcacoches de cortesía.'
              : 'Located on Madrid’s most prestigious avenue with private elevator access and complimentary valet parking.'}
          </p>
        </div>

        <div className="location-grid">
          {/* Information Column */}
          <div className="location-info-card glass-card">
            <h3 className="info-card-title font-serif">
              {lang === 'es' ? 'Información de Visita' : 'Visitor Information'}
            </h3>

            <div className="info-items-list">
              {/* Address */}
              <div className="info-row">
                <div className="info-icon"><MapPin size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Dirección' : 'Address'}</span>
                  <span className="info-val">{RESTAURANT_DATA.address}</span>
                  <span className="info-hint">{lang === 'es' ? 'Acceso VIP por Paseo de la Castellana 88B' : 'VIP Access via Castellana 88B'}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="info-row">
                <div className="info-icon"><Clock size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Horarios de Servicio' : 'Operating Hours'}</span>
                  <p className="info-val-time"><strong>{lang === 'es' ? 'Restaurante & Cava:' : 'Restaurant & Cellar:'}</strong> {RESTAURANT_DATA.hours.dining}</p>
                  <p className="info-val-time"><strong>{lang === 'es' ? 'Rooftop & Cócteles:' : 'Rooftop & Cocktails:'}</strong> {RESTAURANT_DATA.hours.rooftop}</p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="info-row">
                <div className="info-icon"><Shirt size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Código de Vestimenta' : 'Dress Code'}</span>
                  <span className="info-val">Smart Elegant / Cocktail Attire</span>
                  <span className="info-hint">
                    {lang === 'es' ? 'Rogamos etiqueta formal cuidada. No calzado deportivo ni prendas informales.' : 'Formal elegant attire kindly requested. No athletic wear or casual footwear.'}
                  </span>
                </div>
              </div>

              {/* Valet */}
              <div className="info-row">
                <div className="info-icon"><Car size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Valet Parking' : 'Valet Parking'}</span>
                  <span className="info-val">{lang === 'es' ? 'Servicio de aparcacoches privado de cortesía' : 'Complimentary private valet parking'}</span>
                </div>
              </div>
            </div>

            {/* Direct Concierge Contact Buttons */}
            <div className="concierge-buttons-group">
              <a 
                href={`tel:${RESTAURANT_DATA.phone}`} 
                className="btn-secondary concierge-btn"
              >
                <Phone size={16} />
                <span>{RESTAURANT_DATA.phone}</span>
              </a>

              <a 
                href={`https://wa.me/34688888888?text=Deseo%20informaci%C3%B3n%20sobre%20reservas%20en%20La%20Octava`} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary concierge-btn"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Map Simulation & Atmosphere Card */}
          <div className="location-map-card glass-card">
            <div className="map-visual-container">
              {/* Stylized Architectural Map UI */}
              <div className="map-visual-inner">
                <div className="map-grid-roads">
                  <div className="road road-castellana">
                    <span className="road-name">PASEO DE LA CASTELLANA</span>
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
                  <span className="tag-brand">LA OCTAVA</span>
                  <span className="tag-desc">{lang === 'es' ? 'Bóveda Subterránea & Rooftop' : 'Subterranean Vault & Rooftop'}</span>
                </div>
              </div>
            </div>

            <div className="map-card-footer">
              <div className="footer-left">
                <span className="footer-title font-serif">{lang === 'es' ? '¿Deseas una mesa esta noche?' : 'Require a table tonight?'}</span>
                <span className="footer-sub">{lang === 'es' ? 'Disponibilidad limitada en tiempo real' : 'Limited real-time availability'}</span>
              </div>
              <button 
                type="button" 
                className="btn-primary"
                onClick={onOpenReservation}
              >
                <span>{lang === 'es' ? 'Reservar' : 'Reserve'}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
