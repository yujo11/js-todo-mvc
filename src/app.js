import TodoController from "./controller/TodoController.js";
import { $ } from "./utils/querySelector.js";

const app = () => {
  const todoController = new TodoController();

  $("#new-todo-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target.elements["new-todo-title"].value.trim();

    if (!title.length) return;

    e.target.reset();
    todoController.add(title);
  });

  $("#todo-list").addEventListener("click", ({ target }) => {
    const index = target.closest("li").dataset.index;

    if (target.classList.contains("toggle")) {
      todoController.toggle(index);
    } else if (target.classList.contains("destroy")) {
      todoController.remove(index);
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  app();
});
