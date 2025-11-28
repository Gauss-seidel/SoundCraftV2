import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ScEvents from "./pages/sceventos/scevents.tsx";
import ScAcademy from "./pages/academy/scacademy.tsx";
import Staff from './pages/academy/staff.tsx';
import Courses from "./pages/academy/courses.tsx";
import SoundCraftNav from "./components/SoundCraftNav.tsx";
import ContactUS from "./pages/academy/ContactUs.tsx";


function App() {
  return (
    <div>
      <SoundCraftNav />
      {/* Rutas */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scevents" element={<ScEvents />} />
      <Route path="/scacademy" element={<ScAcademy />} />
      <Route path="/scacademy/staff" element={<Staff />} />
      <Route path="/scacademy/cursos" element={<Courses />} />
      <Route path="/scacademy/contacto" element={<ContactUS />} />
      <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </div>
  );  
}

export default App;
