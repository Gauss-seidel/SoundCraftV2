import React, { useState } from 'react';
//Estilos
import '../../styles/AcademyStyles/GallerySection.css';
//Interfaces
import type { Event } from '../../types/academyTypes/interfaces';

interface GallerySectionProps {
  titulo?: string;
  subtitulo?: string;
  eventos: Event[];
  onViewEvent: (id: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  titulo = 'Galería de Eventos',
  subtitulo = 'Revive los momentos más destacados',
  eventos,
  //onViewEvent,
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">{titulo}</h2>
          {subtitulo && (
            <p className="gallery-subtitle">{subtitulo}</p>
          )}
        </div>

        {/* Grid de Eventos */}
        <div className="gallery-grid">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="gallery-item"
              onMouseEnter={() => setHoveredId(evento.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="gallery-image">
              {evento.imagen ? (
                <img src={evento.imagen} alt={evento.titulo} className="gallery-img" />) : (<div className="gallery-emoji">🎉</div>)}
                <div className="gallery-overlay"></div>
              </div>

              <div className="gallery-content">
                <h4 className="gallery-event-title">{evento.titulo}</h4>

                <div className="gallery-meta">
                  <span className="gallery-date">📅 {evento.fecha}</span>
                  {evento.ubicacion && (
                    <span className="gallery-location">📍 {evento.ubicacion}</span>
                  )}
                </div>

                {hoveredId === evento.id && (
                  <div className="gallery-hover-content">
                    <p className="gallery-description">
                      {evento.descripcion || 'Un evento memorable de DJ Academy'}
                    </p>
                    {/*<button
                      className="gallery-button"
                      onClick={() => onViewEvent(evento.id)}
                    >
                      Detalles
                    </button> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {eventos.length === 0 && (
          <div className="gallery-empty">
            <p>No hay eventos disponibles en este momento</p>
          </div>
        )}
      </div>
    </section>
  );
};