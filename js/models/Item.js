let genId = () => Math.random().toString(16).slice(2);

export default class Item {
  id;
  mode = "view"; // "view" | "edit" | "completed"
  content;

  constructor({ content } = {}) {
    this.id = genId();
    this.content = content;
  }
}
