import TodoItem from "./TodoItem.js";

export default class TodoList {
  #node = document.getElementById("todo-list");

  add(item) {
    const todoItem = new TodoItem(item);
    this.#node.append(todoItem.node);
  }
}
