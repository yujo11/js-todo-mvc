import Title from "./components/Title.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/todoList/TodoList.js";
import { LOCALSTORAGE_KEY } from "./constants/Constants.js";
import { getTodoList, setTodoList } from "./utils/storage/localStorage.js";

export default function App({ targetElement }) {
  // const DUMMNY_DATA = [
  //   { id: 1, content: "할 일1", isCompleted: false },
  //   { id: 2, content: "할 일2", isCompleted: false },
  //   { id: 3, content: "할 일3", isCompleted: false },
  //   { id: 4, content: "할 일4", isCompleted: false },
  // ];
  const initialState = getTodoList(LOCALSTORAGE_KEY, []);

  const title = new Title({ targetElement });

  const todoForm = new TodoForm({
    targetElement,
    onSubmit: (newTodo) => {
      const nextState = [...todoList.state, { ...newTodo }];

      setTodoList(LOCALSTORAGE_KEY, nextState);
      todoList.setState(nextState);
    },
  });

  const todoList = new TodoList({
    targetElement,
    initialState,
    onToggle: (todoId) => {
      const nextState = todoList.state.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      todoList.setState(nextState);
    },
    onDelete: (todoId) => {
      const nextState = todoList.state.filter((todo) => todo.id !== todoId);

      todoList.setState(nextState);
    },
  });
}
