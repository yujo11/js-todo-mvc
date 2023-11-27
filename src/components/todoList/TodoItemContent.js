export default function TodoItemCheckBox({
  targetElement,
  todo,
  onChangeMode,
}) {
  const todoContentElement = document.createElement("label");
  targetElement.appendChild(todoContentElement);

  const { id, content, isEditing } = todo;

  todoContentElement.textContent = content;
  todoContentElement.dataset.id = "todo-content";
  todoContentElement.dataset.todoid = id;
  todoContentElement.classList.add("label");

  todoContentElement.addEventListener("dblclick", (event) => {
    const liElement = event.target.closest("li");
    console.log(event.target);
    console.log(liElement);
    if (liElement == null) return;
    const { id, todoid } = event.target.dataset;

    if (isEditing === true) return;
    onChangeMode(Number(todoid));
  });
}
