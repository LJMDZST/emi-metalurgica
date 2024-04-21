import './index.css'
import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
// import { Footer } from './components/Footer/Footer'


function App() {


  return (
    <>
      {/* <Footer /> */}
      <Header />
      <Outlet />
    </>
  )
}

export default App
