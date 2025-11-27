import { Outlet, Link } from 'react-router-dom';
import '../styles/colors.css'
import '../styles/App.css'
import '../styles/scacademy.css'
import { Hero } from '../components/Hero';
import { CoursesGrid } from '../components/CoursesGrid';
import { GallerySection } from '../components/GallerySection';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { useState } from 'react';

export default function ScAcademy() {
  const [currentPage, setCurrentPage] = useState('inicio');

  // Datos de cursos
  const cursos = [
    {
      id: 1,
      nombre: 'DJ Principiante',
      nivel: 'Básico',
      duracion: '4 semanas',
      precio: '$150',
      imagen: '🎵',
      descripcion: 'Aprende los fundamentos del DJ, técnicas básicas de mezcla y equipamiento esencial.'
    },
    {
      id: 2,
      nombre: 'Producción Musical',
      nivel: 'Intermedio',
      duracion: '6 semanas',
      precio: '$200',
      imagen: '🎧',
      descripcion: 'Domina la producción de música con software profesional y técnicas avanzadas.'
    },
    {
      id: 3,
      nombre: 'Mezcla Avanzada',
      nivel: 'Avanzado',
      duracion: '8 semanas',
      precio: '$250',
      imagen: '🎚️',
      descripcion: 'Perfecciona tus habilidades de mezcla con técnicas profesionales de estudio.'
    },
    {
      id: 4,
      nombre: 'Beatmaking',
      nivel: 'Intermedio',
      duracion: '5 semanas',
      precio: '$180',
      imagen: '🎹',
      descripcion: 'Crea beats originales y aprende la teoría musical aplicada al beatmaking.'
    },
  ];

  // Datos de eventos
  const eventos = [
    {
      id: 1,
      titulo: 'Festival Summer 2024',
      fecha: 'Agosto 2024',
      imagen: '🎉',
      descripcion: 'Un festival increíble con los mejores DJs del país',
      ubicacion: 'DJ Academy'
    },
    {
      id: 2,
      titulo: 'Noche de Estudiantes',
      fecha: 'Julio 2024',
      imagen: '🎤',
      descripcion: 'Presentaciones en vivo de nuestros estudiantes más destacados',
      ubicacion: 'Auditorio Principal'
    },
    {
      id: 3,
      titulo: 'Workshop Especial',
      fecha: 'Junio 2024',
      imagen: '🎧',
      descripcion: 'Masterclass con DJ internacional de renombre',
      ubicacion: 'DJ Academy'
    },
    {
      id: 4,
      titulo: 'Recital de Graduación',
      fecha: 'Mayo 2024',
      imagen: '🎼',
      descripcion: 'Celebración de la graduación de nuestros estudiantes',
      ubicacion: 'Gran Auditorio'
    },
  ];

  // Datos de testimonios
  const testimonios = [
    {
      id: 1,
      nombre: 'Carlos M.',
      texto: 'Excelentes cursos, aprendí muchísimo en poco tiempo. Los profesores son muy dedicados.',
      rol: 'Estudiante DJ Profesional',
      avatar: '👨‍💼',
      calificacion: 5
    },
    {
      id: 2,
      nombre: 'Ana R.',
      texto: 'Los instructores son muy profesionales y atentos. Recomiendo 100% esta academia.',
      rol: 'Productor Musical',
      avatar: '👩‍💼',
      calificacion: 5
    },
    {
      id: 3,
      nombre: 'Pedro L.',
      texto: 'Superó mis expectativas, la calidad de enseñanza es excepcional.',
      rol: 'DJ en Eventos',
      avatar: '👨‍🎓',
      calificacion: 5
    },
  ];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewCourse = (id: number) => {
    console.log(`Ver detalles del curso ${id}`);
  };

  const handleViewEvent = (id: number) => {
    console.log(`Ver evento ${id}`);
  };

  const handleContactSubmit = async (formData: any) => {
    console.log('Formulario enviado:', formData);
    // Aquí iría tu lógica de envío (API, email, etc)
  };

  return (
    <div className='scacademybody'>
      {/* Contenido Principal */}
      <main>
        {/* INICIO */}
        {currentPage === 'inicio' && (
        <section className="hero-background">
          <Hero
            title="Bienvenido a DJ Academy"
            subtitle="Aprende a mezclar, producir y sorprender a tu audiencia"
            buttonText="Ver Cursos"
            onButtonClick={() => handleNavigate('cursos')}
          />
        </section>
)}

        {/* CURSOS */}
        {currentPage === 'cursos' && (
          <CoursesGrid
            titulo="Nuestros Cursos"
            subtitulo="Elige el curso perfecto para tu nivel"
            cursos={cursos}
            onViewDetails={handleViewCourse}
          />
        )}

        {/* SOBRE NOSOTROS */}
        {currentPage === 'sobre' && (
          <section className="sobre-section">
            <div className="sobre-container">
              <h2>Sobre Nosotros</h2>
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
                <h3>Testimonios de Estudiantes</h3>
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
        )}

        {/* CONTACTO */}
        {currentPage === 'contacto' && (
          <section className="contacto-section">
            <div className="contacto-container">
              <h2>Contacta con Nosotros</h2>
              <div className="contacto-content">
                <div className="contacto-form-wrapper">
                  <ContactForm
                    onSubmit={handleContactSubmit}
                    successMessage="¡Mensaje enviado correctamente! Nos contactaremos pronto."
                    errorMessage="Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."
                  />
                </div>

                <div className="contacto-info">
                  <div className="info-card">
                    <h4>📧 Email</h4>
                    <p>info@djacademy.com</p>
                  </div>
                  <div className="info-card">
                    <h4>📱 Teléfono</h4>
                    <p>+1 234 567 8900</p>
                  </div>
                  <div className="info-card">
                    <h4>📍 Ubicación</h4>
                    <p>Calle Principal 123, Ciudad</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <Outlet />
      </main>

      {/* Footer */}
      <Footer
        companyName="DJ Academy"
        email="info@djacademy.com"
        phone="+1 234 567 8900"
        address="Calle Principal 123, Ciudad"
        quickLinks={[
          { label: 'Inicio', onClick: () => handleNavigate('inicio') },
          { label: 'Cursos', onClick: () => handleNavigate('cursos') },
          { label: 'Sobre Nosotros', onClick: () => handleNavigate('sobre') },
          { label: 'Contacto', onClick: () => handleNavigate('contacto') },
        ]}
      />
    </div>
  );
}