import { ChevronRight, Music, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
//Estilos
import '../../styles/colors.css'
import '../../styles/App.css'
import '../../styles/EventStyles/scevents.css'
//Componentes
import Background from '../../components/EventComponents/BackGroundEvents';
import HeroEvent from '../../components/EventComponents/HeroEvent';
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";


const ScEvents: React.FC = () =>  {
  useScrollTop();
  return (
    <>
    <div className="home">
    <Background />
      {/* Hero Banner */}
      <HeroEvent 
        title="SoundCraft Eventos"
        subtitle="Alquiler de equipos de audio de última generación y DJs expertos para hacer tu evento inolvidable."
        primaryButtonText="Explorar Combos"
        secondaryButtonText="Ver DJs Disponibles"
        primaryLinkTo="/scevents/combos"
        secondaryLinkTo="/scevents/djs"
      />

      {/* Features */}
      <section className="home__features">
        <div className="home__features-container">
          <h2 className="home__section-title">¿Por qué elegirnos?</h2>
          
          <div className="home__features-grid">
            <div className="home__feature-card">
              <div className="home__feature-icon">
                <Music size={32} />
              </div>
              <h3 className="home__feature-title">Equipos Premium</h3>
              <p className="home__feature-text">
                Equipamiento de última tecnología para eventos de cualquier tamaño
              </p>
            </div>

            <div className="home__feature-card">
              <div className="home__feature-icon">
                <Users size={32} />
              </div>
              <h3 className="home__feature-title">DJs Profesionales</h3>
              <p className="home__feature-text">
                Expertos en múltiples géneros musicales con años de experiencia
              </p>
            </div>

            <div className="home__feature-card">
              <div className="home__feature-icon">
                <Zap size={32} />
              </div>
              <h3 className="home__feature-title">Servicio Rápido</h3>
              <p className="home__feature-text">
                Instalación profesional y soporte técnico durante tu evento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home__cta">
        <div className="home__cta-container">
          <h2 className="home__cta-title">Comienza tu experiencia</h2>
          <p className="home__cta-subtitle">
            Elige entre nuestros combos de equipos o contrata un DJ profesional
          </p>
          <div className="home__cta-buttons">
            <div className="home__hero-buttons">
            <Link to="/scevents/combos" className="home__hero-btn home__hero-btn--secondary">
            Explorar Combos <ChevronRight size={20} />
            </Link>
            <Link to="/scevents/djs" className="home__hero-btn home__hero-btn--secondary">
            Ver DJs
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ScEvents;