import ListFilterButton from "./ListFilterButton.js";

const filterOptions = [
  { option: "ALl", text: "전체 항목", isDefault: true },
  { option: "Todo", text: "해야할 일", isDefault: false },
  { option: "Completed", text: "완료한 일", isDefault: false },
];

export default function ListFilter({ target }) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "footer__filter-form");

  target.appendChild(formElement);

  filterOptions &&
    filterOptions.forEach(({ option, text, isDefault }) => {
      new ListFilterButton({
        target: formElement,
        isDefault,
        option,
        text,
      });
    });

  formElement.addEventListener("change", (e) => {
    const target = e.target;
    console.log(e.target.value);

    if (target.className !== "footer__filter-button") return;
  });
}
