import Title from "./components/Title.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/todoList/TodoList.js";
import { LOCALSTORAGE_KEY } from "./constants/Constants.js";
import { getTodoList, setTodoList } from "./utils/storage/localStorage.js";

export default function App({ targetElement }) {
  const initialState = getTodoList(LOCALSTORAGE_KEY, []);

  const title = new Title({ targetElement });

  const todoForm = new TodoForm({
    targetElement,
    onSubmit: (newTodo) => {
      todoList.state = getTodoList(LOCALSTORAGE_KEY);
      const nextState = [...todoList.state, { ...newTodo }];

      setTodoList(LOCALSTORAGE_KEY, nextState);
      todoList.setState(nextState);
    },
  });

  const todoList = new TodoList({
    targetElement,
    initialState,

    onToggle: (todoId) => {
      todoList.state = getTodoList(LOCALSTORAGE_KEY);
      const nextState = todoList.state.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      todoList.isTodoFilterSelected = null;
      setTodoList(LOCALSTORAGE_KEY, nextState);
      todoList.setState(nextState);
    },
    onDelete: (todoId) => {
      todoList.state = getTodoList(LOCALSTORAGE_KEY);
      const nextState = todoList.state.filter((todo) => todo.id !== todoId);

      todoList.isTodoFilterSelected = null;
      setTodoList(LOCALSTORAGE_KEY, nextState);
      todoList.setState(nextState);
    },
  });
}
