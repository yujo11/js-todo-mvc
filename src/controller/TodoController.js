import Todo from "../model/Todo.js";

class TodoController {
  constructor() {
    this.todos = [];
  }

  getAll() {
    return this.todos;
  }

  add(title) {
    this.todos.push(new Todo(title));
  }

  remove(index) {
    this.todos.splice(index, 1);
  }

  toggle(index) {
    this.todos[index].toggle();
  }

  edit(index) {
    this.todos[index].edit();
  }

  save(index, title) {
    this.todos[index].save(title);
  }
}
