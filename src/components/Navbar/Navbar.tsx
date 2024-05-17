
import { Link } from "react-router-dom"

import './Navbar.css'

export const Navbar = () => {

  const handleMouseOver = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    e.preventDefault();

    e.currentTarget.className = `${e.currentTarget.className} animate__animated animate__pulse`;

  }
  const handleMouseLeave = (e : React.MouseEvent<HTMLDivElement, MouseEvent>,width : number) =>{
    e.preventDefault();
    e.currentTarget.className = `col-md-${width} text-center`;

  }

  

  const handleInstitucional = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    e.preventDefault();
    const about = document.getElementById("aboutSection");
    about?.scrollIntoView();
  }

  const handleClickInstagram = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    e.preventDefault();
    window.open('https://www.instagram.com/emi_metalurgica/');
  }

  return (
    <nav className="row align-items-center justify-content-start gx-5 " style={{height:"100%"}}>
       <div className=" col-md-2 text-center "
        onMouseOver={handleMouseOver}
        onMouseLeave={e => handleMouseLeave(e,2)}
      >
        <Link className='item-menu' to={"about"}  style={{textDecoration:"none"}} onClick={handleInstitucional}> INSTITUCIONAL </Link>
        
      </div> 
      <div className=" col-md-2  text-center"
                onMouseOver={handleMouseOver}
                onMouseLeave={e => handleMouseLeave(e,2)}
      >
        <Link className='item-menu' to={"equipos"}  style={{textDecoration:"none"}}> EQUIPOS </Link>
      </div>

  
      <Link id="btn-contacto" to={'contact'} className="col-md-3 btn  "> CONTACTO </Link>
      <Link to={'#'} onClick={handleClickInstagram} className="col-md-1 btn " title="instagram/emi_metalurgica"> <i className="bi bi-instagram text-light" /> </Link>
    </nav>
  )
}
