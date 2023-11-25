import { ALERT_MESSAGE_EDIT, FILTER_OPTIONS } from "../../Constants.js";
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

  formElement.addEventListener("change", (e) => {
    if (this.state.isEditMode) {
      alert(ALERT_MESSAGE_EDIT);
      return;
    }
    const target = e.target;
    onChange(target.value);
  });
}
