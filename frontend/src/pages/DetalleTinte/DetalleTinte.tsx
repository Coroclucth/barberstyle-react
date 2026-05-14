import { Link } from 'react-router-dom'
import tinte1 from '../../assets/img/servicios/tinte/tinte1.jpg'
import tinte2 from '../../assets/img/servicios/tinte/tinte2.jpg'
import tinte3 from '../../assets/img/servicios/tinte/tinte3.jpg'
import tinte4 from '../../assets/img/servicios/tinte/tinte4.jpg'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'

// MISMOS componentes que DetalleCorte — no se repite nada
import GaleriaServicios from '../../components/GaleriaServicios/GaleriaServicios'
import ProfesionalesGrid from '../../components/ProfesionalesGrid/ProfesionalesGrid'
import SidebarReserva from '../../components/SidebarReserva/SidebarReserva'
import '../../styles/detalle-shared.css'

// ══════════════════════════════════════
//  SOLO ESTO CAMBIA respecto a DetalleCorte
// ══════════════════════════════════════
const GALERIA = [tinte1, tinte2, tinte3, tinte4]

const PROFESIONALES = [
  { nombre: 'Carlos Mendoza',   img: barbero1, disponible: true  },
  { nombre: 'Andrés Lopez',     img: barbero2, disponible: false },
  { nombre: 'Samuel Rodriguez', img: barbero3, disponible: true  },
]

const DetalleTinte = () => {
  return (
    <div className="page-detalle">

      <nav className="detalle__breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <Link to="/servicios">Servicios</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <span className="detalle__breadcrumb-actual">Tinte de Cabello</span>
      </nav>

      <div className="detalle__layout">

        <main className="detalle__main">

          <div className="detalle__encabezado">
            <div className="detalle__encabezado-info">
              <h1 className="detalle__titulo">Tinte de Cabello</h1>
              <div className="detalle__meta">
                <span className="detalle__duracion">90–120 min</span>
                <span className="detalle__estrellas">★★★★☆</span>
                <span className="detalle__rating">4.5</span>
                <span className="detalle__opiniones">(987 opiniones)</span>
              </div>
              <p className="detalle__descripcion">
                Coloración completa o mechas con productos de alta calidad.
                Asesoría de color personalizada incluida para lograr
                el tono perfecto según tu estilo.
              </p>
            </div>
            <div className="detalle__precio-badge">desde $45.000</div>
          </div>

          <div className="detalle__divider" />
          <GaleriaServicios imagenes={GALERIA} />
          <div className="detalle__divider" />
          <ProfesionalesGrid profesionales={PROFESIONALES} />

        </main>

        <aside className="detalle__sidebar">
          <SidebarReserva
            nombreServicio="Tinte de Cabello"
            precio="$45.000"
            profesionales={PROFESIONALES}
          />
        </aside>

      </div>
    </div>
  )
}

export default DetalleTinte