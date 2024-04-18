import { Imagen } from "../Imagen/Imagen";

type TPropsAboutImage = {src : string} & React.PropsWithChildren;

export const AboutImage = ({children,src} : TPropsAboutImage ) => {
  return (
    <div className="text-center">
      <Imagen src={src} height="500px" >
        {children}
      </Imagen>
    </div>
  )
}
