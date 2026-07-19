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
      title: lang === 'FR' ? 'Objectif Majeur à 12 Mois' : '12-Month Key Objective',
      subtitle: lang === 'FR' ? 'Quelle est votre priorité stratégique numéro 1 ?' : 'What is your top strategic priority?',
      options: [
        { label: lang === 'FR' ? 'Accélérer la croissance & doubler le chiffre d’affaires' : 'Accelerate growth & double revenue', score: 25 },
        { label: lang === 'FR' ? 'Digitaliser & automatiser les processus clés' : 'Digitize & automate key business operations', score: 20 },
        { label: lang === 'FR' ? 'Lancer une filiale / un produit SaaS sur-mesure' : 'Launch a new venture / custom SaaS product', score: 30 },
        { label: lang === 'FR' ? 'Structurer la gouvernance pour M&A ou levée' : 'Structure governance for M&A or fundraising', score: 25 },
      ],
    },
    {
      title: lang === 'FR' ? 'Goulot d’Étranglement Principal' : 'Primary Bottleneck',
      subtitle: lang === 'FR' ? 'Qu’est-ce qui freine le plus votre expansion ?' : 'What is currently hindering your scaling?',
      options: [
        { label: lang === 'FR' ? 'Dette technique & outils sous-optimaux' : 'Tech debt & sub-optimal software stack', score: 15 },
        { label: lang === 'FR' ? 'Besoin de clarté stratégique & arbitrage Board' : 'Need for strategic clarity & Board alignment', score: 20 },
        { label: lang === 'FR' ? 'Positionnement de marque & différenciation' : 'Brand positioning & differentiation', score: 15 },
        { label: lang === 'FR' ? 'Vitesse d’exécution & recrutement d’élite' : 'Execution velocity & elite talent acquisition', score: 25 },
      ],
    },
    {
      title: lang === 'FR' ? 'Stade de Maturité d’Entreprise' : 'Business Maturity Stage',
      subtitle: lang === 'FR' ? 'Où se situe actuellement votre organisation ?' : 'Where does your venture currently stand?',
      options: [
        { label: lang === 'FR' ? 'Création / Lancement imminent' : 'New Venture / Immediate Launch', score: 20 },
        { label: lang === 'FR' ? 'Scale-up / PME en forte croissance' : 'Scale-Up / Fast-growing SME', score: 25 },
        { label: lang === 'FR' ? 'Groupe Établi / Family Office' : 'Established Group / Family Office', score: 30 },
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
            <span>{lang === 'FR' ? 'AUDIT D’EXCELLENCE EXPRESS' : 'EXECUTIVE STRATEGY DIAGNOSTIC'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.2 }}>
            {lang === 'FR' ? 'Évaluez la Maturité de Votre Projet' : 'Benchmark Your Venture Readiness'}
          </h2>
          <p style={{ color: '#C9C3B4', fontSize: '1rem', marginTop: '0.75rem' }}>
            {lang === 'FR'
              ? 'Répondez à 3 questions confidentielles pour identifier vos leviers prioritaires de croissance.'
              : 'Answer 3 confidential questions to reveal your primary strategic acceleration levers.'}
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
                {lang === 'FR' ? 'SCORE D’ACCÉLÉRATION STRATÉGIQUE' : 'STRATEGIC READINESS SCORE'}
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
                  ? 'Votre projet présente un fort potentiel d’accélération. Une structuration technologique et stratégique sur-mesure vous permettra de sécuriser vos objectifs et de surpasser les standards du marché.'
                  : 'Your venture demonstrates high potential for acceleration. A bespoke technology & strategic roadmap will secure your milestones and outperform industry standards.'}
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
                      `Score: ${totalScore}/85 - Diagnostic réalisé sur le site Gruand & Co`
                    )
                  }
                  className="btn-gold"
                >
                  <FileText size={16} />
                  <span>{lang === 'FR' ? 'Restitution avec un Associé' : 'Book Executive Restitution'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
