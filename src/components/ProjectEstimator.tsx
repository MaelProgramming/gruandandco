import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, Coins } from 'lucide-react';

interface ProjectEstimatorProps {
  lang: 'FR' | 'EN';
  onSendEstimate: (summary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ lang, onSendEstimate }) => {
  const [selectedPole, setSelectedPole] = useState<number>(0);
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);

  const poles = [
    {
      id: 0,
      name: lang === 'FR' ? 'Conseil Stratégique & Diagnostic' : 'Strategic Advisory & Audit',
      basePrice: 1500,
      timeWeeks: 2,
    },
    {
      id: 1,
      name: lang === 'FR' ? 'Développement Web & App Sur-Mesure' : 'Custom Web & Software Build',
      basePrice: 2500,
      timeWeeks: 4,
    },
    {
      id: 2,
      name: lang === 'FR' ? 'Accompagnement Lancement d’Entreprise' : 'Venture & Business Launch Support',
      basePrice: 4500,
      timeWeeks: 6,
    },
    {
      id: 3,
      name: lang === 'FR' ? 'Design, Branding & Identité Visuelle' : 'Branding & UI/UX Design',
      basePrice: 1200,
      timeWeeks: 2,
    },
  ];

  const tiers = [
    { id: 0, label: lang === 'FR' ? 'Essentiel / Lancement' : 'Essential Launch', mult: 1.0, sub: lang === 'FR' ? 'Bases solides & livrables clés' : 'Core solid foundations' },
    { id: 1, label: lang === 'FR' ? 'Sur-Mesure Complet' : 'Fully Custom Build', mult: 1.3, sub: lang === 'FR' ? 'Personnalisation poussée' : 'Advanced personalization' },
    { id: 2, label: lang === 'FR' ? 'Pack Intégral Exec' : 'Integral Executive Pack', mult: 1.6, sub: lang === 'FR' ? 'Accompagnement étendu' : 'Extended partnership' },
  ];

  const addons = [
    { id: 0, name: lang === 'FR' ? 'Intégration Moteur IA / Automation' : 'AI & Automation Engine Integration', price: 800, weeks: 1 },
    { id: 1, name: lang === 'FR' ? 'Optimisation Cloud & Sécurité' : 'Cloud Setup & Security Hardening', price: 500, weeks: 1 },
    { id: 2, name: lang === 'FR' ? 'Livraison Accélérée (Sprint Priority)' : 'Accelerated Sprint Delivery', price: 600, weeks: -1 },
    { id: 3, name: lang === 'FR' ? 'Suivi & Support 3 Mois' : '3-Month Post-Launch Support', price: 700, weeks: 0 },
  ];

  const toggleAddon = (id: number) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentPole = poles[selectedPole];
  const currentTier = tiers[selectedTier];
  const addonsPrice = selectedAddons.reduce((sum, id) => sum + addons[id].price, 0);
  const addonsWeeks = selectedAddons.reduce((sum, id) => sum + addons[id].weeks, 0);

  const baseCalculated = Math.round((currentPole.basePrice * currentTier.mult) + addonsPrice);
  const minPrice = Math.round(baseCalculated * 0.95);
  const maxPrice = Math.round(baseCalculated * 1.15);
  const totalWeeks = Math.max(1, Math.round(currentPole.timeWeeks + addonsWeeks));

  const formatPrice = (val: number) =>
    new Intl.NumberFormat(lang === 'FR' ? 'fr-FR' : 'en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  const handleSend = () => {
    const summary = `${currentPole.name} [Formule: ${currentTier.label}] - Estimation: ${formatPrice(minPrice)} à ${formatPrice(maxPrice)} - Délai: ~${totalWeeks} semaines. Options: ${selectedAddons.map(i => addons[i].name).join(', ') || 'Aucune'}`;
    onSendEstimate(summary);
  };

  return (
    <section id="estimator" style={{ padding: '6rem 0', background: 'rgba(13, 13, 15, 0.6)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="crested-badge" style={{ marginBottom: '1rem' }}>
            <Calculator size={14} color="#D4AF37" />
            <span>{lang === 'FR' ? 'SIMULATEUR DE BUDGET ACCESSIBLE' : 'ESTIMATE YOUR PROJECT'}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F6F0', lineHeight: 1.2 }}>
            {lang === 'FR' ? 'Une Tarification Claire & Transparente' : 'Clear & Transparent Investment Projection'}
          </h2>
          <p style={{ color: '#C9C3B4', fontSize: '1rem', marginTop: '0.75rem' }}>
            {lang === 'FR'
              ? 'Calculez une première estimation de votre projet. Pas de mauvaise surprise : chaque devis final est fixe et garanti.'
              : 'Calculate a transparent projection for your project. No surprise costs: every final quote is fixed.'}
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Controls Panel */}
          <div className="leather-card" style={{ padding: '2.25rem' }}>
            
            {/* Step 1: Pole */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', fontWeight: 600 }}>
                1. {lang === 'FR' ? 'Type de Prestation Principal' : 'Primary Expertise Area'}
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {poles.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPole(p.id)}
                    style={{
                      padding: '1rem',
                      borderRadius: '6px',
                      background: selectedPole === p.id ? 'rgba(212, 175, 55, 0.15)' : 'rgba(6, 6, 7, 0.6)',
                      border: selectedPole === p.id ? '1px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.15)',
                      color: selectedPole === p.id ? '#F8F6F0' : '#C9C3B4',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: selectedPole === p.id ? 600 : 400,
                    }}
                  >
                    <span>{p.name}</span>
                    {selectedPole === p.id && <Check size={18} color="#D4AF37" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tier */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', fontWeight: 600 }}>
                2. {lang === 'FR' ? 'Niveau de Périmètre' : 'Scope Level'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                {tiers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTier(t.id)}
                    style={{
                      padding: '0.85rem',
                      borderRadius: '6px',
                      background: selectedTier === t.id ? 'rgba(212, 175, 55, 0.15)' : 'rgba(6, 6, 7, 0.6)',
                      border: selectedTier === t.id ? '1px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.15)',
                      color: selectedTier === t.id ? '#F8F6F0' : '#C9C3B4',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.2rem' }}>{t.label}</div>
                    <div style={{ fontSize: '0.7rem', color: '#C9C3B4' }}>{t.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', fontWeight: 600 }}>
                3. {lang === 'FR' ? 'Options d’Accélération' : 'Addon Options'}
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {addons.map((a) => {
                  const active = selectedAddons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggleAddon(a.id)}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        background: active ? 'rgba(212, 175, 55, 0.12)' : 'rgba(6, 6, 7, 0.5)',
                        border: active ? '1px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.15)',
                        color: active ? '#F8F6F0' : '#C9C3B4',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.85rem',
                        textAlign: 'left',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '4px',
                            border: '1px solid #D4AF37',
                            background: active ? '#D4AF37' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {active && <Check size={12} color="#0A0A0C" />}
                        </div>
                        <span>{a.name}</span>
                      </div>
                      <span style={{ color: '#E5C365', fontWeight: 600, fontSize: '0.8rem' }}>
                        +{formatPrice(a.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div
            className="leather-card"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: 'linear-gradient(160deg, #1C0F0A 0%, #0D0D0F 100%)',
              boxShadow: '0 0 45px rgba(212, 175, 55, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', color: '#D4AF37' }}>
              <Sparkles size={20} />
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                {lang === 'FR' ? 'ESTIMATION BUDGET' : 'PROJECT ESTIMATE'}
              </span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#C9C3B4', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {lang === 'FR' ? 'Fourchette d’Investissement Estimée' : 'Estimated Price Range'}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#F7E7B4',
                  margin: '0.5rem 0',
                }}
              >
                {formatPrice(minPrice)} – {formatPrice(maxPrice)}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#8E887B' }}>
                * {lang === 'FR' ? 'Tarif indicatif. Devis ferme après échange et ajustement du besoin.' : 'Indicative rate. Fixed quote after consultation.'}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1.25rem', background: 'rgba(6, 6, 7, 0.7)', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D4AF37', fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                  <Clock size={14} />
                  <span>{lang === 'FR' ? 'Délais Estimés' : 'Timeline'}</span>
                </div>
                <div style={{ fontSize: '1.1rem', color: '#F8F6F0', fontWeight: 700 }}>
                  ~{totalWeeks} {lang === 'FR' ? 'Semaines' : 'Weeks'}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D4AF37', fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                  <Coins size={14} />
                  <span>{lang === 'FR' ? 'Engagements' : 'Commitment'}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#F8F6F0', fontWeight: 600 }}>
                  {lang === 'FR' ? 'Prix Fixe & Suivi' : 'Fixed Price & Support'}
                </div>
              </div>
            </div>

            <button
              onClick={handleSend}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
            >
              <span>{lang === 'FR' ? 'Demander un Devis Gratuit' : 'Request Free Quote'}</span>
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
