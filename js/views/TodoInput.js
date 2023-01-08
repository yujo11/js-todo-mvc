export default class TodoInput {
  #node = document.getElementById("new-todo-title");
  #keydownEventHandler;

  onKeydown(cb) {
    if (this.#keydownEventHandler) {
      this.#node.removeEventHandler("keydown", this.#keydownEventHandler);
    }

    this.#keydownEventHandler = (e) => {
      if (e.key !== "Enter") {
        return;
      }

      const content = this.#node.value;

      if (!content) {
        return;
      }

      cb(content);

      this.#node.value = "";
    };

    this.#node.addEventListener("keydown", this.#keydownEventHandler);
  }
}
