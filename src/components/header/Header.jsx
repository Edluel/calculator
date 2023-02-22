import React from 'react';
import { useState } from 'react';


export default function Header() {
  const [theme, setTheme] = useState(1);

  const handleThemeChange = (event) => {
    const selectedTheme = parseInt(event.target.dataset.theme, 10);
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

  const applyTheme = (selectedTheme) => {
    // change body background color
    if (selectedTheme === 1) {
      require('../../../src/styles/themes/theme1/theme1.css');
    } else if (selectedTheme === 2) {
      require('../../../src/styles/themes/theme2/theme2.css');
    } else {
      require('../../../src/styles/themes/theme3/theme3.css');
    }  
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