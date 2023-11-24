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

  const divElement = document.createElement("div");
  divElement.setAttribute("class", "todolost__title");
  divElement.textContent = title;

  liElement.appendChild(divElement);

  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "todolist__deletebutton");
  buttonElement.textContent = "Delete";
  liElement.appendChild(buttonElement);
}
