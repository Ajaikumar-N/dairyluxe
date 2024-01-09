import "../cssFiles/button.css"

const Button = ({ type, value, onClick }) => {
    return (
      <button type={type} onClick={onClick} className="custom-button">
        {value}
      </button>
    );
  };
  
  export { Button };