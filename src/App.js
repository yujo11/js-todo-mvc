import { getItem, setItem } from "../utils/storage.js"
import TodoForm from "./components/TodoForm.js"
import TodoList from "./components/TodoList.js"

export default function App() {
	const $todoCount = document.querySelector(".todo-count")
	const updateState = (nextState) => {
		todoList.setState(nextState)
		setItem("todolist", nextState)
	}

	new TodoForm({
		addTodo: (text) => {
			const updatedTodo = [
				...todoList.state,
				{
					id: Date.now(),
					text,
					completed: false,
				},
			]
			updateState(updatedTodo)
		},
	})

	const todoList = new TodoList({
		initialState: getItem("todolist", []),
		removeTodo: (id) => {
			const updatedTodo = todoList.state.filter((todo) => todo.id !== id)
			updateState(updatedTodo)
		},
		toggleTodo: (id) => {
			const updatedTodo = todoList.state.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
			updateState(updatedTodo)
		},
		editTodo: (id, todoValue) => {
			const updatedTodo = todoList.state.map((todo) =>
				todo.id === id ? { ...todo, text: todoValue } : todo
			)
			updateState(updatedTodo)
		},
		handleTodoCount: (count) => {
			const $todoCountValue = $todoCount.querySelector("strong")
			$todoCountValue.textContent = count // 여기에 추가
		},
	})
}
