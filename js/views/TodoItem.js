export default class TodoItem {
  #id;
  #node = document.createElement("li");

  constructor({ id, content, mode }) {
    this.#id = id;
    this.#node.dataset.itemId = this.#id;
    this.#node.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">${content}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${content}" />
  `;
  }

  get id() {
    return this.#id;
  }

  get node() {
    return this.#node;
  }

  toggle() {
    const $input = this.#node.querySelector("input");
    $input.checked = !$input.checked;

    this.#node.classList.toggle("completed");
  }
}
