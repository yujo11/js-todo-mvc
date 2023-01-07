export default class TodoInput {
  #node = document.getElementById("new-todo-title");

  get value() {
    return this.#node.value;
  }
}
