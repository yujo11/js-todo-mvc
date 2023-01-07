import { TodoListEventType } from "../Models/TodoList.js"
import { TodoListViewEventType } from "../Views/TodoListView.js"

class TodoListController {
  constructor (views, models) {
    this.views = views
    this.models = models
  }

  initialize () {
    this.models.todoList.on(TodoListEventType.todoListChanged, this.handleTodoListChanged.bind(this))
    this.views.todoList.on(TodoListViewEventType.checkItem, this.handleCheckTodoListItem.bind(this))
    this.views.todoList.on(TodoListEventType.destroyItem, this.handleDestroyItem.bind(this))
    this.views.todoList.on(TodoListViewEventType.editItemTitle, this.handleEditItemTitle.bind(this))
  }

  handleTodoListChanged({ detail: { todoList }}) {
    this.views.todoList.updateList(todoList)
  }

  handleCheckTodoListItem({ detail: { id, completed }}) {
    this.models.todoList.update(id, { completed })
  }

  handleDestroyItem({ detail: { id }}) {
    this.models.todoList.destroy(id)
  }

  handleEditItemTitle( { detail: { id, itemTitle }}) {
    this.models.todoList.update(id, { title: itemTitle })
  }
}

export default TodoListController