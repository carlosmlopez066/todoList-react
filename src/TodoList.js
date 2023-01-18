import React from "react";
import "./TodoList.css"

function TodoList(props) {
  return (
    <section className="section-todo">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };