import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectEstimator } from './components/ProjectEstimator';
import { BusinessAudit } from './components/BusinessAudit';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<'FR' | 'EN'>('FR');
  const [contactMessage, setContactMessage] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setContactMessage(`Interêt pour le Pôle : ${serviceName}`);
    scrollToSection('contact');
  };

  const handleSendEstimate = (summary: string) => {
    setContactMessage(`Estimation de Projet : ${summary}`);
    scrollToSection('contact');
  };

  const handleScheduleAudit = (score: number, details: string) => {
    setContactMessage(`Restitution d'Audit Stratégique (Score ${score}/85) : ${details}`);
    scrollToSection('contact');
  };

  const handleSelectCase = (caseTitle: string) => {
    setContactMessage(`Besoin similaire à l'étude de cas : ${caseTitle}`);
    scrollToSection('contact');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark-void)', color: 'var(--text-silk)' }}>
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenEstimator={() => scrollToSection('estimator')}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Services Section */}
      <Services
        lang={lang}
        onSelectService={handleSelectService}
      />

      {/* Interactive Project Estimator */}
      <ProjectEstimator
        lang={lang}
        onSendEstimate={handleSendEstimate}
      />

      {/* Business Strategy Audit Diagnostic */}
      <BusinessAudit
        lang={lang}
        onScheduleAudit={handleScheduleAudit}
      />

      {/* Portfolio / Réalisations */}
      <Portfolio
        lang={lang}
        onSelectCase={handleSelectCase}
      />

      {/* About & Manifesto */}
      <About
        lang={lang}
      />

      {/* Testimonials */}
      <Testimonials
        lang={lang}
      />

      {/* Contact Section */}
      <Contact
        lang={lang}
        prefilledMessage={contactMessage}
      />

      {/* Footer */}
      <Footer
        lang={lang}
      />
    </div>
  );
};

export default App;