export default function TodoForm({ addTodo }) {
	const $todoInput = document.querySelector(".new-todo")

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
}
