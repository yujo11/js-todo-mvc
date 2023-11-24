const TODO_TITLE = "Todos";

export default function Title({ targetElement }) {
  const headerElement = document.createElement("h1");
  headerElement.textContent = TODO_TITLE;
  targetElement.appendChild(headerElement);
}
