import TodoInput from "../views/TodoInput.js";
import TodoList from "../views/TodoList.js";
import List from "../models/List.js";
import Item from "../models/Item.js";

export const run = () => {
  const list = new List();

  const $todoInput = new TodoInput();
  const $todoList = new TodoList();

  $todoInput.onKeydown((content) => {
    const newItem = new Item({ content });
    list.add(newItem);
    console.log(list);
    $todoList.add(newItem);
  });

  $todoList.onToggle((itemId) => {
    const item = list.get(itemId);
    item.mode = "completed";
    $todoList.toggle(item);
  });

  // $todoList.onRemove((itemId) => {
  //   const targetItem = list.get(itemId);
  //   $todoList.remove(targetItem);
  //   list.remove(itemId);
  // });
};
