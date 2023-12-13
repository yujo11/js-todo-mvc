import TodoMenu from "./components/TodoMenu.js";
import TodoForm from "./components/TodoForm.js";
import countTodo from "./utils/countTodo.js";
import listTodos from "./utils/listTodos.js";

export default function App() {
  this.state = {
    selectedMenu: "all",
    todoList: [],
  };

  this.setState = (newState) => {
    this.state = newState;
    menu.setState(this.state.selectedMenu);
    countTodo(this.state);
  };

  new TodoForm({
    addTodo: (id) => {
      this.setState({
        ...this.state,
        todoList: [...this.state.todoList, { id, toggled: false }],
      });
      listTodos(this.state.selectedMenu);
    },
    toggleTodo: (id) => {
      const newTodoList = [...this.state.todoList];

      const toggledIdx = newTodoList.findIndex((todo) => todo.id === id);

      newTodoList[toggledIdx].toggled = !newTodoList[toggledIdx].toggled;

      this.setState({
        ...this.state,
        todoList: newTodoList,
      });
      listTodos(this.state.selectedMenu);
    },
    deleteTodo: (todo) => {
      const newTodoList = [...this.state.todoList];
      const deletedIdx = newTodoList.findIndex((item) => item == todo);

      newTodoList.splice(deletedIdx, 1);

      this.setState({
        ...this.state,
        todoList: newTodoList,
      });
      listTodos(this.state.selectedMenu);
    },
  });

  const menu = new TodoMenu({
    initialState: this.state.selectedMenu,
    onSelectMenu: (menu) => {
      this.setState({
        ...this.state,
        selectedMenu: menu,
      });
    },
  });
}
