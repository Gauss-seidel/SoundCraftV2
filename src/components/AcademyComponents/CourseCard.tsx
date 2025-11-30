import React from 'react';
//Estilos
import '../../styles/AcademyStyles/CourseCard.css';
//Interfaces
import type { CourseCardProps } from '../../types/academyTypes/interfaces'


export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  nombre,
  nivel,
  duracion,
  precio,
  imagen = '🎵',
  descripcion = 'Aprende todo lo necesario para dominar este curso',
  onViewDetails,
}) => {
  return (
    <div className="course-card">
      <div className="course-image">
        {imagen}
      </div>

      <div className="course-content">
        <h3 className="course-name">{nombre}</h3>

        <div className="course-badges">
          <span className="badge badge-level">{nivel}</span>
          <span className="badge badge-duration">{duracion}</span>
        </div>

        <p className="course-description">{descripcion}</p>

        <div className="course-footer">
          <span className="course-price">{precio}</span>
          <button
            className="course-button"
            onClick={() => onViewDetails(id)}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};