import ListCounter from "./ListCounter.js";
import ListFilter from "./ListFilter.js";

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

  new ListFilter({
    target: footerElement,
  });
}
