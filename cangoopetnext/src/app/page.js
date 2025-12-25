import "@/styles/home.css";
import "@/styles/perros.css";
import "@/styles/gatos.css";
import "@/styles/promociones.css";
import "@/styles/contacto.css";


import Image from "next/image";
import styles from "./page.module.css";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

export default function Home() {
  return (
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/fotos/imagen1.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/fotos/imagen2.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/fotos/imagen3.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
};


    //<div className="columnas">
      //<div className="bienvenidos">
      //</div>
      //<div className="fotoportada">
        //<Image src="/fotos/imagen1.webp" alt="Foto de mascotas" width={1100} height={300} />
        //<Image src="/fotos/imagen2.webp" alt="Foto de mascotas" width={1100} height={300} />
        //<Image src="/fotos/imagen3.webp" alt="Foto de mascotas" width={1100} height={300} />
        //<Image src="/fotos/imagen4.webp" alt="Foto de mascotas" width={1100} height={300} />
      //</div>
    //</div>




