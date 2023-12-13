export default function listTodos(selectedMenu) {
  const $todoList = document.querySelector(".todo-list");

  $todoList.childNodes.forEach(($todoItem) => {
    switch (selectedMenu) {
      case "all": {
        $todoItem.classList.remove("hidden");
        break;
      }
      case "active": {
        if (!$todoItem.classList.contains("completed")) {
          $todoItem.classList.remove("hidden");
        } else {
          $todoItem.classList.add("hidden");
        }
        break;
      }
      case "completed": {
        if ($todoItem.classList.contains("completed")) {
          $todoItem.classList.remove("hidden");
        } else {
          $todoItem.classList.add("hidden");
        }
        break;
      }
    }
  });
}
