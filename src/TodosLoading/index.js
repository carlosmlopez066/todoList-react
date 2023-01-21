import React from "react";
import "./TodosLoading.css"

function TodosLoading() {
  return (
    <div className="loadingFather">
      <div className="LoadingBox">
        <p>Cargando...</p>
      </div>
      <div className="LoadingBox">
        <p>Cargando...</p>

      </div>
      <div className="LoadingBox">
        <p>Cargando...</p>

      </div>
    </div>
  );
}
export { TodosLoading };