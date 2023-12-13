export default function countTodo({ selectedMenu, todoList }) {
  const $count = document.querySelector(".count");

  const totalCount = todoList.length;
  const completedCount = todoList.filter(
    (todo) => todo.toggled === true
  ).length;

  if (selectedMenu === "active") {
    $count.textContent = totalCount - completedCount;
  } else if (selectedMenu === "completed") {
    $count.textContent = completedCount;
  } else {
    $count.textContent = totalCount;
  }
}
