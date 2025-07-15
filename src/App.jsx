import { useState } from 'react'
import './App.css'
import CardExchange from './components/CardExchange'

function App() {
  return (
    <>
      <h2 className='mb-3 font-bold'>Cambio de divisas</h2>
      <CardExchange />
    </>
  )
}

export default App
