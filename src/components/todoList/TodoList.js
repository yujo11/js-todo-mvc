import checkNewComponent from "../../utils/checkNewComponent.js";
import TodoItem from "./TodoItem.js";

export default function TodoList({
  targetElement,
  initialState,
  onToggle,
  onDelete,
  onChangeMode,
}) {
  checkNewComponent(TodoList, this);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const { todos, selectedTodo } = this.state;
    if (document.querySelector("#todo-list") != null) {
      targetElement.replaceChildren();
    }

    const todoListElement = document.createElement("ul");
    todoListElement.id = "todo-list";
    todoListElement.classList.add("todo-list");

    const fragment = document.createDocumentFragment();

    todos.forEach((todo) => {
      const todoItem = new TodoItem({
        targetElement: fragment,
        todo,
        onToggle,
        onDelete,
        onChangeMode,
      });
    });

    todoListElement.appendChild(fragment);
    targetElement.prepend(todoListElement);

    const inputElements = document?.querySelectorAll(".edit");
    if (inputElements != null && selectedTodo != null) {
      const inputElement = Array.from(inputElements).find(
        (inputElement) => inputElement.name === String(selectedTodo)
      );
      inputElement.focus();
    }
  };

  this.render();
}
