import React, { useContext } from 'react';
import { transferContext } from './Parent'
function Child() {
  const value = useContext(transferContext)
  return (
    <div>
      <h6>children：{value}</h6>
    </div>
  );
}

export default Child;
