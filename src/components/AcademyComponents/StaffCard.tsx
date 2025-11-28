interface Instructor {
    id: number;
    nombre: string;
    especialidad: string;
    imagen: string;
    experiencia: string;
    descripcion: string;
    certificaciones: string[];
    redes: {
      instagram?: string;
      youtube?: string;
      whatsapp?: string;
    };
    calificacion: number;
  }
  
  interface StaffCardProps {
    instructor: Instructor;
  }
  
  export default function StaffCard({ instructor }: StaffCardProps) {
    // Función para determinar si la imagen es una URL/path o un emoji
    const isImageUrl = (img: string): boolean => {
      // Si contiene "/" o "http" o termina con extensión de imagen, es una URL/path
      return img.includes('/') || img.startsWith('http') || /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(img);
    };

    return (
      <div className="staff-card">
        {/* Imagen/Avatar */}
        <div className="staff-card-image">
          {isImageUrl(instructor.imagen) ? (
            <img src={instructor.imagen} alt={instructor.nombre} className="staff-avatar"/>
          ) : (
            <div className="staff-avatar-emoji">{instructor.imagen}</div>
          )}
          <div className="staff-rating">
            {[...Array(instructor.calificacion)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>
  
        {/* Contenido */}
        <div className="staff-card-content">
          <h3 className="staff-card-name">{instructor.nombre}</h3>
          <p className="staff-card-specialty">{instructor.especialidad}</p>
          <p className="staff-card-experience">💼 {instructor.experiencia}</p>
          <p className="staff-card-description">{instructor.descripcion}</p>
  
          {/* Certificaciones */}
          <div className="staff-certifications">
            {instructor.certificaciones.map((cert, index) => (
              <span key={index} className="certification-badge">
                ✓ {cert}
              </span>
            ))}
          </div>
  
          {/* Redes Sociales */}
          <div className="staff-social-links">
            {instructor.redes.instagram && (
              <a
                href={instructor.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                title="Instagram"
              >
                📱
              </a>
            )}
            {instructor.redes.youtube && (
              <a
                href={instructor.redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
                title="YouTube"
              >
                🎬
              </a>
            )}
            {instructor.redes.whatsapp && (
              <a
                href={instructor.redes.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link whatsapp"
                title="Whatsapp"
              >
                🎵
              </a>
            )}
          </div>
  
          {/* CTA Button */}
          <button className="staff-cta-button">Ver Perfil Completo</button>
        </div>
      </div>
    );
  }