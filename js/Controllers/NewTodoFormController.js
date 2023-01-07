import { NewTodoFormEventType } from '../CustomEvents/NewTodoFormEvent.js'

class NewTodoFormController {
  constructor(views, models) {
    this.views = views
    this.models= models
  }

  initialize() {
    this.views.newTodoForm.on(NewTodoFormEventType.Submit, this.handleSubmitNewTodo.bind(this))
  }

  handleSubmitNewTodo({ detail: { todoTitle } }) {
    this.models.todoList.add(todoTitle)
  }
} 

export default NewTodoFormController