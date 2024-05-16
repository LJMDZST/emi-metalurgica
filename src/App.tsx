import './index.css'
import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css';
// import { Footer } from './components/Footer/Footer'


function App() {

  useEffect(() => {
    AOS.init();
    
  }, [])
  
  
  return (
    <  >
      <Header />
      <Outlet />
    </>
  )
}

export default App
