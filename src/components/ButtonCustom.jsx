import Loader from "./Loader";

const ButtonCustom = (props) => {
  const { label, isLoading, onAction } = props;
  return (
    <>
      {isLoading 
        ? (
          <div className="container-loader">
            <Loader />
          </div>
        ) : (
          <button 
            className="button-custom"
            onClick={() => onAction()}
          >
            {label}
          </button>
        )}
      <style jsx>
        {`
          .container-loader {
            height: 40px;
            width: 100%;
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button-custom {
            height: 40px;
            width: 100%;
            border-radius: 10px; 
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

export default ButtonCustom;