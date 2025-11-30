import { useState } from "react";
//Estilos
import "../../styles/AcademyStyles/CoursesGrid.css";
import "../../styles/AcademyStyles/CourseCard.css";
//Componentes
import { Footer } from "../../components/Footer";
import Background from "../../components/AcademyComponents/BackGroundAcademy";
//Interfaces
import type { Course } from "../../types/academyTypes/interfaces";
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";

interface CoursesProps {
  courses: Course[];
}

export default function Courses({ courses }: CoursesProps) {
  useScrollTop();
  const [selectedLevel, setSelectedLevel] = useState<string>("Todos");

  const levels: string[] = ["Todos", "Básico", "Intermedio", "Avanzado"];

  const filteredCourses =
    selectedLevel === "Todos"
      ? courses
      : courses.filter((course) => course.nivel === selectedLevel);

  return (
        <>
            <Background />
          <section className="courses-section">
            <div className="courses-container">
              {/* Header */}
              <header className="courses-header">
                <h1 className="courses-title">Nuestros Cursos</h1>
                <p className="courses-subtitle">
                  Aprende música con expertos profesionales
                </p>
              </header>
      
              {/* Filter */}
              <div className="courses-filter">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`course-button ${
                      selectedLevel === level ? "active" : ""
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
      
              {/* Courses Grid */}
              <div className="courses-grid">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="course-card">
                    <div className="course-image">{course.imagen}</div>
                    <div className="course-content">
                      <h3 className="course-name">{course.nombre}</h3>
                      <div className="course-badges">
                        <span className="badge badge-level">{course.nivel}</span>
                        <span className="badge badge-duration">{course.duracion}</span>
                      </div>
                      <p className="course-description">{course.descripcion}</p>
                      <div className="course-footer">
                        <span className="course-price">{course.precio}</span>
                        <button className="course-button">Info</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      
              {/* Empty State */}
              {filteredCourses.length === 0 && (
                <div className="courses-empty">
                  No hay cursos disponibles en este nivel.
                </div>
              )}
            </div>
          </section>
      
          <Footer/>
        </>
      );
      
}
