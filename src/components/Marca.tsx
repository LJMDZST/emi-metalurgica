
export type TPropsMarca = {
    urlLogo : string
}

export const Marca = ({urlLogo}: TPropsMarca) => {
  return (
    <div className='foto-marca'>
        <img alt="company" src={urlLogo}/>
    </div>
  )
}
