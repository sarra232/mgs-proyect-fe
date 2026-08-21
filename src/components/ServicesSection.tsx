import React from 'react';
import { Ruler, Flame, Truck, Compass, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler': return <Ruler size={26} />;
      case 'Flame': return <Flame size={26} />;
      case 'Truck': return <Truck size={26} />;
      case 'Compass': return <Compass size={26} />;
      default: return <Ruler size={26} />;
    }
  };

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Nuestras Capacidades</div>
          <h2>Ingeniería y <span className="text-gold-gradient">Fabricación Certificada</span></h2>
          <p>
            Control total de calidad desde el cálculo del plano y el corte por plasma hasta el tratamiento anticorrosivo y montaje final.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                {getServiceIcon(service.icon)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-benefits-list">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="service-benefit-item">
                    <Check size={14} color="var(--color-primary)" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
