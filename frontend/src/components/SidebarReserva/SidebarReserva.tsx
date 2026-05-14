import { useState } from 'react'
import { Link } from 'react-router-dom'

// ══════════════════════════════════════
//  TIPOS
//  💡 Estos props son los únicos datos
//  que cambian entre páginas de detalle
// ══════════════════════════════════════
interface Props {
  nombreServicio: string
  precio: string
  profesionales: {
    nombre: string
    disponible: boolean
  }[]
}

const HORARIOS = ['10:00', '12:00', '16:00', '18:00']

// ══════════════════════════════════════
//  COMPONENTE
//  💡 Se importa igual en DetalleCorte,
//  DetalleTinte, DetalleBarba y DetalleTratamientos
// ══════════════════════════════════════
const SidebarReserva = ({ nombreServicio, precio, profesionales }: Props) => {

  const [hora, setHora]               = useState(HORARIOS[0])
  const [profesional, setProfesional] = useState(profesionales[0]?.nombre || '')
  const [fecha, setFecha]             = useState('2026-04-12')

  return (
    <div className="reserva">
      <h3 className="reserva__titulo">Reservar este servicio</h3>

      <div className="reserva__campo">
        <label className="reserva__label">Profesional</label>
        <select
          className="reserva__select"
          value={profesional}
          onChange={(e) => setProfesional(e.target.value)}
        >
          {profesionales.filter(p => p.disponible).map((p) => (
            <option key={p.nombre}>{p.nombre}</option>
          ))}
        </select>
      </div>

      <div className="reserva__campo">
        <label className="reserva__label">Fecha</label>
        <input
          type="date"
          className="reserva__input"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="reserva__campo">
        <label className="reserva__label">Hora disponible</label>
        <div className="reserva__horarios">
          {HORARIOS.map((h) => (
            <button
              key={h}
              className={`reserva__hora ${hora === h ? 'reserva__hora--activa' : ''}`}
              onClick={() => setHora(h)}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      <div className="reserva__divider" />

      <div className="reserva__resumen">
        <div className="reserva__linea">
          <span>{nombreServicio}</span>
          <span>{precio}</span>
        </div>
      </div>

      <div className="reserva__total">
        <span>Total</span>
        <span className="reserva__total-valor">{precio}</span>
      </div>

      <button className="btn btn--primary reserva__btn-full">
        Confirmar Reserva
      </button>

      <Link to="/reserva" className="btn btn--outline reserva__btn-full">
        Ver disponibilidad completa
      </Link>

      <p className="reserva__nota">
        Al completar la reserva recibirás un correo de confirmación.
        Para cambios o cancelaciones contáctanos directamente.
      </p>
    </div>
  )
}

export default SidebarReserva