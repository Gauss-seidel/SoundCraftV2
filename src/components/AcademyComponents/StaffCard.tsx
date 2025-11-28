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
      spotify?: string;
    };
    calificacion: number;
  }
  
  interface StaffCardProps {
    instructor: Instructor;
  }
  
  export default function StaffCard({ instructor }: StaffCardProps) {
    return (
      <div className="staff-card">
        {/* Imagen/Avatar */}
        <div className="staff-card-image">
          <span className="staff-avatar">{instructor.imagen}</span>
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
            {instructor.redes.spotify && (
              <a
                href={instructor.redes.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link spotify"
                title="Spotify"
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