
import { CardQuote } from "../components/CardQuote"
import { ListaMarcas } from "../components/ListaMarcas"
export const Home = () => {
  return (
    
      <main>
          <section className="resalto">
            <p>Ingeniería y desarrollos <strong>#metalúrgicos</strong> Por 28 años </p>
          </section>
          <section className="resalto">
            
            <CardQuote  
              frase="Siempre es un placer trabajar con ustedes !!" 
              urlFoto="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/george-brooks-crema-ceo-slack-customer-story.jpg"
            />
          </section>
          
          <ListaMarcas />
      </main>
  )
}
