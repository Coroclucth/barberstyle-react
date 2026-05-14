import { useState } from 'react'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import SelectorServicio from '../../components/SelectorServicio/SelectorServicio'
import SelectorBarbero from '../../components/SelectorBarbero/SelectorBarbero'
import SelectorDia from '../../components/SelectorDia/SelectorDia'
import SelectorHorario from '../../components/SelectorHorario/SelectorHorario'
import './Reserva.css'

// ══════════════════════════════════════
// DATOS
// ══════════════════════════════════════

const SERVICIOS = [
  { id: 'corte',       nombre: 'Corte de cabello', precio: '$25.000' },
  { id: 'barba',       nombre: 'Barba',             precio: '$15.000' },
  { id: 'tinte',       nombre: 'Tinte',             precio: '$45.000' },
  { id: 'tratamiento', nombre: 'Tratamiento',       precio: '$35.000' },
]

const BARBEROS = [
  {
    id: 'juan',
    nombre: 'Juan D',
    especialidad: 'Cortes modernos',
    imagen: barbero1,
  },
  {
    id: 'miguel',
    nombre: 'Miguel R',
    especialidad: 'Peinados clásicos',
    imagen: barbero2,
  },
  {
    id: 'andres',
    nombre: 'Andrés L',
    especialidad: 'Colorimetría',
    imagen: barbero3,
  },
]

const DIAS_LABELS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SAB']

const SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '01:00', '02:00', '03:00', '04:00', '05:00',
]

const SLOTS_OCUPADOS = ['09:00', '12:00']

// ══════════════════════════════════════
// COMPONENTE
// ══════════════════════════════════════

const Reserva = () => {

  const [servicioActivo, setServicio]  = useState('corte')
  const [barberoActivo,  setBarbero]   = useState('juan')
  const [diaActivo,      setDia]       = useState(0)
  const [slotActivo,     setSlot]      = useState('')

  // ── Calendario dinámico (próximos 7 días) ──────────────
  const diasProximos = Array.from({ length: 7 }, (_, i) => {
    const fecha = new Date()
    fecha.setDate(fecha.getDate() + i)
    return {
      label: DIAS_LABELS[fecha.getDay()],
      num:   fecha.getDate(),
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

        <div className="reserva-left card">

          {/* SELECTOR SERVICIO — componente reutilizable de Jaider */}
          <SelectorServicio
            servicios={SERVICIOS}
            servicioActivo={servicioActivo}
            onSeleccionar={setServicio}
          />

          {/* SELECTOR BARBERO — componente reutilizable de Jaider */}
          <SelectorBarbero
            barberos={BARBEROS}
            barberoActivo={barberoActivo}
            onSeleccionar={setBarbero}
          />

          {/* SELECTOR DÍA — componente reutilizable de Jaider */}
          <SelectorDia
            dias={diasProximos}
            diaActivo={diaActivo}
            onSeleccionar={setDia}
          />

          {/* SELECTOR HORARIO — componente reutilizable de Jaider */}
          <SelectorHorario
            slots={SLOTS}
            slotsOcupados={SLOTS_OCUPADOS}
            slotActivo={slotActivo}
            onSeleccionar={setSlot}
          />

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