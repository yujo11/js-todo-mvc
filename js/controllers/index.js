import TodoForm from "../views/TodoForm.js";
import TodoList from "../views/TodoList.js";
import List from "../models/List.js";
import Item from "../models/Item.js";

export const run = () => {
  const list = new List();

  const $todoForm = new TodoForm();
  const $todoList = new TodoList();

  $todoForm.onSubmit((content) => {
    const newItem = new Item({ content });
    list.add(newItem);
    $todoList.add(newItem);
  });
};
