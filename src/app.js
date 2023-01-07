import TodoController from "./controller/TodoController.js";
import { $ } from "./utils/querySelector.js";

const app = () => {
  const todoController = new TodoController();

  $("#new-todo-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target.elements["new-todo-title"].value.trim();

    if (title.length) {
      todoController.add(title);
      e.target.reset();
    }
  });

  $("#todo-list").addEventListener("click", ({ target }) => {
    const index = target.closest("li").dataset.index;

    if (target.classList.contains("toggle")) {
      todoController.toggle(index);
    } else if (target.classList.contains("destroy")) {
      todoController.remove(index);
    }
  });

  $("#todo-list").addEventListener("dblclick", ({ target }) => {
    const index = target.closest("li").dataset.index;

    if (target.classList.contains("label")) {
      todoController.edit(index);
    }
  });

  $("#todo-list").addEventListener("keyup", ({ target, key }) => {
    const index = target.closest("li").dataset.index;

    if (!target.classList.contains("edit")) return;

    if (key === "Enter") {
      todoController.save(index, target.value);
    } else if (key === "Escape") {
      todoController.cancel(index);
    }
  });

  $(".filters").addEventListener("click", ({ target }) => {
    switch (true) {
      case target.classList.contains("active"):
        todoController.selectActive();

      case target.classList.contains("completed"):
        todoController.selectCompleted();

      default:
        todoController.selectAll();
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  app();
});
