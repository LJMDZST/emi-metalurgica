import { useEffect, useState } from "react"
import { HomeImagen } from "./HomeImagen";

import Imagen1Png from '../../assets/images/Recurso1.png'
import Imagen2Png from '../../assets/images/Recurso2.png'
import Imagen3Png from '../../assets/images/Recurso3.png'

export const HomeScene = () => {
  const imgSrcList = [
    "https://www.navvis.com/hs-fs/hubfs/navvis-factory-planning2-image1.jpg?width=1200&name=navvis-factory-planning2-image1.jpg",
    "https://cdn1.epicgames.com/ue/product/Screenshot/FR%201-1920x1080-bab4e0142293ed0e5862933e163850a9.jpg?resize=1&w=1920",
    "https://cdn.zeebiz.com/sites/default/files/2023/07/31/253882-china-factory-news.jpg"
  ];
    const [indexSrc,setIndexSrc] = useState(0);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if(indexSrc < imgSrcList.length-1){
          setIndexSrc ( indexSrc + 1);
        } else {
          setIndexSrc (0);
        }
        
        console.log(indexSrc);
      }, 4000);
    
      return () => {
        clearTimeout(timeoutId);
      }
    }, [indexSrc])
    
  return (
    < >
        { (indexSrc === 0) && <HomeImagen key={`img-home-${0}`} src={Imagen1Png} /> }
        { (indexSrc === 1) && <HomeImagen key={`img-home-${1}`}src={Imagen2Png} /> }
        { (indexSrc === 2) && <HomeImagen key={`img-home-${2}`}src={Imagen3Png} /> }
        <div id="homeText">

          <h3 > En metalurgica emi diseñamos </h3>
          <h1 className="animate__animated animate__fadeIn animate__infinite infinite animate__slower"> soluciones a medida </h1>
            
        </div>
    </>
  )
}
