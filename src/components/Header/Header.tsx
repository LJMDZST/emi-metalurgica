
import {  NavbarTop } from '../Navbar/NavbarTop'
import { Logo } from '../Logo/Logo';

import {  useEffect, useRef, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
export const Header = () => {
  
  const [scrollY, setScrollY] = useState(window.scrollY);
  const prevCoordY = useRef(scrollY);
  const isScrollDown = useRef(false);

  useEffect(()=>{ prevCoordY.current < scrollY ? isScrollDown.current = true: isScrollDown.current = false; },[scrollY]);
  
  useEffect(()=>{ prevCoordY.current = scrollY},[scrollY])
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return ()=> {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isScrollDown.current])
  
  

  return (
    <header  id='cabecera' className={`container-fluid position-sticky top-0 p-0 animate__animated  ${ isScrollDown.current && scrollY > 300  ? 'animate__fadeOutUp' : 'animate__fadeInDown'}`} style={{
        fontFamily : 'header',
       
        backgroundColor : 'rgb(57,80,158)',
        zIndex : 1000
       } }>
      <div className={`container-fluid `} 
        style={{
          animationFillMode : 'forwards'
        }}
      >
        {
          scrollY > 300 &&
          <div className='row' > <div className='col ' > <Navbar /></div> </div>
        }
        {
          scrollY < 300 && 
          <div className='row' style={{height : '100%'}}>
            <div className='col-5  d-flex justify-content-end align-content-center' 
              style={{backgroundColor :'rgba(255,255,255)'}}>
              <Logo />
            </div>
            <div className='col-7 '
              
            >
              <NavbarTop />
            </div>
        </div>
        }
        
      </div>
    </header> 
  )
}
