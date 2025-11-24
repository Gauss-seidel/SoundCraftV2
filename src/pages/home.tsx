import academialogo from '../assets/scacademylogo.png';
import eventlogo from '../assets/sceventlogo.png';
import '../styles/colors.css';
import '../styles/fonts.css';
import "../styles/App.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="index">
      <div className='titleContainer'>
        <h1 className='titleType'>SoundCraft V2</h1>
      </div>
      <p className="phrase">
        Donde otros escuchan ruido, nosotros enseñamos a crear experiencia.
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
  );
}
