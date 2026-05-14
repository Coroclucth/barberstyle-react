import { useState } from 'react'

// ══════════════════════════════════════
//  TIPOS
//  💡 Solo cambian los datos de los
//  profesionales según el servicio
// ══════════════════════════════════════
interface Profesional {
  nombre: string
  img: string
  disponible: boolean
}

interface Props {
  profesionales: Profesional[]
}

// ══════════════════════════════════════
//  COMPONENTE
//  💡 Se importa igual en DetalleCorte,
//  DetalleTinte, DetalleBarba y DetalleTratamientos
// ══════════════════════════════════════
const ProfesionalesGrid = ({ profesionales }: Props) => {

  const [activo, setActivo] = useState(profesionales[0]?.nombre || '')

  return (
    <section className="detalle__seccion">
      <h2 className="detalle__seccion-titulo">Profesionales disponibles</h2>
      <div className="detalle__profesionales">
        {profesionales.map((p) => (
          <div
            key={p.nombre}
            className={`card detalle__prof-card 
              ${activo === p.nombre ? 'detalle__prof-card--activo' : ''} 
              ${!p.disponible ? 'detalle__prof-card--inactivo' : ''}`}
            onClick={() => p.disponible && setActivo(p.nombre)}
          >
            <img src={p.img} alt={p.nombre} className="detalle__prof-img" />
            <span className="detalle__prof-nombre">{p.nombre}</span>
            <span className={`detalle__prof-badge detalle__prof-badge--${p.disponible ? 'disponible' : 'ocupado'}`}>
              {p.disponible ? 'Disponible' : 'Ocupado'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfesionalesGrid