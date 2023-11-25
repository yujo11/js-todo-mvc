import ListFilterButton from "./ListFilterButton.js";

const filterOptions = [
  { option: "All", text: "전체 항목", isDefault: true },
  { option: "Todo", text: "해야할 일", isDefault: false },
  { option: "Completed", text: "완료한 일", isDefault: false },
];

export default function ListFilter({ target, state, onChange }) {
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

  this.state = state;

  this.setState = ({ newIsEditMode }) => {
    this.state.isEditMode = newIsEditMode;
    console.log(this.state);
  };

  formElement.addEventListener("change", (e) => {
    if (this.state.isEditMode) {
      alert("현재 todo 수정중입니다! 수정을 완료해주세요");
      return;
    }
    const target = e.target;
    onChange(target.value);
  });
}
