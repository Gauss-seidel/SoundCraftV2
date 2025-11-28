import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/stylesComponents/Footer.css';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface QuickLink {
  label: string;
  to: string;       //  ← antes era onClick
}

interface FooterProps {
  companyName?: string;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLink[];
  quickLinks?: QuickLink[];
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'SC Academy',
  email = 'info@djacademy.com',
  phone = '+1 234 567 8900',
  address = 'Wenceslao Lopez y, San Lorenzo 111421',
  socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/p/Soundcraft-61552205183757/' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/soundcraft_py/' },
    { name: 'Youtube', icon: <Youtube size={20} />, url: '#' },
  ],
  quickLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Cursos', to: '/scacademy/cursos' },
    { label: 'Contacto', to: '/scacademy/contacto' },
    { label: 'Staff', to: '/scacademy/staff' },
  ],
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección Superior */}
        <div className="footer-top">

          {/* Información */}
          <div className="footer-section">
            <h4 className="footer-title">{companyName}</h4>
            <div className="footer-contact">
              <div className="footer-item">
                <Mail size={18} />
                <span>{email}</span>
              </div>
              <div className="footer-item">
                <Phone size={18} />
                <span>{phone}</span>
              </div>
              <div className="footer-item">
                <MapPin size={18} />
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="footer-section">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.to} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="footer-section">
            <h4 className="footer-title">Síguenos</h4>
            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Sección Inferior */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {companyName}. Todos los derechos reservados.
          </p>
          <p className="footer-credit">
            Diseñado con <span className="heart">♫</span> para músicos
          </p>
        </div>
      </div>
    </footer>
  );
};
