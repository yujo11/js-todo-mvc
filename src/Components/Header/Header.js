import { isUpdatedPrimitiveValue } from "../../function/validate.js";
import Title from "./Title.js";
import TodoForm from "./TodoForm.js";

export default function Header({ target, state, onSubmit }) {
  const headerElement = document.createElement("header");
  headerElement.setAttribute("class", "app__header");

  target.appendChild(headerElement);

  this.state = state;

  this.setState = ({ newIsEditMode }) => {
    const { isEditMode: prevEditMode } = this.state;

    if (isUpdatedPrimitiveValue(prevEditMode, newIsEditMode)) {
      this.state = { isEditMode: newIsEditMode };
      todoForm.setState(this.state);
    }
  };

  new Title({
    target: headerElement,
  });

  const todoForm = new TodoForm({
    target: headerElement,
    state: { isEditMode: this.state.isEditMode },
    onSubmit,
  });
}
