import { useState } from 'react'
import { Link } from 'react-router-dom'
import barba1 from '../../assets/img/servicios/barba/tipo-de-barba1.jpg'
import barba2 from '../../assets/img/servicios/barba/tipo-de-barba2.jpg'
import barba3 from '../../assets/img/servicios/barba/tipo-de-barba3.jpg'
import barba4 from '../../assets/img/servicios/barba/tipo-de-barba4.jpg'
import barbero1 from '../../assets/img/equipo/barbero1.png'
import barbero2 from '../../assets/img/equipo/barbero2.png'
import barbero3 from '../../assets/img/equipo/barbero3.png'
import '../../styles/detalle-shared.css'
import './DetalleBarba.css'

const HORARIOS = ['10:00', '12:00', '16:00', '18:00']

const PROFESIONALES = [
  { nombre: 'Carlos Mendoza',   img: barbero1, disponible: true },
  { nombre: 'Andrés Lopez',     img: barbero2, disponible: true },
  { nombre: 'Samuel Rodriguez', img: barbero3, disponible: true },
]

const GALERIA = [barba1, barba2, barba3, barba4]

const DetalleBarba = () => {
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
        <span className="detalle__breadcrumb-actual">Arreglo de Barba</span>
      </nav>

      <div className="detalle__layout">

        {/* ── Columna principal ── */}
        <main className="detalle__main">

          <div className="detalle__encabezado">
            <div className="detalle__encabezado-info">
              <h1 className="detalle__titulo">Arreglo de Barba</h1>
              <div className="detalle__meta">
                <span className="detalle__duracion">30–35 min</span>
                <span className="detalle__estrellas">★★★★☆</span>
                <span className="detalle__rating">4.0</span>
                <span className="detalle__opiniones">(1201 opiniones)</span>
              </div>
              <p className="detalle__descripcion">
                Breve descripción del servicio ofrecido aquí con una cantidad de texto moderada.
                Perfilado preciso, diseño personalizado y definición de barba con técnicas
                profesionales. Incluye lavado e hidratación con acabado impecable.
              </p>
            </div>
            <div className="detalle__precio-badge">desde $18.000</div>
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
                  className={`detalle__prof-card${profesional === p.nombre ? ' detalle__prof-card--activo' : ''}`}
                  onClick={() => setProfesional(p.nombre)}
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
              <label className="reserva__label">Profesional</label>
              <select className="reserva__select" value={profesional} onChange={(e) => setProfesional(e.target.value)}>
                {PROFESIONALES.map((p) => (
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
                <span>Arreglo de barba</span>
                <span>$18.000</span>
              </div>
            </div>

            <div className="reserva__total">
              <span>Total</span>
              <span className="reserva__total-valor">$18.000</span>
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

export default DetalleBarba
