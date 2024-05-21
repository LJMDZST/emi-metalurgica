
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo';

import { useEffect, useState } from 'react';
export const Header = () => {
  
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  

  return (
    <header id='cabecera' className='container-fluid position-sticky top-0 p-0' style={{
      fontFamily : 'header',
       position : scrollY > 10 ? 'sticky' : undefined,
       zIndex : scrollY > 10 ? 3 : undefined
       } }>
      <div className={scrollY < 10 ? 'container-fluid' : 'container-md' } >
        <div className='row' >
          <div className='col-5  d-flex justify-content-end align-content-center' 
            style={{backgroundColor : scrollY === 0 ? 'rgba(255,255,255)' : 'rgba(255,255,255,0.3)'}}>
            <Logo />
          </div>
          <div className='col-7 animate__animated animate__fadeInRight'
            style={{backgroundColor :  scrollY === 0 ? 'rgb(57,80,158)': 'rgba(57,80,158,0.9)'}}
          >
            <Navbar />
          </div>
        </div>
      </div>
    </header> 
  )
}
