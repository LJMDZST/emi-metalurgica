import { Link } from 'react-router-dom'
import logoPng from '../../assets/logo/logo.png'
import './Logo.css'
export const Logo = () => {
  return (
    <span id="logo" >
      <Link to={'/emi-metalurgica'} style={{ color:'unset',textDecoration:"none" }}>
        <img src={logoPng} width={100} />
      </Link>
    </span>
  )
}
