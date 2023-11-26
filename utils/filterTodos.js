const filterTodos = (category, todos) => {
  if (category === "") {
    return todos;
  } else if (category === "active") {
    return todos.filter((todo) => !todo.completed);
  } else if (category === "completed") {
    return todos.filter((todo) => todo.completed);
  } else {
    console.error("잘못된 filter category 입력입니다.");
    return [];
  }
};

export default filterTodos;
