import React from 'react';
import { MapPin, Phone, Mail, Clock, Shirt, MessageSquare, ArrowUpRight, Music, Disc } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function LocationAndContact({ lang, onOpenReservation }) {
  return (
    <section className="location-section" id="contacto">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Acceso & Mayordomía Nocturna' : 'Access & Night Concierge'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'Ubicación & Puerta de Entrada' : 'Location, Doors & Hours'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Situado en Paseo de la Castellana 88. Acceso directo al Piano Bar en planta calle y descenso al Sub-Vault por el pasaje subterráneo.'
              : 'Located on Paseo de la Castellana 88. Direct ground floor access to the Piano Bar and subterranean passage to the Sub-Vault.'}
          </p>
        </div>

        <div className="location-grid">
          {/* Information Column */}
          <div className="location-info-card glass-card">
            <h3 className="info-card-title font-serif">
              {lang === 'es' ? 'Protocolo de Entrada & Horarios' : 'Door Policy & Schedule'}
            </h3>

            <div className="info-items-list">
              {/* Address */}
              <div className="info-row">
                <div className="info-icon"><MapPin size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Dirección' : 'Address'}</span>
                  <span className="info-val">{RESTAURANT_DATA.address}</span>
                  <span className="info-hint">{lang === 'es' ? 'Entrada señalizada con el farol ámbar y el 8 en bronce' : 'Marked by the amber lantern and bronze 8 insignia'}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="info-row">
                <div className="info-icon"><Clock size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Horarios por Nivel' : 'Hours by Level'}</span>
                  <p className="info-val-time"><strong>{lang === 'es' ? '🎹 Piano & Jazz Bar:' : '🎹 Piano & Jazz Bar:'}</strong> {RESTAURANT_DATA.hours.pianoBar}</p>
                  <p className="info-val-time"><strong>{lang === 'es' ? '🎛️ Sub-Vault House Club:' : '🎛️ Sub-Vault House Club:'}</strong> {RESTAURANT_DATA.hours.houseClub}</p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="info-row">
                <div className="info-icon"><Shirt size={20} className="text-gold" /></div>
                <div className="info-content">
                  <span className="info-label">{lang === 'es' ? 'Código de Vestimenta' : 'Dress Code'}</span>
                  <span className="info-val">{lang === 'es' ? 'Piano Bar: Smart Casual / Night Chic • Sub-Vault: Underground Club Attire' : 'Piano Bar: Smart Casual / Night Chic • Sub-Vault: Underground Club Attire'}</span>
                  <span className="info-hint">
                    {lang === 'es' ? 'Derecho de admisión reservado en puerta. Entrada libre con reserva de mesa confirmada.' : 'Right of admission reserved at the door. Guaranteed entry with confirmed booking.'}
                  </span>
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
                href={`https://wa.me/34688888888?text=Deseo%20lista%20de%20puerta%20o%20reserva%20en%20La%20Octava`} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary concierge-btn"
              >
                <MessageSquare size={16} />
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
                  <span className="tag-desc">{lang === 'es' ? 'Jazz Piano Bar & House Club' : 'Jazz Piano Bar & House Club'}</span>
                </div>
              </div>
            </div>

            <div className="map-card-footer">
              <div className="footer-left">
                <span className="footer-title font-serif">{lang === 'es' ? '¿Vienes esta noche?' : 'Joining us tonight?'}</span>
                <span className="footer-sub">{lang === 'es' ? 'Acceso preferente con reserva' : 'Priority door access with reservation'}</span>
              </div>
              <button 
                type="button" 
                className="btn-primary"
                onClick={onOpenReservation}
              >
                <span>{lang === 'es' ? 'Reservar Mesa' : 'Book Table'}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
