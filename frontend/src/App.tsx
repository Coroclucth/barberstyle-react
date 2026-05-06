import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Inicio from './pages/Inicio/Inicio'
import Servicios from './pages/Servicios/Servicios'
import DetalleCorte from './pages/DetalleCorte/DetalleCorte'
import DetalleTinte from './pages/DetalleTinte/DetalleTinte'
import DetalleBarba from './pages/DetalleBarba/DetalleBarba'
import DetalleTratamientos from './pages/DetalleTratamientos/DetalleTratamientos'
import Equipo from './pages/Equipo/Equipo'
import Reserva from './pages/Reserva/Reserva'
import Promociones from './pages/Promociones/Promociones'
import Nosotros from './pages/Nosotros/Nosotros'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                    element={<Inicio />} />
          <Route path="/servicios"           element={<Servicios />} />
          <Route path="/detalle-corte"       element={<DetalleCorte />} />
          <Route path="/detalle-tinte"       element={<DetalleTinte />} />
          <Route path="/detalle-barba"       element={<DetalleBarba />} />
          <Route path="/detalle-tratamientos"element={<DetalleTratamientos />} />
          <Route path="/equipo"              element={<Equipo />} />
          <Route path="/reserva"             element={<Reserva />} />
          <Route path="/promociones"         element={<Promociones />} />
          <Route path="/nosotros"            element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App