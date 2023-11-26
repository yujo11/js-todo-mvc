export default function TodoListCount({
  targetElement,
  todoListState,
  onSelect,
  isTodoFilterSelected,
}) {
  const todoCountElement = document.createElement("div");
  todoCountElement.classList.add("count-container");

  const todoCount = document.createElement("span");
  todoCount.classList.add("todo-count");
  todoCount.textContent = `총 ${todoListState.length} 개`;

  const todoListFilters = document.createElement("ul");
  todoListFilters.classList.add("filters");

  const filters = {
    allTodo: "전체보기",
    whatTodo: "해야할 일",
    completedTodo: "완료한 일",
  };

  const fragment = document.createDocumentFragment();
  Object.keys(filters).map((key) => {
    const filterItem = document.createElement("li");
    filterItem.textContent = filters[key];
    filterItem.dataset.action = key;
    filterItem.classList.add(key);
    if (isTodoFilterSelected === key) filterItem.classList.add("selected");
    fragment.appendChild(filterItem);
  });

  todoListFilters.appendChild(fragment);
  todoCountElement.appendChild(todoCount);
  todoCountElement.appendChild(todoListFilters);
  targetElement.appendChild(todoCountElement);

  todoListFilters.addEventListener("click", (event) => {
    const { action } = event.target.dataset;

    if (filters[action] == null) return;

    onSelect(action);
  });
}
