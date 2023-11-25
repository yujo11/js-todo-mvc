import { isUpdatedPrimitiveValue } from "../../function/validate.js";
import Title from "./Title.js";
import TodoForm from "./TodoForm.js";

export default function Header({ target, state, onSubmit }) {
  const headerElement = document.createElement("header");
  headerElement.setAttribute("class", "app__header");

  target.appendChild(headerElement);

  this.state = state;

  this.setState = (newState) => {
    if (isUpdatedPrimitiveValue({ prev: this.state.isEditMode, curr: newState.isEditMode })) {
      this.state = newState;
      todoForm.setState(this.state);
    }
  };

  // 제목
  new Title({
    target: headerElement,
  });

  const todoForm = new TodoForm({
    target: headerElement,
    state: { isEditMode: this.state.isEditMode },
    onSubmit,
  });
}
