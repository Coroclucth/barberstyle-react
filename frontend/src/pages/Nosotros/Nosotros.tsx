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

      {/* Grid principal */}
      <div className="nos-grid">

        {/* Foto equipo */}
        <div className="nos-celda nos-celda--foto">
          <img src={fotoEquipo} alt="Equipo BarberStyle" className="nos-foto" />
        </div>

        {/* Misión */}
        <div className="nos-celda nos-card">
          <h3 className="nos-card__titulo">Misión</h3>
          <p className="nos-card__texto">
            Brindar Servicios de barbería en alta calidad para nuestros clientes,
            en donde se sientan satisfechos al resultado final de cada una de las
            sesiones elegidas por el cliente.
          </p>
        </div>

        {/* Visión */}
        <div className="nos-celda nos-card">
          <h3 className="nos-card__titulo">Visión</h3>
          <p className="nos-card__texto">
            Ser una de las mejores barberías de la ciudad y contar con buenos
            profesionales que te ofrezcan comodidad y tecnología.
          </p>
        </div>

        {/* Historia */}
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

        {/* Ubicación */}
        <div className="nos-celda nos-card nos-card--ubicacion">
          <h3 className="nos-card__titulo">Ubicación</h3>
          <div className="nos-ubicacion">
            <img src={fotoMapa} alt="Mapa BarberStyle" className="nos-mapa" />
            <ul className="nos-contacto">
              <li>📞 Teléfono: 3189841566</li>
              <li>💬 WhatsApp: 316544864</li>
              <li>✉ BarberStyle@gmail.com</li>
              <li className="nos-social">
                <span className="nos-social__icon">f</span>
                <span className="nos-social__icon">📷</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* ======================================
          BANNER PROMOCIONES — botón rojo abajo
          ====================================== */}
      <div className="nos-promo-banner">
        <div className="nos-promo-banner__texto">
          <h2 className="nos-promo-banner__titulo">¿Conoces nuestras promociones?</h2>
          <p className="nos-promo-banner__desc">
            Combos especiales, descuentos y paquetes pensados para ti.
          </p>
        </div>
        <Link to="/promociones" className="nos-promo-banner__btn">
          Ver Promociones
        </Link>
      </div>

    </div>
  )
}

export default Nosotros