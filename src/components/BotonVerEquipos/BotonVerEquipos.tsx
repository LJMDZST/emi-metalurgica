import { Link } from "react-router-dom"


export const BotonVerEquipos = () => {
    const handleClick = ()=>{
        const root = document.getElementById('root');
        if(root){
            root.scrollIntoView();
        }
    }
  return (
    <Link 
        className=' btn rounded-0 m-2' 
        to={'equipos'} 
        style={{
            backgroundColor : 'rgb(57,80,158)', 
            color : 'rgb(255,255,255)' 
            }}
        onClick={handleClick}
    >  
     VEA TODOS NUESTROS EQUIPOS 
    </Link>
  )
}
