import TodoItem from "./TodoItem.js";

export default function TodoForm({ addTodo, deleteTodo, toggleTodo }) {
  const $newTodoForm = document.querySelector(".new-todo-form");
  const $todoList = document.querySelector(".todo-list");

  $newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const $newTodoInput = $newTodoForm.querySelector(".new-todo");
    const { value } = $newTodoInput;

    if (value) {
      const createdTodo = new TodoItem({
        $target: $todoList,
        title: value,
        onDelete: (id) => {
          const $deletedItem = document.getElementById(id);
          $todoList.removeChild($deletedItem);
          deleteTodo(id);
        },
        onToggle: (id) => {
          toggleTodo(id);
        },
      });

      addTodo(createdTodo.id);

      $newTodoInput.value = "";
    }
  });
}
