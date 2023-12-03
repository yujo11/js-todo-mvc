import { getItem, setItem } from "./utils/storage.js"
import TodoForm from "./components/TodoForm.js"
import TodoList from "./components/TodoList.js"
import { STORAGE_KEY } from "./constants/storageKey.js"

export default function App() {
	const $todoCount = document.querySelector(".todo-count")
	const $todoInput = document.querySelector(".new-todo")
	const $todoList = document.querySelector(".todo-list")

	this.state = getItem(STORAGE_KEY, [])

	this.setState = (nextState) => {
		this.state = nextState
		todoList.setState(nextState)
		setItem(STORAGE_KEY, nextState)
	}

	new TodoForm({
		$target: $todoInput,
		addTodo: (text) => {
			const updatedTodo = [
				...todoList.state,
				{
					id: Date.now(),
					text,
					completed: false,
					edited: false,
				},
			]
			this.setState(updatedTodo)
		},
	})

	const todoList = new TodoList({
		$target: $todoList,
		initialState: this.state,

		removeTodo: (id) => {
			const updatedTodo = this.state.filter((todo) => todo.id !== id)
			this.setState(updatedTodo)
		},
		toggleTodo: (id) => {
			const updatedTodo = this.state.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
			this.setState(updatedTodo)
		},

		setEditTodo: (id, todoValue) => {
			console.log(id, todoValue)
			const updatedTodo = this.state.map((todo) =>
				todo.id === id
					? { ...todo, edited: true, text: todoValue }
					: { ...todo, edited: false }
			)
			this.setState(updatedTodo)
		},

		editTodo: (id, todoValue) => {
			const updatedTodo = this.state.map((todo) =>
				todo.id === id
					? { ...todo, text: todoValue ? todoValue : todo.text, edited: false }
					: todo
			)
			this.setState(updatedTodo)
		},

		countTodo: (count) => {
			const $todoCountValue = $todoCount.querySelector("strong")
			$todoCountValue.textContent = count
		},
	})
}
