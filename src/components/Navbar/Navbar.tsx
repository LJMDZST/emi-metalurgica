
import { Link } from "react-router-dom"
import './Navbar.css'
export const Navbar = () => {

  const handleMouseOver = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    e.preventDefault();

    e.currentTarget.className = `${e.currentTarget.className} animate__animated animate__pulse`;

  }
  const handleMouseLeave = (e : React.MouseEvent<HTMLDivElement, MouseEvent>,width : number) =>{
    e.preventDefault();
    e.currentTarget.className = `col-md-${width} text-start`;

  }

  const handleInstitucional = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    e.preventDefault();
    const about = document.getElementById("aboutSection");
    about?.scrollIntoView();
  }

  return (
    <nav className="row align-items-center" style={{height:"100%"}}>
      <div className=" col-md-2 "
        onMouseOver={handleMouseOver}
        onMouseLeave={e => handleMouseLeave(e,2)}
      >
        <Link className='item-menu' to={"/about"}  style={{textDecoration:"none"}} onClick={handleInstitucional}> Institucional </Link>
        
      </div>  
      <div className=" col-md-2 "
                onMouseOver={handleMouseOver}
                onMouseLeave={e => handleMouseLeave(e,2)}
      >
        <Link className='item-menu' to={"/contact"}  style={{textDecoration:"none"}}> Equipos </Link>
      </div>

      <div className="col-md-2 ">+54 342 000554</div>
      <div className="col-md-3 btn btn-dark "> CONTACTO </div>
    </nav>
  )
}
