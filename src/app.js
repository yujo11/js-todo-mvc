import Header from "./Components/Header/Header.js";
import TodoList from "./Components/List/TodoList.js";
import { getTodoList, setTodoList } from "./Storage/LocalStorage.js";

export default function App({ target }) {
  this.state = {
    todoList: [],
  };

  const setState = () => {
    this.state.todoList = getTodoList();
    todoList.setState(this.state.todoList);
  };
  // header
  new Header({
    target,
    onSubmit: (newTodo) => {
      setTodoList(newTodo);
      setState();
    },
  });

  const todoList = new TodoList({
    target,
    state: this.state.todoList,
  });

  setState();
}
