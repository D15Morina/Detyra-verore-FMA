import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />

    <Home />

    <Aboutus />

    <Contact />

    <Footer />
  </StrictMode>,
)
