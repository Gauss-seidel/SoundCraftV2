//Estilos
import '../../styles/colors.css'
import '../../styles/App.css'
import '../../styles/AcademyStyles/scacademy.css'
//Componentes
import HeroImage from '../../components/AcademyComponents/HeroAcademy';
import { GallerySection } from '../../components/AcademyComponents/GallerySection';
import { TestimonialCard } from '../../components/AcademyComponents/TestimonialCard';
import { Footer } from '../../components/Footer';
import Background from '../../components/AcademyComponents/BackGroundAcademy';
//Datos
import { eventosData } from '../../assets/data/academyData/eventosData';
import { testimoniosData } from '../../assets/data/academyData/testimoniosData';
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";

export default function ScAcademy() {
  useScrollTop();

  const handleViewEvent = (id: number) => {
    console.log(`Ver evento ${id}`);
  };

  return (
    <div>
      <Background />
      
      <div className='scacademybody'>
        <main>
          <HeroImage
            title="Bienvenido a SoundCraft Academy"
            subtitle="Aprende a mezclar, producir y sorprender a tu audiencia"
            buttonText="Ver Cursos"
            linkTo="/scacademy/cursos"
          />
          {/* SOBRE NOSOTROS */}
          <section className="sobre-section">
            <div className="sobre-container">
              <h2 className='subrayado'>Sobre Nosotros</h2>
              <div className="sobre-content">
                <p>
                  DJ Academy es una institución dedicada a la formación de DJs y productores musicales.
                  Con pasión y experiencia, hemos formado a cientos de profesionales en el arte de la música y el entretenimiento.
                </p>
                <p>
                  Nuestro equipo está compuesto por DJs certificados que traen su experiencia
                  directa de festivales y eventos alrededor del mundo.
                </p>
              </div>
  
              {/* Galería de Eventos */}
                <GallerySection
                titulo="Portfolio & Galería"
                subtitulo="Nuestros eventos y momentos especiales"
                eventos={eventosData}
                onViewEvent={handleViewEvent}
              />
  
              {/* Testimonios */}
              <div className="testimonios-section">
                <h3 className='subrayado'>Testimonios de Estudiantes</h3>
                <div className="testimonios-grid">
                  {testimoniosData.map((testimonio) => (
                    <TestimonialCard
                      key={testimonio.id}
                      nombre={testimonio.nombre}
                      texto={testimonio.texto}
                      rol={testimonio.rol}
                      avatar={testimonio.avatar}
                      calificacion={testimonio.calificacion}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )}