import TodoItem from "./TodoItem.js";

export default class TodoList {
  #node = document.getElementById("todo-list");
  #list = [];
  #clickEventHandler;

  add(item) {
    const $todoItem = new TodoItem(item);
    this.#list.push($todoItem);
    this.#node.append($todoItem.node);
  }

  toggle(item) {
    const $targetItem = this.#list.find(({ id }) => id === item.id);

    $targetItem.toggle();
  }

  onClick(cb) {
    if (this.#clickEventHandler) {
      this.#node.removeEventHandler("click", this.#clickEventHandler);
    }

    this.#clickEventHandler = (e) => {
      const itemId = e.target.closest("li").dataset.itemId;

      cb(itemId);
    };

    this.#node.addEventListener("click", this.#clickEventHandler);
  }
}
