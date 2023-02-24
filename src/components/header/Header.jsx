import React from 'react';
import { useState } from 'react';
import applyTheme from './applyTheme';

applyTheme(1);

export default function Header() {
  const [theme, setTheme] = useState(1);

  const handleThemeChange = (event) => {
    const selectedTheme = parseInt(event.target.dataset.theme, 10);
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

  return (
    <div className="header-container">
      <header className="header">
        <h1 className="header-title">calc</h1>
        <div className="header-theme">
          <h3 className="header-theme-title">THEME</h3>
          <div className="header-theme-options">
            <div
              onClick={handleThemeChange}
              data-theme="1"
              className={`header-theme-option ${theme === 1 ? "selected" : ""}`}
            >
              1
            </div>
            <div
              onClick={handleThemeChange}
              data-theme="2"
              className={`header-theme-option ${theme === 2 ? "selected" : ""}`}
            >
              2
            </div>
            <div
              onClick={handleThemeChange}
              data-theme="3"
              className={`header-theme-option ${theme === 3 ? "selected" : ""}`}
            >
              3
            </div>
          </div>{/*header theme optionsr*/}
        </div>{/*header theme control*/}
      </header> {/*header container*/}
    </div>
  );
}