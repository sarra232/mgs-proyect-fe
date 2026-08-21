import React from 'react';
import { Award, CheckCircle2, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" style={{ padding: '5rem 0', background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <div className="badge-tag">Trayectoria & Maestría</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Forjando confianza con <span className="text-gold-gradient">precisión milimétrica</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.8' }}>
              En <strong>Metálicas González Suárez</strong> transformamos el acero en soluciones de ingeniería duraderas, 
              estéticas y funcionales. Desde sistemas de almacenamiento industrial de gran tonelaje hasta cabañas modulares 
              y piezas exclusivas de mobiliario, cada corte y cada soldadura se realizan bajo estrictos estándares de calidad.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Contamos con un equipo de forjadores, soldadores certificados e ingenieros que entienden que detrás de cada proyecto 
              hay un negocio o un sueño familiar que merece la máxima resistencia y seguridad.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" />
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Acero 100% Certificado</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" />
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Cumplimiento en Tiempos</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" />
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Acabados Electrostáticos</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" />
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Garantía por Escrito</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              border: '1px solid var(--steel-border-gold)',
              boxShadow: 'var(--shadow-card), var(--shadow-gold)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80" 
                alt="Ingeniería y soldadura en metales" 
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            <div style={{ 
              position: 'absolute', 
              bottom: '-25px', 
              right: '-20px', 
              background: 'var(--bg-card)', 
              border: '1px solid var(--color-primary)', 
              borderRadius: 'var(--radius-md)', 
              padding: '1.25rem',
              maxWidth: '260px',
              boxShadow: 'var(--shadow-card)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <Award size={24} color="var(--color-primary)" />
                <strong style={{ fontSize: '1rem' }}>Calidad Inquebrantable</strong>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Cada estructura se somete a pruebas de rigidez y protección anticorrosiva antes de su entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="badge-tag">Testimonios</div>
            <h2>Lo que dicen nuestros <span className="text-gold-gradient">Clientes</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--steel-border)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                    "{t.comment}"
                  </p>
                </div>
                <div>
                  <strong style={{ fontSize: '0.95rem', display: 'block' }}>{t.clientName}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)' }}>{t.projectType} • {t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
