import Header from "./Components/Header/Header.js";
import TodoList from "./Components/List/TodoList.js";
import Footer from "./Components/Footer/Footer.js";
import { getTodoList, setNewTodoList, updateTodoList } from "./Storage/LocalStorage.js";
import { deleteTodo, editTodo, toggleCompleted } from "./function/util.js";

export default function App({ target }) {
  this.state = {
    todoList: [],
    totalCount: 0,
  };

  const setState = () => {
    this.state.todoList = getTodoList();
    this.state.totalCount = this.state.todoList.length;
    console.log(this.state);
    todoList.setState(this.state.todoList);
    footer.setState(this.state.totalCount);
  };

  // header
  new Header({
    target,
    onSubmit: (newTodo) => {
      setNewTodoList(newTodo);
      setState();
    },
  });

  // todoList
  const todoList = new TodoList({
    target,
    state: this.state.todoList,
    onToggle: (id) => {
      const newTodoList = toggleCompleted({
        list: this.state.todoList,
        id,
      });
      updateTodoList(newTodoList);
      setState();
    },
    onDelete: (id) => {
      const deletedList = deleteTodo({
        list: this.state.todoList,
        id,
      });
      updateTodoList(deletedList);
      setState();
    },
    // 실시간 반영이 좋을까... 아니면 엔터에 맞게 수정이 좋을까..
    onEdited: ({ id, editedTitle }) => {
      const editedList = editTodo({
        list: this.state.todoList,
        id,
        editedTitle,
      });
      updateTodoList(editedList);
      setState();
    },
  });

  //footer
  const footer = new Footer({
    target,
    state: this.state.totalCount,
  });

  setState();
}
