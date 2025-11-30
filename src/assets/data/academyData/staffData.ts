//Avatares
import AvatarRodas from "../../AcademyAssets/avatars/avatarRodas.png"
import AvatarHernan from "../../AcademyAssets/avatars/avatarHernan.png"
import AvatarAmanda from "../../AcademyAssets/avatars/avatarAmanda.png"
import AvatarWillian from "../../AcademyAssets/avatars/avatarWillian.png"
import AvatarOsvaldo from "../../AcademyAssets/avatars/avatarOsvaldo.png"
import AvatarMati from "../../AcademyAssets/avatars/avatarMati.png"
import AvatarJanni from "../../AcademyAssets/avatars/avatarJanni.png"

//Interfaces
import type { Instructor } from "../../../types/academyTypes/interfaces";

export   const instructores: Instructor[] = [
    {
      id: 1,
      nombre: "Hernan Dominguez",
      especialidad: "DJ profesional",
      imagen: AvatarHernan,
      experiencia: "15 años",
      descripcion:
        "DJ profesional con amplia trayectoria en eventos, festivales y clubes. Combina técnica depurada, creatividad y conexión con la audiencia para ofrecer presentaciones memorables.",
      certificaciones: ["Serato Certified", "Pioneer Certified", "Ableton Live Advanced"],
      redes: {
        instagram: "https://www.instagram.com/hernandomin",
        youtube: "https://www.youtube.com/HernanDominguez",
        whatsapp: "https://wa.me/595972868210",
        tiktok: "https://www.tiktok.com/@hernandomin"
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
        "Líder de la empresa, enfocado en guiar equipos, optimizar procesos y generar crecimiento sostenible. Toma decisiones estratégicas que conectan visión, operación y resultados.",
      certificaciones: ["FL Studio Expert", "Native Instruments Certified", "Audio Engineering"],
      redes: {
        instagram: "https://instagram.com",
        whatsapp: "https://wa.me/595971999178",
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
        tiktok: "https://www.tiktok.com/@rodas_dj"
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
        "Responsable de la gestión de documentos y trámites legales de la empresa. Se encarga de cumplir con normativas, preparar documentación jurídica y asistir en procesos legales y contractuales.",
      certificaciones: ["Normativa y Procedimientos", "Archivo Legal", "Documentos Legales"],
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
      imagen: AvatarJanni,
      experiencia: "7 años",
      descripcion:
        "Community Manager con experiencia en la gestión de redes sociales, creación de contenido y construcción de comunidades digitales. Se enfoca en fortalecer la presencia online de marcas, interactuar con la audiencia y optimizar la comunicación en distintas plataformas.",
      certificaciones: ["Marketing Digital", "Community Engagement", "Analítica Digital"],
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
        "Apasionado por la música, la enseñanza y la programación. Disfruto creando experiencias de aprendizaje que inspiran y conectan con todos los niveles, desde principiantes hasta avanzados.",
      certificaciones: ["Monkey Academy 0-Jr", "Monkey Academy Jr-Mid", "Web designer"],
      redes: {
        whatsapp: "https://wa.me/595972128782",
        github: "https://github.com/Gauss-seidel"
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
        "DJ profesional y docente, especializado en música electrónica y urbana. Con experiencia en presentaciones locales, combina su pasión por la música con la enseñanza, ayudando a nuevos talentos a desarrollar técnica, mezcla y estilo propio.",
      certificaciones: ["SC Academy DJ", "Técnicas de Mezcla", "Curaduría de Sets"],
      redes: {
        whatsapp: "https://wa.me/595991320316",
      },
      calificacion: 5,
    },
  ];