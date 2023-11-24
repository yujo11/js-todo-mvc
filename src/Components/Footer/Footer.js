import ListCounter from "./ListCounter.js";

export default function Footer({ target, state }) {
  const footerElement = document.createElement("footer");
  footerElement.setAttribute("class", "app__footer");

  target.appendChild(footerElement);

  this.state = state;

  this.setState = (newState) => {
    listCounter.setState(newState);
  };

  const listCounter = new ListCounter({
    target: footerElement,
    state: this.state,
  });
}
