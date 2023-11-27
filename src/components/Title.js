import checkNewComponent from "../utils/checkNewComponent.js";

const TODO_TITLE = "Todos";

export default function Title({ targetElement }) {
  checkNewComponent(Title, this);

  const headerElement = document.createElement("h1");
  headerElement.textContent = TODO_TITLE;
  targetElement.appendChild(headerElement);
}
