import React from 'react';
import { Feather } from 'lucide-react';

interface AboutProps {
  lang: 'FR' | 'EN';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const content = {
    FR: {
      badge: "NOTRE MANIFESTE & SAVOIR-FAIRE WEB",
      title: "Rien ne vaut l’alliance du code sur-mesure, de la rigueur et du design d’élite.",
      sub: "Gruand & Co est né d'une conviction forte : votre site web est l'actif numérique le plus précieux de votre entreprise. Nous refusons les templates pré-faits génériques et la dette technique. Chaque projet est assemblé à la main avec passion et précision.",
      pillars: [
        {
          num: "I",
          title: "Code 100% Propriétaire & Propre",
          desc: "Développement React / TypeScript sans dépendances superflues. Vitesse optimale, sécurité renforcée et liberté totale.",
        },
        {
          num: "II",
          title: "Design & Ergonomie Haute Couture",
          desc: "Direction artistique raffinée, typographies d’exception et parcours utilisateur pensés pour convertir.",
        },
        {
          num: "III",
          title: "Performance & Vitesse 100/100",
          desc: "Optimisation du temps de chargement et respect strict des standards SEO de Google pour un classement optimal.",
        },
        {
          num: "IV",
          title: "Accompagnement & Transfert de Clés",
          desc: "Code documenté, formation à la prise en main et transfert de propriété intégrale. Vous restez 100% maître de votre site.",
        },
      ],
      quote: "Le web de qualité est un investissement durable, pas une dépense éphémère.",
      author: "Maison Gruand & Co",
    },
    EN: {
      badge: "OUR MANIFESTO & WEB CRAFTSMANSHIP",
      title: "Nothing beats the union of custom code, surgical rigor, and elite UI design.",
      sub: "Gruand & Co was born from a conviction: your website is your venture's most critical digital asset. We reject generic pre-made templates and bloated code. Every project is handcrafted with passion and precision.",
      pillars: [
        {
          num: "I",
          title: "100% Clean Custom Code",
          desc: "React & TypeScript development with zero bloat. Peak speed, hardened security, and total architectural freedom.",
        },
        {
          num: "II",
          title: "Haute Couture Design & UX",
          desc: "Refined art direction, majestic typefaces, and user journeys crafted for maximum conversion.",
        },
        {
          num: "III",
          title: "100/100 Performance & SEO",
          desc: "Lightning load speeds and strict adherence to Google SEO standards for top ranking.",
        },
        {
          num: "IV",
          title: "Transparent Handover & Support",
          desc: "Documented code, onboarding session, and 100% IP transfer. You retain total control of your website.",
        },
      ],
      quote: "Quality web engineering is an enduring asset, never an ephemeral expense.",
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
