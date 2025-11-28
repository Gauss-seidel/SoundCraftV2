import { Footer } from "../../components/Footer";
import Background from "../../components/AcademyComponents/BackGroundAcademy";
import StaffGrid from "../../components/AcademyComponents/StaffGrid";
import "../../styles/AcademyStyles/StaffCard.css";
import "../../styles/AcademyStyles/StaffGrid.css";

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

export default function Staff() {
  const instructores: Instructor[] = [
    {
      id: 1,
      nombre: "Alex Rivera",
      especialidad: "House & Techno",
      imagen: "🎧",
      experiencia: "15 años",
      descripcion:
        "Especialista en producción de House y Techno. Ha tocado en festivales internacionales y cuenta con múltiples Grammy.",
      certificaciones: ["Serato Certified", "Pioneer Certified", "Ableton Live Advanced"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 2,
      nombre: "María González",
      especialidad: "Hip-Hop & Trap",
      imagen: "🎤",
      experiencia: "12 años",
      descripcion:
        "Productora y DJ con experiencia en Hip-Hop y Trap. Reconocida por sus remixes innovadores y producciones únicas.",
      certificaciones: ["FL Studio Expert", "Native Instruments Certified", "Audio Engineering"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
      calificacion: 5,
    },
    {
      id: 3,
      nombre: "Carlos Mendez",
      especialidad: "Drum & Bass",
      imagen: "🎚️",
      experiencia: "18 años",
      descripcion:
        "Pionero en Drum & Bass. Combina técnicas tradicionales con producción digital de última generación.",
      certificaciones: ["Drum & Bass Producer Certified", "Advanced Mixing", "Vinyl Mastery"],
      redes: {
        instagram: "https://instagram.com",
        spotify: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 4,
      nombre: "Sofia Torres",
      especialidad: "Electrónica Experimental",
      imagen: "🎹",
      experiencia: "10 años",
      descripcion:
        "Artista de electrónica experimental con enfoque en síntesis y sound design. Ganadora de múltiples premios internacionales.",
      certificaciones: ["Synthesis Expert", "Sound Design Master", "Reaktor Certified"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
      },
      calificacion: 5,
    },
  ];

  return (
    <>
      <Background />
      <section className="staff-section">
        <div className="staff-container">
          {/* Header */}
          <header className="staff-header">
            <h1 className="staff-title">Nuestro Staff</h1>
            <p className="staff-subtitle">
              Aprende de los mejores DJs y productores de la industria
            </p>
          </header>

          {/* Staff Grid */}
          <StaffGrid instructores={instructores} />
        </div>
      </section>

      <Footer
        quickLinks={[
          { label: "Inicio", to: "/" },
          { label: "Cursos", to: "/scacademy/cursos" },
          { label: "Staff", to: "/scacademy/staff" },
          { label: "Contacto", to: "/scacademy/contacto" },
        ]}
      />
    </>
  );
}