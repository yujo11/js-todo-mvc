export default function TodoInput({ $target, onAddTodo }) {
  const $todoForm = document.createElement("form");
  $todoForm.innerHTML = `
      <input
      id="new-todo-title"
      class="new-todo"
      placeholder="할일을 추가해주세요"
      autofocus
      name=""
      />`;

  $target.appendChild($todoForm);

  const handleSubmitNewTodo = (e) => {
    e.preventDefault();
    const inputElement = document.getElementById("new-todo-title");
    const newTodoContent = inputElement.value;
    if (newTodoContent) {
      onAddTodo(newTodoContent);
      inputElement.value = "";
    }
  };

  $todoForm.addEventListener("submit", handleSubmitNewTodo);
}
