import { Link } from 'react-router-dom'
import logoPng from '../../assets/logo/logo.png'

export const Logo = () => {
  return (
    <span className='align-content-center justify-content-end' >
      <Link to={'/emi-metalurgica'} style={{ color:'unset',textDecoration:"none" }}>
        <img src={logoPng} width={100} />
      </Link>
    </span>
  )
}
