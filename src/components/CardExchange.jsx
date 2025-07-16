import SelectCustom from "./SelectCustom";
import ButtonCustom from "./ButtonCustom";

const CardExchange = (props) => {
  const { 
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    amountConverted,
    exchangeAmount,
    isLoading
  } = props;
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
            onUpdate={(value) => setFromCurrency(value)}
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
        <ButtonCustom 
          label={"Convertir"}
          isLoading={isLoading}
          onAction={() => exchangeAmount()}
        />
      </div>
      <style>
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
        `}
      </style>
    </>
  )
}

export default CardExchange;