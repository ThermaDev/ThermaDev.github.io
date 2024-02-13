import React from 'react';
import Resource from './Components/Resource';
import Main from './Components/Main';
import Shop from './Components/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bar'>Header</div>
      <div className='flex-container'>
        <div className='resource side'><Resource /></div>
        <div className='main'><Main /></div>
        <div className='shop side'><Shop /></div>
      </div>
      <div className='bar'>Footer</div>
    </div>
  );
}

export default App;
