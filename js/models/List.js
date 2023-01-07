export default class List {
  #items = [];

  add(item) {
    this.#items.push(item);
  }

  get(itemId) {
    return this.#items.find(({ id }) => id === itemId);
  }

  remove(itemId) {
    this.#items = this.#items.filter(({ id }) => id === itemId);
  }
}
