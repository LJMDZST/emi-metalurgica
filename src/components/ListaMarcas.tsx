import { useState } from "react"
import { Marca } from "./Marca"

export const ListaMarcas = () => {
  const [listaUrlLogo, setlistaUrlLogo] = useState([
    "https://metalurgicaegv.com.ar/wp-content/uploads/2020/12/logoko.png",
    "https://metalurgicaegv.com.ar/wp-content/uploads/2020/12/logodog.png",
    "https://metalurgicaegv.com.ar/wp-content/uploads/2020/12/logofalabella.png"
  ])
  
    return (
    <section className="en-blanco">
    <h2>Nuestros clientes ! ! </h2>
    <ul>
        {
            listaUrlLogo.map( (urlLogo,index) => <Marca key={`logo-marca-${index}`} urlLogo={urlLogo} />)
        }

    </ul>
    
    </section>
  )
}
