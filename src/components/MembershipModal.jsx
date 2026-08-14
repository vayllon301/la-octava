import React, { useState } from 'react';
import { X, Shield, Crown, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MembershipModal({ 
  isOpen, 
  onClose, 
  lang, 
  initialTier = 'amber-vip' 
}) {
  const [tier, setTier] = useState(initialTier || 'amber-vip');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [referral, setReferral] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-box glass-card membership-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-brand-tag">
            <Crown size={24} className="text-gold" />
            <div>
              <span className="modal-brand-title font-serif">
                {lang === 'es' ? 'CÍRCULO OCTAVA PRIVADO' : 'THE PRIVATE EIGHTH CIRCLE'}
              </span>
              <span className="modal-brand-subtitle">
                {lang === 'es' ? 'Candidatura de Membresía 2026' : '2026 Membership Candidacy'}
              </span>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="modal-form-step">
            <p className="membership-form-intro font-editorial">
              {lang === 'es'
                ? 'El Círculo Octava es una sociedad exclusiva limitada a 88 miembros de honor. Por favor, complete la siguiente solicitud para la consideración de nuestro Comité.'
                : 'The Eighth Circle is an exclusive society strictly limited to 88 distinguished patrons. Please complete the admission inquiry below.'}
            </p>

            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Categoría de Membresía Deseada' : 'Desired Membership Category'}</span>
              </label>
              <div className="membership-modal-tiers-grid">
                {RESTAURANT_DATA.memberships.map((m) => (
                  <div
                    key={m.id}
                    className={`membership-tile-pick ${tier === m.id ? 'active' : ''}`}
                    onClick={() => setTier(m.id)}
                  >
                    <span className="pick-name font-serif">{lang === 'es' ? m.nameEs : m.nameEn}</span>
                    <span className="pick-price font-serif text-gold">{m.priceYear}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Nombre Completo *' : 'Full Name *'}</span>
                </label>
                <input
                  type="text"
                  className="modal-text-input"
                  placeholder={lang === 'es' ? 'D. Alejandro de la Serna' : 'e.g. Victor Ayllon'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Empresa / Cargo Profesional' : 'Company / Executive Role'}</span>
                </label>
                <input
                  type="text"
                  className="modal-text-input"
                  placeholder={lang === 'es' ? 'Ej: Managing Partner / Coleccionista' : 'e.g. Founder & CEO'}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Correo Electrónico *' : 'Email Address *'}</span>
                </label>
                <input
                  type="email"
                  className="modal-text-input"
                  placeholder="alexander@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label">
                  <span>{lang === 'es' ? 'Teléfono Móvil Confidencial *' : 'Confidential Phone *'}</span>
                </label>
                <input
                  type="tel"
                  className="modal-text-input"
                  placeholder="+34 600 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Socio Proponente / Referencia (Opcional)' : 'Referring Member (Optional)'}</span>
              </label>
              <input
                type="text"
                className="modal-text-input"
                placeholder={lang === 'es' ? 'Nombre del miembro que avala la candidatura' : 'Name of referring member if applicable'}
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
              />
            </div>

            <div className="modal-input-group">
              <label className="input-label">
                <span>{lang === 'es' ? 'Intereses Específicos (Cava, Eventos Privados, etc.)' : 'Specific Interests (Cellar, Private Dining)'}</span>
              </label>
              <textarea
                className="modal-textarea"
                rows="2"
                placeholder={lang === 'es' ? 'Comentarios adicionales sobre su colección o expectativas...' : 'Additional notes regarding your wine collection or preferences...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <div className="modal-footer-nav">
              <button type="button" className="btn-secondary" onClick={handleClose}>
                {lang === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
              <button type="submit" className="btn-primary">
                <Sparkles size={16} />
                <span>{lang === 'es' ? 'Enviar Candidatura Confidencial' : 'Submit Confidential Application'}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="confirmation-card-screen">
            <div className="confirmation-badge-glow">
              <CheckCircle2 size={48} className="text-gold" />
            </div>

            <h3 className="confirmation-title font-serif">
              {lang === 'es' ? 'Candidatura Registrada con Éxito' : 'Application Successfully Registered'}
            </h3>

            <p className="confirmation-notice font-editorial" style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
              {lang === 'es'
                ? `Estimado/a ${fullName || 'Candidato'}, su solicitud para acceder al Círculo Octava ha sido remitida al Comité de Admisiones. Nuestro Director de Relaciones Privadas contactará discretamente en un plazo máximo de 48 horas.`
                : `Dear ${fullName || 'Applicant'}, your inquiry has been forwarded to the Executive Admissions Committee. Our Director of Private Relations will contact you confidentially within 48 hours.`}
            </p>

            <div className="confirmation-actions-row" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn-primary" onClick={handleClose}>
                <span>{lang === 'es' ? 'Aceptar' : 'Done'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
