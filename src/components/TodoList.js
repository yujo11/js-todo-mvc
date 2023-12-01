import filterTodo from "../../utils/filterTodo.js"
import getHashFilter from "../../utils/getHashFilter.js"
import renderTodo from "./../../utils/renderTodo.js"

export default function TodoList({
	initialState,
	removeTodo,
	toggleTodo,
	editTodo,
	handleTodoCount,
}) {
	const $todoList = document.querySelector(".todo-list")
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
		window.addEventListener("hashchange", this.render)
	}
	// 그리기
	this.render = () => {
		const currentTodo = this.state
		const filterOption = getHashFilter()
		const filteredTodo = filterTodo(currentTodo, filterOption)
		handleTodoCount(filteredTodo.length)
		this.updateUI(filteredTodo)
	}

	this.updateUI = (todos) => {
		$todoList.innerHTML = todos.map((todo) => renderTodo(todo)).join("")
	}

	this.init()
}
