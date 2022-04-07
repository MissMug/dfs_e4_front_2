import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import NewTodoForm from "./TodoForm";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "task 1", completed: false },
    { id: uuidv4(), task: "task 2", completed: true },
  ]);

  const create = (newTodo) => {
    if (newTodo.task !== "") {
      console.log(newTodo);
      setTodos([...todos, newTodo]);
    }
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="toShow">
      <div className="TodoList">
        <h1
          style={{
            animation: "3s ease-in 1s infinite reverse both running slidein",
          }}
        >
          Todo List <span>Les taches du jour</span>
        </h1>
        <ul className="toShow">{todosList}</ul>
        <NewTodoForm createTodo={create} />
      </div>
    </div>
  );
}

export default TodoList;
