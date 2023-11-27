import CheckNewComponent from "../utils/checkNewComponent.js";

const TODO_TITLE = "Todos";

export default function Title({ targetElement }) {
  CheckNewComponent(Title, this);

  const headerElement = document.createElement("h1");
  headerElement.textContent = TODO_TITLE;
  targetElement.appendChild(headerElement);
}
