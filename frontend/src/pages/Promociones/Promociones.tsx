import imgCorteBarba from '../../assets/img/promociones/promo-corte-barba.jpg';
import imgEstudiante from '../../assets/img/promociones/promo-estudiante.jpg';
import imgPremium from '../../assets/img/promociones/promo-premium.jpg';
import './Promociones.css';

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
        {/* Tarjeta 1 */}
        <article className="prom-card">
          <div className="prom-card__oferta">
            <p className="prom-dias">Solo lunes a miércoles</p>
            <p className="prom-precio-viejo">40.000</p>
            <p className="prom-precio-nuevo">Ahora &gt; <span>$30.000</span></p>
          </div>
          <div className="prom-card__accion">
            <h3 className="prom-card__titulo">Combo Corte + Barba</h3>
            <div className="prom-card__botones">
              <button className="prom-btn">RESERVAR!!!</button>
              <span className="prom-icono">✂</span>
            </div>
          </div>
          <div className="prom-card__imagen">
            <img src={imgCorteBarba} alt="Combo Corte y Barba" />
          </div>
        </article>

        {/* Tarjeta 2 */}
        <article className="prom-card">
          <div className="prom-card__oferta">
            <p className="prom-dias">Solo lunes a miércoles</p>
            <p className="prom-descuento">Descuento 20%</p>
            <p className="prom-precio-final">$15.000</p>
          </div>
          <div className="prom-card__accion">
            <h3 className="prom-card__titulo">Combo Estudiante</h3>
            <div className="prom-card__botones">
              <button className="prom-btn">RESERVAR!!!</button>
              <span className="prom-icono">✂</span>
            </div>
          </div>
          <div className="prom-card__imagen">
            <img src={imgEstudiante} alt="Combo Estudiante" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Promociones;