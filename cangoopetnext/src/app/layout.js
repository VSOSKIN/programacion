//import "./globals.css";
import Nav from "@/componentes/Nav";

export const metadata = {
  title: "KangooPet",
  description: "derechos reservados KangooPet 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <header>
          <div className="holder">
            <div className="logo">
              <img src="/fotos/logo.png" alt="Logo KangooPet" width={100}/>
            </div>
            <div className="textoheader">
              <h1>KANGOOPET</h1>
              <h2>Tu tienda de mascotas online</h2>
            </div>
          </div>
         </header>

          <Nav/>

        {children}
               <footer>
        <p>diseñado por Victoria Soskin - &copy;2025</p>
    </footer>
      </body>
    </html>
  );
}
