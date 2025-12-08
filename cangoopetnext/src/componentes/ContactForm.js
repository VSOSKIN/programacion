

export default function ContactForm(){
    return (
         <form action="/contacto" method="post" className="formulario">
                        <p><label>Nombre</label>
                            <input type="text" name="Nombre"/>
                        </p>
                        <p><label for="email">email</label>
                            <input type="text" name="email"/>
                        </p>
                        <p><label for="telefono">telefono</label>
                            <input type="text" name="telefono"/>
                        </p>
                        <p><label for="mensaje">mensaje</label>
                            <textarea name="" id=""></textarea>
                        </p>
                        <p class="acciones"><input type="submit" value="enviar" /></p>

                    </form>
    )
}