import { useState } from "react";
import { IoRemoveCircle } from "react-icons/io5";

const HistoryExchange = (props) => {
  const { history, setHistory } = props;

  const removeItem = (idToRemove) => {
    if (confirm("Seguro que quieres eliminar este elemento?")) {
      setHistory(prev => prev.filter(item => item.id !== idToRemove));
    }
  }
  return (
    <>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Amount Converted</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            {history.map(item => (
              <tr key={item.id}>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.amount}</td>
                <td>{item.amountConverted.toFixed(2)}</td>
                <td>
                  <button className="button-remove" onClick={() => removeItem(item.id)}>
                    <IoRemoveCircle size={16}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>
        {`
          .container-table {
            border: 1px solid #000;
            border-radius: 10px;
            padding: 10px;
          }
          .container-table th {
            max-width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0px 10px 5px 0px;
            font-size: .9rem;
            font-weight: 600;
            border-bottom: 1px solid #000;
          }
          .container-table td {
            font-size: .9rem;
            font-weight: 400;
          }
          .button-remove {
            background: none;
            border: none;
            color: #000;
            outline: none;
          }
          .button-remove:hover {
            outline: none;
          }
        `}
      </style>
    </>
  )
}

export default HistoryExchange;