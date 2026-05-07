import { useState } from 'react'
import { Link } from 'react-router-dom'
import trat1 from '../../assets/img/servicios/tratamientos/tratamiento-capilar1.jpg'
import trat2 from '../../assets/img/servicios/tratamientos/tratamiento-capilar2.jpg'
import trat3 from '../../assets/img/servicios/tratamientos/tratamiento-capilar3.jpg'
import trat4 from '../../assets/img/servicios/tratamientos/tratamiento-capilar4.jpg'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import '../../styles/detalle-shared.css'
import './DetalleTratamientos.css'

const TRATAMIENTOS = [
  { nombre: 'Keratina',    precio: 55000 },
  { nombre: 'Hidratación', precio: 45000 },
  { nombre: 'Nutrición',   precio: 40000 },
  { nombre: 'Pintura',     precio: 50000 },
  { nombre: 'Implante',    precio: 60000 },
]

const HORARIOS = ['10:00', '12:00', '16:00', '18:00']

const PROFESIONALES = [
  { nombre: 'Carlos Mendoza',   img: barbero1, disponible: true  },
  { nombre: 'Andrés Lopez',     img: barbero2, disponible: true  },
  { nombre: 'Samuel Rodriguez', img: barbero3, disponible: false },
]

const GALERIA = [trat1, trat2, trat3, trat4]

const fmt = (n: number) => `$${n.toLocaleString('es-CO')}`

const DetalleTratamientos = () => {
  const [tratamiento, setTratamiento] = useState(TRATAMIENTOS[0])
  const [hora, setHora]               = useState('10:00')
  const [profesional, setProfesional] = useState('Carlos Mendoza')
  const [fecha, setFecha]             = useState('2026-04-12')

  return (
    <div className="page-detalle">

      <nav className="detalle__breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <Link to="/servicios">Servicios</Link>
        <span className="detalle__breadcrumb-sep">›</span>
        <span className="detalle__breadcrumb-actual">Tratamientos Capilares</span>
      </nav>

      <div className="detalle__layout">

        {/* ── Columna principal ── */}
        <main className="detalle__main">

          <div className="detalle__encabezado">
            <div className="detalle__encabezado-info">
              <h1 className="detalle__titulo">Tratamientos Capilares</h1>
              <div className="detalle__meta">
                <span className="detalle__duracion">30–35 min</span>
                <span className="detalle__estrellas">★★★★☆</span>
                <span className="detalle__rating">4.0</span>
                <span className="detalle__opiniones">(1201 opiniones)</span>
              </div>
              <p className="detalle__descripcion">Breve descripción del servicio</p>

              <div className="detalle__tabs-label">Tipo de tratamiento</div>
              <div className="detalle__tabs">
                {TRATAMIENTOS.map((t) => (
                  <button
                    key={t.nombre}
                    className={`detalle__tab${tratamiento.nombre === t.nombre ? ' detalle__tab--activo' : ''}`}
                    onClick={() => setTratamiento(t)}
                  >
                    {t.nombre}
                  </button>
                ))}
              </div>
            </div>
            <div className="detalle__precio-badge">
              {fmt(TRATAMIENTOS[0].precio)} – {fmt(TRATAMIENTOS[TRATAMIENTOS.length - 1].precio)}
            </div>
          </div>

          <div className="detalle__divider" />

          <section className="detalle__seccion">
            <h2 className="detalle__seccion-titulo">Galería de referencia</h2>
            <div className="detalle__galeria">
              {GALERIA.map((img, i) => (
                <img key={i} src={img} alt={`Referencia ${i + 1}`} className="detalle__galeria-img" />
              ))}
            </div>
          </section>

          <div className="detalle__divider" />

          <section className="detalle__seccion">
            <h2 className="detalle__seccion-titulo">Profesionales disponibles</h2>
            <div className="detalle__profesionales">
              {PROFESIONALES.map((p) => (
                <div
                  key={p.nombre}
                  className={`detalle__prof-card${profesional === p.nombre ? ' detalle__prof-card--activo' : ''}${!p.disponible ? ' detalle__prof-card--inactivo' : ''}`}
                  onClick={() => p.disponible && setProfesional(p.nombre)}
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

        </main>

        {/* ── Sidebar ── */}
        <aside className="detalle__sidebar">
          <div className="reserva">
            <h3 className="reserva__titulo">Reservar este servicio</h3>

            <div className="reserva__campo">
              <label className="reserva__label">Tipo de tratamiento</label>
              <select
                className="reserva__select"
                value={tratamiento.nombre}
                onChange={(e) => setTratamiento(TRATAMIENTOS.find(t => t.nombre === e.target.value)!)}
              >
                {TRATAMIENTOS.map((t) => (
                  <option key={t.nombre} value={t.nombre}>{t.nombre} – {fmt(t.precio)}</option>
                ))}
              </select>
            </div>

            <div className="reserva__campo">
              <label className="reserva__label">Profesional</label>
              <select className="reserva__select" value={profesional} onChange={(e) => setProfesional(e.target.value)}>
                {PROFESIONALES.filter(p => p.disponible).map((p) => (
                  <option key={p.nombre}>{p.nombre}</option>
                ))}
              </select>
            </div>

            <div className="reserva__campo">
              <label className="reserva__label">Fecha</label>
              <input type="date" className="reserva__input" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>

            <div className="reserva__campo">
              <label className="reserva__label">Hora Disponible</label>
              <div className="reserva__horarios">
                {HORARIOS.map((h) => (
                  <button
                    key={h}
                    className={`reserva__hora${hora === h ? ' reserva__hora--activa' : ''}`}
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
                <span>Tratamiento de {tratamiento.nombre}</span>
                <span>{fmt(tratamiento.precio)}</span>
              </div>
            </div>

            <div className="reserva__total">
              <span>Total</span>
              <span className="reserva__total-valor">{fmt(tratamiento.precio)}</span>
            </div>

            <button className="reserva__btn-confirmar">Confirmar Reserva</button>
            <Link to="/reserva" className="reserva__btn-ver">Ver disponibilidad completa</Link>

            <p className="reserva__nota">
              Nota: Al completar la reserva recibirás un correo de confirmación con los detalles,
              para cambios o cancelaciones contáctanos aquí.
            </p>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default DetalleTratamientos
