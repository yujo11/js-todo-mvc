import checkNewComponent from "../../utils/checkNewComponent.js";
import stringToNumber from "../../utils/stringToNumber.js";
import TodoItemCheckBox from "./TodoItemCheckBox.js";
import TodoItemContent from "./TodoItemContent.js";
import TodoItemDeleteButton from "./TodoItemDeleteButton.js";

export default function TodoItem({
  targetElement,
  todo,
  onToggle,
  onDelete,
  onChangeMode,
}) {
  checkNewComponent(TodoItem, this);

  const todoItemElement = document.createElement("li");
  targetElement.appendChild(todoItemElement);

  const { id, content, isCompleted, isEditing } = todo;
  todoItemElement.dataset.id = "todo-item";
  todoItemElement.dataset.todoid = id;
  todoItemElement.classList.add(
    isEditing === true
      ? "editing"
      : isCompleted === true
      ? "completed"
      : "false"
  );

  const divElement = document.createElement("div");
  divElement.classList.add("view");
  todoItemElement.appendChild(divElement);

  const todoCheckBox = new TodoItemCheckBox({
    targetElement: divElement,
    todo,
    onToggle,
  });
  const todoContent = new TodoItemContent({
    targetElement: divElement,
    todo,
    onChangeMode,
  });
  const todoDeleteButton = new TodoItemDeleteButton({
    targetElement: divElement,
    todo,
    onDelete,
  });

  const inputElement = document.createElement("input");
  inputElement.classList.add("edit");
  inputElement.value = content;
  todoItemElement.appendChild(inputElement);

  inputElement.addEventListener("keyup", (event) => {
    const liElement = event.target.closest("li");

    if (inputElement == null) return;
    const todoContentElement = liElement.querySelector("label");

    if (event.key === "Enter") {
      if (todoContentElement == null) return;

      onChangeMode(
        stringToNumber(liElement.dataset.todoid),
        event.target.value
      );
    } else if (event.key === "Escape") {
      if (todoContentElement == null) return;

      onChangeMode(stringToNumber(liElement.dataset.todoid));
    }
  });
}
