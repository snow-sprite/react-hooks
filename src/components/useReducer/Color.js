import React, { createContext, useReducer } from 'react';
import * as types from './mutations'
export const AllContext = createContext()

// change color
export const reducerColor = (state, action) => {
  switch (action.type) {
    case types.UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

// change fontSize
export const reducerFontSize = (state, action) => {
  switch (action.type) {
    case types.UPDATE_FONT_SIZE:
      return action.fontSize
    default:
      return state
  }
}


export const ColorJs = props => {
  const [color, dispatchColor] = useReducer(reducerColor, 'blue')
  const [fontSize, dispatchFontSize] = useReducer(reducerFontSize, '28px')
  
  return (
    <AllContext.Provider value = {
      {
        color,
        fontSize,
        dispatchColor,
        dispatchFontSize
      }
    } >
      { props.children }
    </AllContext.Provider>
  );
};