import { ALERT_MESSAGE, FILTER_OPTIONS } from "../../Constants.js";
import ListFilterButton from "./ListFilterButton.js";

export default function ListFilter({ target, state, onChange }) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "footer__filter-form");
  target.appendChild(formElement);

  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "footer__filter-ul");
  formElement.appendChild(ulElement);

  FILTER_OPTIONS &&
    FILTER_OPTIONS.forEach(({ option, text, isDefault }) => {
      new ListFilterButton({
        target: ulElement,
        isDefault,
        option,
        text,
      });
    });

  this.state = state;

  this.setState = ({ newIsEditMode }) => {
    this.state.isEditMode = newIsEditMode;
  };

  ulElement.addEventListener("click", (e) => {
    if (this.state.isEditMode) {
      e.preventDefault();
      alert(ALERT_MESSAGE.EDIT);
      return;
    }
    const { value } = e.target.dataset;

    if (!value) return;
    onChange(value);
  });
}
