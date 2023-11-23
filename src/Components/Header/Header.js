import Title from "./Title.js";
import TodoForm from "./TodoForm.js";

export default function Header({ target, onSubmit }) {
  const headerElement = document.createElement("header");
  headerElement.setAttribute("class", "app__header");

  target.appendChild(headerElement);

  // 제목
  new Title({
    target: headerElement,
  });

  new TodoForm({
    target: headerElement,
    onSubmit,
  });
}
