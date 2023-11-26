export default function renderTodoListTemplate(todoList) {
  return todoList
    .map((todo) => {
      let type = todo.completed ? "completed" : "";

      if (todo.editing) type = "editing";

      return `<li class="${type}" data-id="${todo.id}">
        <div class="view">
          <input class="toggle" type="checkbox" ${
            todo.completed && "checked"
          } />
          <label class="label">${todo.content}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo.content}" />
      </li>`;
    })
    .join("");
}
