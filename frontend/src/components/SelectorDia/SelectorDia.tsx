// ══════════════════════════════════════
//  TIPOS
// ══════════════════════════════════════
interface Dia {
  label: string
  num: number
}

interface Props {
  dias: Dia[]
  diaActivo: number
  onSeleccionar: (index: number) => void
}

// ══════════════════════════════════════
//  COMPONENTE
//  💡 Se importa en Inicio.tsx y Reserva.tsx (Felipe)
// ══════════════════════════════════════
const SelectorDia = ({ dias, diaActivo, onSeleccionar }: Props) => {
  return (
    <div className="reserva__campo">
      <label className="reserva__label">Selecciona el día</label>
      <div className="reserva__dias">
        {dias.map((dia, i) => (
          <div
            key={i}
            className={`dia-pill ${diaActivo === i ? 'dia-pill--active' : ''}`}
            onClick={() => onSeleccionar(i)}
          >
            <span className="dia-pill__label">{dia.label}</span>
            <span className="dia-pill__num">{dia.num}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectorDia