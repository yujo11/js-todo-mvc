import TodoInput from "./Input";
import TodoList from "./TodoList";
import Controller from "./Controller";
import filterTodos from "../utils/filterTodos";

export default function App({ $target }) {
  this.state = {
    todos: [],
    filter: "",
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const filteredTodos = filterTodos(this.state.filter, this.state.todos);
    todoList.setState(filteredTodos);
    controller.setState(filteredTodos.length);
  };

  const setTodos = (newTodoList) => {
    this.setState({
      ...this.state,
      todos: newTodoList,
    });
  };

  const onAddTodo = (newTodoContent) => {
    const newTodo = {
      id: new Date().getTime().toString(),
      content: newTodoContent,
      completed: false,
      editing: false,
    };

    const newTodoList = [...this.state.todos, newTodo];
    setTodos(newTodoList);
  };

  const onDeleteTodo = (todoId) => {
    const newTodoList = this.state.todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodoList);
  };

  const onToggle = (todoId) => {
    const newTodoList = this.state.todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodoList);
  };

  const onChangeMode = (todoId) => {
    const newTodoList = this.state.todos.map((todo) =>
      todo.id === todoId ? { ...todo, editing: !todo.editing } : todo
    );
    setTodos(newTodoList);
  };

  const onEdit = (todoId, newTodo) => {
    const newTodoList = this.state.todos.map((todo) =>
      todo.id === todoId ? { ...todo, content: newTodo } : todo
    );
    setTodos(newTodoList);
  };

  const handleHashChange = () => {
    const category = window.location.hash.substring(1); // # 제외
    this.setState({ ...this.state, filter: category });
  };

  window.addEventListener("hashchange", handleHashChange);

  // TodoInput 컴포넌트
  new TodoInput({
    $target,
    onAddTodo,
  });

  const $main = document.createElement("main");
  $target.appendChild($main);

  // TodoList 컴포넌트
  const todoList = new TodoList({
    $target: $main,
    initialState: [],
    onDeleteTodo,
    onToggle,
    onChangeMode,
    onEdit,
  });

  // Controller 컴포넌트
  const controller = new Controller({
    $target: $main,
    initialState: 0,
  });
}
