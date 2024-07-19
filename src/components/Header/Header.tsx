
import {  NavbarTop } from '../Navbar/NavbarTop'
import { Logo } from '../Logo/Logo';

import {  useEffect, useRef, useState } from 'react';
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
    <header  id='cabecera' 
    className={`container-fluid position-sticky top-0 p-0 animate__animated  ${ isScrollDown.current && scrollY > 50  ? 'animate__fadeOutUp' : 'animate__fadeInDown'}`} 
     style={{
        fontFamily : 'header',
        height : '15vh',
        // height : scrollY < 300 ? '15vh' : '10vh' ,
        zIndex : 1000
       } }
     >
      <div className={`container-fluid `} 
        style={{
          animationFillMode : 'forwards',
          height : '100%',
          backgroundColor : 'rgba(255,255,255)'
          // backgroundColor : scrollY < 300 ? 'rgba(255,255,255)' :  'rgb(57,80,158)'
        }}
       >
        {/* {
          scrollY > 300 &&
          <div className='row' style={{height : '100%'}} > <div className='col ' > <Navbar /></div> </div>
        } */}
        {
          (!isScrollDown.current) &&
          <div className='row' 
            style={{
              height : '100%'
            }}>
            <div className='col-5 d-flex justify-content-around align-content-center' >
              <Logo />
            </div>
            <div className='col-7 '
              style={{
                backgroundColor : 'rgb(57,80,158)'
              }}
            >
              <NavbarTop />
            </div>
          </div>
        }
        
      </div>
    </header> 
  )
}
