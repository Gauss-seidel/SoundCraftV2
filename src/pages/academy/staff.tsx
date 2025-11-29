import { Footer } from "../../components/Footer";
import Background from "../../components/AcademyComponents/BackGroundAcademy";
import StaffGrid from "../../components/AcademyComponents/StaffGrid";
import "../../styles/AcademyStyles/StaffCard.css";
import "../../styles/AcademyStyles/StaffGrid.css";
import AvatarRodas from "../../assets/AcademyAssets/avatars/avatarRodas.png"
import AvatarHernan from "../../assets/AcademyAssets/avatars/avatarHernan.png"
import AvatarAmanda from "../../assets/AcademyAssets/avatars/avatarAmanda.png"
import AvatarWillian from "../../assets/AcademyAssets/avatars/avatarWillian.png"
import AvatarOsvaldo from "../../assets/AcademyAssets/avatars/avatarOsvaldo.png"
import AvatarMati from "../../assets/AcademyAssets/avatars/avatarMati.png"

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

export default function Staff() {
  const instructores: Instructor[] = [
    {
      id: 1,
      nombre: "Hernan Dominguez",
      especialidad: "DJ profesional",
      imagen: AvatarHernan,
      experiencia: "15 años",
      descripcion:
        "Especialista en producción de House y Techno. Ha tocado en festivales internacionales y cuenta con pasión por la música.",
      certificaciones: ["Serato Certified", "Pioneer Certified", "Ableton Live Advanced"],
      redes: {
        instagram: "https://www.instagram.com/hernandomin",
        youtube: "https://youtube.com",
        whatsapp: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 2,
      nombre: "Osvaldo Rolon",
      especialidad: "Director",
      imagen: AvatarOsvaldo,
      experiencia: "4 años",
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
      nombre: "fabrizio Rodas",
      especialidad: "DJ profesional",
      imagen: AvatarRodas,
      experiencia: "9 años",
      descripcion:
        "Es conocido por su versalitidad y capacidad de cautivar con los sonidos que ofrece. Ha logrado destacar en multiples lugares del pais desde su incursión en el mundo del Djing",
      certificaciones: ["Academia de Artes Scapini - 2013", "CONAMU - 2016 a 2018", "Audio Lab - 2023 a 2024"],
      redes: {
        instagram: "https://www.instagram.com/rodas_dj",
        whatsapp: "https://wa.me/595986284640",
      },
      calificacion: 5,
    },
    {
      id: 4,
      nombre: "Amanda Lasta",
      especialidad: "Agente administrativo",
      imagen: AvatarAmanda,
      experiencia: "5 años",
      descripcion:
        "Artista de electrónica experimental con enfoque en síntesis y sound design. Ganadora de múltiples premios internacionales.",
      certificaciones: ["Synthesis Expert", "Sound Design Master", "Reaktor Certified"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        whatsapp: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 5,
      nombre: "Andrea Saturio",
      especialidad: "Agente administrativo",
      imagen: "🎸",
      experiencia: "6 años",
      descripcion:
        "Artista de electrónica experimental con enfoque en síntesis y sound design. Ganadora de múltiples premios internacionales.",
      certificaciones: ["Synthesis Expert", "Sound Design Master", "Reaktor Certified"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        whatsapp: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 6,
      nombre: "Janni Gimenez",
      especialidad: "Community Manager",
      imagen: "🎼",
      experiencia: "7 años",
      descripcion:
        "Artista de electrónica experimental con enfoque en síntesis y sound design. Ganadora de múltiples premios internacionales.",
      certificaciones: ["Synthesis Expert", "Sound Design Master", "Reaktor Certified"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        whatsapp: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 7,
      nombre: "Willian Núñez",
      especialidad: "Administrador Web",
      imagen: AvatarWillian,
      experiencia: "2 años",
      descripcion:
        "Entusiasta por la música, la docencia y la programación. Presentando experiencias a todos los niveles",
      certificaciones: ["Monkey Academy 0-Jr", "Monkey Academy Jr-Mid", "Web designer"],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        whatsapp: "https://spotify.com",
      },
      calificacion: 5,
    },
    {
      id: 8,
      nombre: "Matias Irala",
      especialidad: "DJ profesional",
      imagen: AvatarMati,
      experiencia: "3 años",
      descripcion:
        "Artista de electrónica experimental con enfoque en síntesis y sound design. Ganadora de múltiples premios internacionales.",
      certificaciones: ["SC Academy DJ", "", ""],
      redes: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        whatsapp: "https://spotify.com",
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