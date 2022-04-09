import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
//import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css";
import { motion } from "framer-motion";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = { id: uuidv4(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <motion.div
        animate={{ scale: 1.2 }}
        transition={{
          type: "spring",
          damping: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <label htmlFor="task">Une nouvelle tâche ; c'est par ici!</label>
      </motion.div>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>
        <i class="bi bi-plus-circle-dotted"> Add Todo</i>
      </button>
    </form>
  );
}

export default NewTodoForm;
