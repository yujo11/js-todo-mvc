import { isReferenceValueUpdated } from "../../function/validate.js";
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
    if (!isReferenceValueUpdated({ prev: this.state.list, curr: newList })) {
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
    console.log(list);

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
    const { id } = target.closest("li").dataset ?? null;
    if (!id) return;

    if (this.state.isEditMode && target.className !== "todolost__title") {
      alert("현재 수정중에는 삭제, 변경이 불가능합니다 🥹 todo 수정을 완료해주세요");
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
    if (target.className !== "todolost__title") return;
    if (isEditMode) {
      alert("이전 수정을 완료해주세요 ✏️");
      return;
    }

    target.setAttribute("contenteditable", "true");
    setTimeout(() => {
      target.focus();
    });

    toggleEditMode(true);
    this.state.saveTodoTitle = target.innerText;

    target.addEventListener("keydown", handlerOnEditing);
  });

  const handlerOnEditing = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      const target = event.target;
      const editedTitle = target.innerText.trim();
      const { id } = target.closest("li").dataset;

      if (editedTitle !== this.state.saveTodoTitle) {
        onEdited({
          editedTitle,
          id,
        });
      }

      target.removeAttribute("contenteditable");
      target.removeEventListener("keydown", handlerOnEditing);
      toggleEditMode(false);
      this.state.saveTodoTitle = "";
    }
  };
}
