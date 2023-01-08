import TodoItem from "./TodoItem.js";

export default class TodoList {
  #node = document.getElementById("todo-list");
  #list = [];
  #toggleEventHandler;
  #removeEventHandler;

  add(item) {
    const $todoItem = new TodoItem(item);
    this.#list.push($todoItem);
    this.#node.append($todoItem.node);
  }

  toggle(item) {
    const $targetItem = this.#list.find(({ id }) => id === item.id);

    $targetItem.toggle();
  }

  remove(item) {
    console.log(this.#list);
    const $targetItem = this.#list.find(({ id }) => id === item.id);

    $targetItem.remove();
  }

  onToggle(cb) {
    if (this.#toggleEventHandler) {
      this.#node.removeEventHandler("click", this.#toggleEventHandler);
    }

    this.#toggleEventHandler = (e) => {
      if (e.target.classList.contains("destroy")) {
        return;
      }

      const itemId = e.target.closest("li").dataset.itemId;

      cb(itemId);
    };

    this.#node.addEventListener("click", this.#toggleEventHandler);
  }

  onRemove(cb) {
    if (this.#removeEventHandler) {
      this.#node.removeEventHandler("click", this.#removeEventHandler);
    }

    this.#removeEventHandler = (e) => {
      if (e.target.classList.contains("destroy")) {
        const itemId = e.target.closest("li").dataset.itemId;
        cb(itemId);
      }
    };

    this.#node.addEventListener("click", this.#removeEventHandler);
  }
}
