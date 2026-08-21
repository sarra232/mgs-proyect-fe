import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/portfolioData';
import type { ProjectItem } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToPortfolio = () => {
    const el = document.getElementById('portafolio');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    const el = document.getElementById('cotizador');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Header / Navbar */}
      <Navbar onQuoteClick={scrollToQuote} />

      <main>
        {/* Hero Section */}
        <Hero 
          onExplorePortfolio={scrollToPortfolio}
          onQuoteClick={scrollToQuote}
        />

        {/* Portfolio Showcase with Category Filters */}
        <PortfolioSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Services & Technical Capabilities */}
        <ServicesSection />

        {/* Story, Trust, and Testimonials */}
        <AboutSection />

        {/* Interactive Quote & WhatsApp Builder */}
        <QuoteCalculator />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        companyInfo={COMPANY_INFO}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
