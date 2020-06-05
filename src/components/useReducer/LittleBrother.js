import React, { useContext } from 'react';
import { AllContext } from './Color';
import * as types from './mutations'



function LittleBrother() {
  const { dispatchColor, dispatchFontSize } = useContext(AllContext);
  return (
    <div>
      <button onClick={ _ => dispatchColor({ type: types.UPDATE_COLOR, color: 'red' }) }>红色</button>
      <button onClick={ _ => dispatchColor({ type: types.UPDATE_COLOR, color: 'green' }) }>绿色</button>

      <button onClick={ _ => dispatchFontSize({ type: types.UPDATE_FONT_SIZE, fontSize: '56px' }) }>字体</button>
    </div>
  );
}

export default LittleBrother;
