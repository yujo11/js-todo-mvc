const $todoInput = document.querySelector(".new-todo");
const $todoList = document.querySelector(".todo-list");

const init = () => {
	$todoInput.addEventListener("keydown", (e) => {
		// 공백일때 추가 x
		if (!e.target.value) {
			return;
		}
		if (e.key === "Enter") {
			addTodo(e.target.value);
			$todoInput.value = "";
		}
	});

	$todoList.addEventListener("click", (e) => {
		const $li = e.target.closest("li");
		if ($li) {
			const { className } = e.target;
			// 삭제
			if (className === "destroy") {
				const { id } = $li.dataset;
				removeTodo(Number(id));
			}
		}
	});

	render();
};

// 그리기
const render = () => {
	$todoList.innerHTML = ``; // todoList 비우기
	const currentTodo = getTodo();
	console.log(currentTodo);
	if (currentTodo.length) {
		$todoList.innerHTML = currentTodo
			.map((todos) => createHTMLString(todos))
			.join("");
	}
};

const createHTMLString = (todo) => {
	return `
    <li data-id="${todo.id}">
			<div class="view">
                <input class="toggle" type="checkbox" />
                <label class="label">${todo.text}</label>
                <button class="destroy"></button>
			</div>
                <input class="edit" value="새로운 타이틀" />
    </li>
    `;
};

const addTodo = (text) => {
	const currentTodo = getTodo();
	const updatedTodo = [
		...currentTodo,
		{
			id: Date.now(),
			text,
		},
	];
	setTodo(updatedTodo);
};

const getTodo = () => {
	return localStorage.getItem("todolist")
		? JSON.parse(localStorage.getItem("todolist"))
		: [];
};

const setTodo = (newTodos) => {
	// 로컬 업데이트
	localStorage.setItem("todolist", JSON.stringify(newTodos));
	render();
};

const removeTodo = (id) => {
	const currentTodo = getTodo();
	const updatedTodo = currentTodo.filter((item) => item.id !== id);
	setTodo(updatedTodo);
	render();
};

init();
