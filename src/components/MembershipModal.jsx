import React, { useState } from 'react';
import { X, KeyRound, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MembershipModal({ 
  isOpen, 
  onClose, 
  lang, 
  initialTier = 'black-key' 
}) {
  const [tier, setTier] = useState(initialTier || 'black-key');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
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
            <KeyRound size={20} className="text-gold" />
            <div>
              <span className="modal-brand-title font-display">
                {lang === 'es' ? 'BLACK KEY SOCIETY' : 'BLACK KEY SOCIETY'}
              </span>
              <span className="modal-brand-subtitle font-mono">
                {lang === 'es' ? 'Solicitud de Membresía' : 'Membership Application'}
              </span>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={handleClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="modal-form-step">
            <p className="membership-form-intro font-mono">
              {lang === 'es'
                ? 'Black Key Society otorga acceso prioritario permanente y sin esperas a ambos niveles de La Octava.'
                : 'Black Key Society grants seamless permanent VIP priority access to both floors of La Octava.'}
            </p>

            <div className="modal-input-group">
              <label className="input-label font-mono">
                <span>{lang === 'es' ? 'Categoría de Membresía' : 'Membership Tier'}</span>
              </label>
              <div className="membership-modal-tiers-grid">
                {RESTAURANT_DATA.memberships.map((m) => (
                  <div
                    key={m.id}
                    className={`membership-tile-pick ${tier === m.id ? 'active' : ''}`}
                    onClick={() => setTier(m.id)}
                  >
                    <span className="pick-name font-display">{lang === 'es' ? m.nameEs : m.nameEn}</span>
                    <span className="pick-price font-mono text-gold">{m.priceYear}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <span>{lang === 'es' ? 'Nombre Completo *' : 'Full Name *'}</span>
                </label>
                <input
                  type="text"
                  className="modal-text-input"
                  placeholder="Victor Ayllon"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <span>{lang === 'es' ? 'Empresa / Cargo' : 'Company / Role'}</span>
                </label>
                <input
                  type="text"
                  className="modal-text-input"
                  placeholder="e.g. Founder & Creative Director"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <span>{lang === 'es' ? 'Email *' : 'Email *'}</span>
                </label>
                <input
                  type="email"
                  className="modal-text-input font-mono"
                  placeholder="victor@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group">
                <label className="input-label font-mono">
                  <span>{lang === 'es' ? 'Teléfono Móvil *' : 'Phone *'}</span>
                </label>
                <input
                  type="tel"
                  className="modal-text-input font-mono"
                  placeholder="+34 600 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-footer-nav font-mono">
              <button type="button" className="btn-secondary" onClick={handleClose}>
                {lang === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
              <button type="submit" className="btn-primary">
                <Sparkles size={14} />
                <span>{lang === 'es' ? 'Enviar Solicitud' : 'Submit Application'}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="confirmation-card-screen">
            <div className="confirmation-badge-glow">
              <CheckCircle2 size={40} className="text-gold" />
            </div>

            <h3 className="confirmation-title font-display">
              {lang === 'es' ? 'Solicitud Recibida' : 'Application Received'}
            </h3>

            <p className="confirmation-notice font-mono" style={{ fontSize: '0.95rem', margin: '1.5rem 0' }}>
              {lang === 'es'
                ? `Estimado/a ${fullName || 'Candidato/a'}, tu solicitud ha sido remitida al equipo de dirección de La Octava. Contactaremos en menos de 48 horas.`
                : `Dear ${fullName || 'Applicant'}, your inquiry has been forwarded to La Octava’s management. We will contact you within 48 hours.`}
            </p>

            <div className="confirmation-actions-row font-mono" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn-primary" onClick={handleClose}>
                <span>{lang === 'es' ? 'Cerrar' : 'Close'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
