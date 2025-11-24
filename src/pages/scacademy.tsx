import { Outlet, Link } from 'react-router-dom';
import '../styles/colors.css'
import '../styles/App.css'
import '../styles/scacademy.css'

export default function ScAcademy() {
  return (
    <div className='scacademybody'>
      <h1>SC Academy</h1>
      <p>Página principal de SC Academy</p>

      <Link to="staff">Ver Staff</Link>
      <Outlet />
    </div>
  );
}
