import StringToNumber from "../../utils/stringToNumber.js";

export default function TodoItemCheckBox({ targetElement, todo, onToggle }) {
  const todoCheckBoxElement = document.createElement("input");
  targetElement.appendChild(todoCheckBoxElement);

  const { id, isCompleted } = todo;
  todoCheckBoxElement.type = "checkbox";
  todoCheckBoxElement.dataset.id = "todo-checkbox";
  todoCheckBoxElement.dataset.todoid = id;
  todoCheckBoxElement.classList.add("toggle");
  todoCheckBoxElement.checked = isCompleted === true ? true : false;

  todoCheckBoxElement.addEventListener("click", (event) => {
    const todoItem = event.target.closest("li");

    if (todoItem != null) {
      const { todoid } = event.target.dataset;
      onToggle(StringToNumber(todoid));
    }
  });
}
