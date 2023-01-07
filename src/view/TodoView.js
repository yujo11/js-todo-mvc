import { $ } from "../utils/querySelector.js";

const TodoView = class {
  constructor() {
    this.$todoList = $("#todo-list");
    this.$todoCount = $(".todo-count");
    this.$filters = $(".filters");
  }

  renderTodos(todos) {
    this.$todoList.innerHTML = todos
      .map((todo, index) => {
        return todo.editing
          ? `
            <li data-index="${index}" class="editing">
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label class="label">완료된 타이틀</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value=${todo.title} />
            </li>
        `
          : `
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

  renderFilter(filter) {
    const $filter = this.$filters.querySelector(`.${filter}`);

    this.$filters
      .querySelectorAll("a")
      .forEach(($filter) => $filter.classList.remove("selected"));

    $filter.classList.add("selected");
  }
};

export default TodoView;
