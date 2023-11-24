import ListTitle from "./LIstTitle.js";
import ListButton from "./ListButton.js";
import ListCheckbox from "./ListCheckbox.js";

export default function List({ target, state }) {
  const { id, title, isCompleted } = state;

  const liElement = document.createElement("li");
  liElement.setAttribute("class", "todolist__item");
  liElement.setAttribute("data-id", id);
  target.appendChild(liElement);

  new ListCheckbox({
    target: liElement,
    isCompleted,
    id,
  });

  new ListTitle({
    target: liElement,
    title,
  });

  new ListButton({
    target: liElement,
  });
}
