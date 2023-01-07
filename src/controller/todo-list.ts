import { TodoModel } from "../model/todo";
import { $ } from "../util/query-selector";
import { todoFilterView } from "../view/todo-filter";
import { todoListView } from "../view/todo-list";

const todoListController = {
  initTodoList: () => {
    TodoModel.initTodos();

    const todos = TodoModel.getTodos();

    todoListView.setTodos(todos);
    todoFilterView.updateTodoCount(todos.length);
  },

  handleTodoComplete: (event: Event) => {
    const $checkbox = event.target as HTMLInputElement;

    if (!$checkbox.classList.contains("toggle")) {
      return;
    }

    const $todoItem = $checkbox.closest(".todo-item") as HTMLElement;

    if ($todoItem == null) {
      return;
    }

    const todoId = Number($todoItem.dataset.id);

    if (isNaN(todoId)) {
      return;
    }

    if ($checkbox.checked) {
      TodoModel.completeTodo(todoId);
      todoListView.completeTodo(todoId);
    } else {
      TodoModel.unCompleteTodo(todoId);
      todoListView.unCompleteTodo(todoId);
    }
  },

  handleTodoRemove: (event: Event) => {
    const $removeButton = event.target as HTMLElement;

    if (!$removeButton.classList.contains("destroy")) {
      return;
    }

    const $todoItem = $removeButton.closest(".todo-item") as HTMLElement;

    if ($todoItem == null) {
      return;
    }

    const todoId = Number($todoItem.dataset.id);

    if (isNaN(todoId)) {
      return;
    }

    TodoModel.removeTodo(todoId);
    todoListView.removeTodo(todoId);
    todoFilterView.updateTodoCount(TodoModel.getTodos().length);
  },
  handleTodoEdit: (event: Event) => {
    const $todoItem = event.target as HTMLElement;

    if (!$todoItem.classList.contains("label")) {
      return;
    }

    const $todo = $todoItem.closest(".todo-item") as HTMLElement;

    if ($todo == null) {
      return;
    }

    const todoId = Number($todo.dataset.id);

    if (isNaN(todoId)) {
      return;
    }

    $todo.classList.add("editing");

    const $editInput = $todo.querySelector(".edit") as HTMLInputElement;

    $editInput.focus();
    $editInput.value = $todoItem.innerText;
  },
  handleTodoEditComplete: (event: Event) => {
    const $todoItemEditInput = event.target as HTMLInputElement;

    if (!$todoItemEditInput.classList.contains("edit")) {
      return;
    }

    if ((event as KeyboardEvent).key !== "Enter") {
      return;
    }

    const $todoItem = $todoItemEditInput.closest(".todo-item") as HTMLElement;

    if ($todoItem == null) {
      return;
    }

    const todoId = Number($todoItem.dataset.id);

    if (isNaN(todoId)) {
      return;
    }

    const todo = TodoModel.getTodo(todoId);

    if (todo == null) {
      return;
    }

    todo.text = $todoItemEditInput.value;

    TodoModel.updateTodo(todoId, { text: todo.text });
    todoListView.updateTodoText(todoId, todo.text);

    $todoItem.classList.remove("editing");
  },
};

export const initTodoList = () => {
  todoListController.initTodoList();

  $(".todo-list")?.addEventListener(
    "click",
    todoListController.handleTodoComplete
  );

  $(".todo-list")?.addEventListener(
    "click",
    todoListController.handleTodoRemove
  );

  $(".todo-list")?.addEventListener(
    "dblclick",
    todoListController.handleTodoEdit
  );

  $(".todo-list")?.addEventListener(
    "keydown",
    todoListController.handleTodoEditComplete
  );
};
