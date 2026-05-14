// ══════════════════════════════════════
//  TIPOS
// ══════════════════════════════════════
interface Props {
  slots: string[]
  slotsOcupados: string[]
  slotActivo: string
  onSeleccionar: (slot: string) => void
}

// ══════════════════════════════════════
//  COMPONENTE
//  💡 Se importa en Inicio.tsx y Reserva.tsx (Felipe)
// ══════════════════════════════════════
const SelectorHorario = ({ slots, slotsOcupados, slotActivo, onSeleccionar }: Props) => {
  return (
    <div className="reserva__campo">
      <label className="reserva__label">Horarios disponibles</label>
      <div className="reserva__slots">
        {slots.map((slot) => {
          const ocupado = slotsOcupados.includes(slot)
          return (
            <div
              key={slot}
              className={`slot 
                ${ocupado ? 'slot--ocupado' : ''} 
                ${slotActivo === slot && !ocupado ? 'slot--activo' : ''}`}
              onClick={() => !ocupado && onSeleccionar(slot)}
            >
              {slot}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectorHorario