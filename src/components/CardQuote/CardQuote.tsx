
export type TPropsCardQuote = {
  frase : string,
  urlFoto : string
}

export const CardQuote = (
  {
    frase, 
    urlFoto
  } : TPropsCardQuote ) => {
  return (
    <div className="card mb-3 rounded-circle" style={{maxWidth : "350px"}}>
          <img 
            className="card-img rounded-circle "
            alt="foto-cliente" 
            src={urlFoto}
          />
          <div className="card-img-overlay ">
            <h5 className="card-title text-light ">Jhon Smith</h5>
            <p className="card-text text-light"><q>{frase}</q></p>
          </div>
    </div>
    
  )
}
