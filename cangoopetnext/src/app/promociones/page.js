import PromocionesItem from "@/componentes/Promocionesitem";

export const metadata = {
    title: "KANGOOPET :: Promociones",
    discription: "Descubre nuestras promociones exclusivas en KANGOOPET y aprovecha ofertas especiales en productos para tus mascotas. ¡No te pierdas nuestras increíbles promociones!",
};

export default async function Promociones() {
    return (
        <section className="holder">
            <h2>Promociones</h2>
            {/*vamos a traer el componente promocionesitem*/}
            <PromocionesItem title="este es el titulo de la promocion" subtitle= "este es el subtitulo "
            imagen="fotos/promo1.webp" body="este es el body" />
             <PromocionesItem title="este es el titulo de la promocion" subtitle= "este es el subtitulo "
            imagen="fotos/promo2.webp" body="este es el body" />

 <PromocionesItem title="este es el titulo de la promocion" subtitle= "este es el subtitulo "
            imagen="fotos/promo3.webp" body="este es el body" />

 <PromocionesItem title="este es el titulo de la promocion" subtitle= "este es el subtitulo "
            imagen="fotos/promo4.webp" body="este es el body" />

 <PromocionesItem title="este es el titulo de la promocion" subtitle= "este es el subtitulo "
            imagen="fotos/promo5.webp" body="este es el body" />

 <PromocionesItem title="este es el titulo de la promocion" subtitle= "este es el subtitulo "
            imagen="fotos/promo6.webp" body="este es el body" />


 </section>

    ) }