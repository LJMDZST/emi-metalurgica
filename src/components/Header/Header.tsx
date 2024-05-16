
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo';
import './Header.css'
export const Header = () => {
  return (
    <header className='container-fluid position-sticky top-0 ' style={{zIndex : 1000,height:"9em"} }>
      <div className='row' style={{height:"100%"}}>
        <div className='col-4  d-flex justify-content-end' style={{backgroundColor : 'white'}}>
          <div className='m-4 p-2' >
            <Logo />
          </div>
        </div>
        <div className='col animate__animated animate__fadeInRight'>
          <Navbar />
        </div>
      </div>
    </header> 
  )
}
