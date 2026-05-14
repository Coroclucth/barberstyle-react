import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg  from '../../assets/img/hero/herobeckham.jpg'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'

// ══════════════════════════════════════
//  COMPONENTES REUTILIZABLES
//  Felipe los importa en Reserva.tsx
// ══════════════════════════════════════
import SelectorServicio from '../../components/SelectorServicio/SelectorServicio'
import SelectorBarbero  from '../../components/SelectorBarbero/SelectorBarbero'
import SelectorDia      from '../../components/SelectorDia/SelectorDia'
import SelectorHorario  from '../../components/SelectorHorario/SelectorHorario'
import './Inicio.css'

// ══════════════════════════════════════
//  DATOS
// ══════════════════════════════════════
const DIAS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SAB']
const SLOTS = ['08:00','09:00','10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00']
const SLOTS_OCUPADOS = ['09:00', '12:00']

const SERVICIOS = [
  { id: 'corte', nombre: 'Corte', precio: '$25.000' },
  { id: 'barba', nombre: 'Barba', precio: '$18.000' },
  { id: 'tinte', nombre: 'Tinte', precio: '$45.000' },
]

const BARBEROS = [
  { id: 'juan',   nombre: 'Juan D.',   especialidad: 'Corte + Barba', imagen: barbero1 },
  { id: 'miguel', nombre: 'Miguel R.', especialidad: 'Tinte + Trat.', imagen: barbero2 },
  { id: 'andres', nombre: 'Andrés L.', especialidad: 'Especialista',  imagen: barbero3 },
]

const Inicio = () => {

  const [nombre, setNombre]           = useState('')
  const [telefono, setTelefono]       = useState('')
  const [servicioActivo, setServicio] = useState('corte')
  const [barberoActivo, setBarbero]   = useState('juan')
  const [diaActivo, setDia]           = useState(0)
  const [slotActivo, setSlot]         = useState('')

  // Genera los 7 días próximos dinámicamente
  const diasProximos = Array.from({ length: 7 }, (_, i) => {
    const fecha = new Date()
    fecha.setDate(fecha.getDate() + i)
    return {
      label: DIAS[fecha.getDay()],
      num:   fecha.getDate(),
    }
  })

  return (
    <div className="inicio">
      <div className="inicio__grid">

        {/* ── HERO (izquierda) ── */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="hero__overlay" />
          <div className="hero__content">
            <p className="hero__label">Bienvenido a BarberStyle</p>
            <h1 className="hero__title">
              Tu estilo,<br />nuestra precisión
            </h1>
            <p className="hero__desc">
              Los mejores barberos de la ciudad listos para atenderte.
              Agenda tu cita en segundos, sin registro.
            </p>
            <Link to="/servicios" className="btn btn--outline-white">
              Ver servicios →
            </Link>
          </div>
        </section>

        {/* ── FORMULARIO (derecha) ── */}
        <section className="reserva">
          <div className="reserva__card">

            <h2 className="reserva__titulo">Agenda tu cita</h2>
            <p className="reserva__sub">Sin registro, rápido y fácil</p>

            {/* Nombre y teléfono */}
            <div className="reserva__fila">
              <div className="reserva__campo">
                <label className="reserva__label">Tu nombre</label>
                <input
                  className="reserva__input"
                  type="text"
                  placeholder="Ej. Jaider Coronel"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="reserva__campo">
                <label className="reserva__label">Número de teléfono</label>
                <input
                  className="reserva__input"
                  type="tel"
                  placeholder="Ej. 3124564645"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>

            {/* Componente reutilizable — Felipe lo importa en Reserva.tsx */}
            <SelectorServicio
              servicios={SERVICIOS}
              servicioActivo={servicioActivo}
              onSeleccionar={setServicio}
            />

            {/* Componente reutilizable — Felipe lo importa en Reserva.tsx */}
            <SelectorBarbero
              barberos={BARBEROS}
              barberoActivo={barberoActivo}
              onSeleccionar={setBarbero}
            />

            {/* Componente reutilizable — Felipe lo importa en Reserva.tsx */}
            <SelectorDia
              dias={diasProximos}
              diaActivo={diaActivo}
              onSeleccionar={setDia}
            />

            {/* Componente reutilizable — Felipe lo importa en Reserva.tsx */}
            <SelectorHorario
              slots={SLOTS}
              slotsOcupados={SLOTS_OCUPADOS}
              slotActivo={slotActivo}
              onSeleccionar={setSlot}
            />

            <button
              className="btn btn--primary reserva__btn"
              disabled={!nombre || !telefono || !slotActivo}
            >
              CONFIRMAR CITA
            </button>

          </div>
        </section>

      </div>
    </div>
  )
}

export default Inicio