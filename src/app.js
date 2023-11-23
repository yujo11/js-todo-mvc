import Header from "./Components/Header/Header.js";
import { getTodoList, setTodoList } from "./Storage/LocalStorage.js";

console.log(getTodoList());
export default function App({ target }) {
  // header
  const setState = () => {};

  new Header({
    target,
    onSubmit: (newTodo) => {
      setTodoList(newTodo);
    },
  });
}
