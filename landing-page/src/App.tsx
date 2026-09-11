import './App.css'
import Header from './components/SiteHeader'
import Hero from './components/Hero'
import Products from './components/Features'
import Approach from './components/Approach'
import CTA from './components/CTA'
import Footer from './components/SiteFooter'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Products />
      <Approach />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
