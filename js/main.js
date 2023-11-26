import { getItem, setItem } from "../utils/storage.js";

const $todoInput = document.querySelector(".new-todo");
const $todoList = document.querySelector(".todo-list");
const $todoCount = document.querySelector(".todo-count");
const $filter = document.querySelector(".filters");

const init = () => {
	initEventListener();
	render();
};

const initEventListener = () => {
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
			const className = e.target.classList;
			const { id } = $li.dataset;
			// 삭제
			if (className.contains("destroy")) {
				removeTodo(Number(id));
			} else if (className.contains("toggle")) {
				toggleTodo(Number(id));
			}
		}
	});

	$todoList.addEventListener("dblclick", (e) => {
		const $li = e.target.closest("li");
		if ($li) {
			// li 태그 수정 모드 삭제
			document
				.querySelectorAll(".todo-list li.editing")
				.forEach(($currentLi) => {
					$currentLi.classList.remove("editing");
				});

			// 수정 모드
			const todoValue = $li.querySelector(".label").textContent;
			$li.classList.add("editing");
			const $editInput = $li.querySelector(".edit");
			$editInput.value = todoValue;
			$editInput.focus();
		}
	});

	$todoList.addEventListener("keydown", (e) => {
		const $li = e.target.closest("li");
		if ($li) {
			if (e.key === "Enter") {
				$li.classList.remove("editing");
				editTodo(Number($li.dataset.id), e.target.value);
			} else if (e.key === "Escape") {
				$li.classList.remove("editing");
			}
		}
	});
};

// 그리기
const render = () => {
	$todoList.innerHTML = ``; // todoList 비우기
	const currentTodo = getTodo();
	const $todoCountItem = $todoCount.querySelector("strong");
	$todoCountItem.textContent = currentTodo.length;
	if (currentTodo.length) {
		$todoList.innerHTML = currentTodo
			.map((todos) => createHTML(todos))
			.join("");
	}
};

const createHTML = (todo) => {
	return `
    <li data-id="${todo.id}" class="${todo.completed ? "completed" : ""}">
			<div class="view">
                <input class="toggle" type="checkbox" ${
									todo.completed ? "checked" : ""
								}/>
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
			completed: false,
		},
	];
	setTodo(updatedTodo);
};

const removeTodo = (id) => {
	const currentTodo = getTodo();
	const updatedTodo = currentTodo.filter((todo) => todo.id !== id);
	setTodo(updatedTodo);
};

const toggleTodo = (id) => {
	const currentTodo = getTodo();
	const updatedTodo = currentTodo.map((todo) =>
		todo.id === id ? { ...todo, completed: !todo.completed } : todo
	);
	setTodo(updatedTodo);
};

const editTodo = (id, todoValue) => {
	const currentTodo = getTodo();
	const updatedTodo = currentTodo.map((todo) =>
		todo.id === id ? { ...todo, text: todoValue } : todo
	);
	setTodo(updatedTodo);
};

const getTodo = () => {
	return getItem("todolist", []);
};

const setTodo = (newTodos) => {
	setItem("todolist", newTodos);
	render();
};

init();
