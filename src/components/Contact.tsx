import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Lock, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  lang: 'FR' | 'EN';
  prefilledMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ lang, prefilledMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Strategic Advisory',
    budget: '30k-75k',
    message: prefilledMessage,
    day: 'Lundi / Monday',
    time: '14:30',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="crested-badge" style={{ marginBottom: '1rem' }}>
            <Lock size={14} color="#D4AF37" />
            <span>{lang === 'FR' ? 'ENTRETIEN PRIVÉ & CONFIDENTIEL' : 'PRIVATE & CONFIDENTIAL CONSULTATION'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.2 }}>
            {lang === 'FR' ? 'Initié un Échange avec la Maison' : 'Initiate an Executive Dialogue'}
          </h2>
          <p style={{ color: '#C9C3B4', fontSize: '1rem', marginTop: '0.75rem' }}>
            {lang === 'FR'
              ? 'Toutes vos informations sont couvertes par un engagement strict de discrétion et de confidentialité.'
              : 'All communications are protected under strict non-disclosure and discretion standards.'}
          </p>
        </div>

        {/* Contact Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Info Card */}
          <div
            className="leather-card"
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(160deg, #1C0F0A 0%, #0D0D0F 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: '#F8F6F0', marginBottom: '1.5rem', fontFamily: 'var(--font-serif-display)' }}>
              Maison Gruand & Co
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.6rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '6px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <Mail size={20} color="#D4AF37" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#C9C3B4', textTransform: 'uppercase' }}>
                    {lang === 'FR' ? 'Bureau exécutif' : 'Executive Bureau'}
                  </div>
                  <a href="mailto:gruandandco@gmail.com" style={{ color: '#F8F6F0', textDecoration: 'none', fontWeight: 600 }}>
                    gruandandco@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.6rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '6px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <Phone size={20} color="#D4AF37" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#C9C3B4', textTransform: 'uppercase' }}>
                    {lang === 'FR' ? 'Ligne Ligne Directe' : 'Direct Advisory Line'}
                  </div>
                  <a href="tel:+34647360247" style={{ color: '#F8F6F0', textDecoration: 'none', fontWeight: 600 }}>
                    +34 647 36 02 47
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.6rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '6px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <MapPin size={20} color="#D4AF37" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#C9C3B4', textTransform: 'uppercase' }}>
                    {lang === 'FR' ? 'Siège & Salons' : 'Headquarters'}
                  </div>
                  <div style={{ color: '#F8F6F0', fontWeight: 600 }}>
                    Madrid, 28013, Espagne
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.25rem', background: 'rgba(6, 6, 7, 0.7)', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                <Lock size={16} />
                <span>{lang === 'FR' ? 'Engagement de Discrétion' : 'Discretion Pledge'}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#C9C3B4', lineHeight: 1.5 }}>
                {lang === 'FR'
                  ? 'Aucune information partagée ne fera l’objet de diffusion ni de réutilisation commerciale.'
                  : 'Zero information shared will ever be disclosed or monetized.'}
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="leather-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', border: '2px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle2 size={36} color="#D4AF37" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#F8F6F0', marginBottom: '1rem' }}>
                  {lang === 'FR' ? 'Demande Transmise' : 'Request Sent'}
                </h3>
                <p style={{ color: '#C9C3B4', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {lang === 'FR'
                    ? 'Un Associé de Gruand & Co a bien reçu votre message et prendra contact avec vous dans un délai maximal de 24h ouvrées.'
                    : 'A Managing Partner at Gruand & Co has received your brief and will connect with you within 24 business hours.'}
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-gold">
                  {lang === 'FR' ? 'Envoyer une autre demande' : 'Send Another Brief'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {lang === 'FR' ? 'Nom & Prénom' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean de La Tour"
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '4px',
                        background: 'rgba(6, 6, 7, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        color: '#F8F6F0',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {lang === 'FR' ? 'Société / Organisation' : 'Company'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Gruand & Co"
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '4px',
                        background: 'rgba(6, 6, 7, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        color: '#F8F6F0',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {lang === 'FR' ? 'Email d’Affaires' : 'Business Email'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="dirigeant@entreprise.com"
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '4px',
                        background: 'rgba(6, 6, 7, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        color: '#F8F6F0',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {lang === 'FR' ? 'Téléphone (Optionnel)' : 'Phone (Optional)'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 00 00 00 00"
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '4px',
                        background: 'rgba(6, 6, 7, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        color: '#F8F6F0',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {lang === 'FR' ? 'Synthèse du Besoin / Cahier des Charges' : 'Project Brief / Message'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'FR' ? 'Décrivez brièvement votre projet ou vos attentes...' : 'Describe your project or expectations...'}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      borderRadius: '4px',
                      background: 'rgba(6, 6, 7, 0.7)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      color: '#F8F6F0',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>{lang === 'FR' ? 'Transmettre le Cahier des Charges' : 'Submit Confidential Brief'}</span>
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
