export default function TodoList({
	$target,
	initialState,
	removeTodo,
	toggleTodo,
	editTodo,
	countTodo,
	setEditTodo,
}) {
	if (!new.target) {
		throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요")
	}
	this.state = initialState

	this.init = () => {
		this.initEventListener()
		this.render()
	}

	this.setState = (nextState) => {
		this.state = nextState
		this.render()
	}

	this.initEventListener = () => {
		$target.addEventListener("click", (e) => {
			const $li = e.target.closest("li")
			if (!$li) {
				return
			}
			const classList = e.target.classList
			const { id } = $li.dataset
			if (classList.contains("destroy")) {
				removeTodo(Number(id))
			} else if (classList.contains("toggle")) {
				console.log("gg")
				toggleTodo(Number(id))
			}
		})

		// 더블클릭
		$target.addEventListener("dblclick", (e) => {
			const $li = e.target.closest("li")
			if (!$li) {
				return
			}
			setEditTodo(Number($li.dataset.id), e.target.textContent)
		})

		// 수정
		$target.addEventListener("keyup", (e) => {
			const $li = e.target.closest("li")
			if (!$li) {
				return
			}
			if (e.key === "Enter") {
				editTodo(Number($li.dataset.id), e.target.value)
			} else if (e.key === "Escape") {
				editTodo(Number($li.dataset.id))
			}
		})

		// 필터링
		window.addEventListener("hashchange", this.render)
	}

	this.filterTodo = (todos, filter) => {
		switch (filter) {
			case "active":
				return todos.filter((todo) => !todo.completed)
			case "completed":
				return todos.filter((todo) => todo.completed)
			default:
				return todos
		}
	}

	this.getHashFilter = () => {
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

	this.renderTodo = (todo) => {
		return `
    <li
		data-id="${todo.id}"
		class="${todo.completed ? "completed " : ""}${todo.edited ? "editing" : ""}">
			<div class="view">
                <input
				class="toggle"
				type="checkbox" ${todo.completed ? "checked" : ""}
				/>
                <label class="label">${todo.text}</label>
                <button class="destroy"></button>
			</div>
                <input class="edit" value="${todo.text}" />
    </li>
    `
	}

	// 그리기
	this.render = () => {
		const currentTodo = this.state
		const filterOption = this.getHashFilter()
		const filteredTodo = this.filterTodo(currentTodo, filterOption)
		countTodo(filteredTodo.length)
		this.updateUI(filteredTodo)
	}

	this.updateUI = (todos) => {
		$target.innerHTML = todos.map((todo) => this.renderTodo(todo)).join("")
	}

	this.init()
}
