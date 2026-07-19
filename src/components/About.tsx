import React from 'react';
import { Feather } from 'lucide-react';

interface AboutProps {
  lang: 'FR' | 'EN';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const content = {
    FR: {
      badge: "NOTRE MANIFESTE & PHILOSOPHIE",
      title: "Rien ne résiste à l’alliance de la rigueur, de la discrétion et de l’innovation.",
      sub: "Gruand & Co a été bâtie sur les standards des maisons d'exception. Nous refusons les solutions génériques et l’obsolescence programmée. Chaque projet que nous concevons est un ouvrage d’ingénierie durable, façonné pour traverser le temps.",
      pillars: [
        {
          num: "I",
          title: "Immersion & Audit Chirurgical",
          desc: "Comprendre votre modèle économique et votre culture avant d’écrire la première ligne de code ou de proposer la moindre orientation.",
        },
        {
          num: "II",
          title: "Architecture Haute Couture",
          desc: "Concevoir des systèmes informatiques souverains, chiffrés et évolutifs qui deviennent un actif stratégique pour votre entreprise.",
        },
        {
          num: "III",
          title: "Exécution & Rigueur Absolue",
          desc: "Déploiement agile avec des jalons hebdomadaires clairs. Aucun compromis sur la qualité du livrable ni sur la sécurité.",
        },
        {
          num: "IV",
          title: "Transmission & Pérennité",
          desc: "Formation de vos équipes, documentation exhaustive et transfert complet de propriété intellectuelle pour assurer votre autonomie.",
        },
      ],
      quote: "Dans un monde saturé d'immédiateté, la vraie valeur réside dans ce qui dure.",
      author: "Maison Gruand & Co",
    },
    EN: {
      badge: "OUR MANIFESTO & PHILOSOPHY",
      title: "Nothing withstands the union of rigor, discretion, and elite innovation.",
      sub: "Gruand & Co was built upon the highest standards of iconic institutions. We reject generic templates and planned obsolescence. Every initiative we build is an enduring piece of engineering designed for longevity.",
      pillars: [
        {
          num: "I",
          title: "Surgical Immersion & Audit",
          desc: "Deeply understanding your core business model and culture before writing a single line of code or drafting strategic advice.",
        },
        {
          num: "II",
          title: "Haute Couture Architecture",
          desc: "Architecting sovereign, encrypted, and scalable technology systems that become enduring corporate assets.",
        },
        {
          num: "III",
          title: "Relentless Execution",
          desc: "Agile deployment paired with transparent weekly milestones. Zero compromises on deliverable quality and security.",
        },
        {
          num: "IV",
          title: "Transmission & Longevity",
          desc: "Empowering your internal teams, delivering exhaustive documentation, and ensuring full IP transfer for total independence.",
        },
      ],
      quote: "In a world consumed by short-term noise, true value belongs to what endures.",
      author: "Maison Gruand & Co",
    },
  }[lang];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="crested-badge" style={{ marginBottom: '1rem' }}>
            <Feather size={14} color="#D4AF37" />
            <span>{content.badge}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            {content.title}
          </h2>
          <p style={{ color: '#C9C3B4', fontSize: '1.05rem', lineHeight: 1.7 }}>
            {content.sub}
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '5rem',
          }}
        >
          {content.pillars.map((p, idx) => (
            <div
              key={idx}
              className="leather-card"
              style={{
                padding: '2rem',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#D4AF37',
                  marginBottom: '1rem',
                }}
              >
                {p.num}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#F8F6F0', marginBottom: '0.75rem' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#C9C3B4', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Quote Block */}
        <div
          className="leather-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '3.5rem 3rem',
            textAlign: 'center',
            background: 'linear-gradient(145deg, #1F120B 0%, #0D0D0F 100%)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: '4rem',
              fontFamily: 'var(--font-serif-display)',
              color: 'rgba(212, 175, 55, 0.2)',
              position: 'absolute',
              top: '1rem',
              left: '2rem',
              lineHeight: 1,
            }}
          >
            “
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              fontStyle: 'italic',
              color: '#F7E7B4',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {content.quote}
          </p>
          <div style={{ fontSize: '0.85rem', color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
            — {content.author}
          </div>
        </div>

      </div>
    </section>
  );
};
