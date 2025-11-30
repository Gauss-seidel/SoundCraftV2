import { Link } from 'react-router-dom';
//Logos
import academialogo from '../assets/scacademylogo.png';
import eventlogo from '../assets/sceventlogo.png';
//Estilos
import '../styles/colors.css';
import '../styles/fonts.css';
import "../styles/App.css";
//Componentes
import BackgroundHome from '../components/BackGroundHome';

export default function Home() {
  return (
    <>
    <BackgroundHome />
    <div className="index">
      <div className='titleContainer'>
        <h1 className='titleType'>SoundCraft Py</h1>
      </div>
      <p className="phrase">
      Tu música, nuestro mundo.
      </p>
      <p className="phrase">
        ---Página en desarrollo---
      </p>
      <div className='containerindex'>
        <Link to="/scevents">
            <img src={eventlogo} className="logoSoundCraftEvent" alt="SC Event" />
        </Link>
        <Link to="/scacademy">
            <img src={academialogo} className="logoSoundCraftAcademy" alt="SC Academy" />
        </Link>
        </div>
    </div>
    </>
  );
  
}
