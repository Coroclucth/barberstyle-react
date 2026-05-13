import imgCorteBarba from '../../assets/img/promociones/promo-corte-barba.jpg'
import imgEstudiante  from '../../assets/img/promociones/promo-estudiante.jpg'
import imgPremium     from '../../assets/img/promociones/promo-premium.jpg'
import './Promociones.css'

const PROMOS = [
  {
    id:      'corte-barba',
    dias:    'Solo lunes a miércoles',
    oferta:  (
      <>
        <p className="promo-precio-viejo">40.000</p>
        <p className="promo-precio-nuevo">Ahora &gt; <span>$30.000</span></p>
      </>
    ),
    titulo:  'Combo Corte + Barba',
    img:     imgCorteBarba,
    alt:     'Combo Corte y Barba',
  },
  {
    id:      'estudiante',
    dias:    'Solo lunes a miércoles',
    oferta:  (
      <>
        <p className="promo-descuento">Descuento 20%</p>
        <p className="promo-precio-final">$15.000</p>
      </>
    ),
    titulo:  'Combo Estudiante',
    img:     imgEstudiante,
    alt:     'Combo Estudiante',
  },
  {
    id:      'premium',
    dias:    'Solo lunes a sábados',
    oferta:  (
      <>
        <p className="promo-servicios">Corte + Barba + Tratamiento</p>
        <p className="promo-precio-final">$ 55.000</p>
      </>
    ),
    titulo:  'Paquete Premium',
    img:     imgPremium,
    alt:     'Paquete Premium',
  },
]

const Promociones = () => {
  return (
    <div className="prom-page">

      <header className="prom-header">
        <div className="prom-header__inner">
          <span className="prom-badge">★★★★☆ 4.0 (1201 opiniones)</span>
          <h1 className="prom-titulo">Promociones</h1>
        </div>
        <p className="prom-subtitulo">
          Aprovecha nuestros descuentos y combos especiales que ofrecen los servicios de BarberStyle
        </p>
        <hr className="prom-divider" />
      </header>

      <div className="prom-lista">
        {PROMOS.map((p) => (
          <article className="prom-card" key={p.id}>

            <div className="prom-card__oferta">
              <p className="prom-dias">{p.dias}</p>
              {p.oferta}
            </div>

            <div className="prom-card__accion">
              <h3 className="prom-card__titulo">{p.titulo}</h3>
              <div className="prom-card__botones">
                <button className="prom-btn">RESERVAR!!!</button>
                <span className="prom-icono" aria-hidden="true">✂</span>
              </div>
            </div>

            <div className="prom-card__imagen">
              <img src={p.img} alt={p.alt} />
            </div>

          </article>
        ))}
      </div>
    </div>
  )
}

export default Promociones