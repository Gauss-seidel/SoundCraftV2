import React from 'react';
import '../styles/stylesComponents/CoursesGrid.css';

interface Course {
  id: number;
  nombre: string;
  nivel: string;
  duracion: string;
  precio: string;
  imagen?: string;
  descripcion?: string;
}

interface CoursesGridProps {
  titulo?: string;
  subtitulo?: string;
  cursos: Course[];
  onViewDetails: (id: number) => void;
}

export const CoursesGrid: React.FC<CoursesGridProps> = ({
  titulo = 'Nuestros Cursos',
  subtitulo = 'Elige el curso perfecto para tu nivel',
  cursos,
  onViewDetails,
}) => {
  return (
    <section className="courses-section">
      <div className="courses-container">
        {/* Header */}
        <div className="courses-header">
          <h2 className="courses-title">{titulo}</h2>
          {subtitulo && (
            <p className="courses-subtitle">{subtitulo}</p>
          )}
        </div>

        {/* Grid de Cursos */}
        <div className="courses-grid">
          {cursos.map((curso) => (
            <div key={curso.id} className="course-card">
              <div className="course-image">
                {curso.imagen || '🎵'}
              </div>

              <div className="course-content">
                <h3 className="course-name">{curso.nombre}</h3>

                <div className="course-badges">
                  <span className="badge badge-level">{curso.nivel}</span>
                  <span className="badge badge-duration">{curso.duracion}</span>
                </div>

                <p className="course-description">
                  {curso.descripcion || 'Aprende todo lo necesario para dominar este curso'}
                </p>

                <div className="course-footer">
                  <span className="course-price">{curso.precio}</span>
                  <button
                    className="course-button"
                    onClick={() => onViewDetails(curso.id)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cursos.length === 0 && (
          <div className="courses-empty">
            <p>No hay cursos disponibles en este momento</p>
          </div>
        )}
      </div>
    </section>
  );
};