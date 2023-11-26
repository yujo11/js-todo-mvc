import TodoItem from "./TodoItem.js";
import TodoListCount from "./TodoListCount.js";
import { LOCALSTORAGE_KEY } from "../../constants/Constants.js";
import { getTodoList } from "../../utils/storage/localStorage.js";

export default function TodoList({
  targetElement,
  initialState,
  onToggle,
  onDelete,
}) {
  const mainElement = document.createElement("main");
  targetElement.appendChild(mainElement);

  this.state = initialState;
  this.isTodoFilterSelected = null;

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
        onToggle,
        onDelete,
      });
    });

    const todoListCount = new TodoListCount({
      targetElement: mainElement,
      todoListState: this.state,
      isTodoFilterSelected:
        this.isTodoFilterSelected === null
          ? "allTodo"
          : this.isTodoFilterSelected,

      onSelect: (action) => {
        const storedTodoList = getTodoList(LOCALSTORAGE_KEY);
        this.isTodoFilterSelected = action;

        if (action === "allTodo") {
          this.setState(storedTodoList);
        } else if (action === "whatTodo") {
          const whatTodo = storedTodoList.filter(
            (todo) => todo.isCompleted === false
          );

          this.setState(whatTodo);
        } else {
          const completedTodo = storedTodoList.filter(
            (todo) => todo.isCompleted === true
          );
          this.setState(completedTodo);
        }
      },
    });

    todoListElement.appendChild(fragment);
    mainElement.prepend(todoListElement);
    targetElement.appendChild(mainElement);
  };

  this.render();
}
