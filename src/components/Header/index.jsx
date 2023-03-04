import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/About" $isFullLink>
        A propos
      </Link>
    </nav>
  )
}

export default Header
