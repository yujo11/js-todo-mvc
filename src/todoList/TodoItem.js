import TodoItemCheckBox from "./TodoItemCheckBox.js";
import TodoItemContent from "./TodoItemContent.js";
import TodoItemDeleteButton from "./TodoItemDeleteButton.js";

export default function TodoItem({ targetElement, todoState }) {
  const todoItemElement = document.createElement("li");
  targetElement.appendChild(todoItemElement);

  const { id, isCompleted } = todoState;
  todoItemElement.dataset.id = "todo-item";
  todoItemElement.dataset.todoid = id;
  todoItemElement.classList.add(
    "todo-item",
    isCompleted === true ? "completed" : "false"
  );

  const todoCheckBox = new TodoItemCheckBox({
    targetElement: todoItemElement,
    todoState,
  });
  const todoContent = new TodoItemContent({
    targetElement: todoItemElement,
    todoState,
  });
  const todoDeleteButton = new TodoItemDeleteButton({
    targetElement: todoItemElement,
    todoState,
  });
}
