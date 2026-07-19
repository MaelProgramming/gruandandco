import React, { useState } from 'react';
import { Award, ArrowRight, X, Layers, Palette, Rocket } from 'lucide-react';

interface PortfolioProps {
  lang: 'FR' | 'EN';
  onSelectCase: (caseTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang, onSelectCase }) => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const projectTypes = [
    {
      id: 1,
      icon: Layers,
      title: lang === 'FR' ? 'Plateformes Web & Applications Sur-Mesure' : 'Bespoke Web & App Platforms',
      badge: lang === 'FR' ? 'INGÉNIERIE LOGICIELLE' : 'SOFTWARE ENGINEERING',
      desc: lang === 'FR'
        ? 'Architecture moderne React, TypeScript et backend haute performance. Conception d’outils propriétaires personnalisés pour digitaliser vos activités.'
        : 'Modern React, TypeScript, and high-performance backend architecture. Crafting proprietary custom software to digitize your operations.',
      features: lang === 'FR'
        ? ['Espaces Clients Sécurisés', 'Tableaux de Bord Exécutifs', 'Modèles IA & Automatisations']
        : ['Secure Client Portals', 'Executive Dashboards', 'AI Engines & Automations'],
      details: lang === 'FR'
        ? 'Nous concevons des plateformes robustes répondant exactement à votre cahier des charges. Sans modèle générique ni dépendances lourdes, chaque brique est pensée pour la pérennité.'
        : 'We design robust platforms tailored precisely to your specifications. Zero generic templates, zero heavy bloat.',
    },
    {
      id: 2,
      icon: Palette,
      title: lang === 'FR' ? 'Identité Visuelle & Expérience Luxe' : 'Visual Identity & Luxury Web UI',
      badge: lang === 'FR' ? 'DESIGN HAUTE COUTURE' : 'HAUTE COUTURE DESIGN',
      desc: lang === 'FR'
        ? 'Création d’univers de marque élégants (Old Money, minimalisme exécutif) et d’interfaces utilisateur raffinées qui valorisent votre entreprise.'
        : 'Crafting elegant brand worlds (Old Money, executive minimalism) and refined user interfaces that elevate your venture.',
      features: lang === 'FR'
        ? ['Design System Sur-Mesure', 'Charte Graphique Complète', 'Animations & Micro-Interactions']
        : ['Custom Design System', 'Complete Brand Identity', 'Micro-Animations & Micro-Interactions'],
      details: lang === 'FR'
        ? 'Un travail typographique et chromatique rigoureux pour assurer une présence en ligne impériale et mémorable.'
        : 'Surgical typographical and color work to ensure a memorable, imperial digital presence.',
    },
    {
      id: 3,
      icon: Rocket,
      title: lang === 'FR' ? 'Accompagnement au Lancement de Projet' : 'New Project & Venture Setup',
      badge: lang === 'FR' ? 'STRATÉGIE & LANCEMENT' : 'STRATEGY & LAUNCH',
      desc: lang === 'FR'
        ? 'De l’idée initiale au prototype fonctionnel (MVP). Structuration de votre offre, modélisation économique et préparation au marché.'
        : 'From initial concept to functional prototype (MVP). Offer structuring, business modeling, and market readiness.',
      features: lang === 'FR'
        ? ['Cahier des Charges & Roadmap', 'Lancement MVP Rapide', 'Support & Conseils au Fondateur']
        : ['Specifications & Roadmap', 'Fast MVP Launch', 'Founder Support & Guidance'],
      details: lang === 'FR'
        ? 'Idéal pour concrétiser rapidement un nouveau projet avec l’aide d’un partenaire technique et stratégique à votre écoute.'
        : 'Ideal for rapidly turning a new project into reality with a dedicated technical and strategic partner.',
    },
  ];

  return (
    <section id="portfolio" style={{ padding: '6rem 0', background: 'rgba(6, 6, 7, 0.9)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="crested-badge" style={{ marginBottom: '1rem' }}>
            <Award size={14} color="#D4AF37" />
            <span>{lang === 'FR' ? 'NOS MODÈLES D’INTERVENTION' : 'TYPES OF PROJECTS WE BUILD'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.2 }}>
            {lang === 'FR' ? 'Des Exemples Concrets de ce que Nous Réalisons' : 'Concrete Examples of Our Engineering Capabilities'}
          </h2>
          <p style={{ color: '#C9C3B4', fontSize: '1rem', marginTop: '0.75rem' }}>
            {lang === 'FR'
              ? 'Découvrez les types de projets que Gruand & Co conçoit pour concrétiser vos ambitions.'
              : 'Discover the project blueprints Gruand & Co builds to achieve your goals.'}
          </p>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold-gradient)', margin: '1.25rem auto 0 auto' }} />
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {projectTypes.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                className="leather-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                      }}
                    >
                      <IconComp size={24} color="#D4AF37" />
                    </div>
                    <span style={{ fontSize: '0.68rem', color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#F8F6F0', marginBottom: '0.75rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#C9C3B4', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {p.desc}
                  </p>

                  {/* Feature Pills */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem' }}>
                    {p.features.map((feat, i) => (
                      <div key={i} style={{ fontSize: '0.8rem', color: '#F7E7B4', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ color: '#D4AF37' }}>•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCase(p.id)}
                  className="btn-outline-gold"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.7rem' }}
                >
                  <span>{lang === 'FR' ? 'Voir l’Approche' : 'View Approach'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Detail Modal */}
      {selectedCase !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(6, 6, 7, 0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          {(() => {
            const p = projectTypes.find((item) => item.id === selectedCase);
            if (!p) return null;
            return (
              <div
                className="leather-card"
                style={{
                  maxWidth: '600px',
                  width: '100%',
                  padding: '2.5rem',
                  position: 'relative',
                  border: '1px solid #D4AF37',
                }}
              >
                <button
                  onClick={() => setSelectedCase(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#D4AF37',
                    cursor: 'pointer',
                  }}
                >
                  <X size={24} />
                </button>

                <div className="crested-badge" style={{ marginBottom: '1rem' }}>
                  <span>{p.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#F8F6F0', marginBottom: '1rem' }}>
                  {p.title}
                </h3>

                <p style={{ color: '#C9C3B4', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {p.details}
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <button onClick={() => setSelectedCase(null)} className="btn-outline-gold">
                    {lang === 'FR' ? 'Fermer' : 'Close'}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCase(null);
                      onSelectCase(p.title);
                    }}
                    className="btn-gold"
                  >
                    <span>{lang === 'FR' ? 'Discuter de ce besoin' : 'Discuss Need'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

    </section>
  );
};
