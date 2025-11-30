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