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

  const spanElement = document.createElement("span");
  spanElement.setAttribute("class", "todolost__title");
  spanElement.textContent = title;

  liElement.appendChild(spanElement);

  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "todolist__deletebutton");
  buttonElement.textContent = "Delete";
  liElement.appendChild(buttonElement);
}
