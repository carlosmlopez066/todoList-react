import React from "react";
import "./TodosError.css"
function TodosError() {
  return (
    <div className="errorScreen">
      <p>¡Oops! Algo ha salido mal</p>
      <img src="https://www.infusioninvestments.com/assets/img/master_options_checkout/checkout_fail.webp" />
    </div>
  );
}
export { TodosError };