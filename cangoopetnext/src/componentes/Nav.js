import Link from "next/link";
export default function Nav() {
  return ( 

     <nav>
            <ul className="holder">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/perros">Perros</Link></li>
                <li><Link href="/gatos">Gatos</Link></li>
                <li><Link href="/promociones">promociones</Link></li>
                <li><Link href="/contacto">contacto</Link></li>
            </ul>
        </nav>



  ) }