import React, { useState } from 'react';
import { Globe, Code2, ShoppingBag, Gauge, ArrowRight, CheckCircle2, X, ChevronRight } from 'lucide-react';

interface ServicesProps {
  lang: 'FR' | 'EN';
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Globe,
      title: lang === 'FR' ? 'Sites Vitrines Luxe & Prestige' : 'Luxury Vitrine & Brand Web Presence',
      subtitle: lang === 'FR' ? 'Image de Marque Immortelle & UI/UX' : 'Immortal Brand Identity & UX/UI',
      desc: lang === 'FR'
        ? 'Création de sites vitrines d’exception conçus sur-mesure pour sublimer l’image de votre entreprise. Animations fluides, direction artistique haut de gamme et adaptation mobile parfaite.'
        : 'Designing exceptional custom showcase websites to elevate your brand image. Smooth animations, haute couture art direction, and flawless mobile responsiveness.',
      deliverables: lang === 'FR'
        ? ['Design UI/UX Sur-Mesure', 'Développement React / TypeScript', 'Animations & Micro-Interactions', 'Optimisation Référencement SEO']
        : ['Custom UI/UX Design', 'React / TypeScript Development', 'Micro-Animations & Motion', 'Search Engine Optimization (SEO)'],
      details: lang === 'FR'
        ? 'Nous façonnons chaque page comme un véritable objet d’art numérique. Aucun modèle pré-fait : votre site est codé spécifiquement pour refléter votre prestige.'
        : 'We craft every page as a digital piece of art. Zero pre-made templates: your website is engineered specifically to mirror your brand prestige.'
    },
    {
      id: 2,
      icon: Code2,
      title: lang === 'FR' ? 'Applications Web & SaaS Sur-Mesure' : 'Custom Web Applications & SaaS',
      subtitle: lang === 'FR' ? 'Outils Métier & Architectures Modernes' : 'Custom Enterprise Software & Dashboards',
      desc: lang === 'FR'
        ? 'Ingénierie d’applications web complexes, espaces clients sécurisés, tableaux de bord interactifs et outils de gestion internes développés avec les technologies du web les plus avancées.'
        : 'Engineering complex web applications, secure client portals, interactive dashboards, and internal management tools using modern web tech.',
      deliverables: lang === 'FR'
        ? ['Architecture Front-End Moderne', 'Espaces Utilisateurs & Chiffrement', 'Connexion API & Automatisations', 'Tableaux de Bord Dynamiques']
        : ['Modern Front-End Architecture', 'User Authentication & Encryption', 'API Integrations & Automations', 'Dynamic Executive Dashboards'],
      details: lang === 'FR'
        ? 'Nous concevons des logiciels web puissants, rapides et intuitifs. Structure de code propre, maintenable et prête à accompagner la croissance de votre activité.'
        : 'We engineer powerful, fast, and intuitive web software. Clean, maintainable codebase engineered to scale alongside your business.'
    },
    {
      id: 3,
      icon: ShoppingBag,
      title: lang === 'FR' ? 'E-Commerce Haut de Gamme' : 'High-End E-Commerce Platforms',
      subtitle: lang === 'FR' ? 'Expérience d’Achat Immorsive & Fluidité' : 'Immersive Shopping & Flawless Checkout',
      desc: lang === 'FR'
        ? 'Conception de boutiques en ligne haute couture adaptées aux marques exigeantes. Parcours d’achat sans friction, paiement sécurisé et mise en valeur maximale de vos produits.'
        : 'Crafting haute couture online boutiques for discerning brands. Seamless checkout flows, ultra-secure payment, and premium product presentation.',
      deliverables: lang === 'FR'
        ? ['Catalogue & Fiches Produit Luxe', 'Intégration Paiement Sécurisé', 'Parcours d’Achat Optimisé', 'Vitesse de Chargement Minimale']
        : ['Luxury Product Showcases', 'Secure Payment Integration', 'Optimized Checkout UX', 'Ultra-Fast Load Speeds'],
      details: lang === 'FR'
        ? 'Une vitrine marchande élégante qui transforme les visiteurs en clients fidèles, combinant esthétique raffinée et haute conversion.'
        : 'An elegant store converting visitors into loyal clients, uniting refined aesthetics with high conversion rates.'
    },
    {
      id: 4,
      icon: Gauge,
      title: lang === 'FR' ? 'Audit de Performance, SEO & Refonte' : 'Performance Audit, SEO & Redesign',
      subtitle: lang === 'FR' ? 'Vitesse 100/100 & Modernisation Web' : '100/100 Speed & Modern Web Refactoring',
      desc: lang === 'FR'
        ? 'Optimisation chirurgicale de la vitesse de vos pages existantes, nettoyage de dette technique, refonte d’ergonomie et alignement aux meilleures pratiques SEO et web.'
        : 'Surgical speed optimization for your existing pages, technical debt cleanup, UX redesign, and alignment with modern SEO best practices.',
      deliverables: lang === 'FR'
        ? ['Audit de Vitesse & Core Web Vitals', 'Refonte Graphique & Modernisation', 'Nettoyage du Code & Dette Tech', 'Optimisation SEO Technique']
        : ['Speed & Core Web Vitals Audit', 'Visual Redesign & Modernization', 'Code Cleanup & Debt Refactor', 'Technical SEO Optimization'],
      details: lang === 'FR'
        ? 'Transformez un site lent ou obsolète en une référence de rapidité et d’élégance numérique.'
        : 'Turn a slow or outdated site into a benchmark of speed and digital elegance.'
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
            {lang === 'FR' ? 'NOS PÔLES D’EXCELLENCE WEB' : 'OUR WEB EXPERTISE PILLARS'}
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
            {lang === 'FR' ? 'Ingénierie Web Sur-Mesure & Design d’Élite' : 'Custom Web Engineering & Elite Design'}
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
