//Componentes
import { Footer } from "../../components/Footer";
import Background from "../../components/AcademyComponents/BackGroundAcademy";
import StaffGrid from "../../components/AcademyComponents/StaffGrid";
//Estilos
import "../../styles/AcademyStyles/StaffCard.css";
import "../../styles/AcademyStyles/StaffGrid.css";
//Datos
import { instructores } from "../../assets/data/academyData/staffData";
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";

export default function Staff() {
  useScrollTop();
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

      <Footer />
    </>
  );
}