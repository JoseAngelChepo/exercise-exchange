import { useMemo, useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

const ListCurrencies = () => {
  const [currencies, setCurrencies] = useState([])
  const [min, setMin] = useState(0.1)
  const [max, setMax] = useState(0.6)
  
  const fetchData = async () => {
    const url = `https://financialmodelingprep.com/api/v3/fx?apikey=${apiKey}`
    const res = await fetch(url)
    const result = await res.json()
    console.log("Se obtuvieron: " + result.length)
    setCurrencies(result)
  }

  const filteredData = useMemo(() => {
    console.log('se ejecutó filtro')
    return currencies.filter(item => item.ask >= min && item.ask <= max)
  }, [min, max])
  
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className="flex gap-10 mb-5">
        <input className="border rounded" type="text" placeholder="Min" value={min} onChange={(e) => setMin(e.target.value)}/>
        <input className="border rounded" type="text" placeholder="Max" value={max} onChange={(e) => setMax(e.target.value)}/>
        <button className="h-[30px] flex items-center" onClick={() => {}}>Buscar</button>
        <p>Total filtrados: {filteredData.length}</p>
      </div>
      <div className="container-list-currencies">
        {filteredData.map(item => 
          <div key={item.ticker} className="item-custom">
            <p>{item.ticker}</p>
            <p>{item.ask}</p>
            <p>Date: </p>
            <p>{item.date}</p>
          </div>
        )}
      </div>
      <div className="container-list-currencies">
        {currencies.map(item => 
          <div key={item.ticker} className="item-custom">
            <p>{item.ticker}</p>
            <p>{item.ask}</p>
            <p>Date: </p>
            <p>{item.date}</p>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container-list-currencies {
            display: flex;
            flex-direction: column;
            height: 200px;
            overflow: scroll;
            margin-bottom: 50px;
          }
          .item-custom{ 
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}

export default ListCurrencies;