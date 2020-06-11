import React, { useState, useMemo } from 'react';

function Parent() {
  const [firstName, setFirstName] = useState('周')
  const [lastName, setLastName] = useState('杰伦')

  return (
    <>
      <button onClick={_ => setFirstName(`${new Date().getTime()}周`)}>姓氏</button>
      <button onClick={_ => setLastName(`${new Date().getTime()}杰伦`)}>名字</button>
      <Child surName={firstName}>{lastName}</Child>
    </>
  )
}

function Child({surName, children}) {
  // 1. 如果不使用useMemo 点击Parent函数中的两个按钮 都会触发updateName函数
  // const myName = updateName()

  // 2. 使用useMemo
  const myName = useMemo(_ => updateName(children), [children])
  return (
    <>
      <h3><span style={{color: 'red'}}>{surName}</span><span style={{color: 'green'}}>{children}</span></h3>
      <h3>新名字：{myName}</h3>
    </>
  )
}

function updateName(children) {
  console.log(`新名字:${children}`)
  return `${children}`
}

export default Parent
