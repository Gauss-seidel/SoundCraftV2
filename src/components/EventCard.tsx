import React, { useState } from 'react';
import '../styles/stylesComponents/EventCard.css';

interface EventCardProps {
  id: number;
  titulo: string;
  fecha: string;
  imagen?: string;
  descripcion?: string;
  ubicacion?: string;
  onViewEvent: (id: number) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  titulo,
  fecha,
  imagen = '🎉',
  descripcion = 'Un evento memorable',
  ubicacion = 'DJ Academy',
  onViewEvent,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="event-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="event-image">
        <div className="event-emoji">{imagen}</div>
        <div className="event-overlay"></div>
      </div>

      <div className="event-content">
        <h4 className="event-title">{titulo}</h4>
        
        <div className="event-meta">
          <span className="event-date">📅 {fecha}</span>
          <span className="event-location">📍 {ubicacion}</span>
        </div>

        {isHovered && (
          <div className="event-hover-content">
            <p className="event-description">{descripcion}</p>
            <button
              className="event-button"
              onClick={() => onViewEvent(id)}
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    </div>
  );
};