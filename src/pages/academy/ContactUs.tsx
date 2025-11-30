//Componentes
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer";
import Background from "../../components/AcademyComponents/BackGroundAcademy";
//Estilos
import '../../styles/AcademyStyles/ContactForm.css'
import '../../styles/colors.css'
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";

export default function ContactUS() {
  useScrollTop();
  const handleContactSubmit = async (formData: any) => {
    console.log("Formulario enviado:", formData);
    // Aquí iría tu lógica de envío (API, email, etc) que no hay, pa el show nomas
  };

  return (
    <>
      <Background />
      <section className="contacto-section">
        <div className="contacto-container">
          <h3>Contacta con Nosotros</h3>
          <div className="contacto-info">
              <div className="info-card">
                <h6>📧 Email</h6>
                <p>info@djacademy.com</p>
              </div>
              <div className="info-card">
                <h6>📱 Teléfono</h6>
                <p>+1 234 567 8900</p>
              </div>
              <div className="info-card">
                <h6>📍 Ubicación</h6>
                <a href="https://maps.app.goo.gl/yn3jEC7HNftHrUNVA">Wenceslao Lopez y, San Lorenzo 111421</a>
              </div>
            </div>
            <h3>Completa el formulario y nos comunicaremos</h3>
          <div className="contacto-content">
            <div className="contacto-form-wrapper">
              <ContactForm
                onSubmit={handleContactSubmit}
                successMessage="¡Mensaje enviado correctamente! Nos contactaremos pronto."
                errorMessage="Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."
              />
            </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
