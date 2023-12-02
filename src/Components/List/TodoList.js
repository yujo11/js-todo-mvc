import { ALERT_MESSAGE } from "../../Constants.js";
import { isUpdatedReferenceValue } from "../../function/validate.js";
import List from "./List.js";

export default function TodoList({ target, state, onToggle, onDelete, onEdited, toggleEditMode }) {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "app__todolist");
  target.appendChild(ulElement);

  this.state = {
    ...state,
    saveTodoTitle: "",
  };

  this.setState = ({ newList, newIsEditMode }) => {
    const { list: prevList } = this.state;
    if (!isUpdatedReferenceValue(prevList, newList)) {
      this.state.isEditMode = newIsEditMode;
      return;
    }

    this.state = {
      ...this.state,
      list: newList,
      isEditMode: newIsEditMode,
    };

    this.render();
  };

  this.render = () => {
    ulElement.replaceChildren();

    const { list } = this.state;

    list &&
      list.forEach((item) => {
        new List({
          target: ulElement,
          state: item,
        });
      });
  };
  this.render();

  ulElement.addEventListener("click", (e) => {
    e.preventDefault();
    const { target } = e;
    const { className } = target;

    const { id } = e.target.closest("li")?.dataset ?? "";

    if (!id) return;

    if (this.state.isEditMode && className !== "todoList__title editing") {
      alert(ALERT_MESSAGE.EDIT);
      return;
    }

    if (className === "todolist__checkbox-label" || className === "todolist__checkbox-img") {
      onToggle(id);
      return;
    }

    if (className === "todolist__deletebutton" || className === "todolist__deletebutton-img") {
      onDelete(id);
      return;
    }
  });

  ulElement.addEventListener("dblclick", (e) => {
    const target = e.target;
    const { isEditMode } = this.state;

    if (target.className !== "todoList__title") return;

    if (isEditMode) {
      alert(ALERT_MESSAGE_EDIT);
      return;
    }

    target.setAttribute("contenteditable", "true");

    setTimeout(() => {
      target.focus();
    });

    target.classList.add("editing");
    toggleEditMode(true);
    this.state.saveTodoTitle = target.innerText;
    target.addEventListener("keydown", onEditingHandler);
  });

  const onEditingHandler = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();

      const target = event.target;
      const editedTitle = target.innerText.trim();
      const { id } = target.closest("li").dataset;

      if (event.key === "Enter" && this.state.saveTodoTitle !== editedTitle) {
        onEdited({
          editedTitle,
          id,
        });
      }

      target.removeAttribute("contenteditable");
      target.classList.remove("editing");
      target.removeEventListener("keydown", onEditingHandler);
      toggleEditMode(false);
      if (event.key === "Escape") {
        target.innerText = this.state.saveTodoTitle;
      }

      this.state.saveTodoTitle = "";
    }
  };
}
