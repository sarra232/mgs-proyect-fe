import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface HeroProps {
  onExplorePortfolio: () => void;
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onQuoteClick }) => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Estructuras Metálicas & Muebles de Alta Resistencia</span>
            </div>

            <h1 className="hero-title">
              Forjamos <span className="text-gold-gradient">Solidez</span>, Diseñamos el <span className="text-metal-gradient">Futuro en Acero</span>
            </h1>

            <p className="hero-lead">
              Especialistas en fabricación de <strong>estanterías industriales</strong>, 
              <strong> mobiliario en viga y madera</strong>, <strong>cabañas modulares</strong> y 
              <strong> estructuras a medida</strong> con acabados de precisión certificada.
            </p>

            <div className="hero-cta-group">
              <button onClick={onQuoteClick} className="btn btn-primary">
                <FileText size={18} />
                Solicitar Cotización Inmediata
              </button>
              <button onClick={onExplorePortfolio} className="btn btn-secondary">
                Ver Catálogo de Proyectos
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="hero-stats-row">
              <div className="stat-item">
                <h4>+{COMPANY_INFO.experienceYears}</h4>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat-item">
                <h4>+{COMPANY_INFO.completedProjects}</h4>
                <p>Proyectos Fabricados</p>
              </div>
              <div className="stat-item">
                <h4>{COMPANY_INFO.satisfactionRate}%</h4>
                <p>Satisfacción Garantizada</p>
              </div>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="hero-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" 
                alt="Taller de soldadura y estructuras metálicas"
                className="hero-main-img" 
              />
              <div className="hero-floating-badge">
                <div className="floating-icon">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Garantía Estructural Certificada</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Acero ASTM A36 y Soldadura MIG/TIG de precisión</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
