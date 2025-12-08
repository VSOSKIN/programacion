import ContactForm from "@/componentes/ContactForm"

export const metadata = {
    title: "KANGOOPET :: Promociones",
    discription: "Descubre nuestras promociones exclusivas en KANGOOPET y aprovecha ofertas especiales en productos para tus mascotas. ¡No te pierdas nuestras increíbles promociones!",
};

export default function Contacto() {
    return ( 
         <main class="holder contacto">
                <div className="holder contacto">
                    <h2>complete el siguiente formulario</h2>
                    <ContactForm/>
                </div>
                <div className="columna datos">
                    <h2>otras vias de comunicacion</h2>
                    <p>tambien puede contactarse con nosotros usando los siguientes medios.</p>
                    <ul>
                        <li>Telefono:</li>
                        <li>Email:</li>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instagram</li>

                    </ul>
                </div>

            </main>

    ) 
     } 