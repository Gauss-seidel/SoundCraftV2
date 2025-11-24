import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import '../styles/colors.css';

export default function SoundCraftNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <button 
        className={`menu-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        {isOpen && (
          <div className="sound-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        )}
      </button>

      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Inicio
        </Link>
        <Link to="/scevents" className="nav-link" onClick={toggleMenu}>
          SC Events
        </Link>
        <Link to="/scacademy" className="nav-link" onClick={toggleMenu}>
          SC Academy
        </Link>
      </nav>
    </div>
  );
}