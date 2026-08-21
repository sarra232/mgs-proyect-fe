import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="brand-logo-link">
          <img src="/logo.jpeg" alt="Metálicas González Suárez" className="brand-logo-img" />
          <div>
            <div className="brand-name">
              Metálicas <span className="text-gold-gradient">González Suárez</span>
            </div>
            <div className="brand-subtitle">Ingeniería & Diseño en Acero</div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a
                href="#portafolio"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portafolio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#cotizador"
                className="nav-link"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
              >
                Cotizador
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <MessageSquare size={16} />
                WhatsApp 300 000 0000
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
