// ══════════════════════════════════════
//  TIPOS
//  Solo recibe un arreglo de imágenes
//  que cambia según el servicio
// ══════════════════════════════════════
interface Props {
  imagenes: string[]
}

// ══════════════════════════════════════
//  COMPONENTE
//  Se importa igual en DetalleCorte,
//  DetalleTinte, DetalleBarba y DetalleTratamientos
// ══════════════════════════════════════
const GaleriaServicios = ({ imagenes }: Props) => {
  return (
    <section className="detalle__seccion">
      <h2 className="detalle__seccion-titulo">Galería de referencia</h2>
      <div className="detalle__galeria">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Referencia ${i + 1}`}
            className="detalle__galeria-img"
          />
        ))}
      </div>
    </section>
  )
}

export default GaleriaServicios