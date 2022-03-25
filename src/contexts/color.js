import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  // 상태
  state: { color: 'black', subcolor: 'red' },
  // 업데이트 함수 묶어서 전달. 
  actions: {
    setColor: () => { },
    setSubColor: () => { }
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubColor] = useState('red');

  const value = {
    state: { color, subcolor },
    action: { setColor, setSubColor }
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider 와 ColorConsumer 내보내기 
export { ColorProvider, ColorConsumer };

export default ColorContext;