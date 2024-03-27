import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={"/about"} > NOSOTROS </Link></li>
        <li><Link to={"/contact"} > PRESUPUESTAR </Link></li>
      </ul>
        
    </nav>
  )
}
