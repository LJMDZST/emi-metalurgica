

type TPropsImage = {src : string, height : string} & React.PropsWithChildren;

export const Imagen = ( {children,src,height} : TPropsImage) => {
  return (
    <div 
        className=" animate__animated animate__fadeIn animate__slow d-flex align-items-bottom" 
        style={{
          width: "100%",
          height: height,
          backgroundImage:`url(${src})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
          }}
    >
        {children}
      </div>
  )
}
