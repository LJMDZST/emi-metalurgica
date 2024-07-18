import {useState } from "react";

import { SectionEquipo } from "../../components/Equipo/SectionEquipo";

import { ModalEquipo } from "../../components/Equipo/ModalEquipo";

import {equipos} from '../../assets/images';

export const Equipos = () => {


  const [mostrarModal, setmostrarModal] = useState(false);

  const [equipoFocus, setEquipoFocus] = useState<{titulo : string, imagenes : string[]}>({
    titulo : '',
    imagenes : []
  });

  const handleMostrarModalEquipo = (e : React.MouseEvent<HTMLDivElement, MouseEvent>, _id : string) => {
    e.preventDefault();
    console.log('handleMostrarModalEquipo')
    setEquipoFocus( equipos[_id] );
    setmostrarModal( true )
  }
  const handleCloseModalEquipo =  ( e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>)=>{
    e.preventDefault();
    console.log('handleCloseModalEquipo')
    setmostrarModal( false )
  }

  
  
  return (
    <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="col">
           <ModalEquipo 
              _isOpen={mostrarModal} 
              equipo={equipoFocus} 
              _handleClose={handleCloseModalEquipo} 
            />
          </div>
        </div>
        <div className="row row-cols-1">
            {
              Object.keys(equipos).map( (i_equipo, index) => 
                <div className="col" key={`section-eq-${index}`}>
                  <SectionEquipo 
                      _id={i_equipo}
                      handleMostrarModalEquipo={handleMostrarModalEquipo}
                      srcImg={equipos[i_equipo].imagenes[0]} 
                      titulo={equipos[i_equipo].titulo}
                      invertido={false}
                  />
                </div>
               )
            }
           
        </div>
        
    </div>
  )
}
