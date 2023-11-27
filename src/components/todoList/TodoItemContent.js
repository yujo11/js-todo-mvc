import checkNewComponent from "../../utils/checkNewComponent.js";

export default function TodoItemContent({ targetElement, todo, onChangeMode }) {
  checkNewComponent(TodoItemContent, this);

  const todoContentElement = document.createElement("label");
  targetElement.appendChild(todoContentElement);

  const { id, content, isEditing } = todo;

  todoContentElement.textContent = content;
  todoContentElement.dataset.id = "todo-content";
  todoContentElement.dataset.todoid = id;
  todoContentElement.classList.add("label");

  todoContentElement.addEventListener("dblclick", (event) => {
    const liElement = event.target.closest("li");

    if (liElement == null) return;
    const { todoid } = event.target.dataset;

    if (isEditing === true) return;
    onChangeMode(Number(todoid));
  });
}
