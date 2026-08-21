import React, { useState } from 'react';
import { Calculator, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const QuoteCalculator: React.FC = () => {
  const [category, setCategory] = useState('estanterias');
  const [dimensions, setDimensions] = useState('');
  const [material, setMaterial] = useState('acero-estandar');
  const [details, setDetails] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'estanterias': return 'Estanterías / Racks Industriales';
      case 'muebles': return 'Mobiliario Industrial (Mesa, Repisas, etc.)';
      case 'cabanas': return 'Cabaña o Casa Modular en Acero';
      case 'estructuras': return 'Estructura a Medida / Portón / Cubierta';
      default: return 'Fabricación en Metal';
    }
  };

  const getMaterialLabel = (mat: string) => {
    switch (mat) {
      case 'acero-estandar': return 'Acero ASTM A36 + Pintura Electrostática al Horno';
      case 'acero-madera': return 'Estructura de Acero + Madera Maciza Tratada';
      case 'galvanizado': return 'Acero Galvanizado para Exterior / Intemperie';
      case 'inox': return 'Acero Inoxidable Quirúrgico / Decorativo';
      default: return 'Acero Estructural';
    }
  };

  const generateWhatsAppMessage = () => {
    return `*SOLICITUD DE COTIZACIÓN - METÁLICAS GONZÁLEZ SUÁREZ*
👤 *Cliente:* ${clientName || 'No especificado'}
📱 *Teléfono:* ${clientPhone || 'No especificado'}
📐 *Categoría:* ${getCategoryLabel(category)}
⚙️ *Material:* ${getMaterialLabel(material)}
📏 *Dimensiones / Medidas:* ${dimensions || 'A definir en asesoría'}
📝 *Detalles adicionales:* ${details || 'Sin observaciones adicionales'}`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="cotizador" className="quote-section">
      <div className="container">
        <div className="quote-box">
          <div className="quote-grid">
            {/* Info Column */}
            <div>
              <div className="badge-tag">
                <Calculator size={14} />
                <span>Cotizador Rápido & Asesoría</span>
              </div>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Cuéntanos tu proyecto y <span className="text-gold-gradient">lo cotizamos a medida</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Comunícanos las dimensiones estimadas o el tipo de estructura que requieres. 
                Te daremos una estimación técnica y disponibilidad de fabricación inmediata.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px', borderRadius: 'var(--radius-sm)', color: 'var(--color-primary)' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.95rem' }}>Respuesta Rápida por WhatsApp</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Te responderemos con cotización y alternativas técnicas en minutos.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px', borderRadius: 'var(--radius-sm)', color: 'var(--color-primary)' }}>
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.95rem' }}>Visita Técnica Disponible</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Realizamos toma de medidas en sitio para proyectos medianos y de gran envergadura.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              {submitted ? (
                <div style={{ 
                  background: 'var(--bg-surface-raised)', 
                  padding: '2.5rem', 
                  borderRadius: 'var(--radius-md)', 
                  textAlign: 'center',
                  border: '1px solid var(--color-primary)'
                }}>
                  <CheckCircle size={48} color="var(--color-primary)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem' }}>¡Solicitud Enviada!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Se ha abierto WhatsApp con todos los detalles de tu requerimiento.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Hacer otra cotización
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSend}>
                  <div className="quote-input-group">
                    <label className="quote-label">Tipo de Proyecto / Producto</label>
                    <select 
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)}
                      className="quote-select"
                    >
                      <option value="estanterias">Estanterías & Racks para Bodega</option>
                      <option value="muebles">Mobiliario Industrial (Mesa, Repisas, etc.)</option>
                      <option value="cabanas">Cabaña / Casa Modular en Estructura Metálica</option>
                      <option value="estructuras">Portón, Cubierta, Pérgola o Carpintería a Medida</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="quote-input-group">
                      <label className="quote-label">Tu Nombre o Empresa</label>
                      <input 
                        type="text" 
                        placeholder="Ej. Juan Pérez" 
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="quote-input"
                        required
                      />
                    </div>
                    <div className="quote-input-group">
                      <label className="quote-label">Teléfono / Celular</label>
                      <input 
                        type="tel" 
                        placeholder="Ej. 310 123 4567" 
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="quote-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="quote-input-group">
                    <label className="quote-label">Material y Acabado Preferido</label>
                    <select 
                      value={material} 
                      onChange={(e) => setMaterial(e.target.value)}
                      className="quote-select"
                    >
                      <option value="acero-estandar">Acero ASTM A36 + Pintura Electrostática al Horno</option>
                      <option value="acero-madera">Combinación Acero Estructural + Madera Maciza</option>
                      <option value="galvanizado">Acero Galvanizado para Exterior / Intemperie</option>
                      <option value="inox">Acero Inoxidable</option>
                    </select>
                  </div>

                  <div className="quote-input-group">
                    <label className="quote-label">Medidas aproximadas (Largo x Alto x Fondo)</label>
                    <input 
                      type="text" 
                      placeholder="Ej. 3m de largo x 2m de alto o 60 m²" 
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      className="quote-input"
                    />
                  </div>

                  <div className="quote-input-group">
                    <label className="quote-label">Detalles o requerimientos adicionales</label>
                    <textarea 
                      rows={3}
                      placeholder="Describe peso que debe soportar, tipo de piso, ubicación o cualquier detalle relevante..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="quote-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '1rem' }}>
                    <MessageSquare size={20} />
                    Enviar Cotización por WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
