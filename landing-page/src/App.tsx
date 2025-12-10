import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
