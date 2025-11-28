import { useState } from "react";
import { Footer } from "../../components/Footer";
import Background from "../../components/AcademyComponents/BackGroundAcademy";
import "../../styles/AcademyStyles/CoursesGrid.css";
import "../../styles/AcademyStyles/CourseCard.css";

interface Course {
  id: number;
  nombre: string;
  nivel: string;
  duracion: string;
  precio: string;
  imagen: string;
  descripcion: string;
}

export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState<string>("Todos");

  const courses: Course[] = [
    {
      id: 1,
      nombre: "DJ Principiante",
      nivel: "Básico",
      duracion: "4 meses",
      precio: "₲150.000/m",
      imagen: "🎵",
      descripcion:
        "Aprende los fundamentos del DJ, técnicas básicas de mezcla y equipamiento esencial.",
    },
    {
      id: 2,
      nombre: "Producción Musical",
      nivel: "Intermedio",
      duracion: "6 meses",
      precio: "₲200.000/m",
      imagen: "🎧",
      descripcion:
        "Domina la producción de música con software profesional y técnicas avanzadas.",
    },
    {
      id: 3,
      nombre: "Mezcla Avanzada",
      nivel: "Avanzado",
      duracion: "8 meses",
      precio: "₲250.000/m",
      imagen: "🎚️",
      descripcion:
        "Perfecciona tus habilidades de mezcla con técnicas profesionales de estudio.",
    },
    {
      id: 4,
      nombre: "Vinilo",
      nivel: "Intermedio",
      duracion: "5 meses",
      precio: "₲180.000/m",
      imagen: "🪩",
      descripcion:
        "Crea beats originales y aprende la teoría musical aplicada al beatmaking.",
    },
  ];

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
                        <button className="course-button">Inscribirse</button>
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
