import { useState } from 'react'
import './App.css'
import { Titulo } from './components/Titulo'
import { Suma } from './components/Suma'
import { TituloAlt } from './components/TituloAlt'


function App() {

  return (
    <>
      <TituloAlt condicion={false} />

      <Suma A={10} B={20}/>
    
    </>
  )
}

export default App
