import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Page404 from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/logement/:id" element={<Logement />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
