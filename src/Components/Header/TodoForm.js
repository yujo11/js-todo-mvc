export default function TodoForm({ target, state, onSubmit }) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "header__form");
  target.appendChild(formElement);

  const inputElement = document.createElement("input");
  inputElement.setAttribute("class", "header__input");
  formElement.appendChild(inputElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
  };

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const { isEditMode } = this.state;
    if (isEditMode) {
      alert("현재 todo를 수정중입니다! 완료후 새로운 todo를 추가해주세요");
      return;
    }
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
