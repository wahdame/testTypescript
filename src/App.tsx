import React from "react";
import "./App.css";
import Todos from "./calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          className="App-link"
          rel="noopener noreferrer"
          disabled
          data-testid="first-legend-element"
        >
          Learn React
        </button>
        <Todos />
      </header>
    </div>
  );
}

export default App;
