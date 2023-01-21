import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);

  };
  window.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      onSubmit(event)
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar los tomates"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >
          Añadir
        </button>

      </div>
    </form >
  )

}

export { TodoForm };