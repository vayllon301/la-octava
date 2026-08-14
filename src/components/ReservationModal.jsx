import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Music, Disc, Sparkles, CheckCircle2, Download, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function ReservationModal({ 
  isOpen, 
  onClose, 
  lang, 
  currency, 
  initialData = {} 
}) {
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState(initialData.level || 'piano');
  const [space, setSpace] = useState(initialData.space || 'piano-table');
  const [date, setDate] = useState(initialData.date || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(initialData.time || '21:00');
  const [guests, setGuests] = useState(initialData.guests || '2');
  const [addWelcomeCocktail, setAddWelcomeCocktail] = useState(true);
  const [addVIPBottle, setAddVIPBottle] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [musicNotes, setMusicNotes] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      const randomCode = 'OCT-' + Math.floor(1000 + Math.random() * 9000);
      setBookingCode(randomCode);
      setStep(4);
    }
  };

  const handleDownloadCalendar = () => {
    const event = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//La Octava Jazz & House Club//Madrid//ES
BEGIN:VEVENT
UID:${bookingCode}@laoctava.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${date.replace(/-/g, '')}T${time.replace(':', '')}00
SUMMARY:La Octava (${level === 'piano' ? 'Piano & Jazz Bar' : 'Sub-Vault House Club'}) - ${bookingCode}
DESCRIPTION:Reserva confirmada en La Octava para ${guests} personas. Paseo de la Castellana 88, Madrid.
LOCATION:Paseo de la Castellana 88, Madrid
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `LaOctava-Pase-${bookingCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-box glass-card reservation-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-brand-tag">
            <img src="/icon.jpeg" alt="8" className="modal-logo-icon" />
            <div>
              <span className="modal-brand-title">LA OCTAVA</span>
              <span className="modal-brand-subtitle">
                {lang === 'es' ? 'Reserva de Mesa & Pases VIP' : 'Table Bookings & VIP Access'}
              </span>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={resetAndClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="modal-steps-bar">
            <div className={`step-node ${step >= 1 ? 'active' : ''}`}>
              <span className="node-num">1</span>
              <span className="node-text">{lang === 'es' ? 'Nivel & Fecha' : 'Level & Date'}</span>
            </div>
            <div className="node-line"></div>
            <div className={`step-node ${step >= 2 ? 'active' : ''}`}>
              <span className="node-num">2</span>
              <span className="node-text">{lang === 'es' ? 'Mesa & Cócteles' : 'Table & Drinks'}</span>
            </div>
            <div className="node-line"></div>
            <div className={`step-node ${step >= 3 ? 'active' : ''}`}>
              <span className="node-num">3</span>
              <span className="node-text">{lang === 'es' ? 'Datos del Huésped' : 'Guest Details'}</span>
            </div>
          </div>
        )}

        {/* STEP 1: Level & Date */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label">
                <Music size={15} className="text-gold" />
                <span>{lang === 'es' ? '1. Selecciona el Nivel & Experiencia' : '1. Select Level & Experience'}</span>
              </label>

              <div className="space-options-grid">
                {[
                  { id: 'piano-table', levelVal: 'piano', title: '🎹 Piano Bar: Frente al Steinway', sub: 'Jazz acústico en directo & cócteles de autor (19:00 – 02:00)' },
                  { id: 'velvet-booth', levelVal: 'piano', title: '🍷 Piano Bar: Sofá de Terciopelo', sub: 'Reservado íntimo para cenas y copas de noche' },
                  { id: 'club-subvault', levelVal: 'club', title: '🎛️ Sub-Vault: Entrada House Club', sub: 'Acceso directo a la pista y bóveda subterránea (23:30 – 06:00)' },
                  { id: 'vip-dj-booth', levelVal: 'club', title: '✨ Sub-Vault: Mesa VIP Cabina DJ', sub: 'Servicio de botella exclusivo junto a la cabina' }
                ].map((opt) => (
                  <div 
                    key={opt.id}
                    className={`space-select-tile ${space === opt.id ? 'active' : ''}`}
                    onClick={() => {
                      setSpace(opt.id);
                      setLevel(opt.levelVal);
                    }}
                  >
                    <div className="tile-title font-serif">{opt.title}</div>
                    <div className="tile-sub font-editorial">{opt.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label">
                  <Calendar size={15} className="text-gold" />
                  <span>{lang === 'es' ? 'Fecha' : 'Date'}</span>
                </label>
                <input 
                  type="date"
                  className="modal-text-input"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label">
                  <Users size={15} className="text-gold" />
                  <span>{lang === 'es' ? 'Comensales / Invitados' : 'Guests'}</span>
                </label>
                <select 
                  className="modal-select"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="1">1 {lang === 'es' ? 'Persona' : 'Guest'}</option>
                  <option value="2">2 {lang === 'es' ? 'Personas (Mesa Íntima)' : 'Guests (Intimate Table)'}</option>
                  <option value="3">3 {lang === 'es' ? 'Personas' : 'Guests'}</option>
                  <option value="4">4 {lang === 'es' ? 'Personas (Sofá Lounge)' : 'Guests (Lounge Couch)'}</option>
                  <option value="6">6 {lang === 'es' ? 'Personas (Mesa Grupo)' : 'Guests'}</option>
                  <option value="8">8+ {lang === 'es' ? 'Reservado VIP / Evento' : 'VIP Booth / Event'}</option>
                </select>
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <Clock size={15} className="text-gold" />
                <span>{lang === 'es' ? 'Turno Horario' : 'Time Slot'}</span>
              </label>
              <div className="time-chips-row">
                {(level === 'piano' 
                  ? ['20:00 (Apertura)', '21:00 (Set 1)', '22:30 (Set 2)', '23:45 (Midnight)'] 
                  : ['23:30 (Apertura)', '00:30 (Peak 1)', '01:45 (Peak 2)', '03:00 (Late Night)']
                ).map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`time-chip ${time === t.split(' ')[0] ? 'active' : ''}`}
                    onClick={() => setTime(t.split(' ')[0])}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-footer-nav">
              <div></div>
              <button type="submit" className="btn-primary">
                <span>{lang === 'es' ? 'Continuar a Mejoras' : 'Next: Enhancements'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Enhancements */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label">
                <Sparkles size={15} className="text-gold" />
                <span>{lang === 'es' ? 'Experiencias Líquidas & Mesa' : 'Drink Enhancements'}</span>
              </label>

              <div className="enhancements-list">
                <label className="checkbox-tile">
                  <input 
                    type="checkbox" 
                    checked={addWelcomeCocktail} 
                    onChange={(e) => setAddWelcomeCocktail(e.target.checked)} 
                  />
                  <div className="tile-info">
                    <div className="tile-title-price">
                      <strong>{lang === 'es' ? "Cóctel de Bienvenida 'The Steinway 88'" : "Welcome Signature 'Steinway 88' Cocktail"}</strong>
                      <span className="text-gold font-serif">+20 € / pers.</span>
                    </div>
                    <p className="font-editorial">{lang === 'es' ? 'Servido a la llegada con hielo tallado y humo de roble' : 'Served upon arrival with diamond ice & oak smoke'}</p>
                  </div>
                </label>

                <label className="checkbox-tile">
                  <input 
                    type="checkbox" 
                    checked={addVIPBottle} 
                    onChange={(e) => setAddVIPBottle(e.target.checked)} 
                  />
                  <div className="tile-info">
                    <div className="tile-title-price">
                      <strong>{lang === 'es' ? 'Botella Champagne Dom Pérignon en Mesa' : 'Dom Pérignon Vintage Bottle on Ice'}</strong>
                      <span className="text-gold font-serif">+360 €</span>
                    </div>
                    <p className="font-editorial">{lang === 'es' ? 'Cubitera de plata y servicio de sommelier dedicado' : 'Silver champagne bucket & dedicated service'}</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="modal-footer-nav">
              <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                <ArrowLeft size={16} />
                <span>{lang === 'es' ? 'Atrás' : 'Back'}</span>
              </button>
              <button type="submit" className="btn-primary">
                <span>{lang === 'es' ? 'Continuar a Datos' : 'Next: Guest Info'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Guest Info */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Nombre Completo del Titular *' : 'Lead Guest Full Name *'}</span>
              </label>
              <input 
                type="text"
                className="modal-text-input"
                placeholder={lang === 'es' ? 'Ej: Victor Ayllon' : 'e.g. Victor Ayllon'}
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
              />
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Teléfono (Pase SMS) *' : 'Mobile Phone (SMS Pass) *'}</span>
                </label>
                <input 
                  type="tel"
                  className="modal-text-input"
                  placeholder="+34 600 000 000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}</span>
                </label>
                <input 
                  type="email"
                  className="modal-text-input"
                  placeholder="victor@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Peticiones Especiales / Notas Musicales' : 'Special Notes or Artist Dedications'}</span>
              </label>
              <input 
                type="text"
                className="modal-text-input"
                placeholder={lang === 'es' ? 'Ej: Celebración de cumpleaños, mesa cerca del saxofonista...' : 'e.g. Birthday celebration, prefer near saxophonist...'}
                value={musicNotes}
                onChange={(e) => setMusicNotes(e.target.value)}
              />
            </div>

            <div className="modal-footer-nav">
              <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                <ArrowLeft size={16} />
                <span>{lang === 'es' ? 'Atrás' : 'Back'}</span>
              </button>
              <button type="submit" className="btn-primary">
                <CheckCircle2 size={16} />
                <span>{lang === 'es' ? 'Emitir Pase Oficial' : 'Confirm & Issue Pass'}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Confirmed Card Screen */}
        {step === 4 && (
          <div className="confirmation-card-screen">
            <div className="confirmation-badge-glow">
              <CheckCircle2 size={48} className="text-gold" />
            </div>

            <h3 className="confirmation-title font-serif">
              {lang === 'es' ? 'Pase Confirmado en La Octava' : 'Access Pass Confirmed at La Octava'}
            </h3>

            <div className="booking-code-pill font-serif">
              {lang === 'es' ? 'Código de Acceso:' : 'Pass Code:'} <span className="text-gold">{bookingCode}</span>
            </div>

            <div className="confirmation-summary-box glass-card font-editorial">
              <div className="summary-row">
                <span>{lang === 'es' ? 'Titular:' : 'Guest:'}</span>
                <strong>{clientName || 'Huésped VIP'}</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Nivel:' : 'Level:'}</span>
                <strong className="text-gold">{level === 'piano' ? '🎹 Piano & Jazz Bar (Piso 01)' : '🎛️ Sub-Vault House Club (Nivel -01)'}</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Fecha & Turno:' : 'Date & Time:'}</span>
                <strong>{date} a las {time} h</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Invitados:' : 'Guests:'}</span>
                <strong>{guests} {lang === 'es' ? 'personas' : 'guests'}</strong>
              </div>
            </div>

            <p className="confirmation-notice">
              {lang === 'es'
                ? `Pase registrado en lista preferente de puerta. Te esperamos en Paseo de la Castellana 88.`
                : `Pass registered on priority door list. See you at Paseo de la Castellana 88.`}
            </p>

            <div className="confirmation-actions-row">
              <button 
                type="button" 
                className="btn-primary"
                onClick={handleDownloadCalendar}
              >
                <Download size={16} />
                <span>{lang === 'es' ? 'Guardar Pase en Calendario (.ics)' : 'Add Pass to Calendar (.ics)'}</span>
              </button>

              <a
                href={`https://wa.me/34688888888?text=Hola,%20tengo%20el%20pase%20${bookingCode}%20para%20${level === 'piano' ? 'el%20Piano%20Bar' : 'el%20House%20Club'}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Guestlist</span>
              </a>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button type="button" className="btn-ghost" onClick={resetAndClose}>
                {lang === 'es' ? 'Cerrar y volver al sitio' : 'Close and return to site'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
