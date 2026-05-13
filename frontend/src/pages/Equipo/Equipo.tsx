import { Link } from 'react-router-dom'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import './Equipo.css'


// ══════════════════════════════════════
// TIPOS
// ══════════════════════════════════════

interface Barbero {
  id: string
  nombre: string
  especialidad: string
  imagen: string
  descripcion: string
}

// ══════════════════════════════════════
// DATOS
// ══════════════════════════════════════

const BARBEROS: Barbero[] = [
  {
    id: 'juan',
    nombre: 'Juan D',
    especialidad: 'Especialista en cortes modernos y fades.',
    imagen: barbero1,
    descripcion:
      'Más de 8 años creando estilos modernos y personalizados.'
  },

  {
    id: 'Miguel',
    nombre: 'Miguel R',
    especialidad: 'Especialista en peinados clásicos.',
    imagen: barbero2,
    descripcion:
      'Experto en cortes clásicos y técnicas tradicionales.'
  },

  {
    id: 'andres',
    nombre: 'Andres L',
    especialidad: 'Especialista en colorimetría.',
    imagen: barbero3,
    descripcion:
      'Especialista en tintes, decoloraciones y estilos urbanos.'
  }
]

// ══════════════════════════════════════
// COMPONENTE
// ══════════════════════════════════════

const Equipo = () => {

  return (
    <div className="equipo">

      {/* HEADER */}
      <section className="equipo__hero">

        <p className="equipo__breadcrumb">
          Inicio / Equipo
        </p>

        <h1 className="equipo__title">
          Nuestro equipo
        </h1>

        <p className="equipo__desc">
          Conoce a nuestros barberos profesionales y
          reserva tu cita.
        </p>

      </section>

      {/* GRID */}
      <section className="equipo__grid">

        {BARBEROS.map((barbero) => (

          <div
            key={barbero.id}
            className="equipo-card"
          >

            <img
              src={barbero.imagen}
              alt={barbero.nombre}
              className="equipo-card__img"
            />

            <h3 className="equipo-card__nombre">
              {barbero.nombre}
            </h3>

            <p className="equipo-card__esp">
              {barbero.especialidad}
            </p>

            <p className="equipo-card__texto">
              {barbero.descripcion}
            </p>

            <Link
              to="/reserva"
              className="equipo-card__btn"
            >
              RESERVAR AHORA
            </Link>

          </div>

        ))}

      </section>

    </div>
  )
}

export default Equipo