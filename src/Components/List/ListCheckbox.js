import { IMAGE_SRC_CHECK } from "../../Constants.js";

export default function ListCheckbox({ target, isCompleted, id }) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("class", "todolsit__checkbox-input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.setAttribute("id", `${id}_checkbox`);

  target.appendChild(inputElement);

  const labelElement = document.createElement("label");
  labelElement.setAttribute("class", "todolist__checkbox-label");
  labelElement.setAttribute("for", `${id}_checkbox`);

  target.appendChild(labelElement);

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", IMAGE_SRC_CHECK);
  imgElement.setAttribute("class", "todolist__checkbox-img");

  labelElement.appendChild(imgElement);

  if (isCompleted) {
    inputElement.setAttribute("checked", true);
  }
}
