import { Link } from "react-router-dom";


export const NavbarFooter = () => {

    const handleClickLink = ()=>{
        const root = document.getElementById("root");
        root?.scrollIntoView();
    }
  return (
    <ul className="nav flex-column ">
        <li className="nav-item p-3 mb-3"> ENLACES </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <Link className='nav-link align-content-center' to={"/"} onClick={handleClickLink} >
              <span className="text-light"> <i className="bi bi-arrow-right-short"/>INICIO</span> 
          </Link>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
          <Link className='nav-link align-content-center' to={"/"} onClick={handleClickLink}  >
              <span className="text-light"> <i className="bi bi-arrow-right-short"/>INSTITUCIONAL</span> 
          </Link>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <Link className='nav-link align-content-center' to={"equipos"} onClick={handleClickLink} > 
          <span className="text-light"> <i className="bi bi-arrow-right-short"/>EQUIPOS </span> 
        </Link>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <Link  className="nav-link  " to={'contact'} onClick={handleClickLink} > 
          <span className=" text-light" >  <i className="bi bi-arrow-right-short"/>CONTACTO  </span> 
        </Link>
        </li>
    </ul>
  )
}
