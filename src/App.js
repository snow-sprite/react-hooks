import React from 'react';
import './App.css';

/* useContext */
// import Area from './components/useContext/Parent';

/* useReducer */
// import Area from './components/useReducer/index'; 

/* useMemo */
// import Area from './components/useMemo/index';

/* useRef */
import Area from './components/useRef/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Area />
      </header>
    </div>
  );
}

export default App;
