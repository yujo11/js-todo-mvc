import Title from "./Title.js";

export default function Header({ target }) {
  const headerElement = document.createElement("header");
  headerElement.setAttribute("class", "app__header");

  target.appendChild(headerElement);

  // 제목
  new Title({
    target: headerElement,
  });
}
