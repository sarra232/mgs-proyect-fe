import React, { useState } from 'react';
import { LayoutGrid, Warehouse, Armchair, Home, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import type { CategoryId, ProjectItem } from '../types/portfolio';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse': return <Warehouse size={18} />;
      case 'Armchair': return <Armchair size={18} />;
      case 'Home': return <Home size={18} />;
      case 'Shield': return <Shield size={18} />;
      default: return <LayoutGrid size={18} />;
    }
  };

  return (
    <section id="portafolio" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Catálogo de Obras</div>
          <h2>Nuestro <span className="text-gold-gradient">Portafolio</span> de Fabricaciones</h2>
          <p>
            Explora una selección de nuestras soluciones en almacenamiento pesado, mobiliario de diseño, 
            cabañas estructurales y carpintería metálica a medida.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {getCategoryIcon(category.iconName)}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <article 
              key={project.id} 
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-img-box">
                <img src={project.imageUrl} alt={project.title} className="project-img" loading="lazy" />
                <span className="project-category-tag">
                  {CATEGORIES.find(c => c.id === project.category)?.name.split(' ')[0]}
                </span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                <div className="project-materials-row">
                  {project.materials.slice(0, 2).map((mat, idx) => (
                    <span key={idx} className="material-chip">{mat}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="details-link">
                    Ver Detalles y Planos
                    <ArrowRight size={16} />
                  </span>
                  <ExternalLink size={16} color="var(--text-dim)" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
