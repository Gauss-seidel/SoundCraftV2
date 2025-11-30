import React from 'react';
import { Users, Volume2, Check } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/comboDetail.css';
//Interfaces
import type { Combo } from '../../types/eventsTypes/interfaces';
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";




interface ComboDetailProps {
  combo: Combo;
  onBack: () => void;
}

const ComboDetail: React.FC<ComboDetailProps> = ({ combo, onBack }) => {
  useScrollTop();
  return (
    <div className="combo-detail">
      <div className="combo-detail__container">
        <button className="combo-detail__back" onClick={onBack}>
          ← Volver
        </button>

        <div className="combo-detail__content">
        <div className="combo-detail__image">
          <img
            src={combo.image}
            alt={combo.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
        </div>
          <div className="combo-detail__info">
            <h1 className="combo-detail__title">{combo.name}</h1>
            <p className="combo-detail__description">{combo.fullDescription}</p>

            <div className="combo-detail__specs">
              <div className="combo-detail__spec">
                <Users size={24} className="combo-detail__spec-icon" />
                <div>
                  <p className="combo-detail__spec-label">Capacidad</p>
                  <p className="combo-detail__spec-value">{combo.capacity} personas</p>
                </div>
              </div>
              <div className="combo-detail__spec">
                <Volume2 size={24} className="combo-detail__spec-icon" />
                <div>
                  <p className="combo-detail__spec-label">Potencia</p>
                  <p className="combo-detail__spec-value">{combo.wattage}</p>
                </div>
              </div>
            </div>

            <div className="combo-detail__features">
              <h3 className="combo-detail__features-title">Características</h3>
              <ul className="combo-detail__features-list">
                {combo.features.map((feature, idx) => (
                  <li key={idx} className="combo-detail__feature-item">
                    <Check size={20} className="combo-detail__feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="combo-detail__footer">
              <span className="combo-detail__price">₲{combo.price}</span>
              <button className="combo-detail__cta">
                Cotizar ahora
              </button>
            </div>
          </div>
        </div>

        <div className="combo-detail__bottom">
          <div className="combo-detail__equipment-section">
            <h3 className="combo-detail__section-title">Equipos incluidos</h3>
            <ul className="combo-detail__equipment-list">
              {combo.equipment.map((item, idx) => (
                <li key={idx} className="combo-detail__equipment-item">
                  <span className="combo-detail__equipment-icon">♪</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="combo-detail__gallery-section">
            <h3 className="combo-detail__section-title">Galería</h3>
            <div className="combo-detail__gallery">
              {combo.gallery.map((img, idx) => (
                <div key={idx} className="combo-detail__gallery-item">
                  <img
                    src={img}
                    alt={`Combo image ${idx}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboDetail;