import { getItem, setItem } from "../utils/storage.js"
import TodoForm from "./components/TodoForm.js"
import TodoList from "./components/TodoList.js"

export default function App() {
	const $todoCount = document.querySelector(".todo-count")
	const $todoInput = document.querySelector(".new-todo")
	const $todoList = document.querySelector(".todo-list")

	this.state = getItem("todolist", [])

	this.setState = (nextState) => {
		this.state = nextState
		todoList.setState(nextState)
		setItem("todolist", nextState)
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
		editTodo: (id, todoValue) => {
			const updatedTodo = this.state.map((todo) =>
				todo.id === id ? { ...todo, text: todoValue } : todo
			)
			console.log(updatedTodo)
			this.setState(updatedTodo)
		},
		countTodo: (count) => {
			const $todoCountValue = $todoCount.querySelector("strong")
			$todoCountValue.textContent = count
		},
	})
}
