import React from "react";
import "./CreateTodoButtom.css"

function CreateTodoButtom() {
  const onClickBtn = (message) => {
    alert(message)
  }
  return (
    <button
      className="CreateTodoButton"
      //onclick recibe una funcion
      onClick={() => onClickBtn("aqui deberia haber un modal")}
    >+</button>
  );
}

export { CreateTodoButtom };