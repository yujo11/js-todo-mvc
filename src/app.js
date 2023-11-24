import Header from "./Components/Header/Header.js";
import TodoList from "./Components/List/TodoList.js";
import { getTodoList, setNewTodoList, updateTodoList } from "./Storage/LocalStorage.js";
import { toggleCompleted } from "./function/util.js";

export default function App({ target }) {
  this.state = {
    todoList: [],
  };

  const setState = () => {
    this.state.todoList = getTodoList();
    console.log(this.state);
    todoList.setState(this.state.todoList);
  };
  // header
  new Header({
    target,
    onSubmit: (newTodo) => {
      setNewTodoList(newTodo);
      setState();
    },
  });

  const todoList = new TodoList({
    target,
    state: this.state.todoList,
    onToggle: (id) => {
      const { todoList } = this.state;

      const newTodoList = toggleCompleted({
        list: todoList,
        id,
      });
      updateTodoList(newTodoList);
      setState();
    },
  });

  setState();
}
