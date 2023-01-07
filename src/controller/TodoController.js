import Todo from "../model/Todo.js";
import TodoView from "../view/TodoView.js";

const TodoController = class {
  constructor() {
    this.todoView = new TodoView();
    this.todos = [];
  }

  getAll() {
    return this.todos;
  }

  add(title) {
    this.todos.push(new Todo(title));

    this.todoView.renderTodos(this.todos);
    this.todoView.renderCount(this.todos.length);
  }

  remove(index) {
    this.todos.splice(index, 1);

    this.todoView.renderTodos(this.todos);
    this.todoView.renderCount(this.todos.length);
  }

  toggle(index) {
    this.todos[index].toggle();

    this.todoView.renderTodos(this.todos);
  }

  edit(index) {
    this.todos[index].edit();

    this.todoView.renderTodos(this.todos);
  }

  cancel(index) {
    this.todos[index].cancel();

    this.todoView.renderTodos(this.todos);
  }

  save(index, title) {
    this.todos[index].save(title);

    this.todoView.renderTodos(this.todos);
  }

  selectAll() {
    this.todoView.renderTodos(this.todos);
    this.todoView.renderFilter("all");
    this.todoView.renderCount(this.todos.length);
  }

  selectCompleted() {
    const completedTodos = this.todos.filter((todo) => todo.completed);

    this.todoView.renderTodos(completedTodos);
    this.todoView.renderFilter("completed");
    this.todoView.renderCount(completedTodos.length);
  }

  selectActive() {
    const activeTodos = this.todos.filter((todo) => !todo.completed);

    this.todoView.renderTodos(activeTodos);
    this.todoView.renderFilter("active");
    this.todoView.renderCount(activeTodos.length);
  }
};

export default TodoController;
