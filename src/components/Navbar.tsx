import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-dark bg-dark px-3">
    <span className="navbar-brand">AppClients</span>
    <div className="d-flex gap-3">
      <NavLink className="nav-link text-white" to="/clientes" end>
        Ver clientes
      </NavLink>
      <NavLink className="nav-link text-white" to="/clientes/nuevo">
        Añadir clientes
      </NavLink>
      <NavLink className="nav-link text-white" to="/about">
        About
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
