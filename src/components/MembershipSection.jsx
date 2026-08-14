import React from 'react';
import { Shield, Sparkles, Check, KeyRound, ArrowRight } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export default function MembershipSection({ lang, onOpenMembership }) {
  return (
    <section className="membership-section" id="membresia">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle font-mono">
            {lang === 'es' ? 'Black Key Society' : 'Black Key Society'}
          </span>
          <h2 className="section-title font-display">
            {lang === 'es' ? 'Membresías & Acceso VIP' : 'Memberships & VIP Access'}
          </h2>
          <p className="section-desc">
            {lang === 'es'
              ? 'Acceso preferente sin fricción para transitar libremente entre el piano bar y el house club subterráneo.'
              : 'Seamless priority access to transition effortlessly between the acoustic piano bar and the underground club.'}
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
                <div className="recommended-badge font-mono">
                  <Sparkles size={13} />
                  <span>{lang === 'es' ? 'RECOMENDADA' : 'FEATURED'}</span>
                </div>
              )}

              <div className="tier-header">
                <div className="tier-icon-wrap">
                  <KeyRound size={22} className="text-gold" />
                </div>
                <h3 className="tier-name font-display">
                  {lang === 'es' ? tier.nameEs : tier.nameEn}
                </h3>
                <div className="tier-price-box font-mono text-gold">
                  {tier.priceYear}
                </div>
              </div>

              <div className="tier-divider"></div>

              <ul className="tier-benefits-list">
                {(lang === 'es' ? tier.benefitsEs : tier.benefitsEn).map((benefit, bIdx) => (
                  <li key={bIdx} className="benefit-item">
                    <Check size={15} className="benefit-check text-gold" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="tier-action-wrap font-mono">
                <button
                  type="button"
                  className={tier.recommended ? 'btn-primary tier-cta-btn' : 'btn-secondary tier-cta-btn'}
                  onClick={() => onOpenMembership(tier.id)}
                >
                  <span>{lang === 'es' ? 'Solicitar Membresía' : 'Apply for Access'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Footer Note */}
        <div className="membership-disclaimer glass-card">
          <Shield size={18} className="text-gold" />
          <p className="font-mono">
            {lang === 'es'
              ? 'Black Key Protocol: Las solicitudes se evalúan de forma confidencial. Los miembros aceptados reciben su llave física personalizada.'
              : 'Black Key Protocol: Applications are reviewed confidentially. Accepted members receive a personalized physical key.'}
          </p>
        </div>
      </div>
    </section>
  );
}
