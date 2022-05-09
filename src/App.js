import React, {useState} from 'react';
import './App.css';
import Container from './components/Container';
import ContainerClass from './components/ContainerClass';




function App() {

  return (
    <div className="app">
      <header>
        <h1>IMDb Movies App</h1>
      </header>
      <ContainerClass/>
    </div>
  );
}

export default App; 
