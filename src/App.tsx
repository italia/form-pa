import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JsonFormsDispatch } from '@jsonforms/react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        {/* other markup... */}
        <JsonFormsDispatch />
      </div>
    </div>
  );
}

export default App;
