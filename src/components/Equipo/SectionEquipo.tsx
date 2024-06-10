import { CardEquipo } from "./CardEquipo"


type TPropsSectionEquipo = {
  handleMostrarModalEquipo :  (e : React.MouseEvent<HTMLDivElement, MouseEvent>, _id : number)=> void,
  titulo1 : string,
  titulo2 : string,
  titulo3 : string,
  srcImg1 : string,
  srcImg2 : string,
  srcImg3 : string,
  invertido : boolean,

}


export const SectionEquipo = (
  
  {
    titulo1 = '',
    titulo2 = '',
    titulo3 = '',
    srcImg1 = '',
    srcImg2 = '',
    srcImg3 = '',
    invertido = false,
    handleMostrarModalEquipo
} : TPropsSectionEquipo) => {
  return (
    <div className='container '>
         <div className="row row-cols-1 justify-content-center  ">
            <div className="col p-3 d-flex justify-content-center"
              onClick={ e => handleMostrarModalEquipo(e, 1)}
            >
              
               <CardEquipo titulo={titulo1} srcImg={srcImg1}  invertido={invertido}/>
            </div>
            <div className="col pe-0 ps-0 d-flex justify-content-center"
              onClick={ e => handleMostrarModalEquipo(e, 2)}
            >
              
               <CardEquipo titulo={titulo2}  srcImg={srcImg2} invertido={!invertido}/>
            </div>
            <div className="col pe-0 ps-0 d-flex justify-content-center"
              onClick={ e => handleMostrarModalEquipo(e, 3)}
            >
              
               <CardEquipo titulo={titulo3}  srcImg={srcImg3} invertido={invertido}/>
            </div>
            
        </div>
    </div>
  )
}
