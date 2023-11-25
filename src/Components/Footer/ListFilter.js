import ListFilterButton from "./ListFilterButton.js";

const filterOptions = [
  { option: "All", text: "전체 항목", isDefault: true },
  { option: "Todo", text: "해야할 일", isDefault: false },
  { option: "Completed", text: "완료한 일", isDefault: false },
];

export default function ListFilter({ target, onChange }) {
  const formElement = document.createElement("form");
  formElement.setAttribute("class", "footer__filter-form");
  target.appendChild(formElement);

  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "footer__filter-ul");
  formElement.appendChild(ulElement);

  filterOptions &&
    filterOptions.forEach(({ option, text, isDefault }) => {
      new ListFilterButton({
        target: ulElement,
        isDefault,
        option,
        text,
      });
    });

  formElement.addEventListener("change", (e) => {
    const target = e.target;

    onChange(target.value);
  });
}
