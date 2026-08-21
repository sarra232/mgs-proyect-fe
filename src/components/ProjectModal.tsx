import React from 'react';
import { X, CheckCircle2, MessageSquare, Ruler, Layers } from 'lucide-react';
import type { ProjectItem, CompanyInfo } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  companyInfo: CompanyInfo;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, companyInfo, onClose }) => {
  if (!project) return null;

  const quoteMessage = `Hola, estoy interesado en cotizar el proyecto "${project.title}" que vi en su portafolio web.`;
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(quoteMessage)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
          <X size={20} />
        </button>

        <div className="modal-img-wrapper">
          <img src={project.imageUrl} alt={project.title} className="modal-img" />
          <span className="project-category-tag" style={{ top: 20, left: 20 }}>
            {project.category}
          </span>
        </div>

        <div className="modal-body">
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h2>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            {project.tagline}
          </p>

          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            {project.description}
          </p>

          {project.dimensions && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '12px', 
              background: 'var(--bg-surface-raised)', 
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.5rem',
              border: '1px solid var(--steel-border)'
            }}>
              <Ruler size={20} color="var(--color-primary)" />
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block' }}>Dimensiones Estándar / Referencia:</span>
                <strong style={{ fontSize: '0.95rem' }}>{project.dimensions}</strong>
              </div>
            </div>
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} color="var(--color-primary)" />
              Materiales y Especificaciones Técnicas
            </h4>
            <div className="project-materials-row">
              {project.materials.map((mat, i) => (
                <span key={i} className="material-chip" style={{ fontSize: '0.82rem', padding: '5px 12px' }}>
                  {mat}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Características Principales</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {project.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--steel-border)' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{ flex: 1 }}
            >
              <MessageSquare size={18} />
              Cotizar este Proyecto por WhatsApp
            </a>
            <button onClick={onClose} className="btn btn-secondary">
              Volver al Catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
