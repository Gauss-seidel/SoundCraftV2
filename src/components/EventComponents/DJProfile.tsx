import React from 'react';
import { Star } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/djProfile.css';
//Interfaces
import type { DJ } from '../../types/eventsTypes/interfaces'

interface DJProfileProps {
  dj: DJ;
  onBack: () => void;
}

const DJProfile: React.FC<DJProfileProps> = ({ dj, onBack }) => {
  return (
    <div className="dj-profile">
      <div className="dj-profile__container">
        <button className="dj-profile__back" onClick={onBack}>
          ← Volver
        </button>

        <div className="dj-profile__content">
          <div className="dj-profile__sidebar">
            <div className="dj-profile__image">
            {Image ? (
          <img src={dj.image} alt={dj.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        ) : (
          dj.image
        )}
            </div>
            <div className="dj-profile__card">
              <h3 className="dj-profile__card-title">Información</h3>
              <div className="dj-profile__card-info">
                <div className="dj-profile__info-item">
                  <span className="dj-profile__info-label">Experiencia:</span>
                  <span className="dj-profile__info-value">{dj.experience}</span>
                </div>
                <div className="dj-profile__info-item">
                  <span className="dj-profile__info-label">Eventos realizados:</span>
                  <span className="dj-profile__info-value">{dj.events}+</span>
                </div>
                <div className="dj-profile__rating-group">
                  <span className="dj-profile__info-label">Calificación:</span>
                  <div className="dj-profile__rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(dj.rating) ? "dj-profile__star-filled" : "dj-profile__star-empty"}
                      />
                    ))}
                    <span className="dj-profile__rating-text">{dj.rating}</span>
                  </div>
                </div>
              </div>
              <button className="dj-profile__hire-btn">
                Contratar
              </button>
            </div>
          </div>

          <div className="dj-profile__main">
            <h1 className="dj-profile__title">{dj.name}</h1>
            <p className="dj-profile__specialty">{dj.specialty}</p>

            <p className="dj-profile__bio">{dj.bio}</p>

            <div className="dj-profile__genres-section">
              <h3 className="dj-profile__section-title">Géneros musicales</h3>
              <div className="dj-profile__genres">
                {dj.genres.map((genre, idx) => (
                  <span key={idx} className="dj-profile__genre-tag">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="dj-profile__gallery-section">
              <h3 className="dj-profile__section-title">Galería de eventos</h3>
              <div className="dj-profile__gallery">
                {dj.gallery.map((item, idx) => (
                  <div key={idx} className="dj-profile__gallery-item">
                    <img
                      src={item}
                      alt={`Gallery ${idx}`}
                      style={{
                        width: '97%',
                        height: '97%',
                        objectFit: 'fill',
                        borderRadius: '6px'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJProfile;