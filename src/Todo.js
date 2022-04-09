import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (evt) => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };
  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>
            <i class="bi bi-save"> Save</i>
          </button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={toggleFrom}
            type="button"
            class="btn btn-outline-primary"
          >
            <i class="bi bi-pen" style={{ color: "#1F618D" }}>
              Edit
            </i>
          </button>
          <button
            onClick={handleClick}
            type="button"
            class="btn btn-outline-primary"
          >
            <i
              id={todo.id}
              className="bi bi-trash"
              style={{ color: "#7D3C98" }}
            >
              Trash
            </i>
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
