//Componentes
import StaffCard from "./StaffCard";
//Interfaces
import type { Instructor } from "../../types/academyTypes/interfaces";


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