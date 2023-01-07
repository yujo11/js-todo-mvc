import TodoController from "./controller/TodoController.js";
import { $ } from "./utils/querySelector.js";

const app = () => {
  const todoController = new TodoController();

  $("#new-todo-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target.elements["new-todo-title"].value;

    todoController.add(title);
    e.target.reset();

    console.log("todoController.getAll()", todoController.getAll());
  });
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("123");

  app();
});
