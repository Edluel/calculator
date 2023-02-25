import React, { useState } from 'react';
import Header from './components/header/Header';
import Screen from './components/screen/Screen';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  const [theme, setTheme] = useState(1);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme}/>
      <Screen theme={theme}/>
      <Keyboard theme={theme}/>
    </div>
  );
}

export default App;
