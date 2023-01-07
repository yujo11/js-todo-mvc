const Todo = class {
  constructor(title) {
    this.title = title;
    this.completed = false;
    this.isEditing = false;
  }

  toggle() {
    this.completed = !this.completed;
  }

  edit() {
    this.isEditing = true;
  }

  save(title) {
    this.title = title;
    this.isEditing = false;
  }
};

export default Todo;
