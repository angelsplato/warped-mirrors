import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Products />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
