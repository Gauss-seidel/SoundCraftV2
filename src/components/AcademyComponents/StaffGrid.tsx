import StaffCard from "./StaffCard";

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

interface StaffGridProps {
  instructores: Instructor[];
}

export default function StaffGrid({ instructores }: StaffGridProps) {
  return (
    <div className="staff-grid">
      {instructores.map((instructor) => (
        <StaffCard key={instructor.id} instructor={instructor} />
      ))}
    </div>
  );
}