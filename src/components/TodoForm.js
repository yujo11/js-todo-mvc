import TodoItem from "./TodoItem.js";

export default function TodoForm({ updateList, updateCount }) {
  const $newTodoForm = document.querySelector(".new-todo-form");
  const $todoList = document.querySelector(".todo-list");

  $newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const $newTodoInput = $newTodoForm.querySelector(".new-todo");
    const { value } = $newTodoInput;

    if (value) {
      new TodoItem({
        $target: $todoList,
        title: value,
        onDelete: (id, isToggled) => {
          const $deletedItem = document.getElementById(id);
          $todoList.removeChild($deletedItem);
          updateCount("delete", isToggled);
          updateList();
        },
        onToggle: (isToggled) => {
          updateCount("toggle", isToggled);
          updateList();
        },
      });

      updateCount("add");
      updateList();

      $newTodoInput.value = "";
    }
  });
}
