import { Link } from 'react-router-dom'
import logo from '../assets/images/header_logo.svg'

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="logo" />
      <nav className="Header__nav">
        <Link className="Header__nav__link" to="/">
          Accueil
        </Link>
        <Link className="Header__nav__link" to="/About">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
