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
PRODID:-//La Octava Madrid//ES
BEGIN:VEVENT
UID:${bookingCode}@laoctava.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${date.replace(/-/g, '')}T${time.replace(':', '')}00
SUMMARY:La Octava (${level === 'piano' ? 'Level 01 Piano Bar' : 'Level -01 Sub-Level'}) - ${bookingCode}
DESCRIPTION:Reserva confirmada en La Octava para ${guests} personas. Paseo de la Castellana 88, Madrid.
LOCATION:Paseo de la Castellana 88, Madrid
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `LaOctava-${bookingCode}.ics`);
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
              <span className="modal-brand-title font-display">LA OCTAVA</span>
              <span className="modal-brand-subtitle font-mono">
                {lang === 'es' ? 'Protocolo de Reserva' : 'Booking Protocol'}
              </span>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={resetAndClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="modal-steps-bar font-mono">
            <div className={`step-node ${step >= 1 ? 'active' : ''}`}>
              <span className="node-num">1</span>
              <span className="node-text">{lang === 'es' ? 'Nivel & Fecha' : 'Level & Date'}</span>
            </div>
            <div className="node-line"></div>
            <div className={`step-node ${step >= 2 ? 'active' : ''}`}>
              <span className="node-num">2</span>
              <span className="node-text">{lang === 'es' ? 'Mesa & Extras' : 'Table & Extras'}</span>
            </div>
            <div className="node-line"></div>
            <div className={`step-node ${step >= 3 ? 'active' : ''}`}>
              <span className="node-num">3</span>
              <span className="node-text">{lang === 'es' ? 'Datos' : 'Details'}</span>
            </div>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label font-mono">
                <Music size={13} className="text-gold" />
                <span>{lang === 'es' ? '1. Espacio & Nivel' : '1. Space & Level'}</span>
              </label>

              <div className="space-options-grid">
                {[
                  { id: 'piano-table', levelVal: 'piano', title: 'Level 01: Piano-Side Table', sub: 'Mesa frente al Steinway D-274 & Jazz acústico' },
                  { id: 'velvet-booth', levelVal: 'piano', title: 'Level 01: Vinyl Lounge', sub: 'Reservado en barra de vinilos y cócteles' },
                  { id: 'club-subvault', levelVal: 'club', title: 'Level -01: Sub-Level House', sub: 'Acceso directo a la pista y sonido Funktion-One' },
                  { id: 'vip-dj-booth', levelVal: 'club', title: 'Level -01: VIP DJ Booth', sub: 'Mesa VIP con servicio exclusivo de botella' }
                ].map((opt) => (
                  <div 
                    key={opt.id}
                    className={`space-select-tile ${space === opt.id ? 'active' : ''}`}
                    onClick={() => {
                      setSpace(opt.id);
                      setLevel(opt.levelVal);
                    }}
                  >
                    <div className="tile-title font-display">{opt.title}</div>
                    <div className="tile-sub font-mono">{opt.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <Calendar size={13} className="text-gold" />
                  <span>{lang === 'es' ? 'Fecha' : 'Date'}</span>
                </label>
                <input 
                  type="date"
                  className="modal-text-input font-mono"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <Users size={13} className="text-gold" />
                  <span>{lang === 'es' ? 'Personas' : 'Guests'}</span>
                </label>
                <select 
                  className="modal-select font-mono"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="1">1 {lang === 'es' ? 'persona' : 'guest'}</option>
                  <option value="2">2 {lang === 'es' ? 'personas' : 'guests'}</option>
                  <option value="3">3 {lang === 'es' ? 'personas' : 'guests'}</option>
                  <option value="4">4 {lang === 'es' ? 'personas' : 'guests'}</option>
                  <option value="6">6 {lang === 'es' ? 'personas' : 'guests'}</option>
                  <option value="8">8+ {lang === 'es' ? 'grupo VIP' : 'VIP group'}</option>
                </select>
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label font-mono">
                <Clock size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Horario' : 'Time'}</span>
              </label>
              <div className="time-chips-row font-mono">
                {(level === 'piano' 
                  ? ['20:00', '21:00', '22:30', '23:45'] 
                  : ['23:30', '00:30', '01:45', '03:00']
                ).map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`time-chip ${time === t ? 'active' : ''}`}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-footer-nav font-mono">
              <div></div>
              <button type="submit" className="btn-primary">
                <span>{lang === 'es' ? 'Continuar' : 'Next'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label font-mono">
                <Sparkles size={13} className="text-gold" />
                <span>{lang === 'es' ? 'Mejoras en Mesa' : 'Enhancements'}</span>
              </label>

              <div className="enhancements-list font-mono">
                <label className="checkbox-tile">
                  <input 
                    type="checkbox" 
                    checked={addWelcomeCocktail} 
                    onChange={(e) => setAddWelcomeCocktail(e.target.checked)} 
                  />
                  <div className="tile-info">
                    <div className="tile-title-price">
                      <strong>The Steinway 88 Signature Cocktail</strong>
                      <span className="text-gold">+18 € / pers.</span>
                    </div>
                    <p>{lang === 'es' ? 'Servido a la llegada con hielo monolítico' : 'Served on arrival with monolithic ice'}</p>
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
                      <strong>Champagne Dom Pérignon Vintage</strong>
                      <span className="text-gold">+360 €</span>
                    </div>
                    <p>{lang === 'es' ? 'Servicio de cubitera de plata en mesa' : 'Silver bucket service at table'}</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="modal-footer-nav font-mono">
              <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                <ArrowLeft size={14} />
                <span>{lang === 'es' ? 'Atrás' : 'Back'}</span>
              </button>
              <button type="submit" className="btn-primary">
                <span>{lang === 'es' ? 'Continuar' : 'Next'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label font-mono">
                <span>{lang === 'es' ? 'Nombre Completo *' : 'Full Name *'}</span>
              </label>
              <input 
                type="text"
                className="modal-text-input"
                placeholder="Victor Ayllon"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
              />
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <span>{lang === 'es' ? 'Teléfono Móvil *' : 'Mobile Phone *'}</span>
                </label>
                <input 
                  type="tel"
                  className="modal-text-input font-mono"
                  placeholder="+34 600 000 000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <span>{lang === 'es' ? 'Email *' : 'Email *'}</span>
                </label>
                <input 
                  type="email"
                  className="modal-text-input font-mono"
                  placeholder="victor@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label font-mono">
                <span>{lang === 'es' ? 'Notas / Peticiones Especiales' : 'Special Notes'}</span>
              </label>
              <input 
                type="text"
                className="modal-text-input"
                placeholder={lang === 'es' ? 'Ej: Mesa preferente, cumpleaños...' : 'e.g. Birthday, table preference...'}
                value={musicNotes}
                onChange={(e) => setMusicNotes(e.target.value)}
              />
            </div>

            <div className="modal-footer-nav font-mono">
              <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                <ArrowLeft size={14} />
                <span>{lang === 'es' ? 'Atrás' : 'Back'}</span>
              </button>
              <button type="submit" className="btn-primary">
                <CheckCircle2 size={14} />
                <span>{lang === 'es' ? 'Confirmar Reserva' : 'Confirm Booking'}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="confirmation-card-screen">
            <div className="confirmation-badge-glow">
              <CheckCircle2 size={40} className="text-gold" />
            </div>

            <h3 className="confirmation-title font-display">
              {lang === 'es' ? 'Reserva Confirmada' : 'Booking Confirmed'}
            </h3>

            <div className="booking-code-pill font-mono">
              PASS: <span className="text-gold">{bookingCode}</span>
            </div>

            <div className="confirmation-summary-box glass-card font-mono">
              <div className="summary-row">
                <span>{lang === 'es' ? 'Titular:' : 'Guest:'}</span>
                <strong>{clientName || 'Huésped'}</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Nivel:' : 'Level:'}</span>
                <strong className="text-gold">{level === 'piano' ? 'Level 01: Piano & Jazz Bar' : 'Level -01: Sub-Level House Club'}</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Fecha:' : 'Date:'}</span>
                <strong>{date} • {time} h</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Invitados:' : 'Guests:'}</span>
                <strong>{guests} {lang === 'es' ? 'personas' : 'guests'}</strong>
              </div>
            </div>

            <div className="confirmation-actions-row font-mono">
              <button 
                type="button" 
                className="btn-primary"
                onClick={handleDownloadCalendar}
              >
                <Download size={14} />
                <span>{lang === 'es' ? 'Añadir a Calendario (.ics)' : 'Add to Calendar (.ics)'}</span>
              </button>

              <a
                href={`https://wa.me/34688888888?text=Reserva%20${bookingCode}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Guestlist</span>
              </a>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button type="button" className="btn-ghost font-mono" onClick={resetAndClose}>
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
