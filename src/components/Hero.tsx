import React from 'react';
import { ArrowRight, Sparkles, Calculator, Lock } from 'lucide-react';

interface HeroProps {
  lang: 'FR' | 'EN';
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenEstimator, onOpenContact }) => {
  const content = {
    FR: {
      badge: "LANCEMENT 2026 — STUDIO DE DÉVELOPPEMENT WEB & DESIGN LUXE",
      headlineMain: "L'ART DU DÉVELOPPEMENT WEB,",
      headlineGold: "DU DESIGN & DE LA PERFORMANCE.",
      sub: "Gruand & Co façonne des sites web d'exception et des applications sur-mesure pour les entreprises exigeantes. Nous allions esthétique haute couture, architecture moderne et vitesse maximale pour sublimer votre présence numérique.",
      btnPrimary: "Simuler Votre Projet Web",
      btnSecondary: "Entretien Confidentiel",
      metrics: [
        { label: "Code 100% Sur-Mesure", val: "React/TS", sub: "Zero template générique" },
        { label: "Design Haute Couture", val: "UX/UI", sub: "Esthétique raffinée" },
        { label: "Vitesse & SEO", val: "100/100", sub: "Performance maximale" },
        { label: "Suivi Dédié", val: "Direct", sub: "Interlocuteur unique" },
      ],
    },
    EN: {
      badge: "LAUNCHING 2026 — LUXURY WEB ENGINEERING & DESIGN STUDIO",
      headlineMain: "THE ART OF WEB DEVELOPMENT,",
      headlineGold: "DESIGN & HIGH PERFORMANCE.",
      sub: "Gruand & Co crafts exceptional bespoke websites and custom web applications. We unite haute couture design, clean modern architecture, and lightning speed to elevate your digital footprint.",
      btnPrimary: "Estimate Your Web Build",
      btnSecondary: "Confidential Inquiry",
      metrics: [
        { label: "100% Custom Code", val: "React/TS", sub: "Zero generic bloat" },
        { label: "Haute Couture Design", val: "UX/UI", sub: "Refined aesthetics" },
        { label: "Speed & SEO", val: "100/100", sub: "Maximum performance" },
        { label: "Direct Support", val: "Founder", sub: "Single expert contact" },
      ],
    },
  }[lang];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '10.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
      className="bg-gold-grid"
    >
      {/* Background Gold Ambient Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(38, 23, 14, 0.05) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Crest Badge */}
          <div style={{ display: 'inline-block', marginBottom: '1.75rem' }}>
            <div className="crested-badge">
              <Sparkles size={14} color="#D4AF37" />
              <span>{content.badge}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#F8F6F0',
              marginBottom: '1.5rem',
            }}
          >
            {content.headlineMain}{' '}
            <span className="gold-text">{content.headlineGold}</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: '#C9C3B4',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              fontWeight: 400,
              maxWidth: '780px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {content.sub}
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
            }}
          >
            <a href="#estimator" onClick={onOpenEstimator} className="btn-gold">
              <Calculator size={18} />
              <span>{content.btnPrimary}</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" onClick={onOpenContact} className="btn-outline-gold">
              <Lock size={16} color="#D4AF37" />
              <span>{content.btnSecondary}</span>
            </a>
          </div>

        </div>

        {/* Authentic Pillars Ribbon */}
        <div
          className="leather-card"
          style={{
            padding: '2rem',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {content.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  borderRight: idx !== content.metrics.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
                  paddingRight: '1rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#F7E7B4',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {m.val}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#D4AF37',
                    fontWeight: 600,
                    marginBottom: '0.2rem',
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#8E887B',
                  }}
                >
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
