const Todo = class {
  constructor(title) {
    this.id = Date.now();
    this.title = title;
    this.completed = false;
    this.editing = false;
  }

  toggle() {
    this.completed = !this.completed;
  }

  edit() {
    this.editing = true;
  }

  cancel() {
    this.editing = false;
  }

  save(title) {
    this.title = title;
    this.editing = false;
  }
};

export default Todo;
