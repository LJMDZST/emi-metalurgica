
import { About } from "../../components/About/About"
import { SectionEquipo } from "../../components/Equipo/SectionEquipo";

import { useEffect, useState } from "react";
import { T_TIPO, TituloPrincipal } from "../../components/TituloPrincipal/TituloPrincipal";
import { BotonVerEquipos } from "../../components/BotonVerEquipos/BotonVerEquipos";

import {
  homeEquipos,
  imgHome1,
  imgHome2,
  imgHome3,
  portada
} from '../../assets/images'

export const Home = () => {

  const imagenes = [imgHome1,imgHome2,imgHome3,portada];
  const [c, setC] = useState(0);
  const [imgSrc, setImgSrc] = useState(imgHome1)

  useEffect(() => {
    setTimeout(() => {
      if(c === imagenes.length-1 ){
        setC(0);
      } else {
        setC(c+1);
      }
      
    }, 3000);
  
  }, [c])

  useEffect(() => {
    setImgSrc(imagenes[c])
  
    return () => {
      setImgSrc(imagenes[c])
    }
  }, [c])
  
  

  
 
  
  return (
    
      <main className='container-fluid animate__animated animate__fadeIn' >


          <div className='row row-cols-1 bg-light' >
            <div className="col p-0 " style={{
                  backgroundImage : `url(${imgSrc})`,
                  backgroundSize : 'cover',
                  backgroundPosition : 'center',
                  backgroundColor : "rgba(0,0,0,0.3)",
                  transition : 'background-image 1s ease-in',
            
                  minHeight:"40em"
                }}>
                  <div style={{
                    backgroundColor : 'rgba(57,80,158,0.5)',
                    height : '100%'
                  }}>
                    <div className="container" style={{height : '100%'}}>
                      <div   className="row align-items-center " >
                          <div className="col-5 p-3 ms-3  text-light animate__animated animate__fadeInDown  animate__slow" >
                            <div className="row justify-content-center ms-5 mt-5">
                              <div className="col-10 ">
                                  <TituloPrincipal _tipo={T_TIPO.HOME}/>
                                  
                                  <h2 style={{ fontSize : "1.12em" }}> Diseñamos y fabricamos equipos industriales </h2>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
              
            </div>
            <div className="col d-flex justify-content-center p-0" 
              style={{ 
                minHeight:"40em"
              }}
            >
                <About />
            </div>
            <div className="col  text-center" 
            style={{
               minHeight:"45em",
               paddingBottom : '6em'
              }}
            >
              {
                 Object.keys(homeEquipos).map( (i_equipo,index)=>
                  <SectionEquipo 
                      _id={i_equipo}
                      handleMostrarModalEquipo={()=>{}}
                      srcImg={homeEquipos[i_equipo].imagenes[0]} 
                      titulo={homeEquipos[i_equipo].titulo}
                      invertido={ index % 2 === 0}
                  />
                )
              }

                <div className="d-flex justify-content-center pt-4">
                  <BotonVerEquipos />
                </div>
               
            </div> 
            {/* <div className="col p-0 " 
                style={{
                  minHeight:"40em", 
                  margin : '0'
                }}
            >
                <Contact />
            </div> */}
          </div>
        
      </main>
  )
}
