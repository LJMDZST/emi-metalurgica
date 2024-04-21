
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo';
import './Header.css'
export const Header = () => {
  return (
    <header className='container-fluid position-sticky top-0' style={{zIndex : 1000,height:"9em"} }>
      <div className='row'>
        <div className='col-3' style={{backgroundColor : 'white'}}>
          <div className='m-4 p-3'>
            <Logo />
          </div>
           
        </div>
        <div className='col'>
          <div className='row  align-items-center row-cols-1'>
              <div className='col mb-4'>
                <div className="row text-end justify-content-end p-0">
                  <div className="col-md-4 align-self-center">+54 342 000554</div>
                  <div className="col-md-3 btn btn-primary p-3"> CONTACTO </div>
              </div>
              </div>
              <div className='col mb-4'>
                <Navbar />
              </div>
          </div>
        </div>
      </div>
    </header> 
  )
}
