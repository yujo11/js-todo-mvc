import View from './common/View.js'
import { NewTodoFormEventType } from '../CustomEvents/NewTodoFormEvent.js'

class NewTodoFormView extends View {
  initialize() {
    this.renderForm()
    this.bindEventHandlers()
  }

  renderForm() {
    this.insertDomStringIntoTargetBeforeEnd(`
      <form class="js-new-todo-form">
        <input
          id="new-todo-title"
          class="new-todo"
          name="title"
          placeholder="할일을 추가해주세요"
          autofocus
        />
      </form>
    `)
  }

  bindEventHandlers() {
    this.$target.querySelector('.js-new-todo-form').addEventListener('submit', this.handleSubmit.bind(this))
  }

  resetForm() {
    this.$target.querySelector('.js-new-todo-form').reset()
  }

  handleSubmit(event) {
    event.preventDefault()
    this.emit(NewTodoFormEventType.Submit, { todoTitle: event.target.title.value })
    this.resetForm()
  }
}

export default NewTodoFormView