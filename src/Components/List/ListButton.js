export default function ListButton({ target }) {
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "todolist__deletebutton");
  buttonElement.textContent = "Delete";
  target.appendChild(buttonElement);
}
