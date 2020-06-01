import React, { useEffect, useState, createContext } from 'react'
import C from './c';
export const transferContext = createContext();

function F() {
  const [count, setCount] = useState(0)
  const [text, changeText] = useState('初始值')
  
  useEffect(() => {
    changeText(text =>  text = '修改值')
  }, [count])
  
  return (
    <div>
      <h2>parent：{text}：{count}</h2>
      <button onClick={_ => setCount(count + 1) }>父增</button>
      <transferContext.Provider value={count}>
        <C />
      </transferContext.Provider>
    </div>
  )
}
export default F;
