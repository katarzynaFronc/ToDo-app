import React from "react";
import { ToDoInput } from "./components/ToDoInput/ToDoInput.component";
import GlobalStyle from "./style/globalStyles";
// import { useState } from "react";

function App() {
  return (
    <main>
      <GlobalStyle />
      <h1>ToDo List</h1>
      <ToDoInput />
      <ul>
        <li>task 1</li>
        <li>task 2</li>
        <li>task 3</li>
      </ul>
    </main>
  );
}

export default App;
