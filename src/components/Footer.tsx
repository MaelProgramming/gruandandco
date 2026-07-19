import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: 'FR' | 'EN';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer
      style={{
        background: '#060607',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        color: '#C9C3B4',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src="/logo.png"
                alt="Gruand & Co Logo"
                style={{
                  width: '38px',
                  height: '38px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#F8F6F0',
                }}
              >
                GRUAND <span style={{ color: '#D4AF37' }}>&</span> CO
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#C9C3B4' }}>
              {lang === 'FR'
                ? 'Maison de conseil stratégique, d’ingénierie logicielle d’élite et de Venture Building pour les entreprises d’exception.'
                : 'Maison of strategic advisory, elite custom software engineering, and Venture Building for high-impact enterprises.'}
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '4px',
                background: 'rgba(38, 23, 14, 0.5)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                fontSize: '0.75rem',
                color: '#F7E7B4',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span>{lang === 'FR' ? 'Accompagnements Ouverts Q3/Q4' : 'Select Advisory Slots Open Q3/Q4'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#F8F6F0', fontSize: '0.95rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif-display)' }}>
              {lang === 'FR' ? 'EXPLORER LA MAISON' : 'MAISON NAVIGATION'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <a href="#services" style={{ color: '#C9C3B4', textDecoration: 'none' }}>{lang === 'FR' ? 'Pôles d’Excellence' : 'Expertise Pillars'}</a>
              <a href="#estimator" style={{ color: '#C9C3B4', textDecoration: 'none' }}>{lang === 'FR' ? 'Simulateur de Devis' : 'Project Estimator'}</a>
              <a href="#audit" style={{ color: '#C9C3B4', textDecoration: 'none' }}>{lang === 'FR' ? 'Diagnostic Stratégique' : 'Strategy Audit'}</a>
              <a href="#portfolio" style={{ color: '#C9C3B4', textDecoration: 'none' }}>{lang === 'FR' ? 'Réalisations & Mandats' : 'Case Studies'}</a>
              <a href="#about" style={{ color: '#C9C3B4', textDecoration: 'none' }}>{lang === 'FR' ? 'Manifeste & Philosophie' : 'About & Manifesto'}</a>
            </div>
          </div>

          {/* Executive Letter Subscription */}
          <div>
            <h4 style={{ color: '#F8F6F0', fontSize: '0.95rem', marginBottom: '1.25rem', fontFamily: 'var(--font-serif-display)' }}>
              {lang === 'FR' ? 'LA LETTRE EXÉCUTIVE' : 'EXECUTIVE DISPATCH'}
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem', color: '#C9C3B4' }}>
              {lang === 'FR'
                ? 'Analyses confidentielles sur la technologie et la création d’entreprise. Une fois par mois.'
                : 'Confidential briefings on tech and venture building. Delivered monthly.'}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="gruandandco@gmail.com"
                style={{
                  flex: 1,
                  padding: '0.65rem 0.85rem',
                  borderRadius: '4px',
                  background: 'rgba(13, 13, 15, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: '#F8F6F0',
                  fontSize: '0.85rem',
                }}
              />
              <button className="btn-gold" style={{ padding: '0.65rem 1rem', fontSize: '0.75rem' }}>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#8E887B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Gruand & Co. Tous droits réservés.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#8E887B', textDecoration: 'none' }}>{lang === 'FR' ? 'Mentions Légales' : 'Legal Mentions'}</a>
            <a href="#" style={{ color: '#8E887B', textDecoration: 'none' }}>{lang === 'FR' ? 'Charte de Confidentialité' : 'Privacy Policy'}</a>
            <a href="#" style={{ color: '#8E887B', textDecoration: 'none' }}>{lang === 'FR' ? 'Sécurité Souveraine' : 'Security Policy'}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
