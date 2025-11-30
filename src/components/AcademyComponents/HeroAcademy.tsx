import { useNavigate } from 'react-router-dom';
//Estilos
import '../../styles/AcademyStyles/HeroImage.css'
import '../../styles/colors.css'
//Interfaces
import type { HeroImageProps } from '../../types/academyTypes/interfaces';

export default function HeroImage({
  title,
  subtitle,
  buttonText,
  linkTo,
  onButtonClick,
  backgroundImage,
}: HeroImageProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (linkTo) {
      navigate(linkTo);
    }
  };

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-grid-overlay"></div>

      {/* Background Elements */}
      <div className="hero-bg-element hero-element-1"></div>
      <div className="hero-bg-element hero-element-2"></div>
      <div className="hero-bg-element hero-element-3"></div>

      {/* Vinyl Turntable */}
      <div className="hero-vinyl-container">
        <div className="hero-vinyl">
          <div className="hero-vinyl-groove"></div>
          <div className="hero-vinyl-ring"></div>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-cta-button" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>

      {/* Sound Wave Animation */}
      <div className="hero-sound-wave">
        <div className="hero-wave-bar"></div>
        <div className="hero-wave-bar"></div>
        <div className="hero-wave-bar"></div>
        <div className="hero-wave-bar"></div>
        <div className="hero-wave-bar"></div>
        <div className="hero-wave-bar"></div>
      </div>
    </div>
  );
}