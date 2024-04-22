// import { AboutImage } from "../../components/AboutImage/AboutImage"
import "./About.css";
export const About = () => {

  


  return (
    <main className='main-about' >
      <div id="aboutSection" className='wrapper-nosotros text-center' style={{height : "430px"}}>
        {/* <section id="about-foto"> */}
          {/* <AboutImage src={"'https://t4.ftcdn.net/jpg/04/88/36/87/360_F_488368758_x4bf8mcVimr9gSZW7WJ0Dfpd9GfpRVFZ.jpg'"} >
          
          </AboutImage> */}
          
        {/* </section> */}

            <p id="aboutP1" data-aos="fade-down" data-aos-duration="800" className="fs-4">Somos una empresa con más de 10 años de experiencia.</p>
            <p id="aboutP2" data-aos="fade-down" data-aos-duration="900" className="fs-4">Contamos con la capacidad necesaria para el desarrollo de proyectos requeridos por el cliente.</p>
            <p id="aboutP3" data-aos="fade-down" data-aos-duration="1000" className="fs-4">Nos especializamos en Acero Inoxidable calidad AISI 304 L y AISI 316 L.</p>
        
        </div>
 
 
    </main>
  )
}
