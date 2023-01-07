import { $ } from "../util/query-selector";

export const todoFilterView = {
  updateTodoCount: (todoCount: number) => {
    const $todoCountNumber = $("#todo-count-number");

    if ($todoCountNumber == null) {
      return;
    }

    $todoCountNumber.textContent = todoCount.toString();
  },
};
