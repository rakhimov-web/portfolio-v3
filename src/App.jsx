import React from "react";
import Waiting from "./Waiting";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Waiting />
      <div className="loader"></div>
    </div>
  );
};

export default App;
