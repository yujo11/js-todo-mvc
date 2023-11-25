export default function TodoItemCheckBox({ targetElement, todoState }) {
  const todoDeleteButtonElement = document.createElement("button");
  targetElement.appendChild(todoDeleteButtonElement);

  const { id } = todoState;
  todoDeleteButtonElement.dataset.id = "todo-delete-button";
  todoDeleteButtonElement.dataset.todoid = id;
  todoDeleteButtonElement.classList.add("destroy");
}
