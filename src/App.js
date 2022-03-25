import React from 'react';
import ColorContext, { ColorProvider } from './contexts/color';
import ColorBox from './contexts/colorBox';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;