import { getItem, setItem } from "../utils/storage.js"

const $todoInput = document.querySelector(".new-todo")
const $todoList = document.querySelector(".todo-list")
const $todoCount = document.querySelector(".todo-count")

const init = () => {
	initEventListener()
	render()
}

const initEventListener = () => {
	// 입력
	$todoInput.addEventListener("keydown", (e) => {
		// 공백일때 추가 x
		if (!e.target.value) {
			return
		}
		if (e.key === "Enter") {
			addTodo(e.target.value)
			$todoInput.value = ""
		}
	})

	// 토글, 삭제
	$todoList.addEventListener("click", (e) => {
		const $li = e.target.closest("li")
		if ($li) {
			const classList = e.target.classList
			const { id } = $li.dataset
			if (classList.contains("destroy")) {
				removeTodo(Number(id))
			} else if (classList.contains("toggle")) {
				toggleTodo(Number(id))
			}
		}
	})

	// 더블클릭
	$todoList.addEventListener("dblclick", (e) => {
		const $li = e.target.closest("li")
		if ($li) {
			// 수정 모드 삭제
			$todoList.querySelectorAll(".editing").forEach(($Li) => {
				$Li.classList.remove("editing")
			})

			// 수정 모드
			const $editInput = $li.querySelector(".edit")
			const todoValue = $li.querySelector(".label").textContent
			$editInput.value = todoValue
			$li.classList.add("editing")
			$editInput.focus()
		}
	})

	// 수정
	$todoList.addEventListener("keydown", (e) => {
		const $li = e.target.closest("li")
		if ($li) {
			if (e.key === "Enter") {
				$li.classList.remove("editing")
				editTodo(Number($li.dataset.id), e.target.value)
			} else if (e.key === "Escape") {
				$li.classList.remove("editing")
			}
		}
	})

	// 필터링
	window.addEventListener("hashchange", render)
}

// 그리기
const render = () => {
	const currentTodo = getTodo()
	const filterOption = getHashFilter()
	const filteredTodo = filterTodo(currentTodo, filterOption)
	handleTodoCount(filteredTodo.length)
	updateUI(filteredTodo)
}

const updateUI = (todos) => {
	$todoList.innerHTML = todos.map((todo) => createHTML(todo)).join("")
}

const createHTML = (todo) => {
	return `
    <li
		data-id="${todo.id}"
		class="${todo.completed ? "completed" : ""}">
			<div class="view">
                <input
				class="toggle"
				type="checkbox" ${
					todo.completed ? "checked" : ""}
				/>
                <label class="label">${todo.text}</label>
                <button class="destroy"></button>
			</div>
                <input class="edit" value="새로운 타이틀" />
    </li>
    `
}

const getHashFilter = () => {
	const hash = window.location.hash.replace("#", "")
	switch (hash) {
		case "active":
			return "active"
		case "completed":
			return "completed"
		default:
			return "all"
	}
}

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

const addTodo = (text) => {
	const updatedTodo = [
		...getTodo(),
		{
			id: Date.now(),
			text,
			completed: false,
		},
	]
	setTodo(updatedTodo)
}

const removeTodo = (id) => {
	const updatedTodo = getTodo().filter((todo) => todo.id !== id)
	setTodo(updatedTodo)
}

const toggleTodo = (id) => {
	const updatedTodo = getTodo().map((todo) =>
		todo.id === id ? { ...todo, completed: !todo.completed } : todo
	)
	setTodo(updatedTodo)
}

const editTodo = (id, todoValue) => {
	const updatedTodo = getTodo().map((todo) =>
		todo.id === id ? { ...todo, text: todoValue } : todo
	)
	setTodo(updatedTodo)
}

const handleTodoCount = (count) => {
	const $todoCountValue = $todoCount.querySelector("strong")
	$todoCountValue.textContent = count // 여기에 추가
}

const getTodo = () => {
	return getItem("todolist", [])
}

const setTodo = (newTodos) => {
	setItem("todolist", newTodos)
	render()
}

init()
