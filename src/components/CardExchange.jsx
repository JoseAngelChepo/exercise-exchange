import { useState, useEffect } from "react";
import SelectCustom from "./SelectCustom";
import Loader from "./Loader";

const CardExchange = () => {
  const [amount, setAmount] = useState(0);
  const [amountConverted, setAmountConverted] = useState(0);
  const [fromCurrency, setfromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('mxn');
  const [isLoading, setIsLoading] = useState(false);

  const exchangeAmount = async () => {
    setIsLoading(true)
    console.log("Se ejecutará exchangeAmount " + amount)
    try {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`
      const res = await fetch(url)
      const result = await res.json()
      let fromCurrencyLowerCase = fromCurrency.toLowerCase()
      let toCurrencyLowerCase = toCurrency.toLowerCase()
      if (result[fromCurrencyLowerCase]) {
        let valueToCurrency = result[fromCurrencyLowerCase]
        let valueConvertion = valueToCurrency[toCurrencyLowerCase]
        setAmountConverted(amount * valueConvertion)
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
    <>
      <div className="container-card">
        <div className="container-input">
          <input 
            className="input-custom"
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <SelectCustom
            value={fromCurrency}
            onUpdate={(value) => setfromCurrency(value)}
          />
        </div>
        <div className="container-input">
          <input
            className="input-custom"
            type="text"
            value={amountConverted.toFixed(2)}
            readOnly
          />
          <SelectCustom
            value={toCurrency}
            onUpdate={(value) => setToCurrency(value)}
          />
        </div>
        {isLoading 
          ? (
            <div className="container-loader">
              <Loader />
            </div>
          ) : (
            <button 
              className="button-change"
              onClick={() => exchangeAmount()}
            >
              Convertir
            </button>
          )}
      </div>
      <style jsx>
        {`
          .container-card {
            border: 1px solid #000;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
          }
          .container-input {
            margin: 10px 0px;
            display: flex;
            gap: 10px;
          }
          .input-custom {
            width: 200px;
            height: 40px;
            border: 1px solid #000;
            border-radius: 10px; 
            padding: 0px 10px;
          }
          .button-change {
            height: 40px;
            width: 100%;
            border-radius: 10px; 
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container-loader {
            height: 40px;
            width: 100%;
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

export default CardExchange;