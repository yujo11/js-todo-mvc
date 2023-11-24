export default function ListCounter({ target, state }) {
  const counterElement = document.createElement("div");
  counterElement.setAttribute("class", "footer__counter");

  target.appendChild(counterElement);

  this.state = state;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    counterElement.textContent = `총 ${this.state}개`;
  };

  this.render();
}
