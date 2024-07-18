import { Link } from "react-router-dom";


export const NavbarFooter = () => {

    const handleClickInstitucional = ()=>{
        const about = document.getElementById("aboutSection");
        if(about) {
          about.scrollIntoView();
        } else {
          console.log('about no encontrado')
        }
    }
  return (
    <ul className="nav flex-column ">
        <li className="nav-item p-3 mb-3"> ENLACES </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <Link className='nav-link align-content-center' to={"/"}  >
              <span className="text-light"> <i className="bi bi-arrow-right-short"/>INICIO</span> 
          </Link>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
          <Link className='nav-link align-content-center' to={"/"} onClick={handleClickInstitucional}  >
              <span className="text-light"> <i className="bi bi-arrow-right-short"/>INSTITUCIONAL</span> 
          </Link>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <Link className='nav-link align-content-center' to={"equipos"} > 
          <span className="text-light"> <i className="bi bi-arrow-right-short"/>EQUIPOS </span> 
        </Link>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <Link  className="nav-link  " to={'contact'} > 
          <span className=" text-light" >  <i className="bi bi-arrow-right-short"/>CONTACTO  </span> 
        </Link>
        </li>
    </ul>
  )
}
