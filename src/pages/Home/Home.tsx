
// import { CardHighlighted } from "../../components/CardComment/CardHighlighted"
// import { CardQuote } from "../../components/CardQuote/CardQuote"
//  import { HomeScene } from "../../components/HomeScene/HomeScene"
// import { ListaMarcas } from "../../components/ListaMarcas"
import { About } from "../About/About"
import  './Home.css';
export const Home = () => {
  
  return (
    
      <main id={"homemain"} className='container-fluid ' >
          <div className='row row-cols-1' >
            <div className="col p-0 " >
              <div className="row align-items-center" style={{backgroundColor : "rgba(0,0,0,0.3)",height:"30em"}}>
                  <div className="col-4 p-3 m-3 text-light animate__animated animate__fadeInDown  animate__slow" >
                    <h1 className="fw-bold"> EN METALURGICA EMI DISEÑAMOS SOLUCIONES A MEDIDA</h1>
                    
                     
                      
                  </div>
              </div>
              
            </div>
            <div className="col p-0" >
                <About />
            </div>
          </div>
        
      </main>
  )
}
