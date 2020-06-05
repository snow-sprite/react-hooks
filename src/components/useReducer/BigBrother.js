import React, { useContext } from 'react';
import { AllContext } from './Color'

function BigBrother() {
  const { color, fontSize } = useContext(AllContext)
  
  return (
    <div>
      <h5>我的颜色为：<span style={{color, fontSize}}>useReducer</span></h5>
    </div>
  )
}

export default BigBrother;
