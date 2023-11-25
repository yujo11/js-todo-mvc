import { ALERT_MESSAGE_EDIT } from "../../Constants.js";
import { isUpdatedPrimitiveValue, isUpdatedReferenceValue } from "../../function/validate.js";
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
    const { list: prevList, isEditMode: prevEditMode } = this.state;

    if (
      isUpdatedReferenceValue(prevList, newList) || //
      isUpdatedPrimitiveValue(prevEditMode, newIsEditMode)
    ) {
      this.state = {
        ...this.state,
        list: newList,
        isEditMode: newIsEditMode,
      };

      this.render();
    }
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
    const target = e.target;
    const { id } = target.closest("li").dataset;

    if (!id) return;

    if (this.state.isEditMode && target.className !== "todoList__title") {
      alert(ALERT_MESSAGE_EDIT);
      return;
    }

    if (target.className === "todolist__checkbox-label") {
      onToggle(id);
      return;
    }

    if (target.className === "todolist__deletebutton") {
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

    toggleEditMode(true);
    this.state.saveTodoTitle = target.innerText;

    target.addEventListener("keydown", onEditingHandler);
  });

  const onEditingHandler = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      // 조건문 밖에 상수 선언?? / 혹은 안에서 상수 선언??
      event.preventDefault();
      const target = event.target;
      const editedTitle = target.innerText.trim();
      const { id } = target.closest("li").dataset;

      // 만든 유틸 함수 사용하기
      if (editedTitle !== this.state.saveTodoTitle) {
        onEdited({
          editedTitle,
          id,
        });
      }

      target.removeAttribute("contenteditable");
      target.removeEventListener("keydown", onEditingHandler);
      toggleEditMode(false);
      this.state.saveTodoTitle = "";
    }
  };
}
