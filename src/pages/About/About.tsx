// import { AboutImage } from "../../components/AboutImage/AboutImage"
import "./About.css";
export const About = () => {
  return (
    <main className='main-about'>
      <div id="aboutSection" className='wrapper-nosotros text-center' style={{height : "430px"}}>
        {/* <section id="about-foto"> */}
          {/* <AboutImage src={"'https://t4.ftcdn.net/jpg/04/88/36/87/360_F_488368758_x4bf8mcVimr9gSZW7WJ0Dfpd9GfpRVFZ.jpg'"} >
          
          </AboutImage> */}
          
        {/* </section> */}


            <h3 > En metalurgica emi diseñamos </h3>
            <h1 className="animate__animated animate__fadeIn animate__infinite infinite animate__slower"> soluciones a medida </h1>
            
            <p className="animate__animated animate__fadeInDown">Somos una empresa con más de 10 años de experiencia.</p>
            <p className="animate__animated animate__fadeInDown">Contamos con la capacidad necesaria para el desarrollo de proyectos requeridos por el cliente.</p>
            <p className="animate__animated animate__fadeInDown">Nos especializamos en Acero Inoxidable calidad AISI 304 L y AISI 316 L.</p>
        
        </div>
 
 
    </main>
  )
}
