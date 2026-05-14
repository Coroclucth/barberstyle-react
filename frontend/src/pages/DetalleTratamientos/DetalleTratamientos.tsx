import { useState } from 'react'
import { Link } from 'react-router-dom'
import GaleriaServicios from '../../components/GaleriaServicios/GaleriaServicios'
import ProfesionalesGrid from '../../components/ProfesionalesGrid/ProfesionalesGrid'
import SidebarReserva from '../../components/SidebarReserva/SidebarReserva'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import trat1 from '../../assets/img/servicios/tratamientos/tratamiento-capilar1.jpg'
import trat2 from '../../assets/img/servicios/tratamientos/tratamiento-capilar2.jpg'
import trat3 from '../../assets/img/servicios/tratamientos/tratamiento-capilar3.jpg'
import trat4 from '../../assets/img/servicios/tratamientos/tratamiento-capilar4.jpg'
import '../../styles/detalle-shared.css'
import './DetalleTratamientos.css'

// ── Tipos ──
interface Profesional {
  nombre: string
  img: string
  disponible: boolean
}

interface Tratamiento {
  nombre: string
  precio: number
}

// ── Datos del servicio ──
const GALERIA: string[] = [trat1, trat2, trat3, trat4]

const PROFESIONALES: Profesional[] = [
  { nombre: 'Carlos Mendoza',   img: barbero1, disponible: true  },
  { nombre: 'Andrés Lopez',     img: barbero2, disponible: true  },
  { nombre: 'Samuel Rodriguez', img: barbero3, disponible: false },
]

const TRATAMIENTOS: Tratamiento[] = [
  { nombre: 'Keratina',    precio: 55000 },
  { nombre: 'Hidratación', precio: 45000 },
  { nombre: 'Nutrición',   precio: 40000 },
  { nombre: 'Pintura',     precio: 50000 },
  { nombre: 'Implante',    precio: 60000 },
]

/** Formatea un número como precio en pesos colombianos */
const formatearPrecio = (n: number): string => `$${n.toLocaleString('es-CO')}`

const DetalleTratamientos = () => {
  // Tratamiento activo — controla el precio que muestra el sidebar
  const [tratamiento, setTratamiento] = useState<Tratamiento>(TRATAMIENTOS[0])

  return (
    <div className="page-detalle">

      {/* Navegación de migas de pan */}
      <nav className="detalle__breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <Link to="/servicios">Servicios</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <span className="detalle__breadcrumb-actual">Tratamientos Capilares</span>
      </nav>

      <div className="detalle__layout">

        {/* ── Columna principal ── */}
        <main className="detalle__main">

          {/* Encabezado del servicio */}
          <div className="detalle__encabezado">
            <div className="detalle__encabezado-info">
              <h1 className="detalle__titulo">Tratamientos Capilares</h1>
              <div className="detalle__meta">
                <span className="detalle__duracion">30–35 min</span>
                <span className="detalle__estrellas">★★★★☆</span>
                <span className="detalle__rating">4.0</span>
                <span className="detalle__opiniones">(1201 opiniones)</span>
              </div>
              <p className="detalle__descripcion">
                Recupera la salud y el brillo de tu cabello con nuestros tratamientos
                capilares profesionales, adaptados a cada tipo de cabello.
              </p>

              {/* Tabs para seleccionar el tipo de tratamiento */}
              <p className="detalle__tabs-label">Tipo de tratamiento</p>
              <div className="detalle__tabs">
                {TRATAMIENTOS.map((t) => (
                  <button
                    key={t.nombre}
                    className={`detalle__tab${tratamiento.nombre === t.nombre ? ' detalle__tab--activo' : ''}`}
                    onClick={() => setTratamiento(t)}
                  >
                    {t.nombre}
                  </button>
                ))}
              </div>
            </div>
            <div className="detalle__precio-badge">
              {formatearPrecio(TRATAMIENTOS[0].precio)} –{' '}
              {formatearPrecio(TRATAMIENTOS[TRATAMIENTOS.length - 1].precio)}
            </div>
          </div>

          <div className="detalle__divider" />

          {/* Galería de imágenes de referencia */}
          <GaleriaServicios imagenes={GALERIA} />

          <div className="detalle__divider" />

          {/* Selección de profesional */}
          <ProfesionalesGrid profesionales={PROFESIONALES} />

        </main>

        {/* ── Sidebar: precio cambia según tratamiento seleccionado ── */}
        <aside className="detalle__sidebar">
          <SidebarReserva
            nombreServicio={`Tratamiento de ${tratamiento.nombre}`}
            precio={formatearPrecio(tratamiento.precio)}
            profesionales={PROFESIONALES}
          />
        </aside>

      </div>
    </div>
  )
}

export default DetalleTratamientos
