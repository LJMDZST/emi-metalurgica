import { CardEquipo } from "./CardEquipo"


export const SectionEquipo = ({
    titulo1 = '',
    titulo2 = '',
    titulo3 = '',
    srcImg1 = '',
    srcImg2 = '',
    srcImg3 = ''
}) => {
  return (
    <div className='container-fluid  p-5' style={{margin : '-1em auto'}}>
         <div className="row row-cols-1 justify-content-center  ">
            <div className="col d-flex justify-content-center"> <CardEquipo titulo={titulo1} srcImg={srcImg1}  invertido={false}/></div>
            <div className="col d-flex justify-content-center"> <CardEquipo titulo={titulo2}  srcImg={srcImg2} invertido={true}/></div>
            <div className="col d-flex justify-content-center"> <CardEquipo titulo={titulo3}  srcImg={srcImg3} invertido={false}/></div>
            
        </div>
    </div>
  )
}
