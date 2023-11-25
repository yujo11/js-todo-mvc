import TodoItem from "./TodoItem.js";

export default function TodoList({ targetElement, initialState, onToggle }) {
  const mainElement = document.createElement("main");
  targetElement.appendChild(mainElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (document.querySelector("#todo-list") != null) {
      mainElement.replaceChildren();
    }

    const todoListElement = document.createElement("ul");
    todoListElement.id = "todo-list";
    todoListElement.classList.add("todo-list");

    const fragment = document.createDocumentFragment();

    this.state.forEach((todoState) => {
      const todoItem = new TodoItem({
        targetElement: fragment,
        todoState,
      });
    });
    todoListElement.appendChild(fragment);
    mainElement.appendChild(todoListElement);
    targetElement.appendChild(mainElement);
  };

  this.render();

  mainElement.addEventListener("click", (event) => {
    const todoItem = event.target.closest("li");

    if (todoItem != null) {
      const { id, todoid } = event.target.dataset;

      const actions = {
        "todo-checkbox": onToggle,
      };
      if (actions[id] == null) {
        return;
      }
      actions[id](Number(todoid));
    }
  });
}
