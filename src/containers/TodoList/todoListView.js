class TodoListView {
    constructor() {}

    displayTodoList(todoList) {
        const $todoList = document.querySelector('#todo-list')

        $todoList.innerHTML = todoList.reduce((html, todo) => {
            return html += `
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label class="label">${todo.text}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value=${todo.text} />
            </li>
            `
        }, '')
    }

    onSubmitForm(handler) {
        const $form = document.querySelector('#todo-form')
        const $input = document.querySelector('#new-todo-title')

        $form.addEventListener('submit', event => {
            event.preventDefault()

            handler($input.value)
            $input.value = ''
        })
    }
}

export default TodoListView