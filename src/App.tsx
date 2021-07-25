import React from "react";
import "./App.css";
import { Todos } from "./Components/Todos";

function App() {
  return (
    <div>
      <h2 className="text-center text-4xl mt-6 mb-3 text-gray-800 font-bold">
        TodoList App
      </h2>
      <Todos />
    </div>
  );
}

export default App;
