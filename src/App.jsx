import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Hero } from './Hero'

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
