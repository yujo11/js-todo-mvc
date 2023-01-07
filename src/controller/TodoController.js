import Controller from "./Controller.js";
import Todo from "../model/Todo.js";
import TodoView from "../view/TodoView.js";

const TodoController = class extends Controller {
  constructor(...arg) {
    super(...arg);

    this.todoView = new TodoView();
    this.todos = [];
  }

  getAll() {
    return this.todos;
  }

  add(title) {
    this.todos.push(new Todo(title));

    this.todoView.renderAll(this.todos);
    this.todoView.renderCount(this.todos.length);
  }

  remove(index) {
    this.todos.splice(index, 1);

    this.todoView.renderAll(this.todos);
    this.todoView.renderCount(this.todos.length);
  }

  toggle(index) {
    this.todos[index].toggle();

    this.todoView.renderAll(this.todos);
  }

  edit(index) {
    this.todos[index].edit();

    this.todoView.renderAll(this.todos);
  }

  save(index, title) {
    this.todos[index].save(title);

    this.todoView.renderAll(this.todos);
  }
};

export default TodoController;
