import '@/App.css'
import { Header } from '@/layout/Header/Header'
import { Hero } from '@/sections/Hero'

function App() {

  return (
    <>
    <header>
      <Header image='/myLogo.svg' />
    </header>
    <Hero />

    </>
  )
}

export default App
