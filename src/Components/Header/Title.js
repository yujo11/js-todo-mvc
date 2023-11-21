const TODO_TITLE = "TODOS";

export default function Title({ target }) {
  const titleElement = document.createElement("h1");
  titleElement.setAttribute("class", "header__title");
  titleElement.textContent = TODO_TITLE;

  target.appendChild(titleElement);
}
