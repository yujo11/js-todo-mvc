import TodoMenu from "./components/TodoMenu.js";
import TodoForm from "./components/TodoForm.js";
import countTodo from "./utils/countTodo.js";
import listTodos from "./utils/listTodos.js";

export default function App() {
  this.state = {
    completedCount: 0,
    totalCount: 0,
    selectedMenu: "all",
  };

  this.setState = (newState) => {
    this.state = newState;
    menu.setState(this.state.selectedMenu);
  };

  new TodoForm({
    updateList: () => {
      listTodos(this.state.selectedMenu);
    },
    updateCount: (mode, isToggled = false) => {
      if (mode === "add") {
        this.setState({
          ...this.state,
          totalCount: this.state.totalCount + 1,
        });
      } else if (mode === "toggle") {
        this.setState({
          ...this.state,
          completedCount: isToggled
            ? this.state.completedCount + 1
            : this.state.completedCount - 1,
        });
      } else if (mode === "delete") {
        this.setState({
          ...this.state,
          completedCount: isToggled
            ? this.state.completedCount - 1
            : this.state.completedCount,
          totalCount: this.state.totalCount - 1,
        });
      }
      countTodo(this.state);
    },
  });

  const menu = new TodoMenu({
    initialState: this.state.selectedMenu,
    onSelectMenu: (menu) => {
      this.setState({
        ...this.state,
        selectedMenu: menu,
      });
      countTodo(this.state);
    },
  });
}
