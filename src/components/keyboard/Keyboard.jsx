import { render } from '@testing-library/react';
import React from 'react'
import { useState } from 'react';

export default function Keyboard(props) {
    const [value, setValue] = useState(0);
    const [oldValue, setOldValue] = useState(0);
    const [operator, setOperator] = useState(null);
    const theme = props.theme;

    const handleButtonClick = (value) => {
      
      if (typeof value === "number" || value === '.') {
        setValue(value);
      } else if (typeof value === "string") {
          const screen = document.querySelector('.calculator-screen');
          if (value === 'del') {
            if(screen.textContent.length === 1) {
              screen.textContent = '0';
            } else {
              screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
          } else if (value === 'reset') {
            screen.textContent = '0';
            setOldValue(0);
            setOperator(null);
            return;
          } else if (value === '=') {
              if (operator === '+') {
                screen.textContent = parseFloat(oldValue) + parseFloat(screen.textContent);
              } else if (operator === '-') {
                screen.textContent = parseFloat(oldValue) - parseFloat(screen.textContent);
              } else if (operator === 'x') {
                screen.textContent = parseFloat(oldValue) * parseFloat(screen.textContent);
              } else if (operator === '/') {
                screen.textContent = parseFloat(oldValue) / parseFloat(screen.textContent);
              }
              return;
          } else {
            setOperator(value);
            setOldValue(screen.textContent);
            screen.textContent = '0';
            return;
          }
      }


      updateScreen(value);
    }

    function updateScreen(value) {
        const screen = document.querySelector('.calculator-screen');
        if (screen.textContent === '0') {
            document.querySelector('.calculator-screen').textContent = value;
        } else {
            document.querySelector('.calculator-screen').textContent += value;
        }
    }

  return (
    <div className={`calculator-buttons ${theme === 1 ? 'theme-1' : theme === 2 ? 'theme-2' : 'theme-3'}`}>
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
