import List from "./List.js";

export default function TodoList({ target, state }) {
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
        console.log(item);
        new List({
          target: ulElement,
          state: item,
        });
      });
  };

  this.render();
}
