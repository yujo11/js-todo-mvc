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

  if (isCompleted) {
    inputElement.setAttribute("checked");
  }
}
