import React, {
  useEffect,
  useState,
  createContext,
  useReducer
} from 'react'
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
      <h2>useContext:</h2>
      <h5>
        <span>parent：{text}：{count}</span>
        <button onClick={_ => setCount(count + 1) }>父增</button>
      </h5>
      {/* transferContext.Provider 嵌套组件向下传递属性的容器 */}
      <transferContext.Provider value={count}>
        <C />
      </transferContext.Provider>

      <hr />
      <h2>useReducer:</h2>
    </div>
  )
}
export default F;
