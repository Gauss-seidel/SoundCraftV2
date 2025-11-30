import { Routes, Route } from "react-router-dom";
//Paginas
import Home from "./pages/home";
import ScEvents from "./pages/sceventos/scevents.tsx";
import ScAcademy from "./pages/academy/scacademy.tsx";
import Staff from './pages/academy/staff.tsx';
import Courses from "./pages/academy/courses.tsx";
import ContactUS from "./pages/academy/ContactUs.tsx";
import DJs from "./pages/sceventos/djs.tsx"
import Combos from "./pages/sceventos/combos.tsx"
//Componentes
import SoundCraftNav from "./components/SoundCraftNav.tsx";
//datos
import { djsData } from './assets/data/eventsData/DjsData.ts';
import { combosData } from './assets/data/eventsData/CombosData.ts';
import { courses } from './assets/data/academyData/courseData.ts';


function App() {
  return (
    <div>
      <SoundCraftNav />
      {/* Rutas */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scevents" element={<ScEvents />} />
      <Route path="/scevents/djs" element={<DJs djs={djsData} />} />
      <Route path="/scevents/combos" element={<Combos combos={combosData} />} />
      <Route path="/scacademy" element={<ScAcademy />} />
      <Route path="/scacademy/staff" element={<Staff />} />
      <Route path="/scacademy/cursos" element={<Courses courses={courses} />} />
      <Route path="/scacademy/contacto" element={<ContactUS />} />
      <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </div>
  );  
}

export default App;
