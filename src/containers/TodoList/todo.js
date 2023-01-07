class Todo {
    constructor() {
        this.todoList = []
    }

    addTodo(text) {
        const newTodo = {
            text
        }

        this.todoList.push(newTodo)
    }
}

export default Todo