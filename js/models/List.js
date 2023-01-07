export default class List {
  #items = [];

  add(item) {
    this.#items.push(item);
  }
}
