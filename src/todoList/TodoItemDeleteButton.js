export default function TodoItemCheckBox({
  targetElement,
  todoState,
  onDelete,
}) {
  const todoDeleteButtonElement = document.createElement("button");
  targetElement.appendChild(todoDeleteButtonElement);

  const { id } = todoState;
  todoDeleteButtonElement.dataset.id = "todo-delete-button";
  todoDeleteButtonElement.dataset.todoid = id;
  todoDeleteButtonElement.classList.add("destroy");

  todoDeleteButtonElement.addEventListener("click", (event) => {
    const todoItem = event.target.closest("li");

    if (todoItem != null) {
      const { todoid } = event.target.dataset;
      onDelete(Number(todoid));
    }
  });
}
