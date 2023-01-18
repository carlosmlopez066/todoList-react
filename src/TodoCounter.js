import React from "react";
import "./TodoCounter.css"


function TodoCounter({ total, completedTodos }) {

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {total} TODOs</h2>
  );
}

export { TodoCounter }