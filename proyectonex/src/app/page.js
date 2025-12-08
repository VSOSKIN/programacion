import { TituloPrincipal } from "@/componentes/Tituloprincipal"; 

const titulo2 = 'aprendemos next'

import ToggleButton from "@/componentes/Button";

export default function Home() {
  return (
    <div>
<h2>Tarea Next</h2>
{/*componente simple y que ademas reutilizar*/}
<TituloPrincipal titulo='Ejercicios next'/>
<TituloPrincipal titulo={titulo2}/>
<hr/>
<h1>Botón ON/OFF</h1>
<ToggleButton/>
</div>
  );
}











