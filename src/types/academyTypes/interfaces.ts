export interface Instructor {
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
      tiktok?: string;
      github?: string;
    };
    calificacion: number;
  }

  export interface CourseCardProps {
    id: number;
    nombre: string;
    nivel: string;
    duracion: string;
    precio: string;
    imagen?: string;
    descripcion?: string;
    onViewDetails: (id: number) => void;
  }

  export interface Course {
    id: number;
    nombre: string;
    nivel: string;
    duracion: string;
    precio: string;
    imagen?: string;
    descripcion?: string;
  }

  export interface EventCardProps {
    id: number;
    titulo: string;
    fecha: string;
    imagen?: string;
    descripcion?: string;
    ubicacion?: string;
    onViewEvent: (id: number) => void;
  }

  export interface Event {
    id: number;
    titulo: string;
    fecha: string;
    imagen?: string;
    descripcion?: string;
    ubicacion?: string;
  }

  export interface HeroImageProps {
    title: string;
    subtitle: string;
    buttonText: string;
    linkTo?: string;
    onButtonClick?: () => void;
    backgroundImage?: string;
  }

  export interface TestimonialCardProps {
    nombre: string;
    texto: string;
    rol?: string;
    avatar?: string;
    calificacion?: number;
  }
  