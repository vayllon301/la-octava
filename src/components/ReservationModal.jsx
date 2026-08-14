import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Compass, Wine, Sparkles, CheckCircle2, Download, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function ReservationModal({ 
  isOpen, 
  onClose, 
  lang, 
  currency, 
  initialData = {} 
}) {
  const [step, setStep] = useState(1);
  const [space, setSpace] = useState(initialData.space || 'salon-principal');
  const [date, setDate] = useState(initialData.date || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(initialData.time || '21:00');
  const [guests, setGuests] = useState(initialData.guests || '2');
  const [experience, setExperience] = useState(initialData.experience || 'tasting-menu');
  const [addWinePairing, setAddWinePairing] = useState(true);
  const [addWelcomeChampagne, setAddWelcomeChampagne] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [specialOccasion, setSpecialOccasion] = useState('none');
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Generate booking reference
      const randomCode = 'OCT-' + Math.floor(1000 + Math.random() * 9000);
      setBookingCode(randomCode);
      setStep(4); // Confirmed screen
    }
  };

  const handleDownloadCalendar = () => {
    const event = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//La Octava//Haute Gastronomie//ES
BEGIN:VEVENT
UID:${bookingCode}@laoctava.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${date.replace(/-/g, '')}T${time.replace(':', '')}00
SUMMARY:Reserva en La Octava - ${bookingCode}
DESCRIPTION:Reserva confirmada en La Octava para ${guests} comensales. Paseo de la Castellana 88, Madrid.
LOCATION:Paseo de la Castellana 88, Madrid
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Reserva-LaOctava-${bookingCode}.ics`);
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
                {lang === 'es' ? 'Protocolo de Reserva Exclusiva' : 'Exclusive Reservation Protocol'}
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
              <span className="node-text">{lang === 'es' ? 'Espacio & Fecha' : 'Space & Date'}</span>
            </div>
            <div className="node-line"></div>
            <div className={`step-node ${step >= 2 ? 'active' : ''}`}>
              <span className="node-num">2</span>
              <span className="node-text">{lang === 'es' ? 'Experiencia & Maridaje' : 'Experience'}</span>
            </div>
            <div className="node-line"></div>
            <div className={`step-node ${step >= 3 ? 'active' : ''}`}>
              <span className="node-num">3</span>
              <span className="node-text">{lang === 'es' ? 'Datos del Huésped' : 'Guest Details'}</span>
            </div>
          </div>
        )}

        {/* STEP 1: Space & Date Selection */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label">
                <Compass size={15} className="text-gold" />
                <span>{lang === 'es' ? 'Seleccionar Espacio' : 'Select Atmosphere'}</span>
              </label>
              <div className="space-options-grid">
                {[
                  { id: 'salon-principal', title: 'Salón Abovedado', sub: 'Alta cocina íntima y elegante' },
                  { id: 'cava-subterranea', title: 'Cava Subterránea', sub: 'Mesa privada entre 850+ grand crus' },
                  { id: 'rooftop-skyline', title: 'Rooftop & Fuego Vivo', sub: 'Vistas 360° y coctelería de autor' },
                  { id: 'atelier-culinario', title: "Mesa del Chef L'Atelier", sub: '8 plazas frente al pase gastronómico' }
                ].map((opt) => (
                  <div 
                    key={opt.id}
                    className={`space-select-tile ${space === opt.id ? 'active' : ''}`}
                    onClick={() => setSpace(opt.id)}
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
                  <span>{lang === 'es' ? 'Número de Comensales' : 'Guests'}</span>
                </label>
                <select 
                  className="modal-select"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="1">1 {lang === 'es' ? 'Comensal' : 'Guest'}</option>
                  <option value="2">2 {lang === 'es' ? 'Comensales (Mesa Velada)' : 'Guests'}</option>
                  <option value="3">3 {lang === 'es' ? 'Comensales' : 'Guests'}</option>
                  <option value="4">4 {lang === 'es' ? 'Comensales' : 'Guests'}</option>
                  <option value="6">6 {lang === 'es' ? 'Comensales (Mesa Imperial)' : 'Guests'}</option>
                  <option value="8">8 {lang === 'es' ? 'Comensales (Reserva Bóveda)' : 'Guests'}</option>
                  <option value="12">12+ {lang === 'es' ? 'Evento Privado Completo' : 'Private Event'}</option>
                </select>
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <Clock size={15} className="text-gold" />
                <span>{lang === 'es' ? 'Turno Horario' : 'Time Slot'}</span>
              </label>
              <div className="time-chips-row">
                {['13:30', '14:30', '20:30', '21:15', '22:00', '22:45'].map((t) => (
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

            <div className="modal-footer-nav">
              <div></div>
              <button type="submit" className="btn-primary">
                <span>{lang === 'es' ? 'Continuar a Experiencia' : 'Next: Experience'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Gastronomic Experience & Pairings */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label">
                <Sparkles size={15} className="text-gold" />
                <span>{lang === 'es' ? 'Formato Culinario Principal' : 'Primary Culinary Format'}</span>
              </label>
              <div className="experience-choice-grid">
                <div 
                  className={`exp-card ${experience === 'tasting-menu' ? 'active' : ''}`}
                  onClick={() => setExperience('tasting-menu')}
                >
                  <div className="exp-card-header">
                    <span className="exp-name font-serif">{lang === 'es' ? 'Menú Sinfonía 8 Pasos' : '8-Step Symphony Menu'}</span>
                    <span className="exp-price font-serif text-gold">185 €</span>
                  </div>
                  <p className="exp-desc font-editorial">
                    {lang === 'es' ? 'La experiencia insignia completa del Chef Ejecutivo.' : 'The Executive Chef signature gastronomic opus.'}
                  </p>
                </div>

                <div 
                  className={`exp-card ${experience === 'alacarte' ? 'active' : ''}`}
                  onClick={() => setExperience('alacarte')}
                >
                  <div className="exp-card-header">
                    <span className="exp-name font-serif">{lang === 'es' ? 'Carta Libre de Temporada' : 'A La Carte Selection'}</span>
                    <span className="exp-price font-serif text-gold">~110 €</span>
                  </div>
                  <p className="exp-desc font-editorial">
                    {lang === 'es' ? 'Selección individual de cortes nobles, mariscos y entrantes.' : 'Individual choice from wild catch and prime dry aged cuts.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <Wine size={15} className="text-gold" />
                <span>{lang === 'es' ? 'Experiencias Líquidas & Mejoras' : 'Liquid Enhancements'}</span>
              </label>

              <div className="enhancements-list">
                <label className="checkbox-tile">
                  <input 
                    type="checkbox" 
                    checked={addWinePairing} 
                    onChange={(e) => setAddWinePairing(e.target.checked)} 
                  />
                  <div className="tile-info">
                    <div className="tile-title-price">
                      <strong>{lang === 'es' ? 'Maridaje Armonía Grand Cru' : 'Grand Cru Wine Flight'}</strong>
                      <span className="text-gold font-serif">+110 € / pers.</span>
                    </div>
                    <p className="font-editorial">{lang === 'es' ? '8 copas seleccionadas por el Head Sommelier' : '8 glasses curated by Head Sommelier'}</p>
                  </div>
                </label>

                <label className="checkbox-tile">
                  <input 
                    type="checkbox" 
                    checked={addWelcomeChampagne} 
                    onChange={(e) => setAddWelcomeChampagne(e.target.checked)} 
                  />
                  <div className="tile-info">
                    <div className="tile-title-price">
                      <strong>{lang === 'es' ? 'Copa de Bienvenida Dom Pérignon Vintage' : 'Dom Pérignon Welcome Toast'}</strong>
                      <span className="text-gold font-serif">+35 € / pers.</span>
                    </div>
                    <p className="font-editorial">{lang === 'es' ? 'Servida a la llegada con perlas de caviar' : 'Served on arrival with Oscietra caviar spoon'}</p>
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
                <span>{lang === 'es' ? 'Continuar a Datos' : 'Next: Guest Details'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Guest Details & Special Requests */}
        {step === 3 && (
          <form onSubmit={handleNextStep} className="modal-form-step">
            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Nombre y Apellidos del Titular *' : 'Lead Guest Full Name *'}</span>
              </label>
              <input 
                type="text"
                className="modal-text-input"
                placeholder={lang === 'es' ? 'Ej: Conde de Valverde / Sra. Carmen Morales' : 'e.g. Victor Ayllon'}
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
              />
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Teléfono de Contacto (SMS confirmación) *' : 'Phone Number (SMS confirmation) *'}</span>
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
                  placeholder="vip@ejemplo.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Motivo Especial / Celebración' : 'Special Occasion'}</span>
              </label>
              <select 
                className="modal-select"
                value={specialOccasion}
                onChange={(e) => setSpecialOccasion(e.target.value)}
              >
                <option value="none">{lang === 'es' ? 'Cena Gastronómica Habitual' : 'Standard Gastronomic Dinner'}</option>
                <option value="anniversary">{lang === 'es' ? 'Aniversario Romántico' : 'Romantic Anniversary'}</option>
                <option value="birthday">{lang === 'es' ? 'Celebración de Cumpleaños' : 'Birthday Celebration'}</option>
                <option value="business">{lang === 'es' ? 'Cena de Alta Dirección / Negocios' : 'Executive / Business Dinner'}</option>
                <option value="proposal">{lang === 'es' ? 'Petición de Mano / Velada Secreta' : 'Secret Marriage Proposal'}</option>
              </select>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Alergias o Preferencias Dietéticas' : 'Dietary Restrictions & Allergies'}</span>
              </label>
              <input 
                type="text"
                className="modal-text-input"
                placeholder={lang === 'es' ? 'Ej: Sin mariscos, intolerancia al gluten, sin frutos secos...' : 'e.g. No shellfish, gluten intolerant, pescatarian...'}
                value={dietaryNotes}
                onChange={(e) => setDietaryNotes(e.target.value)}
              />
            </div>

            <div className="modal-footer-nav">
              <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                <ArrowLeft size={16} />
                <span>{lang === 'es' ? 'Atrás' : 'Back'}</span>
              </button>
              <button type="submit" className="btn-primary">
                <CheckCircle2 size={16} />
                <span>{lang === 'es' ? 'Confirmar Reserva Oficial' : 'Confirm Official Booking'}</span>
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
              {lang === 'es' ? 'Reserva Garantizada en La Octava' : 'Reservation Confirmed at La Octava'}
            </h3>

            <div className="booking-code-pill font-serif">
              {lang === 'es' ? 'Código de Pase:' : 'Access Code:'} <span className="text-gold">{bookingCode}</span>
            </div>

            <div className="confirmation-summary-box glass-card font-editorial">
              <div className="summary-row">
                <span>{lang === 'es' ? 'Titular:' : 'Guest:'}</span>
                <strong>{clientName || 'Huésped Ilustre'}</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Fecha y Hora:' : 'Date & Time:'}</span>
                <strong>{date} a las {time} h</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Espacio:' : 'Space:'}</span>
                <strong>{space.replace('-', ' ').toUpperCase()}</strong>
              </div>
              <div className="summary-row">
                <span>{lang === 'es' ? 'Comensales:' : 'Guests:'}</span>
                <strong>{guests} {lang === 'es' ? 'personas' : 'guests'}</strong>
              </div>
              {addWinePairing && (
                <div className="summary-row">
                  <span>{lang === 'es' ? 'Maridaje:' : 'Wine Pairing:'}</span>
                  <strong className="text-gold">{lang === 'es' ? 'Grand Cru Armonía incluido' : 'Grand Cru Flight included'}</strong>
                </div>
              )}
            </div>

            <p className="confirmation-notice">
              {lang === 'es'
                ? `Hemos enviado los detalles de acceso y protocolo a ${clientEmail || 'tu correo'}. Nuestro Head Sommelier preparará tu recepción.`
                : `We have sent full access credentials and protocol to ${clientEmail || 'your email'}. Our Head Sommelier will prepare your arrival.`}
            </p>

            <div className="confirmation-actions-row">
              <button 
                type="button" 
                className="btn-primary"
                onClick={handleDownloadCalendar}
              >
                <Download size={16} />
                <span>{lang === 'es' ? 'Guardar en Calendario (.ics)' : 'Add to Calendar (.ics)'}</span>
              </button>

              <a
                href={`https://wa.me/34688888888?text=Hola,%20tengo%20la%20reserva%20${bookingCode}%20para%20el%20${date}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Concierge</span>
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
