import { EDIT_ALERT_MESSAGE, INPUT_ALERT_MESSAGE } from "../../Constants.js";

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
      alert(EDIT_ALERT_MESSAGE);
      return;
    }

    const target = e.target.querySelector(".header__input");
    const newTodo = target.value.trim();

    if (newTodo.length > 1) {
      onSubmit(newTodo);
      target.value = "";
      return;
    }

    alert(INPUT_ALERT_MESSAGE);
  });
}
