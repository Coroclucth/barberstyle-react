// ══════════════════════════════════════
//  TIPOS
// ══════════════════════════════════════
interface Servicio {
  id: string
  nombre: string
  precio: string
}

interface Props {
  servicios: Servicio[]
  servicioActivo: string
  onSeleccionar: (id: string) => void
}

// ══════════════════════════════════════
//  COMPONENTE
//  Se importa en Inicio.tsx y Reserva.tsx (Felipe)
// ══════════════════════════════════════
const SelectorServicio = ({ servicios, servicioActivo, onSeleccionar }: Props) => {
  return (
    <div className="reserva__campo">
      <label className="reserva__label">Elige tu servicio</label>
      <div className="reserva__servicios">
        {servicios.map((svc) => (
          <div
            key={svc.id}
            className={`svc-pill ${servicioActivo === svc.id ? 'svc-pill--active' : ''}`}
            onClick={() => onSeleccionar(svc.id)}
          >
            <span className="svc-pill__nombre">{svc.nombre}</span>
            <span className="svc-pill__precio">{svc.precio}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectorServicio