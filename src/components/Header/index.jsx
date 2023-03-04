import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 18px;
`

function Header() {
  return (
    <header>
      <img src={logo} className="Home-logo" alt="logo" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A propos</StyledLink>
      </nav>
    </header>
  )
}

export default Header
