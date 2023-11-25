export default function TodoItemCheckBox({ targetElement, todoState }) {
  const todoContentElement = document.createElement("label");
  targetElement.appendChild(todoContentElement);

  const { id, content } = todoState;

  todoContentElement.textContent = content;
  todoContentElement.dataset.id = "todo-content";
  todoContentElement.dataset.todoid = id;
  todoContentElement.classList.add("label");
}
