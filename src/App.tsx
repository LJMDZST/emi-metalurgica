import './index.css'
import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"


function App() {


  return (
    <>
      <Header />
      <Outlet />
      <footer>Contacto : empresa@mail.com</footer>
    </>
  )
}

export default App
