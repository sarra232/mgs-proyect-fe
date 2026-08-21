import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="brand-logo-link" style={{ marginBottom: '1.25rem' }}>
              <img src="/logo.jpeg" alt="Metálicas González Suárez" className="brand-logo-img" />
              <div>
                <div className="brand-name">
                  Metálicas <span className="text-gold-gradient">González Suárez</span>
                </div>
                <div className="brand-subtitle">Ingeniería & Diseño en Acero</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Fabricación y diseño de estructuras de alta ingeniería: estanterías industriales, 
              mobiliario exclusivo, casas y cabañas modulares sismorresistentes.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <MessageSquare size={16} />
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1.25rem' }}>Catálogo</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                <li key={c.id}>
                  <a href="#portafolio" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios y Garantías */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1.25rem' }}>Servicios</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Fabricación a Medida</li>
              <li>Montaje en Sitio</li>
              <li>Cálculo y Planos</li>
              <li>Pintura Electrostática</li>
              <li>Soldadura Especializada MIG/TIG</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1.25rem' }}>Contacto Directo</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--color-primary)" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--color-primary)" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Metálicas González Suárez</strong>. Todos los derechos reservados.
          </div>
          <button 
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.8rem' }}
          >
            Subir al Inicio
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
