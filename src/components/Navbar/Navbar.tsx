import './Navbar.css';
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <Link to={"/about"}style={{ color:'unset' }} > SOBRE NOSOTROS </Link>
      <Link to={"/contact"}style={{ color:'unset' }} > CONTACTO </Link>
        
    </nav>
  )
}
