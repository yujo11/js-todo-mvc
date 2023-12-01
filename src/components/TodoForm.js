export default function TodoForm({ $target, addTodo }) {
	$target.addEventListener("keydown", (e) => {
		// 공백일때 추가 x
		if (!e.target.value) {
			return
		}
		if (e.key === "Enter") {
			addTodo(e.target.value)
			$target.value = ""
		}
	})
}
