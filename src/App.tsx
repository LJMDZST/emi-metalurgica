
import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"


function App() {


  return (
    <>
      <header>
        <span className='titulo'>EMI-METALÚRGICA</span>
        <Navbar />
      </header> 
      <Outlet />
      <footer>Contacto : emi-metalurgica@mail.com</footer>
    </>
  )
}

export default App
