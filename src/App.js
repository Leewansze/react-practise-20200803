import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './Component/Counter';
import CounterGroup from './Component/CounterGroup';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
