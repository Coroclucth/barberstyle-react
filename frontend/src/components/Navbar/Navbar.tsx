import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/',          label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/equipo',    label: 'Equipo' },
    { path: '/nosotros',  label: 'Contacto' },
  ]

  return (
    <nav className="navbar">

      <div className="navbar__left">
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        <Link to="/" className="navbar__logo">
          <img src={logo} alt="BarberStyle" />
          <div className="navbar__texts">
            <span className="navbar__brand">BARBERSTYLE</span>
            <span className="navbar__tagline">Estilo & Precisión</span>
          </div>
        </Link>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/reserva" className="navbar__btn">
        Login
      </Link>

    </nav>
  )
}

export default Navbar