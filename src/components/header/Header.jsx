import React from 'react';
import { useState } from 'react';

export default function Header(props) {
  const { theme, setTheme } = props;

  bodyBackground(theme);

  const handleThemeChange = (event) => {
    const selectedTheme = parseInt(event.target.dataset.theme, 10);
    setTheme(selectedTheme);
    bodyBackground(selectedTheme);
  };

  function bodyBackground(theme) {
    if (theme === 1) {
      document.body.style.background = 'hsl(222, 26%, 31%)';
    } else if (theme === 2) {
      document.body.style.background = 'hsl(0, 0%, 90%)';
    } else {
      document.body.style.background = 'hsl(268, 75%, 9%)';
    }
  }

  return (
    <div className={`header-container ${theme === 1 ? 'theme-1' : theme === 2 ? 'theme-2' : 'theme-3'}`}>
      <header className='header'>
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