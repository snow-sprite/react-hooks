import React, { useContext } from 'react';
import { transferContext } from './f'
function C() {
  const value = useContext(transferContext)
  return (
    <div>
      <h6>children：{value}</h6>
    </div>
  );
}

export default C;
