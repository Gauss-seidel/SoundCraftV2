import '../../styles/colors.css'
import '../../styles/App.css'
import '../../styles/AcademyStyles/scacademy.css'
import HeroImage from '../../components/AcademyComponents/HeroAcademy';
import { GallerySection } from '../../components/AcademyComponents/GallerySection';
import { TestimonialCard } from '../../components/AcademyComponents/TestimonialCard';
import { Footer } from '../../components/Footer';
import Background from '../../components/AcademyComponents/BackGroundAcademy';
import EventImage1 from '../../assets/AcademyAssets/events/event1.png'
import EventImage2 from '../../assets/AcademyAssets/events/event2.png'
import EventImage3 from '../../assets/AcademyAssets/events/event3.png'
import EventImage4 from '../../assets/AcademyAssets/events/event4.png'

export default function ScAcademy() {

  // Datos de eventos
  const eventos = [
    {
      id: 1,
      titulo: 'Habilitado Curso DJ',
      imagen: EventImage1,
      fecha: 'Diciembre 2025',
      descripcion: 'Esperando grandes cosas, empezando desde cero'
    },
    {
      id: 2,
      titulo: 'Un nuevo Comienzo',
      imagen: EventImage2,
      fecha: 'Septiembre 2024',
      descripcion: 'Anímate a dar el primer paso, de cero a DJ certificado'
    },
    {
      id: 3,
      titulo: 'Nueva Sucursal',
      imagen: EventImage3,
      fecha: 'Octubre 2025',
      descripcion: 'Cada vez mas cerca de vos, ahora en Caacupe'
    },
    {
      id: 4,
      titulo: 'Curso Kids',
      imagen: EventImage4,
      fecha: 'Diciembre 2025',
      descripcion: 'Hay para todos, SC kids para empezar desde temprano'
    },
  ];

  // Datos de testimonios
  const testimonios = [
    {
      id: 1,
      nombre: 'Moncha',
      texto: 'Excelentes cursos, aprendí muchísimo en poco tiempo. Los profesores son muy dedicados.',
      rol: 'Estudiante DJ Profesional',
      avatar: '👨‍💼',
      calificacion: 5
    },
    {
      id: 2,
      nombre: 'Pablo Pintos',
      texto: 'Los instructores son muy profesionales y atentos. Recomiendo 100% esta academia.',
      rol: 'Productor Musical',
      avatar: '👩‍💼',
      calificacion: 5
    },
    {
      id: 3,
      nombre: 'Santi Peña',
      texto: 'Superó mis expectativas, la calidad de enseñanza es excepcional.',
      rol: 'DJ en Eventos',
      avatar: '👨‍🎓',
      calificacion: 5
    },
  ];


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
                eventos={eventos}
                onViewEvent={handleViewEvent}
              />
  
              {/* Testimonios */}
              <div className="testimonios-section">
                <h3 className='subrayado'>Testimonios de Estudiantes</h3>
                <div className="testimonios-grid">
                  {testimonios.map((testimonio) => (
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
        <Footer
          quickLinks={[
            { label: "Inicio", to: "/" },
            { label: "Cursos", to: "/scacademy/cursos" },
            { label: "Staff", to: "/scacademy/staff" },
            { label: "Contacto", to: "/scacademy/contacto" },
          ]}
        />
      </div>
    </div>
  )}