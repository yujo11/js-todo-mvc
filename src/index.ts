import { initTodoFilter } from "./controller/todo-filter";
import { initTodoForm } from "./controller/todo-form";
import { initTodoList } from "./controller/todo-list";

const initApp = () => {
  initTodoForm();
  initTodoList();
  initTodoFilter();
};

initApp();
