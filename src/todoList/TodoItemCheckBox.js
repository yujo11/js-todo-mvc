export default function TodoItemCheckBox({ targetElement, todoState }) {
  const todoCheckBoxElement = document.createElement("input");
  targetElement.appendChild(todoCheckBoxElement);

  const { id, isCompleted } = todoState;
  todoCheckBoxElement.type = "checkbox";
  todoCheckBoxElement.dataset.id = "todo-checkbox";
  todoCheckBoxElement.dataset.todoid = id;
  todoCheckBoxElement.classList.add("toggle");
  todoCheckBoxElement.checked = isCompleted === true ? true : false;
}
