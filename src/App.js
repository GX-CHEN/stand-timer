import React from "react";
import "./App.css";
import Donut from "./components/Donut";

function App() {
  return (
    <div className="main-container">
      <div className="chart-container">
        <Donut />
      </div>
    </div>
  );
}

export default App;
