//Estilos
import '../styles/homeBackground.css';

export default function BackgroundHome() {
  return (
    <div className="bg-home-container">
      {/* Grid Overlay */}
      <div className="bg-home-grid"></div>

      {/* Gradient Orbs - Left (Events) */}
      <div className="bg-home-orb bg-home-orb-left bg-home-orb-1"></div>
      <div className="bg-home-orb bg-home-orb-left bg-home-orb-2"></div>

      {/* Gradient Orbs - Right (Academy) */}
      <div className="bg-home-orb bg-home-orb-right bg-home-orb-3"></div>
      <div className="bg-home-orb bg-home-orb-right bg-home-orb-4"></div>

      {/* Convergence Lines - Represent the choice of paths */}
      <div className="bg-home-convergence-lines">
        <div className="convergence-line line-1"></div>
        <div className="convergence-line line-2"></div>
        <div className="convergence-line line-3"></div>
      </div>

      {/* Frequency Spectrum - Music beats representation */}
      <div className="frequency-spectrum">
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
        <div className="freq-bar"></div>
      </div>

      {/* Sound Waves - Expanding rings */}
      <div className="sound-waves">
        <div className="wave-ring"></div>
        <div className="wave-ring"></div>
        <div className="wave-ring"></div>
      </div>

      {/* Center accent line */}
      <div className="bg-home-center-line"></div>

      {/* Radial gradient overlay */}
      <div className="bg-home-radial-overlay"></div>

      {/* Animated dots */}
      <div className="bg-home-dots">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
        <span className="dot dot-3"></span>
        <span className="dot dot-4"></span>
      </div>
    </div>
  );
}