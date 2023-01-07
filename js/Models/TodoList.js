/*
 * TodoList
 *   item 
 *     id
 *     title
 *     completed 
 */

import Model from "./common/Model.js"
import { getId } from '../Utils/index.js'

export const TodoListEventType = {
  todoListChanged: 'todoListChanged'
}

class TodoList extends Model {
  constructor() {
    super()
    this.items = {}
  }

  add(todoTitle) {
    const newId = getId()
    this.items = {
      ...this.items,
      [newId]: {
        id: newId,
        title: todoTitle,
        completed: false,
      }
    }
    this.emit(TodoListEventType.todoListChanged, { todoList: Object.values(this.items) })
  }

  update(id, item) {
    this.items[id] = {
      ...this.items[id],
      ...item,
    }
    this.emit(TodoListEventType.todoListChanged, { todoList: Object.values(this.items) })
  }

  destroy(id) {
    delete this.items[id]
    this.emit(TodoListEventType.todoListChanged, { todoList: Object.values(this.items) })
  }
}

export default TodoList