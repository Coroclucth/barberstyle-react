import { useState } from 'react'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import './Reserva.css'

// ══════════════════════════════════════
// TIPOS
// ══════════════════════════════════════

interface Barbero {
  id: string
  nombre: string
  especialidad: string
  imagen: string
}

// ══════════════════════════════════════
// DATOS
// ══════════════════════════════════════

const BARBEROS: Barbero[] = [
  {
    id: 'juan',
    nombre: 'Juan Perez',
    especialidad: 'Cortes modernos',
    imagen: barbero1,
  },

  {
    id: 'carlos',
    nombre: 'Carlos Garcia',
    especialidad: 'Peinados clásicos',
    imagen: barbero2,
  },

  {
    id: 'daniel',
    nombre: 'Daniel Torres',
    especialidad: 'Colorimetría',
    imagen: barbero3,
  }
]

const DIAS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SAB']

const SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
]

const SLOTS_OCUPADOS = ['09:00', '12:00']

// ══════════════════════════════════════
// COMPONENTE
// ══════════════════════════════════════

const Reserva = () => {

  const [servicio, setServicio] = useState('corte')
  const [barberoActivo, setBarbero] = useState('juan')
  const [diaActivo, setDia] = useState(0)
  const [slotActivo, setSlot] = useState('')

  // ══════════════════════════════════════
  // CALENDARIO DINÁMICO
  // ══════════════════════════════════════

  const diasProximos = Array.from({ length: 7 }, (_, i) => {

    const fecha = new Date()

    fecha.setDate(fecha.getDate() + i)

    return {
      label: DIAS[fecha.getDay()],
      num: fecha.getDate(),
    }
  })

  return (

    <div className="reserva-page">

      {/* HERO */}

      <section className="reserva-hero">

        <p className="reserva-hero__breadcrumb">
          Inicio / Reserva
        </p>

        <h1 className="reserva-hero__title">
          Reserva tu cita
        </h1>

        <p className="reserva-hero__desc">
          Agenda fácilmente tu servicio con nuestros
          mejores barberos profesionales.
        </p>

      </section>

      {/* CONTENIDO */}

      <section className="reserva-container">

        {/* IZQUIERDA */}

        <div className="reserva-left card">

          {/* SERVICIO */}

          <div className="reserva-field">

            <label className="reserva-label">
              Selecciona el servicio
            </label>

            <select
              className="reserva-select"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
            >

              <option value="corte">
                Corte de cabello
              </option>

              <option value="barba">
                Barba
              </option>

              <option value="tinte">
                Tinte
              </option>

            </select>

          </div>

          {/* BARBEROS */}

          <div className="reserva-field">

            <label className="reserva-label">
              Elige tu barbero
            </label>

            <div className="barberos-grid">

              {BARBEROS.map((barbero) => (

                <div
                  key={barbero.id}
                  className={`barbero-card ${
                    barberoActivo === barbero.id
                      ? 'barbero-card--active'
                      : ''
                  }`}
                  onClick={() => setBarbero(barbero.id)}
                >

                  <img
                    src={barbero.imagen}
                    alt={barbero.nombre}
                    className="barbero-card__img"
                  />

                  <p className="barbero-card__nombre">
                    {barbero.nombre}
                  </p>

                  <span className="barbero-card__tag">
                    {barbero.especialidad}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* CALENDARIO */}

          <div className="reserva-field">

            <label className="reserva-label">
              Selecciona el día
            </label>

            <div className="reserva__dias">

              {diasProximos.map((dia, i) => (

                <div
                  key={i}
                  className={`dia-pill ${
                    diaActivo === i
                      ? 'dia-pill--active'
                      : ''
                  }`}
                  onClick={() => setDia(i)}
                >

                  <span className="dia-pill__label">
                    {dia.label}
                  </span>

                  <span className="dia-pill__num">
                    {dia.num}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* HORARIOS */}

          <div className="reserva-field">

            <label className="reserva-label">
              Horarios disponibles
            </label>

            <div className="reserva__slots">

              {SLOTS.map((slot) => {

                const ocupado =
                  SLOTS_OCUPADOS.includes(slot)

                return (

                  <div
                    key={slot}
                    className={`slot ${
                      ocupado
                        ? 'slot--ocupado'
                        : ''
                    } ${
                      slotActivo === slot && !ocupado
                        ? 'slot--activo'
                        : ''
                    }`}
                    onClick={() =>
                      !ocupado && setSlot(slot)
                    }
                  >

                    {slot}

                  </div>

                )

              })}

            </div>

          </div>

          {/* BOTÓN */}

          <button
            className="btn btn--primary reserva-btn"
            disabled={!slotActivo}
          >

            CONFIRMAR RESERVA

          </button>

        </div>

      </section>

    </div>

  )
}

export default Reserva