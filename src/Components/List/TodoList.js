import List from "./List.js";

export default function TodoList({ target, state, onToggle, onDelete }) {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "app__todolist");
  target.appendChild(ulElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    ulElement.replaceChildren();

    this.state &&
      this.state.forEach((item) => {
        new List({
          target: ulElement,
          state: item,
        });
      });
  };

  this.render();

  ulElement.addEventListener("click", (e) => {
    const target = e.target;
    const { id } = target.closest("li").dataset;

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
}
