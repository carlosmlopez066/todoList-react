import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButtom } from "./CreateTodoButtom"
//import './App.css';

const todos = [

  { text: 'cortar cebolla', completed: false },
  { text: 'cortar tomate', completed: false },
  { text: 'correr', completed: false },

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>}
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
