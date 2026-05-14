import { Link } from 'react-router-dom'

// ══════════════════════════════════════
//  IMÁGENES
// ══════════════════════════════════════
import corte1 from '../../assets/img/servicios/corte/corte1.jpeg'
import corte2 from '../../assets/img/servicios/corte/corte2.jpeg'
import corte3 from '../../assets/img/servicios/corte/corte3.jpeg'
import corte4 from '../../assets/img/servicios/corte/corte4.jpeg'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'

// ══════════════════════════════════════
//  💡 COMPONENTES REUTILIZABLES
//  Estos mismos se importan en DetalleTinte,
//  DetalleBarba y DetalleTratamientos
// ══════════════════════════════════════
import GaleriaServicios from '../../components/GaleriaServicios/GaleriaServicios'
import ProfesionalesGrid from '../../components/ProfesionalesGrid/ProfesionalesGrid'
import SidebarReserva from '../../components/SidebarReserva/SidebarReserva'
import '../../styles/detalle-shared.css'

// ══════════════════════════════════════
//  DATOS — lo único que cambia entre páginas
// ══════════════════════════════════════
const GALERIA = [corte1, corte2, corte3, corte4]

const PROFESIONALES = [
  { nombre: 'Carlos Mendoza',   img: barbero1, disponible: true  },
  { nombre: 'Andrés Lopez',     img: barbero2, disponible: true  },
  { nombre: 'Samuel Rodriguez', img: barbero3, disponible: false },
]

// ══════════════════════════════════════
//  PÁGINA
// ══════════════════════════════════════
const DetalleCorte = () => {
  return (
    <div className="page-detalle">

      {/* Breadcrumb */}
      <nav className="detalle__breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <Link to="/servicios">Servicios</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <span className="detalle__breadcrumb-actual">Corte de Cabello</span>
      </nav>

      <div className="detalle__layout">

        {/* ── Columna principal ── */}
        <main className="detalle__main">

          <div className="detalle__encabezado">
            <div className="detalle__encabezado-info">
              <h1 className="detalle__titulo">Corte de Cabello</h1>
              <div className="detalle__meta">
                <span className="detalle__duracion">45–60 min</span>
                <span className="detalle__estrellas">★★★★★</span>
                <span className="detalle__rating">4.8</span>
                <span className="detalle__opiniones">(2340 opiniones)</span>
              </div>
              <p className="detalle__descripcion">
                Corte clásico o moderno adaptado a tu estilo y tipo de cabello.
                Incluye lavado, corte preciso con tijera o máquina y secado profesional.
              </p>
            </div>
            <div className="detalle__precio-badge">desde $25.000</div>
          </div>

          <div className="detalle__divider" />

          {/* 💡 Componente reutilizable — solo cambian las imágenes */}
          <GaleriaServicios imagenes={GALERIA} />

          <div className="detalle__divider" />

          {/* 💡 Componente reutilizable — solo cambian los profesionales */}
          <ProfesionalesGrid profesionales={PROFESIONALES} />

        </main>

        {/* ── Sidebar ── */}
        {/* 💡 Componente reutilizable — solo cambian nombre y precio */}
        <aside className="detalle__sidebar">
          <SidebarReserva
            nombreServicio="Corte de Cabello"
            precio="$25.000"
            profesionales={PROFESIONALES}
          />
        </aside>

      </div>
    </div>
  )
}

export default DetalleCorte