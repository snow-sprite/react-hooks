import React, {
  useEffect,
  useState,
  createContext
} from 'react'
import Child from './Child';
export const transferContext = createContext();

function Parent() {
  const [count, setCount] = useState(0)
  const [text, changeText] = useState('初始值')
  
  const countEvent = (c, t) => {
    setCount(c+=1)
    // TODO count递增 text多次重复修改
    changeText(t = '修改值')
  }
  useEffect(() => {
    // changeText(text =>  text = '修改值')
  }, [count])
  
  return (
    <div>
      <h2>useContext:</h2>
      <h5>
        <span>parent：{text}：{count}</span>
        <button onClick={ _ => countEvent(count, text) }>父增</button>
      </h5>
      {/* transferContext.Provider 嵌套组件向下传递属性的容器 */}
      <transferContext.Provider value={count}>
        <Child />
      </transferContext.Provider>
    </div>
  )
}
export default Parent;
