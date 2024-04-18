import { useState } from "react"
import { Marca } from "./Marca"

export const ListaMarcas = () => {
  const [listaUrlLogo, setlistaUrlLogo] = useState([
    "https://metalurgicaegv.com.ar/wp-content/uploads/2020/12/logoko.png",
    "https://metalurgicaegv.com.ar/wp-content/uploads/2020/12/logodog.png",
    "https://metalurgicaegv.com.ar/wp-content/uploads/2020/12/logofalabella.png"
  ])
  
    return (
    <section className="bg-light" >
    <p className="text-center"><b>Nuestros clientes confían en nosotros</b> </p>
    <ul className="row" style={{listStyle:"none"}}>
        {
            listaUrlLogo.map( (urlLogo,index) => 
              <li className="col">
                <Marca key={`logo-marca-${index}`} urlLogo={urlLogo} />
              </li>)
        }

    </ul>
    
    </section>
  )
}
