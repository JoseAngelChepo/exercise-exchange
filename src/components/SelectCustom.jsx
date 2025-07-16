const SelectCustom = (props) => {
  const { value, onUpdate } = props;
  const options = [
    { label: 'MXN', value: 'mxn' },
    { label: 'USD', value: 'usd' },
    { label: 'BTC', value: 'bitcoin' },
    { label: 'ETH', value: 'ethereum' },
  ]
  const updateOption = (event) => {
    onUpdate(event.target.value)
  }
  return (
    <>
      <select
        className="select-custom"
        value={value}
        onChange={updateOption}
      >
        {options.map(option => 
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        )}
      </select>
      <style jsx>
        {`
          .select-custom {
            width: 100px;
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

export default SelectCustom;