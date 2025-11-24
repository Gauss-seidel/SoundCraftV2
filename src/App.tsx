import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ScEvents from "./pages/scevents";
import ScAcademy from "./pages/scacademy";
import Staff from './pages/staff';

function App() {
  return (
    <div>
      {/* Menú que se ve en todas las páginas */}
      <nav>
        {/*<Link to="/">Inicio</Link> |  
        <Link to="/scevents"> SoundCraft Eventos</Link> | 
        <Link to="/scacademy" > SoundCraf Academy</Link>
        */}
      </nav>

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
