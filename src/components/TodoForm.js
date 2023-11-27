import checkNewComponent from "../utils/checkNewComponent.js";

export default function TodoForm({ targetElement, onSubmit }) {
  checkNewComponent(TodoForm, this);

  const formElement = document.createElement("form");
  formElement.id = "new-todo-form";

  const inputElement = document.createElement("input");
  inputElement.id = "new-todo-title";
  inputElement.classList.add("new-todo");
  inputElement.placeholder = "할일을 추가해주세요";
  inputElement.autofocus = true;

  formElement.appendChild(inputElement);
  targetElement.appendChild(formElement);

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodoElement = formElement.querySelector(
      "input[id=new-todo-title]"
    );
    const newTodoId = new Date().getTime() + Math.random();
    const newTodoContent = newTodoElement.value;
    const newTodoIsCompleted = false;

    if (newTodoContent == null || newTodoContent.trim() === "") {
      alert("빈 문자열은 입력할 수 없습니다!");
      return;
    }

    newTodoElement.value = "";
    onSubmit({
      id: newTodoId,
      content: newTodoContent,
      isCompleted: newTodoIsCompleted,
      isEditing: false,
    });
  });
}
