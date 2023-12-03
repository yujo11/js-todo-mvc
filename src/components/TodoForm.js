export default function TodoForm({ $target, addTodo }) {
	if (!new.target) {
		throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요")
	}
	$target.addEventListener("keyup", (e) => {
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
