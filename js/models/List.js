export default class List {
  #items = [];

  add(item) {
    this.#items.push(item);
  }

  get(itemId) {
    return this.#items.find(({ id }) => id === itemId);
  }
}
