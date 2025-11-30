import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/djCard.css';
//Interfaces
import type { DJ } from '../../types/eventsTypes/interfaces';

interface DJCardProps {
  dj: DJ;
  onViewProfile: (id: number) => void;
}

const DJCard: React.FC<DJCardProps> = ({ dj, onViewProfile }) => {
  // Verificar si es una imagen importada o un emoji
  const isImage = typeof dj.image === 'string' && dj.image.includes('/');
  
  return (
    <div className="dj-card" onClick={() => onViewProfile(dj.id)}>
      <div className="dj-card__image">
        {isImage ? (
          <img src={dj.image} alt={dj.name} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
        ) : (
          dj.image
        )}
      </div>
      <div className="dj-card__content">
        <h3 className="dj-card__name">{dj.name}</h3>
        <p className="dj-card__specialty">{dj.specialty}</p>
        
        <div className="dj-card__rating">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < Math.floor(dj.rating) ? "dj-card__star-filled" : "dj-card__star-empty"}
            />
          ))}
          <span className="dj-card__rating-value">{dj.rating}</span>
        </div>

        <div className="dj-card__info">
          <p className="dj-card__info-item">
            <span className="dj-card__info-label">Experiencia:</span> {dj.experience}
          </p>
          <p className="dj-card__info-item">
            <span className="dj-card__info-label">Eventos:</span> {dj.events}+
          </p>
        </div>

        <button className="dj-card__button">
          Ver perfil <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DJCard;