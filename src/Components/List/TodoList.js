export default function TodoList({ target, state }) {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "app__todolist");
  target.appendChild(ulElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    console.log(newState);
  };

  this.render = () => {};

  this.render();
}
