import React from 'react';
import { ChevronRight, Users, Volume2 } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/comboCard.css';
//Interfaces
import type { Combo } from '../../types/eventsTypes/interfaces';


interface ComboCardProps {
  combo: Combo;
  onViewDetails: (id: number) => void;
}

const ComboCard: React.FC<ComboCardProps> = ({ combo, onViewDetails }) => {
  return (
    <div className="combo-card" onClick={() => onViewDetails(combo.id)}>
      <div className="combo-card__image">
        <img
            src={combo.image}
            alt={combo.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
        />
      </div>
      <div className="combo-card__content">
        <h3 className="combo-card__title">{combo.name}</h3>
        <p className="combo-card__description">{combo.description}</p>
        
        <div className="combo-card__specs">
          <div className="combo-card__spec">
            <Users size={16} className="combo-card__icon" />
            <span>Capacidad: {combo.capacity} personas</span>
          </div>
          <div className="combo-card__spec">
            <Volume2 size={16} className="combo-card__icon" />
            <span>Potencia: {combo.wattage}</span>
          </div>
        </div>

        <div className="combo-card__equipment">
          <p className="combo-card__equipment-label">Incluye:</p>
          <ul className="combo-card__equipment-list">
            {combo.equipment.slice(0, 2).map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
            {combo.equipment.length > 2 && (
              <li className="combo-card__equipment-more">+ {combo.equipment.length - 2} más</li>
            )}
          </ul>
        </div>

        <div className="combo-card__footer">
          <span className="combo-card__price">₲{combo.price}</span>
          <button className="combo-card__button">
            Más <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;