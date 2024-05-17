import { SectionEquipo } from "../../components/Equipo/SectionEquipo"

import cardEquipo1 from '../../assets/images/equipos-home/card-equipo1.jpg'
export const Equipos = () => {
  return (
    <div className="container">
        <div className="row row-cols-1">
            <div className="col">
                <SectionEquipo 
                    srcImg1={cardEquipo1} srcImg2={cardEquipo1} srcImg3={cardEquipo1}
                    titulo1='EQUIPO 1'  titulo2='EQUIPO 2'  titulo3='EQUIPO 3'
                /></div>
            <div className="col"><SectionEquipo 
                 srcImg1={cardEquipo1} srcImg2={cardEquipo1} srcImg3={cardEquipo1}
                 titulo1='EQUIPO 4'  titulo2='EQUIPO 5'  titulo3='EQUIPO 6'
            /></div>
            <div className="col"><SectionEquipo
                 srcImg1={cardEquipo1} srcImg2={cardEquipo1} srcImg3={cardEquipo1}
                 titulo1='EQUIPO 7'  titulo2='EQUIPO 8'  titulo3='EQUIPO 9'
            /></div>
        </div>
    </div>
  )
}
