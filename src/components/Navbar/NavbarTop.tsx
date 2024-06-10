
import { Link } from "react-router-dom"


export const NavbarTop = () => {

  

  const handleInstitucional = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    e.preventDefault();
    const about = document.getElementById("about");
    if(about) {
      about.scrollIntoView();
    } else {
      console.log('about no encontrado')
    }
}

  const handleClickInstagram = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    e.preventDefault();
    window.open('https://www.instagram.com/emi_metalurgica/');
  }



  const linkStyle : React.CSSProperties= {textDecoration:"none", fontSize : '0.8em'}
  return (
    <nav className=" navbar navbar-expand-md bg-transparent" style={{height:"100%"}}>
      <div className="container-fluid d-flex justify-content-end">
        <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#menu" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="menu">
          <div className="navbar-nav me-auto"  >
            <Link className='nav-link align-content-center' to={"about"}  style={linkStyle} onClick={handleInstitucional}>
              <span className="navbar-text text-white"> INSTITUCIONAL</span> 
            </Link>
            <Link className='nav-link align-content-center' to={"equipos"}  style={linkStyle}> 
             <span className="navbar-text text-white"> EQUIPOS </span> 
            </Link>
            <Link  className="nav-link  " to={'contact'} > 
              <span className="navbar-text btn btn-dark rounded-0 text-white" style={linkStyle} >  CONTACTO  </span> 
            </Link>
            <Link className=" nav-link " to={'#'} onClick={handleClickInstagram} style={linkStyle}  title="instagram/emi_metalurgica"> 
              <span className="navbar-text"><i className="bi bi-instagram text-light" /> </span>
            </Link>
          </div>
        </div>
     
      </div>
    </nav>
  )
}
