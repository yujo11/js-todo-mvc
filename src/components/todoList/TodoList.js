import TodoItem from "./TodoItem.js";

export default function TodoList({
  targetElement,
  initialState,
  onToggle,
  onDelete,
  onChangeMode,
}) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    if (document.querySelector("#todo-list") != null) {
      targetElement.replaceChildren();
    }

    const todoListElement = document.createElement("ul");
    todoListElement.id = "todo-list";
    todoListElement.classList.add("todo-list");

    const fragment = document.createDocumentFragment();

    this.state.forEach((todo) => {
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
  };

  this.render();
}
