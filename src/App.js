import React from 'react';
import ColorContext from './contexts/color';
import ColorBox from './contexts/colorBox';

const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;