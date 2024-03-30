import './Header.css';
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <header>
        <Logo />
        <Navbar />
    </header> 
  )
}
