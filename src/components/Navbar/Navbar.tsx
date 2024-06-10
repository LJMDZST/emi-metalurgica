
import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo";


export const Navbar = () => {
    const handleClickInstagram = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();
        window.open('https://www.instagram.com/emi_metalurgica/');
    }
    const handleInstitucional = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();
        const about = document.getElementById("aboutSection");
        if(about) {
          about.scrollIntoView();
        } else {
          console.log('about no encontrado')
        }
    }

    const linkStyle : React.CSSProperties= {textDecoration:"none", fontSize : '0.7em'}
  return (
    <nav className=" navbar navbar-expand-md bg-transparent " >
      <div className="container justify-content-center"><a className="navbar-brand" href="#"><Logo small={true}/></a></div>
      <div className="container-fluid ">
        <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#menu" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="menu">
          <div className="navbar-nav me-auto"  >
            <Link className='nav-link align-content-center' to={"#"}  style={linkStyle} onClick={handleInstitucional}>
              <span className="navbar-text  text-white"> INSTITUCIONAL</span> 
            </Link>
            <Link className='nav-link align-content-center' to={"equipos"}  style={linkStyle}> 
             <span className="navbar-text  text-white"> EQUIPOS </span> 
            </Link>
            <Link  className="nav-link  " to={'contact'} > 
              <span className="navbar-text  btn btn-dark rounded-0 text-white" style={linkStyle} >  CONTACTO  </span> 
            </Link>
            <Link className=" nav-link " to={'#'} onClick={handleClickInstagram} style={linkStyle}  title="instagram/emi_metalurgica"> 
              <span className="navbar-text "><i className="bi bi-instagram text-light" /> </span>
            </Link>
          </div>
        </div>
     
      </div>
    </nav>
  )
}
