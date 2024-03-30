import { Link } from 'react-router-dom'
import './Logo.css'
export const Logo = () => {
  return (
    <span id="logo" >
      <Link to={'/'} style={{ color:'unset' }}> LOGO EMPRESA </Link>
    </span>
  )
}
