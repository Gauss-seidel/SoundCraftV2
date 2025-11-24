import { Outlet, Link } from 'react-router-dom';

export default function Staff() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Staff de SC Academy</h2>
      <p>Aquí puedes ver información sobre el staff de la academia.</p>

      <Link to="teacher">Ver Teacher</Link>
      <Outlet />
    </div>
  );
}
