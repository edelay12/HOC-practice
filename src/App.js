import React from 'react';
import './App.css';
import Hover from './components/hover/hover';
import Buttons from './components/buttons/buttons';

function App() {
  return (
    <div className="App">
      <main className='App-body'>
        <Hover />
        <Buttons />
      </main>

      </div>
  );
}

export default App;
