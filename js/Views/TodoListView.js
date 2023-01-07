import View from './common/View.js'

export const TodoListViewEventType = {
  checkItem: 'checkItem',
  destroyItem: 'destroyItem',
  editItemTitle: 'editItemTitle',
}

const todoItemTemplate = (item) => `
  <li ${item.completed ? 'class="completed"' : ''}>
    <div class="view">
      <input 
        type="checkbox" 
        class="checkbox js-todo-checkbox" 
        data-id="${item.id}" 
        ${item.completed ? 'checked' : ''} 
      /> 
      <label class="js-todo-title">${item.title}</label>
      <button class="destroy js-destroy" data-id="${item.id}" />
    </div>
    <input class="edit js-editor" value="새로운 타이틀" data-id=${item.id} />
  </li>
`

class TodoListView extends View {
  constructor($target) {
    super($target)
  }

  initialize() {
    this.renderList([])
    this.bindEventHandlers()
  }

  renderList(todoItems) {
    this.insertDomStringIntoTargetBeforeEnd(`
      <ul id="todo-list" class="todo-list js-todo-list-ul">
        ${todoItems.map(todoItemTemplate).join('')}
      </ul>
    `)
  }

  updateList(todoItems) {
    const $ul = this.$target.querySelector('.js-todo-list-ul')
    $ul.innerHTML = ''
    $ul.insertAdjacentHTML(
      'beforeend', 
      todoItems.map(todoItemTemplate).join(''),
    )
  }

  bindEventHandlers() {
    this.$target.addEventListener('click', this.handleCheckItem.bind(this))
    this.$target.addEventListener('click', this.handleDeleteItem.bind(this))
    this.$target.addEventListener('dblclick', this.handleTurnOnEditMode.bind(this))
    this.$target.addEventListener('keydown', this.handleKeydownOnEditory.bind(this))
  }

  handleCheckItem(event) {
    if (event.target.classList.contains('js-todo-checkbox')) {
      this.emit(TodoListViewEventType.checkItem, { 
        id: event.target.dataset.id ,
        completed: event.target.checked,
      })
    }
  }

  handleDeleteItem(event) {
    if (event.target.classList.contains('js-destroy')) {
      this.emit(TodoListViewEventType.deleteItem, { id: event.target.dataset.id })
    }
  }

  handleTurnOnEditMode(event) {
    if (!event.target.classList.contains('js-todo-title')) { return }

    const $li = event.target.closest('li')
    $li.classList.add('editing')
  }

  handleKeydownOnEditory(event) {
    if (!event.target.classList.contains('js-editor')) { return}

    if (event.key == 'Enter') { 
      this.emit(TodoListViewEventType.editItemTitle, { id: event.target.dataset.id, itemTitle: event.target.value })
    }

    if (event.key === 'Escape') {
      const $li = event.target.closest('li')
      $li.classList.remove('editing')
    }
  }
}

export default TodoListView