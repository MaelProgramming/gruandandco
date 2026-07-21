import React, { useState } from 'react';
import { Compass, ArrowRight, RotateCcw, Award, FileText } from 'lucide-react';

interface BusinessAuditProps {
  lang: 'FR' | 'EN';
  onScheduleAudit: (score: number, details: string) => void;
}

export const BusinessAudit: React.FC<BusinessAuditProps> = ({ lang, onScheduleAudit }) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const questions = [
    {
      title: lang === 'FR' ? 'Objectif Majeur de Votre Site Web' : 'Primary Web Goal',
      subtitle: lang === 'FR' ? 'Quel est le rôle numéro 1 de votre présence en ligne ?' : 'What is your top online priority?',
      options: [
        { label: lang === 'FR' ? 'Valoriser l’image de marque & capter des prospects qualifiés' : 'Elevate brand image & acquire qualified leads', score: 25 },
        { label: lang === 'FR' ? 'Vendre directement vos produits / services (E-Commerce)' : 'Sell products / services online (E-Commerce)', score: 30 },
        { label: lang === 'FR' ? 'Fournir une plateforme web / espace client sur-mesure' : 'Provide a custom web app / client dashboard', score: 25 },
        { label: lang === 'FR' ? 'Refondre un site existant obsolète ou trop lent' : 'Redesign an outdated or slow existing website', score: 20 },
      ],
    },
    {
      title: lang === 'FR' ? 'Goulot d’Étranglement Web Actuel' : 'Current Web Bottleneck',
      subtitle: lang === 'FR' ? 'Quel est le point faible principal de votre outil actuel ?' : 'What is the main limitation of your site?',
      options: [
        { label: lang === 'FR' ? 'Design générique qui ne reflète pas notre niveau de qualité' : 'Generic design that fails to mirror our quality', score: 20 },
        { label: lang === 'FR' ? 'Temps de chargement trop longs & mauvais référencement SEO' : 'Slow load times & weak SEO ranking', score: 15 },
        { label: lang === 'FR' ? 'Absence d’affichage fluide sur mobile et tablette' : 'Poor mobile responsiveness and layout bugs', score: 15 },
        { label: lang === 'FR' ? 'Code obsolète difficile à faire évoluer' : 'Outdated codebase difficult to maintain', score: 25 },
      ],
    },
    {
      title: lang === 'FR' ? 'Stade d’Avancement du Projet' : 'Project Maturity Stage',
      subtitle: lang === 'FR' ? 'Où en êtes-vous dans votre réflexion ?' : 'Where are you in your web initiative?',
      options: [
        { label: lang === 'FR' ? 'Nouveau projet : nous démarrons de zéro' : 'New project: starting from scratch', score: 20 },
        { label: lang === 'FR' ? 'Refonte globale d’un site ou d’une app existante' : 'Complete redesign of an existing site or app', score: 25 },
        { label: lang === 'FR' ? 'Optimisation ciblée (Vitesse, SEO, UI/UX)' : 'Targeted optimization (Speed, SEO, UX)', score: 30 },
      ],
    },
  ];

  const handleSelect = (optionScore: number) => {
    const nextAnswers = { ...answers, [step]: optionScore };
    setAnswers(nextAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Results step
    }
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const resetAudit = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section id="audit" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="crested-badge" style={{ marginBottom: '1rem' }}>
            <Compass size={14} color="#D4AF37" />
            <span>{lang === 'FR' ? 'DIAGNOSTIC STRATÉGIQUE WEB' : 'WEB PERFORMANCE DIAGNOSTIC'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.2 }}>
            {lang === 'FR' ? 'Évaluez le Potentiel de Votre Présence Web' : 'Benchmark Your Web Readiness'}
          </h2>
          <p style={{ color: '#C9C3B4', fontSize: '1rem', marginTop: '0.75rem' }}>
            {lang === 'FR'
              ? 'Répondez à 3 questions pour identifier les leviers d’optimisation prioritaires pour votre site web.'
              : 'Answer 3 quick questions to uncover your top web optimization levers.'}
          </p>
        </div>

        {/* Audit Container */}
        <div
          className="leather-card"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            border: '1px solid rgba(212, 175, 55, 0.35)',
          }}
        >
          {step < questions.length ? (
            <div>
              {/* Progress Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#D4AF37', letterSpacing: '0.1em', fontWeight: 600 }}>
                  {lang === 'FR' ? `QUESTION ${step + 1} SUR ${questions.length}` : `QUESTION ${step + 1} OF ${questions.length}`}
                </span>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '30px',
                        height: '4px',
                        borderRadius: '2px',
                        background: idx <= step ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <h3 style={{ fontSize: '1.5rem', color: '#F8F6F0', marginBottom: '0.5rem' }}>
                {questions[step].title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#C9C3B4', marginBottom: '2rem' }}>
                {questions[step].subtitle}
              </p>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(opt.score)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '8px',
                      background: 'rgba(6, 6, 7, 0.7)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      color: '#F8F6F0',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#D4AF37';
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                      e.currentTarget.style.background = 'rgba(6, 6, 7, 0.7)';
                    }}
                  >
                    <span>{opt.label}</span>
                    <ArrowRight size={18} color="#D4AF37" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Step */
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '2px solid #D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                }}
              >
                <Award size={40} color="#D4AF37" />
              </div>

              <span style={{ fontSize: '0.8rem', color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                {lang === 'FR' ? 'SCORE D’OPTIMISATION WEB' : 'WEB READINESS SCORE'}
              </span>

              <div
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: '#F7E7B4',
                  margin: '0.5rem 0 1rem 0',
                }}
              >
                {totalScore} / 85
              </div>

              <p style={{ color: '#C9C3B4', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                {lang === 'FR'
                  ? 'Votre projet présente un fort potentiel. Un développement web sur-mesure combinant design haute couture et vitesse maximale vous permettra de distancer les acteurs de votre secteur.'
                  : 'Your project shows great potential. A custom web build uniting haute couture UI and top speed will distance you from competitors.'}
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={resetAudit} className="btn-outline-gold">
                  <RotateCcw size={16} />
                  <span>{lang === 'FR' ? 'Recommencer' : 'Restart'}</span>
                </button>
                <button
                  onClick={() =>
                    onScheduleAudit(
                      totalScore,
                      `Score: ${totalScore}/85 - Diagnostic Web réalisé sur Gruand & Co`
                    )
                  }
                  className="btn-gold"
                >
                  <FileText size={16} />
                  <span>{lang === 'FR' ? 'Discuter avec le Développeur' : 'Connect with the Lead Developer'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
