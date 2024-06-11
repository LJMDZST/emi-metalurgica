import { SectionEquipo } from "../../components/Equipo/SectionEquipo"

import cardEquipo1 from '../../assets/images/equipos-home/card-equipo1.jpg'
import { ModalEquipo } from "../../components/Equipo/ModalEquipo"
import {useState } from "react"



export const Equipos = () => {


  const [mostrarModal, setmostrarModal] = useState(false)

    const handleMostrarModalEquipo = (e : React.MouseEvent<HTMLDivElement, MouseEvent>, _id : number) => {
    e.preventDefault();
    console.log('handleMostrarModalEquipo')
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
           <ModalEquipo _isOpen={mostrarModal} _handleClose={handleCloseModalEquipo} />
          </div>
        </div>
        <div className="row row-cols-1">
            <div className="col">
                <SectionEquipo 
                    handleMostrarModalEquipo={handleMostrarModalEquipo}
                    srcImg1={cardEquipo1} srcImg2={cardEquipo1} srcImg3={cardEquipo1}
                    titulo1='EQUIPO 1'  titulo2='EQUIPO 2'  titulo3='EQUIPO 3' invertido={false}
                /></div>
            <div className="col">
              <SectionEquipo 
                   handleMostrarModalEquipo={handleMostrarModalEquipo}
                 srcImg1={cardEquipo1} srcImg2={cardEquipo1} srcImg3={cardEquipo1}
                 titulo1='EQUIPO 4'  titulo2='EQUIPO 5'  titulo3='EQUIPO 6' invertido={true}
            /></div>
            <div className="col">
              <SectionEquipo
                handleMostrarModalEquipo={handleMostrarModalEquipo}
                 srcImg1={cardEquipo1} srcImg2={cardEquipo1} srcImg3={cardEquipo1}
                 titulo1='EQUIPO 7'  titulo2='EQUIPO 8'  titulo3='EQUIPO 9' invertido={false}
            /></div>
        </div>
        
    </div>
  )
}
