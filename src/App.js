import React from "react";
import "./App.scss";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestampMs={1659983662000} />
    </div>
  );
}

export default App;
