import renderTodoListTemplate from "../utils/renderTodoListTemplate";

export default function TodoList({
  $target,
  initialState,
  onDeleteTodo,
  onToggle,
  onChangeMode,
  onEdit,
}) {
  this.state = initialState;

  const $todoList = document.createElement("ul");
  $todoList.className = "todo-list";
  $target.appendChild($todoList);

  this.setState = (nexState) => {
    this.state = nexState;
    this.render();
  };

  this.render = () => {
    const todoListTemplate = renderTodoListTemplate(this.state);
    $todoList.innerHTML = todoListTemplate;
  };

  this.render();

  // Todo 요소 클릭 (삭제 OR 토글)
  const handleClick = ({ target }) => {
    const $todo = target.closest("li");

    if ($todo) {
      const { id } = $todo.dataset;
      const { className } = target;

      if (className === "destroy") {
        onDeleteTodo(id);
      } else if (className === "toggle") {
        onToggle(id);
      }
    }
  };

  // Todo 요소 더블 클릭 (모드 변경)
  const handleDubbleClick = ({ target }) => {
    const $todo = target.closest("li");
    if ($todo) {
      const { id } = $todo.dataset;
      onChangeMode(id);
    }
  };

  // Todo 요소 키 입력 (Enter 또는 ESC)
  const handleKeyDown = (e) => {
    const { target } = e;
    const { className, value } = target;

    if (className !== "edit") return;

    const $todo = target.closest("li");

    if ($todo) {
      const { id } = $todo.dataset;

      if (e.key === "Escape") onChangeMode(id);
      if (e.key === "Enter") {
        onEdit(id, value);
        onChangeMode(id);
      }
    }
  };

  $todoList.addEventListener("click", handleClick);
  $todoList.addEventListener("dblclick", handleDubbleClick);
  $todoList.addEventListener("keydown", handleKeyDown);
}
