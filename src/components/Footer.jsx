import logo from '../assets/images/footer_logo.png'

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} className="Footer__logo" alt="logo" />
      <p className="Footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
