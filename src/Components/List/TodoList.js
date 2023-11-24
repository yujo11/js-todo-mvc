import List from "./List.js";

export default function TodoList({ target, state, onToggle, onDelete, onEdited }) {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "app__todolist");
  target.appendChild(ulElement);

  this.state = {
    editing: false,
    saveTodoTitle: "",
    list: state,
  };

  this.setState = (newState) => {
    this.state.list = newState;
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
    const target = e.target;
    const { id } = target.closest("li").dataset ?? null;
    if (!id) return;

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
    const { editing } = this.state;
    if (target.className !== "todolost__title") return;
    if (editing) {
      alert("이전 수정을 완료해주세요 ✏️");
      return;
    }

    target.setAttribute("contenteditable", "true");
    setTimeout(() => {
      target.focus();
    });

    this.state.editing = true;
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
      this.state.editing = false;
      this.state.saveTodoTitle = "";
    }
  };
}
