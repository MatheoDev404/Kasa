import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header>
      <img src={logo} className="Home-logo" alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About" $isFullLink>
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
