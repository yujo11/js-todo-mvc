import { TodoItem } from "../type";
import { $ } from "../util/query-selector";

const todoItemTemplate = (todo: TodoItem) => {
  return `
    <li class="todo-item ${todo.isCompleted ? "completed" : ""}" data-id="${
    todo.id
  }">
      <div class="view">
        <input class="toggle" type="checkbox" ${
          todo.isCompleted ? "checked" : ""
        } />
        <label class="label">${todo.text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${todo}" />
    </li>`;
};

export const todoListView = {
  setTodos: (todos: TodoItem[]) => {
    const $todoList = $("#todo-list");

    if ($todoList == null) {
      return;
    }

    $todoList.innerHTML = todos.map(todoItemTemplate).join("");
  },

  addTodo: (todo: TodoItem) => {
    $("#todo-list")?.insertAdjacentHTML("beforeend", todoItemTemplate(todo));
  },

  updateTodoText: (todoId: number, text: string) => {
    const $todo = $(`.todo-item[data-id="${todoId}"]`);

    if ($todo == null) {
      return;
    }

    const $label = $todo.querySelector(".label");

    if ($label == null) {
      return;
    }

    $label.textContent = text;
  },

  completeTodo: (todoId: number) => {
    const $todo = $(`.todo-item[data-id="${todoId}"]`);

    if ($todo == null) {
      return;
    }

    $todo.classList.add("completed");
  },

  unCompleteTodo: (todoId: number) => {
    const $todo = $(`.todo-item[data-id="${todoId}"]`);

    if ($todo == null) {
      return;
    }

    $todo.classList.remove("completed");
  },
  removeTodo: (todoId: number) => {
    const $todo = $(`.todo-item[data-id="${todoId}"]`);

    if ($todo == null) {
      return;
    }

    $todo.remove();
  },
};
