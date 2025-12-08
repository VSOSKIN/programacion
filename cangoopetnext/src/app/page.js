import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className="columnas">
      <div className="bienvenidos">
        <h2>Bienvenidos a KangooPet</h2>
        <p>Tu tienda online de confianza para todo lo relacionado con tus mascotas. En KangooPet, nos apasiona el bienestar de los animales y nos dedicamos a ofrecerte una amplia gama de productos de alta calidad para perros y gatos.</p>
      </div>
      <div className="fotoportada">
        <Image src="/fotos/imagen1.webp" alt="Foto de mascotas" width={1100} height={300}/>
        <Image src="/fotos/imagen2.webp" alt="Foto de mascotas" width={1100} height={300}/>
        <Image src="/fotos/imagen3.webp" alt="Foto de mascotas" width={1100} height={300}/>
        <Image src="/fotos/imagen4.webp" alt="Foto de mascotas" width={1100} height={300}/>
      </div>
    </div>
  )
   }
 