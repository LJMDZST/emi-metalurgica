// import { Logo } from "../Logo/Logo"
import contacto from '../../data/contacto.json';
import { Logo } from '../Logo/Logo';
import { NavbarFooter } from '../Navbar/NavbarFooter';
import { T_TIPO, TituloPrincipal } from '../TituloPrincipal/TituloPrincipal';

export const Footer = () => {
  
    
  
  
  return (
    <footer className="container-fluid text-light text-center p-0"
        style={{
            minHeight : '30em',
            background : 'rgb(25,25,25)'
        }}
    >
       <div className='row  p-5'>
            <div className='col p-3 '>
                <div className='row row-cols-1 '> 

                    <div className='col mb-3'>
                        <Logo />
                    </div>
                    <div className='col'>
                        <div className='row justify-content-center'  >
                            <div className='col-4'>
                                <p className=' text-start'  style={{fontSize : '0.8em'}}>
                                    {contacto.ubicacion.calle} <br />
                                    {contacto.ubicacion.ciudad} - {contacto.ubicacion.CP} <br/>
                                    {/* {contacto.ubicacion.provincia} - {contacto.ubicacion.pais} */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row justify-content-center'  >
                    
                            <div className='col-4'>
                                <p className='text-start' style={{fontSize : '0.8em'}}>
                                    E-Mail :    {contacto.email} <br />
                                    Tel. :      {contacto.tel} <br />
                                    
                                </p>
                            </div>
                        
                        </div>

                    </div>
                
                </div>
               
            </div>
            <div className='col text-start'>
                <div className='row align-items-center' style={{height : '100%'}}>
                    <div className='col'>
                        <NavbarFooter />
                    </div>
                </div>
            </div>
            
       </div>
    </footer>
  )
}
