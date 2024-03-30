import '../page.css'
import './Home.css'
import { CardHighlighted } from "../../components/CardComment/CardHighlighted"
import { CardQuote } from "../../components/CardQuote/CardQuote"
import { ListaMarcas } from "../../components/ListaMarcas"


export const Home = () => {
  return (
    
      <main className='main-home'>
          <div className='feedbacks'>
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
            
          </div>
          <ListaMarcas />
      </main>
  )
}
