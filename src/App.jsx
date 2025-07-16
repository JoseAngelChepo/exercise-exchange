import { useEffect, useState } from 'react'
import './App.css'
import CardExchangeContainer from './containers/CardExchangeContainer'
import HistoryExchange from './components/HistoryExchange'
import ListCurrencies from './components/ListCurrencies'
const mockHistory = [
  { id: "1", from: 'USD', to: 'MXN', amount: 20, amountConverted: 377 },
  { id: "2", from: 'USD', to: 'MXN', amount: 20, amountConverted: 377 },
]

function App() {
  const [history, setHistory] = useState(mockHistory)
  return (
    <>
      <h2 className='mb-5 font-bold'>Divisas</h2>
      {/* <ListCurrencies /> */}
      <h2 className='mb-5 font-bold'>Cambio de divisas</h2>
      <div className='flex gap-5'>
        <CardExchangeContainer setHistory={setHistory}/>
        <HistoryExchange history={history} setHistory={setHistory}/>
      </div>
    </>
  )
}

export default App
