// ══════════════════════════════════════
//  TIPOS
// ══════════════════════════════════════
interface Barbero {
  id: string
  nombre: string
  especialidad: string
  imagen: string
}

interface Props {
  barberos: Barbero[]
  barberoActivo: string
  onSeleccionar: (id: string) => void
}

// ══════════════════════════════════════
//  COMPONENTE
//  Se importa en Inicio.tsx y Reserva.tsx (Felipe)
// ══════════════════════════════════════
const SelectorBarbero = ({ barberos, barberoActivo, onSeleccionar }: Props) => {
  return (
    <div className="reserva__campo">
      <label className="reserva__label">Elige tu barbero</label>
      <div className="reserva__barberos">
        {barberos.map((barbero) => (
          <div
            key={barbero.id}
            className={`barbero-card ${barberoActivo === barbero.id ? 'barbero-card--active' : ''}`}
            onClick={() => onSeleccionar(barbero.id)}
          >
            <img
              src={barbero.imagen}
              alt={barbero.nombre}
              className="barbero-card__img"
            />
            <p className="barbero-card__nombre">{barbero.nombre}</p>
            <span className="barbero-card__tag">{barbero.especialidad}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectorBarbero