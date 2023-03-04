import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

// Composents et Pages
import About from './pages/About'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Page404 from './components/Error'
import Header from './components/Header'

// Conteneur de l'app
const container = document.getElementById('root')
const root = createRoot(container)

// STYLE GLOBAL
const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Logement" element={<Logement />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
