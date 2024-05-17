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
    <div className='container-md-10  p-5' style={{margin : '-1em auto'}}>
         <div className="row justify-content-center  ">
            <div className="col-lg-3 d-flex justify-content-center"> <CardEquipo titulo={titulo1} srcImg={srcImg1}/></div>
            <div className="col-lg-3 d-flex justify-content-center"> <CardEquipo titulo={titulo2}  srcImg={srcImg2}/></div>
            <div className="col-lg-3 d-flex justify-content-center"> <CardEquipo titulo={titulo3}  srcImg={srcImg3}/></div>
            
        </div>
    </div>
  )
}
