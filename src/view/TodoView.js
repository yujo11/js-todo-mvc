import { $ } from "../utils/querySelector.js";

const TodoView = class {
  constructor() {
    this.$todoList = $("#todo-list");
    this.$todoCount = $(".todo-count");
  }

  renderAll(todos) {
    console.log("todos", todos);

    this.$todoList.innerHTML = todos
      .map((todo, index) => {
        return `
          <li data-index="${index}" class="todo-item  ${
          todo.completed && "completed"
        }">
            <input type="checkbox" class="toggle" ${
              todo.completed && "checked"
            } />
            <label class="label">${todo.title}</label>
            <button class="destroy"></button>
          </li>
        `;
      })
      .join("");
  }

  renderCount(count) {
    this.$todoCount.innerHTML = `총 <strong>${count}</strong> 개`;
  }
};

export default TodoView;
