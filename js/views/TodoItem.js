export default class TodoItem {
  #node = document.createElement("li");

  constructor({ content, mode }) {
    this.#node.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">${content}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${content}" />
  `;
  }

  get node() {
    return this.#node;
  }
}
