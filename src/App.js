import React from "react";
import AppContainer from "./components/AppContainer";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AppContainer />
      </div>
    </Router>
  );
}

export default App;
