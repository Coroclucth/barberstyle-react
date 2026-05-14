import { Link } from 'react-router-dom'
import fotoEquipo from '../../assets/img/nosotros/equipo.jpg'
import fotoMapa   from '../../assets/img/nosotros/map.png'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <div className="nos-page">

      {/* Encabezado */}
      <header className="nos-header">
        <div className="nos-header__inner">
          <span className="nos-badge">★★★★☆ 4.0 (1201 opiniones)</span>
          <h1 className="nos-titulo">Nuestra Familia</h1>
        </div>
      </header>

      {/* Grid */}
      <div className="nos-grid">

        <div className="nos-celda nos-celda--foto">
          <img src={fotoEquipo} alt="Equipo BarberStyle" className="nos-foto" />
        </div>

        <div className="nos-celda nos-card nos-card--mision">
          <h3 className="nos-card__titulo">Misión</h3>
          <p className="nos-card__texto">
            Brindar Servicios de barbería en alta calidad para nuestros clientes,
            en donde se sientan satisfechos al resultado final de cada una de las
            sesiones elegidas por el cliente.
          </p>
        </div>

        <div className="nos-celda nos-card nos-card--vision">
          <h3 className="nos-card__titulo">Visión</h3>
          <p className="nos-card__texto">
            Ser una de las mejores barberías de la ciudad y contar con buenos
            profesionales que te ofrezcan comodidad y tecnología.
          </p>
        </div>

        <div className="nos-celda nos-card nos-card--historia">
          <h3 className="nos-card__titulo">Nuestra Historia</h3>
          <p className="nos-card__texto">
            BarberStyle nace con el objetivo claro de ofrecer un servicio de
            barbería moderno y eficiente, adaptado al ritmo de vida actual.
            Nuestra misión es fusionar la maestría del corte clásico con la
            agilidad que hoy demanda el tiempo. Implementamos un sistema donde
            los clientes pueden reservar fácilmente desde cualquier dispositivo,
            garantizando puntualidad y una experiencia sin complicaciones. En
            BarberStyle, no solo vienes por un cambio de imagen, sino por una
            atención de alta calidad en un ambiente diseñado para tu comodidad
            y bienestar.
          </p>
        </div>

        <div className="nos-celda nos-card nos-card--ubicacion">
          <h3 className="nos-card__titulo">Ubicación</h3>
          <div className="nos-ubicacion">
            <img src={fotoMapa} alt="Mapa" className="nos-mapa" />
            <ul className="nos-contacto">
              <li>📞 Teléfono: 3189841566</li>
              <li>💬 WhatsApp: 316544864</li>
              <li>✉ BarberStyle@gmail.com</li>
              <li className="nos-social">
                <span className="nos-social__icon">f</span>
                <span className="nos-social__icon">ig</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Banner Promociones — estilos inline para garantizar que funcione */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '3rem auto 0',
        backgroundColor: '#002D72',
        borderRadius: '15px',
        padding: '2rem 2.5rem',
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#ffffff',
            fontSize: '1.3rem',
            margin: '0 0 0.4rem',
          }}>
            ¿Conoces nuestras promociones?
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            color: 'rgba(255,255,255,0.8)',
            fontSize: '0.9rem',
            margin: 0,
          }}>
            Combos especiales, descuentos y paquetes pensados para ti.
          </p>
        </div>
        <Link to="/promociones" style={{
          display: 'inline-block',
          backgroundColor: '#C8102E',
          color: '#ffffff',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.9rem',
          fontWeight: 700,
          textDecoration: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Ver Promociones
        </Link>
      </div>

    </div>
  )
}

export default Nosotros