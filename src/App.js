import React, {useState} from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import ContainerClass from './components/ContainerClassSearch';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {

  return (
    <Router>
      <div className="app">
        <Navbar/>
        <AppContainer/>
      </div>
    </Router>  
  );
}

export default App; 
