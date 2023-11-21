export default function App({ target }) {
  const appElement = document.createElement("section");
  appElement.setAttribute("class", "app");
  target.appendChild(appElement);
}
