import { CardEquipo } from "./CardEquipo"


type TPropsSectionEquipo = {
  handleMostrarModalEquipo :  (e : React.MouseEvent<HTMLDivElement, MouseEvent>, _id : string)=> void,
  titulo : string,
  srcImg : string,
  invertido : boolean,
  _id : string
}


export const SectionEquipo = (
  {
    titulo = '',
    srcImg = '',
    invertido = false,
    _id = '',
    handleMostrarModalEquipo
  } : TPropsSectionEquipo
) => {
  return (
    <div className='container '>
         <div className="row row-cols-1 justify-content-center  ">
            <div className="col pe-0 ps-0 d-flex justify-content-center"
              onClick={ e => handleMostrarModalEquipo(e, _id)}
            >   
              <CardEquipo titulo={titulo} srcImg={srcImg}  invertido={invertido}/>
            </div>
            
        </div>
    </div>
  )
}
