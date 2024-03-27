
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
    <div className="client-feedback" >
      <p><q>{frase}</q></p>
      <p className="tapa-foto-cliente">
        <img 
          className="foto-cliente"
          alt="foto-cliente" 
          src={urlFoto}
        />
        
      </p>
    </div>
  )
}
