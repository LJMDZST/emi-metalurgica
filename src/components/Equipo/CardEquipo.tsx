import { useState } from "react"

const defaultStyles : React.CSSProperties = { fontFamily : 'card', color : 'rgba(57,80,158)' };

export const CardEquipo = ({titulo = '', srcImg = '#', invertido = false}) => {

    const [styles, setStyles] = useState(defaultStyles)
  
  
    

    const handleOver = (e : React.MouseEvent<HTMLDivElement, MouseEvent> )=>{
        e.preventDefault();
        setStyles({
            ...styles,
            backgroundColor : 'rgba(57,80,158)',
            color : 'white',
            transition : 'background-color 0.8s linear ' ,
        });
       
    }
    const handleLeave = (e : React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.preventDefault();
        setStyles(defaultStyles);
    }

  return (
    <div className={'container-lg'} style={styles} onMouseOver={handleOver} onMouseLeave={handleLeave} >
       <div className="row">
            <div className={`${invertido ? 'col-md-4' : 'col-md-8'} d-flex align-items-center justify-content-center `} 
                style={invertido ? undefined : { backgroundImage : `url(${srcImg})`, backgroundSize : 'cover', height : '20em' } }
            >
                {
                    invertido && <h3 className="text-center">{titulo}</h3>
                }
                
            </div>
            <div className={`${invertido ? 'col-md-8' : 'col-md-4'} d-flex align-items-center justify-content-center`}
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
