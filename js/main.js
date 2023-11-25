const $todoInput = document.querySelector(".new-todo");
const $todoList = document.querySelector(".todo-list");

const init = () => {
	render();
};
const render = () => {
	$todoList.innerHTML = ``; // todoList 비우기
	const Todos = getTodos();
};

const getTodos = () => {};

const addTodo = (text) => {
	const $li = document.createElement("li");

	const $div = document.createElement("div");
	const $toggleInput = document.createElement("input");
	const $label = document.createElement("label");
	const $button = document.createElement("button");
	const $editInput = document.createElement("input");

	$div.classList.add("view");
	$toggleInput.classList.add("toggle");
	$editInput.classList.add("edit");
	$label.classList.add("label");
	$button.classList.add("destroy");

	$label.textContent = text;

	$div.appendChild($toggleInput);
	$div.appendChild($label);
	$div.appendChild($button);

	$li.appendChild($div);
	$li.appendChild($editInput);

	$todoList.appendChild($li);
};

$todoInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addTodo(e.target.value);
		$todoInput.value = "";
	}
});

init();
