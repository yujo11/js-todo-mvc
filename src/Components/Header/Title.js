import { APP_TODO_TITLE } from "../../Constants.js";

export default function Title({ target }) {
  const titleElement = document.createElement("h1");
  titleElement.setAttribute("class", "header__title");
  titleElement.textContent = APP_TODO_TITLE;

  target.appendChild(titleElement);
}
