import React from "react";
import "./EmptyTodos.css"

function EmptyTodos() {
  return (
    <div className="EmptyScreen">
      <p>No tienes TODOs pendientes. ¡Crea uno!</p>
      <img src="https://cdn-icons-png.flaticon.com/512/5058/5058507.png" />
    </div>
  )
}
export { EmptyTodos };