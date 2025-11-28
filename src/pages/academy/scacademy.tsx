import '../../styles/colors.css'
import '../../styles/App.css'
import '../../styles/AcademyStyles/scacademy.css'
import HeroImage from '../../components/AcademyComponents/HeroAcademy';
import { GallerySection } from '../../components/AcademyComponents/GallerySection';
import { TestimonialCard } from '../../components/AcademyComponents/TestimonialCard';
import { Footer } from '../../components/Footer';
import Background from '../../components/AcademyComponents/BackGroundAcademy';

export default function ScAcademy() {

  // Datos de eventos
  const eventos = [
    {
      id: 1,
      titulo: 'Festival DJ 2024',
      imagen: '🎵',
      fecha: 'Junio 2024',
      descripcion: 'Gran evento con nuestros estudiantes'
    },
    {
      id: 2,
      titulo: 'Masterclass Internacional',
      imagen: '🎧',
      fecha: 'Julio 2024',
      descripcion: 'Clases con DJs reconocidos mundialmente'
    },
    {
      id: 3,
      titulo: 'Recital de Graduados',
      imagen: '🎶',
      fecha: 'Agosto 2024',
      descripcion: 'Presentación de nuestros mejores estudiantes'
    },
    {
      id: 4,
      titulo: 'Festival',
      imagen: '🎵',
      fecha: 'Junio 2025',
      descripcion: 'Gran evento con estudiantes'
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
                  Con más de 10 años de experiencia, hemos formado a cientos de profesionales en el arte de la música y el entretenimiento.
                </p>
                <p>
                  Nuestro equipo está compuesto por DJs certificados internacionalmente que traen su experiencia
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