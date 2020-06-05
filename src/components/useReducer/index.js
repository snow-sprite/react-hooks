// import React, { useState } from 'react';
import React from 'react';
import { ColorJs } from './Color'
import BigBrother from './BigBrother';
import LittleBrother from './LittleBrother';

function UseReducerDemo() {
  // const [color] = useState('red')
  
  return (
    <ColorJs>
      <BigBrother />
      <LittleBrother />
    </ColorJs>
  );
}

export default UseReducerDemo;
