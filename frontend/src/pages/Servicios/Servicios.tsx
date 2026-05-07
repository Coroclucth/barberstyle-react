import { Link } from 'react-router-dom'
import corteImg from '../../assets/img/servicios/imgsServicios/jude.png'
import tinteImg from '../../assets/img/servicios/imgsServicios/cr7.png'
import barbaImg from '../../assets/img/servicios/imgsServicios/benzemaaa.png'
import tratamientoImg from '../../assets/img/servicios/imgsServicios/keratine.png'
import './Servicios.css'

// ══════════════════════════════════════
// TIPOS
// ══════════════════════════════════════
interface Servicio {
  id: string
  nombre: string
  precio: string
  imagen: string
  ruta: string
}

// ══════════════════════════════════════
// DATOS
// ══════════════════════════════════════
const SERVICIOS: Servicio[] = [
  {
    id: 'corte',
    nombre: 'Cortes',
    precio: '$25.000',
    imagen: corteImg,
    ruta: '/detalle-corte',
  },
  {
    id: 'tinte',
    nombre: 'Tintes',
    precio: '$30.000',
    imagen: tinteImg,
    ruta: '/detalle-tinte',
  },
  {
    id: 'barba',
    nombre: 'Barba',
    precio: '$15.000',
    imagen: barbaImg,
    ruta: '/detalle-barba',
  },
  {
    id: 'tratamientos',
    nombre: 'Tratamientos capilares',
    precio: '$55.000',
    imagen: tratamientoImg,
    ruta: '/detalle-tratamientos',
  },
]

// ══════════════════════════════════════
// COMPONENTE
// ══════════════════════════════════════
const Servicios = () => {
  return (
    <div className="servicios-page">
      <section className="section servicios">
        <div className="servicios__header">
          <p className="servicios__label">BarberStyle Premium</p>
          <h1 className="section__title">Nuestros servicios</h1>
          <p className="section__subtitle">
            Descubre opciones diseñadas para resaltar tu estilo con precisión,
            calidad y atención profesional.
          </p>
        </div>

        <div className="servicios__grid">
          {SERVICIOS.map((servicio) => (
            <article key={servicio.id} className="card servicio-card">
              <div className="servicio-card__img-wrapper">
                <img
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  className="servicio-card__img"
                />
              </div>

              <div className="servicio-card__body">
                <h2 className="servicio-card__title">{servicio.nombre}</h2>

                <div className="servicio-card__precio-box">
                  <span className="servicio-card__desde">DESDE</span>
                  <span className="servicio-card__precio">
                    {servicio.precio}
                  </span>
                  <span className="servicio-card__moneda">COP</span>
                </div>

                <Link
                  to={servicio.ruta}
                  className="btn btn--primary servicio-card__btn"
                >
                  VER CATÁLOGO
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Servicios