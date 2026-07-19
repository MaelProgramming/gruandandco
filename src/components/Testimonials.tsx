import React from 'react';
import { ShieldCheck, Lock, UserCheck, Eye } from 'lucide-react';

interface TestimonialsProps {
  lang: 'FR' | 'EN';
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const guarantees = [
    {
      icon: UserCheck,
      title: lang === 'FR' ? 'Implication Directe du Fondateur' : 'Direct Founder Involvement',
      desc: lang === 'FR'
        ? 'Pas de sous-traitance opaque. Vous échangez et construisez directement avec le fondateur à chaque étape.'
        : 'Zero opaque outsourcing. You collaborate directly with the founder at every single step.',
    },
    {
      icon: Lock,
      title: lang === 'FR' ? 'Confidentialité & Souveraineté' : 'Confidentiality & IP Ownership',
      desc: lang === 'FR'
        ? 'Vous êtes propriétaire à 100% du code, du design et du contenu. Aucune dépendance ni engagement forcé.'
        : 'You own 100% of the code, design, and content. Zero lock-in or forced retainers.',
    },
    {
      icon: Eye,
      title: lang === 'FR' ? 'Transparence Budget & Délais' : 'Transparent Budget & Timelines',
      desc: lang === 'FR'
        ? 'Devis clair avant le lancement et validation des jalons par écrit. Zéro coût caché.'
        : 'Clear quote before kickoff and written validation for every milestone. Zero surprise costs.',
    },
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'rgba(13, 13, 15, 0.7)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="crested-badge" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={14} color="#D4AF37" />
            <span>{lang === 'FR' ? 'ENGAGEMENTS DE LA MAISON' : 'OUR FOUNDING COMMITMENTS'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.2 }}>
            {lang === 'FR' ? 'Une Relation Basée sur la Confiance & la Clarté' : 'A Relationship Built on Trust & Clarity'}
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold-gradient)', margin: '1rem auto 0 auto' }} />
        </div>

        {/* Guarantees Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {guarantees.map((g, idx) => {
            const IconComp = g.icon;
            return (
              <div
                key={idx}
                className="leather-card"
                style={{
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  background: 'linear-gradient(160deg, #1C0F0A 0%, #0D0D0F 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid #D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <IconComp size={28} color="#D4AF37" />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#F8F6F0', marginBottom: '0.85rem' }}>
                  {g.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#C9C3B4', lineHeight: 1.6 }}>
                  {g.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
