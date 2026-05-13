import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/img/hero/herobeckham.jpg'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import './Inicio.css'

// ══════════════════════════════════════
//  TIPOS
// ══════════════════════════════════════

// REUTILIZABLE: Este tipo puede importarse en Reserva.tsx y Equipo.tsx
interface Barbero {
  id: string
  nombre: string
  especialidad: string
  imagen: string
}

// REUTILIZABLE: Este tipo puede importarse en Servicios.tsx y páginas de detalle
interface Servicio {
  id: string
  nombre: string
  precio: string
}

// ══════════════════════════════════════
//  DATOS
// ══════════════════════════════════════

// REUTILIZABLE: Estos datos pueden moverse a src/data/barberos.ts
//    y ser importados por Equipo.tsx, Reserva.tsx y esta página
const BARBEROS: Barbero[] = [
  { id: 'juan',   nombre: 'Juan D.',   especialidad: 'Corte + Barba', imagen: barbero1 },
  { id: 'miguel', nombre: 'Miguel R.', especialidad: 'Tinte + Trat.', imagen: barbero2 },
  { id: 'andres', nombre: 'Andrés L.', especialidad: 'Especialista',  imagen: barbero3 },
]

// REUTILIZABLE: Estos datos pueden moverse a src/data/servicios.ts
//    y ser importados por Servicios.tsx y las páginas de detalle
const SERVICIOS_RAPIDOS: Servicio[] = [
  { id: 'corte', nombre: 'Corte', precio: '$25.000' },
  { id: 'barba', nombre: 'Barba', precio: '$18.000' },
  { id: 'tinte', nombre: 'Tinte', precio: '$45.000' },
]

const DIAS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SAB']
const SLOTS = ['08:00','09:00','10:00','11:00','12:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00']
const SLOTS_OCUPADOS = ['09:00', '12:00']

// ══════════════════════════════════════
//  COMPONENTE PRINCIPAL
// ══════════════════════════════════════
const Inicio = () => {

  const [nombre, setNombre]         = useState('')
  const [telefono, setTelefono]     = useState('')
  const [servicioActivo, setServicio] = useState('corte')
  const [barberoActivo, setBarbero]  = useState('juan')
  const [diaActivo, setDia]         = useState(0)
  const [slotActivo, setSlot]       = useState('')

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

      {/* ══════════════════════════════
          LAYOUT PRINCIPAL 50/50
      ══════════════════════════════ */}
      <div className="inicio__grid">

        {/* ── HERO (izquierda) ── */}
        {/* REUTILIZABLE: Este bloque hero puede extraerse como
            <HeroSection /> y reutilizarse con distintas imágenes */}
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

        {/* ── FORMULARIO DE RESERVA (derecha) ── */}
        {/* REUTILIZABLE: Todo este formulario puede extraerse como
            <FormularioReserva /> e importarse en Reserva.tsx de Felipe */}
        <section className="reserva">
          <div className="reserva__card">

            <h2 className="reserva__titulo">Agenda tu cita</h2>
            <p className="reserva__sub">Sin registro, rápido y fácil</p>

            {/* Nombre y teléfono */}
            {/* REUTILIZABLE: Estos inputs pueden extraerse como
                <CampoTexto /> y usarse en cualquier formulario */}
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

            {/* Selector de servicio */}
            {/* REUTILIZABLE: Puede extraerse como <SelectorServicio />
                e importarse en Reserva.tsx */}
            <div className="reserva__campo">
              <label className="reserva__label">Elige tu servicio</label>
              <div className="reserva__servicios">
                {SERVICIOS_RAPIDOS.map((svc) => (
                  <div
                    key={svc.id}
                    className={`svc-pill ${servicioActivo === svc.id ? 'svc-pill--active' : ''}`}
                    onClick={() => setServicio(svc.id)}
                  >
                    <span className="svc-pill__nombre">{svc.nombre}</span>
                    <span className="svc-pill__precio">{svc.precio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de barbero */}
            {/* REUTILIZABLE: Puede extraerse como <SelectorBarbero />
                e importarse en Reserva.tsx y Equipo.tsx */}
            <div className="reserva__campo">
              <label className="reserva__label">Elige tu barbero</label>
              <div className="reserva__barberos">
                {BARBEROS.map((barbero) => (
                  <div
                    key={barbero.id}
                    className={`barbero-card ${barberoActivo === barbero.id ? 'barbero-card--active' : ''}`}
                    onClick={() => setBarbero(barbero.id)}
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

            {/* Selector de día */}
            {/* REUTILIZABLE: Puede extraerse como <SelectorDia />
                e importarse en Reserva.tsx */}
            <div className="reserva__campo">
              <label className="reserva__label">Selecciona el día</label>
              <div className="reserva__dias">
                {diasProximos.map((dia, i) => (
                  <div
                    key={i}
                    className={`dia-pill ${diaActivo === i ? 'dia-pill--active' : ''}`}
                    onClick={() => setDia(i)}
                  >
                    <span className="dia-pill__label">{dia.label}</span>
                    <span className="dia-pill__num">{dia.num}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de horario */}
            {/* REUTILIZABLE: Puede extraerse como <SelectorHorario />
                e importarse en Reserva.tsx */}
            <div className="reserva__campo">
              <label className="reserva__label">Horarios disponibles</label>
              <div className="reserva__slots">
                {SLOTS.map((slot) => {
                  const ocupado = SLOTS_OCUPADOS.includes(slot)
                  return (
                    <div
                      key={slot}
                      className={`slot ${ocupado ? 'slot--ocupado' : ''} ${slotActivo === slot && !ocupado ? 'slot--activo' : ''}`}
                      onClick={() => !ocupado && setSlot(slot)}
                    >
                      {slot}
                    </div>
                  )
                })}
              </div>
            </div>

            
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