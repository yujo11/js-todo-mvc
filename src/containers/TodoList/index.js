import Todo from "./todo.js"
import TodoListView from "./todoListView.js"

class TodoList {
    constructor() {
        this.model = new Todo()
        this.view = new TodoListView()

        this.view.onSubmitForm(this.handleAddTodo.bind(this))
    }

    handleAddTodo(newTodo) {
        this.model.addTodo(newTodo)
        this.view.displayTodoList(this.model.todoList)
    }
}

export default TodoList