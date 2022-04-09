import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList.js";
import "./styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Project for Udemy react bootcamp
// https://www.udemy.com/course/modern-react-bootcamp/

function App() {
  return (
    <div class="p-3 mb-2 bg-info">
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
