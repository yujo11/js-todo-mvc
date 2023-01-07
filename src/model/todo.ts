import { TodoItem } from "../type";

export class TodoModel {
  static id = 0;
  static todos: TodoItem[] = [];

  static initTodos() {
    const todos = localStorage.getItem("todo-app/todos");

    if (todos == null) {
      return;
    }

    const parsedTodos = JSON.parse(todos);

    this.todos = parsedTodos;
    this.id = parsedTodos.at(-1).id + 1;
  }

  static getTodos(filterOption: { isCompleted?: boolean } = {}) {
    if (filterOption.isCompleted != null) {
      return this.todos.filter(
        (todo) => todo.isCompleted === filterOption.isCompleted
      );
    }

    return this.todos;
  }

  static getTodo(todoId: number) {
    return this.todos.find((todo) => todo.id === todoId);
  }

  static updateTodo(todoId: number, { text }: { text: string }) {
    const todo = this.todos.find((todo) => todo.id === todoId);

    if (todo == null) {
      return;
    }

    todo.text = text;
  }

  static addTodo(todoText: string) {
    const newTodo = { id: this.id++, text: todoText, isCompleted: false };

    this.todos.push(newTodo);
    localStorage.setItem("todo-app/todos", JSON.stringify(this.todos));

    return newTodo.id;
  }

  static completeTodo = (todoId: number) => {
    const todo = this.todos.find((todo) => todo.id === todoId);

    if (todo == null) {
      return;
    }

    todo.isCompleted = true;
    localStorage.setItem("todo-app/todos", JSON.stringify(this.todos));
  };

  static unCompleteTodo = (todoId: number) => {
    const todo = this.todos.find((todo) => todo.id === todoId);

    if (todo == null) {
      return;
    }

    todo.isCompleted = false;
    localStorage.setItem("todo-app/todos", JSON.stringify(this.todos));
  };

  static removeTodo = (todoId: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todo-app/todos", JSON.stringify(this.todos));
  };
}
