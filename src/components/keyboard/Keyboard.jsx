import React from 'react'

export default function Keyboard() {

    const handleButtonClick = (value) => {
        console.log(value);
    }

  return (
    <div className="calculator-buttons">
      <button onClick={() => handleButtonClick(7)}>7</button>
      <button onClick={() => handleButtonClick(8)}>8</button>
      <button onClick={() => handleButtonClick(9)}>9</button>
      <button onClick={() => handleButtonClick('del')} className="undo-bt">DEL</button>
      <button onClick={() => handleButtonClick(4)}>4</button>
      <button onClick={() => handleButtonClick(5)}>5</button>
      <button onClick={() => handleButtonClick(6)}>6</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick(1)}>1</button>
      <button onClick={() => handleButtonClick(2)}>2</button>
      <button onClick={() => handleButtonClick(3)}>3</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <button onClick={() => handleButtonClick('.')}>.</button>
      <button onClick={() => handleButtonClick(0)}>0</button>
      <button onClick={() => handleButtonClick('/')}>/</button>
      <button onClick={() => handleButtonClick('x')}>x</button>
      <button onClick={() => handleButtonClick('reset')} className="undo-bt two-columns">RESET</button>
      <button onClick={() => handleButtonClick('=')} className="equal two-columns">=</button>
    </div>
  )
}
