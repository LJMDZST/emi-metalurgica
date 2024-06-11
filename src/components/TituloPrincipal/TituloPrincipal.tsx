
export enum T_TIPO { HOME = 1, FOOTER  }

export const TituloPrincipal = ({ _tipo = T_TIPO.HOME  } : {_tipo : T_TIPO}) => {
  return (
    <>
        {
            _tipo === T_TIPO.HOME &&
            <>
                <h1 style={{fontFamily : 'homeH1'}} ><span className="text-start">EQUIPOS </span></h1>
                <h1 style={{fontFamily : 'homeH1'}} ><span className="text-start">METALÚRGICOS </span></h1>
                <h1 style={{fontFamily : 'homeH1'}} ><span className="text-start">INDUSTRIALES </span></h1>
            </>
        }
        {
            _tipo === T_TIPO.FOOTER &&
            <>
                <h5 style={{fontFamily : 'homeH1'}} ><span className="text-start">EQUIPOS </span></h5>
                <h5 style={{fontFamily : 'homeH1'}} ><span className="text-start">METALÚRGICOS </span></h5>
                <h5 style={{fontFamily : 'homeH1'}} ><span className="text-start">INDUSTRIALES </span></h5>
            </>
        }
    </>
  )
}
