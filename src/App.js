import React from "react";
import "./css/main.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>

      <Todos />
      <DisplayTodos />
      <h6>
        <i>created by Eyram Productions 2024</i>
      </h6>
    </div>
  );
}

export default App;
