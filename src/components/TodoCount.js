export default function TodoCount({ targetElement, initialState, onSelect }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const todoCountElement = document.createElement("div");
  todoCountElement.classList.add("count-container");

  const filters = {
    allTodo: "전체보기",
    whatTodo: "해야할 일",
    completedTodo: "완료한 일",
  };

  this.render = () => {
    if (todoCountElement != null) {
      todoCountElement.replaceChildren();
    }
    const { todos, todoFilter } = this.state;

    const todoCount = document.createElement("span");
    todoCount.classList.add("todo-count");
    todoCount.textContent = `총 ${todos.length} 개`;

    const todoListFilters = document.createElement("ul");
    todoListFilters.classList.add("filters");

    const fragment = document.createDocumentFragment();
    Object.keys(filters).map((key) => {
      const filterItem = document.createElement("li");
      filterItem.textContent = filters[key];
      filterItem.dataset.action = key;
      filterItem.classList.add(key);
      if (todoFilter === key) filterItem.classList.add("selected");
      fragment.appendChild(filterItem);
    });

    todoListFilters.appendChild(fragment);
    todoCountElement.appendChild(todoCount);
    todoCountElement.appendChild(todoListFilters);
    targetElement.appendChild(todoCountElement);
  };

  this.render();

  todoCountElement.addEventListener("click", (event) => {
    const { action } = event.target.dataset;

    if (filters[action] == null) return;

    onSelect(action);
  });
}
