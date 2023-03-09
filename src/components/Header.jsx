import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <header id="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <nav className="Header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
