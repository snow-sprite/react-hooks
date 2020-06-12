import React, { useRef } from 'react';

function Foo() {
  const inputEle = useRef(null);
  const setInputEle = () => {
    inputEle.current.value = new Date().getTime().toString()
    
  }
  return (
    <div>
      <input type="text" ref={inputEle} />
      <button onClick={setInputEle}>点击赋值</button>

      <br/>
      <br/>
      <hr/>
      {/* TODO: 保存值 */}
      
    </div>
  )
}

export default Foo;