import { Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Chatbot from './components/chatbot/Chatbot'

import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbot />
      <Footer />
    </>
  )
}

export default App
