import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ScEvents from "./pages/scevents";
import ScAcademy from "./pages/scacademy";
import Staff from './pages/staff';
import SoundCraftNav from "./components/SoundCraftNav.tsx";

function App() {
  return (
    <div>
      <SoundCraftNav />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scevents" element={<ScEvents />} />
        <Route path="/scacademy" element={<ScAcademy />}>
        <Route path="staff" element={<Staff />} />
        </Route>
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </div>
  );  
}

export default App;
