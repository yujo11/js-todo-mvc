class Todo {
    constructor() {
        this.todoList = []
    }

    addTodo(text) {
        const newTodo = {
            text
        }

        this.todoList = [newTodo, ...this.todoList]
    }
}

export default Todo