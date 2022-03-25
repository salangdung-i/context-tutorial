import React from 'react';
import { ColorProvider } from './contexts/color';
import ColorBox from './contexts/colorBox';
import SelectColors from './contexts/selectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;