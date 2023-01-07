import TodoInput from "./TodoInput.js";

export default class TodoForm {
  #node = document.getElementById("new-todo-form");
  #submitEventHandler;

  onSubmit(cb) {
    if (this.#submitEventHandler) {
      this.#node.removeEventHandler("submit", this.#submitEventHandler);
    }

    this.#submitEventHandler = (e) => {
      e.preventDefault();

      const content = new TodoInput().value;

      console.log(content);

      cb(content);

      this.#node.reset();
    };

    this.#node.addEventListener("submit", this.#submitEventHandler);
  }
}
