
import { CardHighlighted } from "../../components/CardComment/CardHighlighted"
import { CardQuote } from "../../components/CardQuote/CardQuote"
import { HomeScene } from "../../components/HomeScene/HomeScene"
import { ListaMarcas } from "../../components/ListaMarcas"
import { About } from "../About/About"


export const Home = () => {
  return (
    
      <main className='container-fluid ' >
          <div className='row row-cols-1'>
            <section className="col p-0" style={{height : "600px"}}>
                <HomeScene  />
            </section>
            {/* <div className="col">
            <CardHighlighted>
              <p>Ingeniería y desarrollos <strong>#metalúrgicos</strong></p>
              <p>Por 28 años </p>
            </CardHighlighted>

            <CardHighlighted>
            <CardQuote  
                frase="Siempre es un placer trabajar con ustedes !!" 
                urlFoto="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/george-brooks-crema-ceo-slack-customer-story.jpg"
              />
            </CardHighlighted>
            </div> */}
            {/* <section className="col p-0">

              <ListaMarcas /> 
            </section> */}
            <section className="col p-0" >
                <About />
            </section>
          </div>
      </main>
  )
}
