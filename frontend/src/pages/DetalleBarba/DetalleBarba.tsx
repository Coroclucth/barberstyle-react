import { Link } from 'react-router-dom'
import GaleriaServicios from '../../components/GaleriaServicios/GaleriaServicios'
import ProfesionalesGrid from '../../components/ProfesionalesGrid/ProfesionalesGrid'
import SidebarReserva from '../../components/SidebarReserva/SidebarReserva'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import barba1 from '../../assets/img/servicios/barba/tipo-de-barba1.jpg'
import barba2 from '../../assets/img/servicios/barba/tipo-de-barba2.jpg'
import barba3 from '../../assets/img/servicios/barba/tipo-de-barba3.jpg'
import barba4 from '../../assets/img/servicios/barba/tipo-de-barba4.jpg'
import '../../styles/detalle-shared.css'
import './DetalleBarba.css'

// ── Tipos ──
interface Profesional {
  nombre: string
  img: string
  disponible: boolean
}

// ── Datos del servicio ──
const GALERIA: string[] = [barba1, barba2, barba3, barba4]

const PROFESIONALES: Profesional[] = [
  { nombre: 'Carlos Mendoza',   img: barbero1, disponible: true  },
  { nombre: 'Andrés Lopez',     img: barbero2, disponible: true  },
  { nombre: 'Samuel Rodriguez', img: barbero3, disponible: true  },
]

const DetalleBarba = () => {
  return (
    <div className="page-detalle">

      {/* Navegación de migas de pan */}
      <nav className="detalle__breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <Link to="/servicios">Servicios</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <span className="detalle__breadcrumb-actual">Arreglo de Barba</span>
      </nav>

      <div className="detalle__layout">

        {/* ── Columna principal ── */}
        <main className="detalle__main">

          {/* Encabezado del servicio */}
          <div className="detalle__encabezado">
            <div className="detalle__encabezado-info">
              <h1 className="detalle__titulo">Arreglo de Barba</h1>
              <div className="detalle__meta">
                <span className="detalle__duracion">30–35 min</span>
                <span className="detalle__estrellas">★★★★☆</span>
                <span className="detalle__rating">4.0</span>
                <span className="detalle__opiniones">(1201 opiniones)</span>
              </div>
              <p className="detalle__descripcion">
                Perfilado preciso, diseño personalizado y definición de barba con técnicas
                profesionales. Incluye lavado e hidratación con acabado impecable.
              </p>
            </div>
            <div className="detalle__precio-badge">desde $18.000</div>
          </div>

          <div className="detalle__divider" />

          {/* Galería de imágenes de referencia */}
          <GaleriaServicios imagenes={GALERIA} />

          <div className="detalle__divider" />

          {/* Selección de profesional */}
          <ProfesionalesGrid profesionales={PROFESIONALES} />

        </main>

        {/* ── Sidebar de reserva ── */}
        <aside className="detalle__sidebar">
          <SidebarReserva
            nombreServicio="Arreglo de Barba"
            precio="$18.000"
            profesionales={PROFESIONALES}
          />
        </aside>

      </div>
    </div>
  )
}

export default DetalleBarba
