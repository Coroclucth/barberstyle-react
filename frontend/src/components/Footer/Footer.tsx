import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">

        <div className="footer__col">
          <span className="footer__icon">📍</span>
          <span className="footer__text">Dirección: Calle 00 # 00-0, Pasto Nariño</span>
        </div>

        <div className="footer__col footer__col--center">
          <span className="footer__icon">📞</span>
          <span className="footer__text">#3181854599</span>
        </div>

        <div className="footer__col footer__col--right">
          <a href="#" className="footer__social" aria-label="Facebook">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 512 512">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/>
            </svg>
          </a>
          <a href="#" className="footer__social" aria-label="Instagram">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        © 2026 BarberStyle · Todos los derechos reservados
      </div>
    </footer>
  )
}

export default Footer