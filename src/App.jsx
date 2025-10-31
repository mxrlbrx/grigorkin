import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { MainUnit } from './MainUnit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header image='/myLogo.svg' />
      <MainUnit />
    </>
  )
}

export default App
