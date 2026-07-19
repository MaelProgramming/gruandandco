import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  lang: 'FR' | 'EN';
  setLang: (lang: 'FR' | 'EN') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'FR' ? 'Services' : 'Services', href: '#services' },
    { name: lang === 'FR' ? 'Simulateur' : 'Estimator', href: '#estimator' },
    { name: lang === 'FR' ? 'Diagnostic' : 'Audit', href: '#audit' },
    { name: lang === 'FR' ? 'Réalisations' : 'Portfolio', href: '#portfolio' },
    { name: lang === 'FR' ? 'Philosophie' : 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'header-glass' : 'bg-transparent'
      }`}
      style={{
        paddingTop: scrolled ? '1.25rem' : '1.75rem',
        paddingBottom: scrolled ? '0.75rem' : '1.25rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Monogram */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Gruand & Co Logo"
              style={{
                width: '46px',
                height: '46px',
                objectFit: 'cover',
                borderRadius: '6px',
                border: '1px solid rgba(212, 175, 55, 0.5)',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.25)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#F8F6F0',
                  lineHeight: 1.1,
                }}
              >
                GRUAND <span style={{ color: '#D4AF37' }}>&</span> CO
              </span>
              <span
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9C3B4',
                  fontWeight: 500,
                }}
              >
                {lang === 'FR' ? 'Maison Fondée en 2026' : 'Maison Established 2026'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#C9C3B4',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#C9C3B4')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
              style={{
                background: 'rgba(38, 23, 14, 0.5)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#E5C365',
                padding: '0.4rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.3s ease',
              }}
            >
              <Globe size={14} />
              <span>{lang}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="btn-gold desktop-cta"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
            >
              <PhoneCall size={14} />
              <span>{lang === 'FR' ? 'Entretien Privé' : 'Private Call'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#D4AF37',
                cursor: 'pointer',
                display: 'none',
                padding: '0.5rem',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#0D0D0F',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#F8F6F0',
                textDecoration: 'none',
                fontSize: '1rem',
                fontFamily: 'var(--font-serif-display)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} color="#D4AF37" />
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
          >
            <PhoneCall size={16} />
            <span>{lang === 'FR' ? 'Entretien Privé' : 'Private Call'}</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
