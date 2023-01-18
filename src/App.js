import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButtom } from "./CreateTodoButtom"
//import './App.css';

const DefaultTodos = [

  { text: 'cortar cebolla', completed: true },
  { text: 'cortar tomate', completed: false },
  { text: 'correr', completed: false },
  { text: 'correr una carreta', completed: true },

]

function App() {
  const [todos, setTodos] = React.useState(DefaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {<TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>}
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
