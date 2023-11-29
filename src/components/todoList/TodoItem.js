import checkNewComponent from "../../utils/checkNewComponent.js";
import {
  getTempTodo,
  setTempTodo,
  removeTempTodo,
} from "../../utils/storage/localStorage.js";
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
  inputElement.value = getTempTodo(id, content);
  inputElement.name = id;
  todoItemElement.appendChild(inputElement);

  let timer = null;
  inputElement.addEventListener("keyup", (event) => {
    const liElement = event.target.closest("li");

    if (liElement == null) return;
    const todoContentElement = liElement.querySelector("label");

    if (event.key !== "Enter" && event.key !== "Escape") {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setTempTodo(liElement.dataset.todoid, event.target.value);
      }, 500);
    }

    if (event.key === "Enter") {
      if (todoContentElement == null) return;

      onChangeMode(
        stringToNumber(liElement.dataset.todoid),
        event.target.value
      );
      removeTempTodo(liElement.dataset.todoid);
    } else if (event.key === "Escape") {
      if (todoContentElement == null) return;

      onChangeMode(stringToNumber(liElement.dataset.todoid));
      removeTempTodo(liElement.dataset.todoid);
    }
  });
}
