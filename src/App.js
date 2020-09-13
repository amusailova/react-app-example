import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
