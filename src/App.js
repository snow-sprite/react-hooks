import React from 'react';
import './App.css';

/* useContext */
// import Area from './components/useContext/Parent';

/* useReducer */
import Area from './components/useReducer/index'; 

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
