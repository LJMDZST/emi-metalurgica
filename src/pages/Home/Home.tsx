
// import { CardHighlighted } from "../../components/CardComment/CardHighlighted"
// import { CardQuote } from "../../components/CardQuote/CardQuote"
//  import { HomeScene } from "../../components/HomeScene/HomeScene"
// import { ListaMarcas } from "../../components/ListaMarcas"
import { About } from "../../components/About/About"
import { SectionEquipo } from "../../components/Equipo/SectionEquipo";
import imgHome1 from '../../assets/images/home/portada.jpeg';
import imgHome2 from '../../assets/images/home/Recurso1.png';
import imgHome3 from '../../assets/images/home/Recurso2.png';


import cardEquipo1 from '../../assets/images/equipos-home/card-equipo1.jpg'

import { useEffect, useState } from "react";
import { T_TIPO, TituloPrincipal } from "../../components/TituloPrincipal/TituloPrincipal";
import { BotonVerEquipos } from "../../components/BotonVerEquipos/BotonVerEquipos";
export const Home = () => {

  const imagenes = [imgHome1,imgHome2,imgHome3];
  const [c, setC] = useState(0);
  const [imgSrc, setImgSrc] = useState(imgHome1)

  useEffect(() => {
    setTimeout(() => {
      if(c === imagenes.length-1 ){
        setC(0);
      } else {
        setC(c+1);
      }
      setImgSrc(imagenes[c])
    }, 4000);
  
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
                 <SectionEquipo
                          handleMostrarModalEquipo={()=>{}}
                          invertido={false}
                          srcImg1={cardEquipo1} srcImg2={imgHome2} srcImg3={imgHome3}
                          titulo1='EQUIPO 1'  titulo2='EQUIPO 2'  titulo3='EQUIPO 3'
                      />

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
