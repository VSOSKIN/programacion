import PromocionesItem from "@/componentes/PromocionesItem"

export const metadata = {
    title: "KANGOOPET :: Promociones",
    discription: "Descubre nuestras promociones exclusivas en KANGOOPET y aprovecha ofertas especiales en productos para tus mascotas. ¡No te pierdas nuestras increíbles promociones!",
}

export default async function Promociones() {
    return (
        <section className="holder">
            <h2>Promociones</h2>
            <div className="subtitle">
            {/*vamos a traer el componente promocionesitem*/}
            <PromocionesItem title="este es el titulo de la promocion" subtitle="este es el subtitulo "
                imagen="fotos/promo1.webp" body="este es el body" /></div>
                 <div className="subtitle">
            <PromocionesItem title="este es el titulo de la promocion" subtitle="este es el subtitulo "
                imagen="fotos/promo2.webp" body="este es el body" /></div>
 <div className="subtitle">
            <PromocionesItem title="este es el titulo de la promocion" subtitle="este es el subtitulo "
                imagen="fotos/promo3.webp" body="este es el body" /></div>
 <div className="subtitle">
            <PromocionesItem title="este es el titulo de la promocion" subtitle="este es el subtitulo "
                imagen="fotos/promo4.webp" body="este es el body" /></div>
 <div className="subtitle">
            <PromocionesItem title="este es el titulo de la promocion" subtitle="este es el subtitulo "
                imagen="fotos/promo5.webp" body="este es el body" /></div>
 <div className="subtitle">
            <PromocionesItem title="este es el titulo de la promocion" subtitle="este es el subtitulo "
                imagen="fotos/promo6.webp" body="este es el body" /></div>


        </section>

    )
}