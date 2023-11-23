import Header from "./Components/Header/Header.js";
import { getTodoList, setTodoList } from "./Storage/LocalStorage.js";

export default function App({ target }) {
  this.state = {
    todoList: [],
  };

  const setState = () => {
    this.state.todoList = getTodoList();
    console.log(this.state);
  };
  // header
  new Header({
    target,
    onSubmit: (newTodo) => {
      setTodoList(newTodo);
    },
  });

  setState();
}
