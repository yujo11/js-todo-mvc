let genId = () => Math.random().toString(16).slice(2);

export default class Item {
  id = genId();
  mode = "view"; // "view" | "edit" | "completed"
  content;

  constructor({ content } = {}) {
    this.content = content;
  }
}
