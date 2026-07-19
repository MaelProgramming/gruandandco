import React, { useState } from 'react';
import { Shield, Cpu, Briefcase, Gem, ArrowRight, CheckCircle2, X, ChevronRight } from 'lucide-react';

interface ServicesProps {
  lang: 'FR' | 'EN';
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Shield,
      title: lang === 'FR' ? 'Conseil Stratégique & Gouvernance' : 'Executive Governance & Strategy',
      subtitle: lang === 'FR' ? 'Pilotage d’élite & Décisions d’Impact' : 'Elite Leadership & Strategic Guidance',
      desc: lang === 'FR'
        ? 'Nous accompagnons les fondateurs et comités de direction dans leurs arbitrages critiques : restructuration, expansion internationale, préparation M&A et stratégie de croissance résiliente.'
        : 'Guiding founders and executive boards through pivotal milestones: restructuring, global expansion, M&A readiness, and resilient growth strategies.',
      deliverables: lang === 'FR'
        ? ['Audit de Gouvernance & Scalabilité', 'Plan Stratégique à 3 Ans', 'Préparation Levée / M&A', 'Accompagnement Comité de Direction']
        : ['Governance & Scalability Audit', '3-Year Strategic Roadmap', 'M&A & Fundraising Prep', 'Board & Executive Advisory'],
      details: lang === 'FR'
        ? 'Notre approche repose sur des modèles de prise de décision éprouvés, combinant analyse financière approfondie et prospective technologique. Chaque recommandation est personnalisée et assortie d’un plan d’exécution direct.'
        : 'Our approach relies on proven decision frameworks, merging financial rigor with tech foresight. Every recommendation comes with an actionable execution strategy.'
    },
    {
      id: 2,
      icon: Cpu,
      title: lang === 'FR' ? 'Ingénierie Logicielle & IA Sur-Mesure' : 'Custom Software & AI Engineering',
      subtitle: lang === 'FR' ? 'Technologies Propriétaires & Souveraines' : 'Proprietary Tech & Sovereign AI',
      desc: lang === 'FR'
        ? 'Développement d’applications web & mobiles haut de gamme, d’algorithmes d’IA générative et d’architectures cloud hautement sécurisées adaptées à vos enjeux métiers.'
        : 'Engineering high-end web & mobile platforms, generative AI models, and ultra-secure cloud architectures tailored to your business core.',
      deliverables: lang === 'FR'
        ? ['SaaS & Applications Métier Sur-Mesure', 'Agents IA & Automation Métier', 'Architecture Cloud Chiffrée', 'Audits de Sécurité & Performance']
        : ['Custom SaaS & Enterprise Apps', 'AI Agents & Business Automation', 'Encrypted Sovereign Cloud', 'Security & Code Quality Audits'],
      details: lang === 'FR'
        ? 'Nous concevons des outils informatiques à forte valeur ajoutée, développés avec les derniers standards (React, TypeScript, Rust, Python, AWS/GCP). Zéro dépendance inutile, performance maximale.'
        : 'We craft high-value software using modern stacks (React, TypeScript, Python, Rust, Cloud). Clean architecture, zero bloat, maximum performance.'
    },
    {
      id: 3,
      icon: Briefcase,
      title: lang === 'FR' ? 'Venture Building & Acceleration' : 'Venture Building & Acceleration',
      subtitle: lang === 'FR' ? 'De l’Idée à l’Enterprise d’Élite' : 'From Conception to Scaled Institution',
      desc: lang === 'FR'
        ? 'Création et lancement accéléré de filiales stratégiques ou de nouveaux business models. Nous prenons en charge la structuration opérationnelle, le Go-to-Market et la scalabilité.'
        : 'Accelerated creation and launching of strategic spin-offs or new business models. We manage operational setup, Go-To-Market execution, and scaling.',
      deliverables: lang === 'FR'
        ? ['Structuration du Business Model', 'Maquette & Prototype Produit (MVP)', 'Recrutement des Key Talents', 'Strategie d’Acquisition Client']
        : ['Business Model Design', 'Product Prototype (MVP)', 'Key Talent Acquisition', 'Client Acquisition Strategy'],
      details: lang === 'FR'
        ? 'Un accompagnement à 360° où nous co-construisons avec vous le véhicule d’entreprise idéal. Nous alignons l’ingénierie financière, le produit et l’acquisition.'
        : 'A 360° partnership where we co-build the ideal venture vehicle. Aligning financial structure, product execution, and market expansion.'
    },
    {
      id: 4,
      icon: Gem,
      title: lang === 'FR' ? 'Branding Luxe & Patrimoine Digital' : 'Luxury Branding & Digital Heritage',
      subtitle: lang === 'FR' ? 'Identité Visuelle & Expérience Haute Couture' : 'Haute Couture Visual & UX Identity',
      desc: lang === 'FR'
        ? 'Direction artistique d’exception, esthétique raffinée et interfaces utilisateur pensées comme des objets d’art pour inspirer confiance et distinction immédiate.'
        : 'Exquisite art direction, refined aesthetics, and user interfaces designed like master objects to instill trust and prestige.',
      deliverables: lang === 'FR'
        ? ['Charte Graphique & Brand Book Luxe', 'Design System & Interfaces UX/UI', 'Copywriting & Narrative Building', 'Sites Web & Expériences Immersives']
        : ['Luxury Brand Book & Identity', 'Design System & High-End UX/UI', 'Prestige Copywriting', 'Immersive Web Experiences'],
      details: lang === 'FR'
        ? 'Chaque typographie, palette de couleurs et micro-interaction est pensée pour refléter l’excellence de votre marque. Une présence numérique impériale qui marque les esprits.'
        : 'Every typeface, color palette, and micro-animation is crafted to project your brand’s mastery. A digital footprint that commands respect.'
    },
  ];

  return (
    <section id="services" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4AF37',
              fontWeight: 700,
            }}
          >
            {lang === 'FR' ? 'NOS PÔLES D’EXCELLENCE' : 'OUR EXPERTISE PILLARS'}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#F8F6F0',
              marginTop: '0.5rem',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            {lang === 'FR' ? 'Ingénierie & Accompagnement Sur-Mesure' : 'Custom Engineering & Strategic Guidance'}
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold-gradient)', margin: '0 auto' }} />
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((s) => {
            const IconComp = s.icon;
            return (
              <div
                key={s.id}
                className="leather-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Icon & Subtitle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '8px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={26} color="#D4AF37" />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#A68023', letterSpacing: '0.15em', fontWeight: 600 }}>
                      0{s.id}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#F8F6F0', marginBottom: '0.4rem', fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#D4AF37', marginBottom: '1rem', fontWeight: 600 }}>
                    {s.subtitle}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#C9C3B4', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>

                  {/* Deliverables Pills */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                    {s.deliverables.map((d, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#E5C365' }}>
                        <CheckCircle2 size={14} color="#D4AF37" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => setActiveModal(s.id)}
                    className="btn-outline-gold"
                    style={{ flex: 1, justifyContent: 'center', padding: '0.65rem', fontSize: '0.75rem' }}
                  >
                    <span>{lang === 'FR' ? 'Détails' : 'Details'}</span>
                  </button>
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="btn-gold"
                    style={{ padding: '0.65rem 1rem', fontSize: '0.75rem' }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Detail View */}
      {activeModal !== null && (
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
            const s = services.find((srv) => srv.id === activeModal);
            if (!s) return null;
            const IconComp = s.icon;
            return (
              <div
                className="leather-card"
                style={{
                  maxWidth: '650px',
                  width: '100%',
                  padding: '2.5rem',
                  position: 'relative',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                }}
              >
                <button
                  onClick={() => setActiveModal(null)}
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(212, 175, 55, 0.15)',
                      border: '1px solid #D4AF37',
                    }}
                  >
                    <IconComp size={28} color="#D4AF37" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: '#F8F6F0' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#D4AF37' }}>{s.subtitle}</p>
                  </div>
                </div>

                <p style={{ color: '#C9C3B4', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {s.details}
                </p>

                <h4 style={{ fontSize: '1rem', color: '#F8F6F0', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>
                  {lang === 'FR' ? 'Livrables & Période d’exécution :' : 'Deliverables & Execution Window:'}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                  {s.deliverables.map((del, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#F8F6F0' }}>
                      <CheckCircle2 size={16} color="#D4AF37" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <button onClick={() => setActiveModal(null)} className="btn-outline-gold">
                    {lang === 'FR' ? 'Fermer' : 'Close'}
                  </button>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      onSelectService(s.title);
                    }}
                    className="btn-gold"
                  >
                    <span>{lang === 'FR' ? 'Estimer ce besoin' : 'Estimate Need'}</span>
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
