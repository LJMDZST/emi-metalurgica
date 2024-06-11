import { Link } from 'react-router-dom'
import logoPng from '../../assets/logo/logo.png'

export const Logo = ({small = false}) => {
  const handleClick = ()=>{
    const root = document.getElementById('root');
    if(root){
      root.scrollIntoView();
    }
  }
  return (
    <span className='align-content-center justify-content-end' >
      <Link to={'/emi-metalurgica'} style={{ color:'unset',textDecoration:"none" }} onClick={handleClick}>
        <img src={logoPng} width={ small ? 50 :100} />
      </Link>
    </span>
  )
}
