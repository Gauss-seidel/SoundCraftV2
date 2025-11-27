import React from 'react';
import '../styles/stylesComponents/TestimonialCard.css';

interface TestimonialCardProps {
  nombre: string;
  texto: string;
  rol?: string;
  avatar?: string;
  calificacion?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  nombre,
  texto,
  rol = 'Estudiante',
  avatar = '👤',
  calificacion = 5,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < calificacion ? 'filled' : ''}`}>
            ★
          </span>
        ))}
      </div>

      <p className="testimonial-text">"{texto}"</p>

      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {avatar}
        </div>

        <div className="testimonial-info">
          <h4 className="testimonial-name">{nombre}</h4>
          <p className="testimonial-role">{rol}</p>
        </div>
      </div>
    </div>
  );
};