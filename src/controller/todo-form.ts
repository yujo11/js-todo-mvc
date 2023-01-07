import { TodoModel } from "../model/todo";
import { $ } from "../util/query-selector";
import { todoFilterView } from "../view/todo-filter";
import { todoListView } from "../view/todo-list";

const todoFormController = {
  handleTodoSubmit: (event: Event) => {
    event.preventDefault();

    const todoText: string = (event.target as HTMLFormElement).elements[
      "todo-input"
    ].value;

    const newTodoId = TodoModel.addTodo(todoText);
    const newTodo = TodoModel.getTodo(newTodoId);

    if (newTodo == null) {
      return;
    }

    todoListView.addTodo(newTodo);
    todoFilterView.updateTodoCount(TodoModel.getTodos().length);
  },
};

export const initTodoForm = () => {
  $("#todo-form")?.addEventListener(
    "submit",
    todoFormController.handleTodoSubmit
  );
};
