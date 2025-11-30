import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Volume2, Zap, Music } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/heroEvent.css';
import '../../styles/colors.css';
//Interdfaces
import type { HeroEventProps } from '../../types/eventsTypes/interfaces';

const HeroEvent: React.FC<HeroEventProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryLinkTo,
  secondaryLinkTo,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  backgroundImage,
}) => {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (onPrimaryButtonClick) {
      onPrimaryButtonClick();
    } else if (primaryLinkTo) {
      navigate(primaryLinkTo);
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryButtonClick) {
      onSecondaryButtonClick();
    } else if (secondaryLinkTo) {
      navigate(secondaryLinkTo);
    }
  };

  return (
    <section
      className="hero-event"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-event__overlay"></div>

      {/* Background Elements */}
      <div className="hero-event__bg-element hero-event__element-1"></div>
      <div className="hero-event__bg-element hero-event__element-2"></div>
      <div className="hero-event__bg-element hero-event__element-3"></div>

      <div className="hero-event__container">
        <div className="hero-event__content">
          <div className="hero-event__text">
            <h1 className="hero-event__title">{title}</h1>
            <p className="hero-event__subtitle">{subtitle}</p>
            
            <div className="hero-event__features">
              <div className="hero-event__feature">
                <Volume2 size={20} className="hero-event__feature-icon" />
                <span>Equipos Premium 4K</span>
              </div>
              <div className="hero-event__feature">
                <Zap size={20} className="hero-event__feature-icon" />
                <span>Instalación Profesional</span>
              </div>
              <div className="hero-event__feature">
                <Music size={20} className="hero-event__feature-icon" />
                <span>DJs Certificados</span>
              </div>
            </div>

            <div className="hero-event__buttons">
              <button 
                className="hero-event__btn hero-event__btn--primary"
                onClick={handlePrimaryClick}
              >
                {primaryButtonText} <ArrowRight size={20} />
              </button>
              <button 
                className="hero-event__btn hero-event__btn--secondary"
                onClick={handleSecondaryClick}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>

          <div className="hero-event__visual">
            <div className="hero-event__circle hero-event__circle--1">
              <span>🎵</span>
            </div>
            <div className="hero-event__circle hero-event__circle--2">
              <span>🎧</span>
            </div>
            <div className="hero-event__circle hero-event__circle--3">
              <span>🎤</span>
            </div>
            <div className="hero-event__glow"></div>
          </div>
        </div>

        <div className="hero-event__stats">
          <div className="hero-event__stat">
            <h3 className="hero-event__stat-value">500+</h3>
            <p className="hero-event__stat-label">Eventos Realizados</p>
          </div>
          <div className="hero-event__stat">
            <h3 className="hero-event__stat-value">50+</h3>
            <p className="hero-event__stat-label">DJs Profesionales</p>
          </div>
          <div className="hero-event__stat">
            <h3 className="hero-event__stat-value">100%</h3>
            <p className="hero-event__stat-label">Satisfacción Garantizada</p>
          </div>
        </div>
      </div>

      {/* Sound Wave Animation */}
      <div className="hero-event__sound-wave">
        <div className="hero-event__wave-bar"></div>
        <div className="hero-event__wave-bar"></div>
        <div className="hero-event__wave-bar"></div>
        <div className="hero-event__wave-bar"></div>
        <div className="hero-event__wave-bar"></div>
        <div className="hero-event__wave-bar"></div>
      </div>
    </section>
  );
};

export default HeroEvent;