import React from 'react';
import { Shield, Sparkles, Check, Crown, KeyRound, ArrowRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MembershipSection({ lang, onOpenMembership }) {
  return (
    <section className="membership-section" id="membresia">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {lang === 'es' ? 'Privilegios para Coleccionistas' : 'Collector Privileges'}
          </span>
          <h2 className="section-title">
            {lang === 'es' ? 'El Círculo Octava Privado' : 'The Private Eighth Circle'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Un club de miembros rigurosamente restringido a 88 iniciados anuales. Acceso prioritario, casilleros de cava privada y experiencias inaccesibles al público general.'
              : 'A private members society strictly limited to 88 patrons annually. Priority access, private cellar lockers, and bespoke privileges.'}
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="membership-tiers-grid">
          {RESTAURANT_DATA.memberships.map((tier) => (
            <div 
              key={tier.id} 
              className={`membership-tier-card glass-card ${tier.recommended ? 'is-recommended' : ''}`}
            >
              {tier.recommended && (
                <div className="recommended-badge">
                  <Crown size={14} />
                  <span>{lang === 'es' ? 'MÁS SOLICITADA' : 'MOST REQUESTED'}</span>
                </div>
              )}

              <div className="tier-header">
                <div className="tier-icon-wrap">
                  {tier.recommended ? (
                    <Crown size={28} className="text-gold" />
                  ) : (
                    <KeyRound size={28} className="text-gold" />
                  )}
                </div>
                <h3 className="tier-name font-serif">
                  {lang === 'es' ? tier.nameEs : tier.nameEn}
                </h3>
                <div className="tier-price-box font-serif text-gold">
                  {tier.priceYear}
                </div>
              </div>

              <div className="tier-divider"></div>

              <ul className="tier-benefits-list">
                {(lang === 'es' ? tier.benefitsEs : tier.benefitsEn).map((benefit, bIdx) => (
                  <li key={bIdx} className="benefit-item">
                    <Check size={16} className="benefit-check text-gold" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="tier-action-wrap">
                <button
                  type="button"
                  className={tier.recommended ? 'btn-primary tier-cta-btn' : 'btn-secondary tier-cta-btn'}
                  onClick={() => onOpenMembership(tier.id)}
                >
                  <Sparkles size={16} />
                  <span>{lang === 'es' ? 'Solicitar Admisión' : 'Apply for Admission'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Footer Note */}
        <div className="membership-disclaimer glass-card">
          <Shield size={20} className="text-gold" />
          <p className="font-editorial">
            {lang === 'es'
              ? 'Nota de Admisión: Las solicitudes son evaluadas semanalmente por nuestro Comité de Dirección. Los nuevos miembros reciben su llave física de acceso y bienvenida privada por el Head Sommelier.'
              : 'Admission Note: Applications are reviewed weekly by our Executive Committee. Accepted members receive a bespoke physical access key and private welcome by our Head Sommelier.'}
          </p>
        </div>
      </div>
    </section>
  );
}
