import React from "react";
import "./CreateTodoButtom.css"

function CreateTodoButtom(props) {
  const btn = document.querySelector(".CreateTodoButton")
  const onClickBtn = () => {
    if (!props.openModal) {
      props.setOpenModal(true);
      btn.classList.add("plusIndex")
    } else {
      props.setOpenModal(false);
      btn.classList.remove("plusIndex")

    }
  }
  return (
    <button
      className="CreateTodoButton"
      //onclick recibe una funcion
      onClick={onClickBtn}
    >+</button>
  );
}

export { CreateTodoButtom };