const renderTodo = (todo) => {
	return `
    <li
		data-id="${todo.id}"
		class="${todo.completed ? "completed" : ""}">
			<div class="view">
                <input
				class="toggle"
				type="checkbox" ${todo.completed ? "checked" : ""}
				/>
                <label class="label">${todo.text}</label>
                <button class="destroy"></button>
			</div>
                <input class="edit" value="새로운 타이틀" />
    </li>
    `
}

export default renderTodo
