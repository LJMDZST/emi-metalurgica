
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo';
import './Header.css'
export const Header = () => {
  return (
    <header className='container-fluid position-sticky top-0' style={{zIndex : 1000,height:"50px"} }>
      <div className='row  align-items-center'>
        <div id="logo" className='col-sm-3 p-3' >
          <Logo />
        </div>
        <div className='col mb-4'>
          <Navbar />
        </div>
      </div>
        
    </header> 
  )
}
