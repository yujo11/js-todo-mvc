import Title from "./Title.js";
import TodoList from "./TodoList.js";

export default function App({ targetElement }) {
  const DUMMNY_DATA = [
    { id: 1, content: "할 일1", isCompleted: false },
    { id: 2, content: "할 일2", isCompleted: false },
    { id: 3, content: "할 일3", isCompleted: false },
    { id: 4, content: "할 일4", isCompleted: false },
  ];

  const title = new Title({ targetElement });

  const todoList = new TodoList({
    targetElement,
    initialState: DUMMNY_DATA,
    onToggle: (todoId) => {
      const nextState = todoList.state.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      todoList.setState(nextState);
    },
  });
}
