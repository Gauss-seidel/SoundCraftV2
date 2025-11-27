import React from 'react';
import '../styles/stylesComponents/Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <section className="hero" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        
        <button className="hero-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};