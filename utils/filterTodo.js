const filterTodo = (todos, filter) => {
	switch (filter) {
		case "active":
			return todos.filter((todo) => !todo.completed)
		case "completed":
			return todos.filter((todo) => todo.completed)
		default:
			return todos
	}
}

export default filterTodo
