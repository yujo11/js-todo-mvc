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

    const todoList = document.createElement("ul");
    todoList.id = "todo-list";
    todoList.classList.add("todo-list");

    const fragment = document.createDocumentFragment();

    this.state.forEach(({ id, content, isCompleted }) => {
      const todoItem = document.createElement("li");
      todoItem.dataset.id = "todo-item";
      todoItem.dataset.todoid = id;
      todoItem.classList.add("todo-item", "false");
      if (isCompleted === true) {
        todoItem.classList.toggle("false");
        todoItem.classList.add("completed");
      }

      const todoCheckBox = document.createElement("input");
      todoCheckBox.type = "checkbox";
      todoCheckBox.dataset.id = "todo-checkbox";
      todoCheckBox.dataset.todoid = id;
      todoCheckBox.classList.add("toggle");
      todoCheckBox.checked = isCompleted === true ? true : false;

      const todoContent = document.createElement("label");
      todoContent.textContent = content;
      todoContent.dataset.id = "todo-content";
      todoContent.dataset.todoid = id;
      todoContent.classList.add("label");

      const todoDeleteButton = document.createElement("button");
      todoDeleteButton.dataset.id = "todo-delete-button";
      todoDeleteButton.dataset.todoid = id;
      todoDeleteButton.classList.add("destroy");

      todoItem.append(todoCheckBox, todoContent, todoDeleteButton);
      fragment.appendChild(todoItem);
    });
    todoList.appendChild(fragment);
    mainElement.appendChild(todoList);
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
