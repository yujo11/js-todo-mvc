import StringToNumber from "../../utils/stringToNumber.js";

export default function TodoItemCheckBox({ targetElement, todo, onDelete }) {
  const todoDeleteButtonElement = document.createElement("button");
  targetElement.appendChild(todoDeleteButtonElement);

  const { id } = todo;
  todoDeleteButtonElement.dataset.id = "todo-delete-button";
  todoDeleteButtonElement.dataset.todoid = id;
  todoDeleteButtonElement.classList.add("destroy");

  todoDeleteButtonElement.addEventListener("click", (event) => {
    const todoItem = event.target.closest("li");

    if (todoItem != null) {
      const { todoid } = event.target.dataset;
      onDelete(StringToNumber(todoid));
    }
  });
}
