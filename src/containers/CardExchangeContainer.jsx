import { useState, useEffect } from "react";
import CardExchange from "../components/CardExchange";
import { v4 as uuidv4 } from 'uuid';

const CardExchangeContainer = (props) => {
  const { setHistory } = props;
  const [amount, setAmount] = useState(0);
  const [amountConverted, setAmountConverted] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('mxn');
  const [isLoading, setIsLoading] = useState(false);
  
  const exchangeAmount = async () => {
    setIsLoading(true)
    try {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`
      const res = await fetch(url)
      const result = await res.json()
      let fromCurrencyLowerCase = fromCurrency.toLowerCase()
      let toCurrencyLowerCase = toCurrency.toLowerCase()
      if (result[fromCurrencyLowerCase] && result[fromCurrencyLowerCase][toCurrencyLowerCase]) {
        let valueToCurrency = result[fromCurrencyLowerCase]
        let valueConvertion = valueToCurrency[toCurrencyLowerCase]
        let valueAmountConverted = amount * valueConvertion
        setAmountConverted(valueAmountConverted)
        const id = uuidv4();
        let newItemHistory = {
          id: id,
          from: fromCurrency,
          to: toCurrency,
          amount: amount,
          amountConverted: valueAmountConverted
        }
        setHistory(prev => [...prev, newItemHistory]);
      } else {
        alert('No se encontro la divisa')
      }
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   if (amount > 0) {
  //     exchangeAmount()
  //   }
  // }, [amount])
  return (
    <CardExchange 
      fromCurrency={fromCurrency}
      setFromCurrency={setFromCurrency}
      toCurrency={toCurrency}
      setToCurrency={setToCurrency}
      amount={amount}
      setAmount={setAmount}
      amountConverted={amountConverted}
      exchangeAmount={exchangeAmount}
      isLoading={isLoading}
    />
  )
}

export default CardExchangeContainer;