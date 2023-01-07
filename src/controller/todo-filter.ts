import { TodoModel } from "../model/todo";
import { $, $$ } from "../util/query-selector";
import { todoListView } from "../view/todo-list";

const todoFilterController = {
  filter: (event: Event) => {
    const $filterButton = event.target as HTMLElement;

    if (!$filterButton.classList.contains("filter-button")) {
      return;
    }

    $$(".filter-button")?.forEach(($filterButton) => {
      $filterButton.classList.remove("selected");
    });

    $filterButton.classList.add("selected");

    if ($filterButton.classList.contains("all")) {
      todoListView.setTodos(TodoModel.getTodos());
      return;
    }

    if ($filterButton.classList.contains("active")) {
      todoListView.setTodos(TodoModel.getTodos({ isCompleted: false }));
      return;
    }

    if ($filterButton.classList.contains("completed")) {
      todoListView.setTodos(TodoModel.getTodos({ isCompleted: true }));
      return;
    }
  },
};

export const initTodoFilter = () => {
  $(".filters")?.addEventListener("click", todoFilterController.filter);
};
