export default function TodoForm({ target, onSubmit }) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "header__form");
  target.appendChild(formElement);

  const inputElement = document.createElement("input");
  inputElement.setAttribute("class", "header__input");

  formElement.appendChild(inputElement);

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target.querySelector(".header__input");

    const newTodo = target.value.trim();

    if (newTodo.length > 2) {
      onSubmit(newTodo);
      target.value = "";
      return;
    }

    alert("2글자 이상 입력해주세요");
  });
}
