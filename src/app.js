import Header from "./Components/Header/Header.js";
import TodoList from "./Components/List/TodoList.js";
import Footer from "./Components/Footer/Footer.js";
import { getTodoList, setNewTodoList, updateTodoList } from "./Storage/LocalStorage.js";
import { deleteTodo, editTodo, listFilter, toggleCompleted } from "./function/util.js";

export default function App({ target }) {
  this.state = {
    list: [],
    totalCount: 0,
    filterOption: "All",
    isEditMode: false,
  };

  const setState = () => {
    this.state.list = getTodoList();
    const filteredList = listFilter({
      list: this.state.list,
      option: this.state.filterOption,
    });

    this.state.totalCount = filteredList.length;

    todoList.setState({
      newList: this.state.list,
      newIsEditMode: this.state.isEditMode,
    });
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
    state: {
      list: this.state.list,
      isEditMode: this.state.isEditMode,
    },
    onToggle: (id) => {
      const newTodoList = toggleCompleted({
        list: this.state.list,
        id,
      });
      updateTodoList(newTodoList);
      setState();
    },
    onDelete: (id) => {
      const deletedList = deleteTodo({
        list: this.state.list,
        id,
      });
      updateTodoList(deletedList);
      setState();
    },
    // 실시간 반영이 좋을까... 아니면 엔터에 맞게 수정이 좋을까..
    onEdited: ({ id, editedTitle }) => {
      const editedList = editTodo({
        list: this.state.list,
        id,
        editedTitle,
      });
      updateTodoList(editedList);
      setState();
    },
    toggleEditMode: (newState) => {
      this.state.isEditMode = newState;
      setState();
    },
  });

  //footer
  const footer = new Footer({
    target,
    state: this.state.totalCount,
    onChange: (option) => {
      this.state.filterOption = option;
      setState();
    },
  });

  setState();
}
