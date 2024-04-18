import { Link } from 'react-router-dom'
import logoPng from '../../assets/logo/logo.png'
// import './Logo.css'
export const Logo = () => {
  return (
    <span id="logo" >
      <Link to={'/'} style={{ color:'unset',textDecoration:"none" }}>
        <img src={logoPng} width={80} />
      </Link>
    </span>
  )
}
