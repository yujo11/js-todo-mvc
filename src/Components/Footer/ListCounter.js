import { isUpdatedPrimitiveValue } from "../../function/validate.js";

export default function ListCounter({ target, state }) {
  const counterElement = document.createElement("div");
  counterElement.setAttribute("class", "footer__counter");

  target.appendChild(counterElement);

  this.state = state;

  this.setState = ({ newTotalCount }) => {
    if (!isUpdatedPrimitiveValue(this.state.totalCount, newTotalCount)) return;

    this.state.totalCount = newTotalCount;
    this.render();
  };

  this.render = () => {
    counterElement.textContent = `총 ${this.state.totalCount}개`;
  };

  this.render();
}
