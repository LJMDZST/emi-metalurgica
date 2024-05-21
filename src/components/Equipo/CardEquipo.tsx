
export const CardEquipo = ({titulo = '', srcImg = '#', invertido = false}) => {

    

  return (
    <div className=" container-md " style={{ fontFamily : 'card' }}>
       <div className="row">
            <div className={`col-md d-flex align-items-center justify-content-center `} 
                style={invertido ? undefined : { backgroundImage : `url(${srcImg})`, backgroundSize : 'cover', height : '20em' } }
            >
                {
                    invertido && <h3 className="text-center">{titulo}</h3>
                }
                
            </div>
            <div className="col-md d-flex align-items-center justify-content-center"
                style={invertido ?  { backgroundImage : `url(${srcImg})`, backgroundSize : 'cover', height : '20em'  } : undefined }
            >
                {
                    !invertido && <h3 className="text-center">{titulo}</h3> 
                }
            </div>
       </div>

    </div>
  )
}
