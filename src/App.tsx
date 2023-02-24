import React from "react";
import { ToDoInput } from "./components/ToDoInput/ToDoInput.component";
import { TodoItem } from "./components/ToDoItem/ToDoItem.component";
import GlobalStyle from "./style/globalStyles";
// import { useState } from "react";

function App() {
  return (
    <main>
      <GlobalStyle />
      <h1>ToDo List</h1>
      <ToDoInput />
      <TodoItem />
    </main>
  );
}

export default App;
