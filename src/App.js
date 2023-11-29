import Title from "./components/Title.js";
import TodoForm from "./components/TodoForm.js";

import TodoList from "./components/todoList/TodoList.js";
import TodoCount from "./components/TodoCount.js";

import { LOCALSTORAGE_KEY } from "./constants/constants.js";

import checkNewComponent from "./utils/checkNewComponent.js";
import { getTodoList, setTodoList } from "./utils/storage/localStorage.js";

export default function App({ targetElement }) {
  checkNewComponent(App, this);

  this.state = {
    todos: getTodoList(LOCALSTORAGE_KEY, []),
    todoFilter: "allTodo",
    selectedTodo: null,
  };

  this.setState = () => {
    this.state.todos = getTodoList(LOCALSTORAGE_KEY, []);

    const filteredTodos = filterTodos(this.state);

    const nextState = {
      ...this.state,
      todos: filteredTodos,
    };

    todoList.setState({
      ...this.state,
      todos: filteredTodos,
    });

    todoCount.setState(nextState);
  };

  function filterTodos({ todos, todoFilter }) {
    if (todoFilter === "allTodo") {
      return todos;
    } else if (todoFilter === "whatTodo") {
      const whatTodo = todos.filter((todo) => todo.isCompleted === false);
      return whatTodo;
    } else {
      const completedTodo = todos.filter((todo) => todo.isCompleted === true);
      return completedTodo;
    }
  }

  const title = new Title({ targetElement });

  const todoForm = new TodoForm({
    targetElement,
    onSubmit: (newTodo) => {
      const todos = getTodoList(LOCALSTORAGE_KEY, []);

      const nextTodos = [...todos, newTodo];
      setTodoList(LOCALSTORAGE_KEY, nextTodos);
      this.state.selectedTodo = null;
      this.setState();
    },
  });

  const mainElement = document.createElement("main");
  targetElement.appendChild(mainElement);

  const todoList = new TodoList({
    targetElement: mainElement,
    initialState: this.state,

    onToggle: (todoId) => {
      const totalTodoState = getTodoList(LOCALSTORAGE_KEY, []);
      const updatedTotalTodoState = totalTodoState.map((todo) =>
        todo.id === todoId && todo.isEditing === false
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

      setTodoList(LOCALSTORAGE_KEY, updatedTotalTodoState);
      this.setState();
    },
    onDelete: (todoId) => {
      const totalTodoState = getTodoList(LOCALSTORAGE_KEY, []);
      const updatedTotalTodoState = totalTodoState.filter(
        (todo) => todo.id !== todoId
      );

      setTodoList(LOCALSTORAGE_KEY, updatedTotalTodoState);
      this.setState();
    },
    onChangeMode: (todoId, todoContent = null) => {
      const totalTodoState = getTodoList(LOCALSTORAGE_KEY, []);
      const updatedTotalTodoState = totalTodoState.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              isEditing: !todo.isEditing,
              content: todoContent === null ? todo.content : todoContent,
            }
          : todo
      );

      setTodoList(LOCALSTORAGE_KEY, updatedTotalTodoState);
      this.state.selectedTodo = todoId;
      this.setState();
    },
  });

  const todoCount = new TodoCount({
    targetElement: mainElement,
    initialState: this.state,

    onSelect: (action) => {
      this.state.todoFilter = action;
      this.setState();
    },
  });
}
