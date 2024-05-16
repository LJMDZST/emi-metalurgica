
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo';
import './Header.css'
import { useEffect, useState } from 'react';
export const Header = () => {

  const classValue43 = 'col-md-5  d-flex justify-content-center align-content-center';
  const classValue169 = 'col-md-5  d-flex justify-content-end align-content-center';
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  

  return (
    <header id='cabecera' className='container-fluid position-sticky top-0 ' style={{zIndex : 1000,minHeight:"9em"} }>
      <div className='row' style={{  maxWidth : width > 1360 ? '100em' : '75.5em' , minHeight:"9em"}}>
        <div className={width < 700 ? classValue43 : classValue169} style={{backgroundColor : 'white'}}>
         <Logo />
        </div>
        <div className='col-md-7 animate__animated animate__fadeInRight'>
          <Navbar />
        </div>
      </div>
    </header> 
  )
}
