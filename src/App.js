import Title from './components/Title.js'
import TodoForm from './components/TodoForm.js'

import TodoList from './components/todoList/TodoList.js'
import TodoCount from './components/TodoCount.js'

import checkNewComponent from './utils/checkNewComponent.js'
import { getTodoList, setTodoList } from './utils/storage/localStorage.js'

export default function App({ targetElement }) {
  checkNewComponent(App, this)

  this.state = {
    todos: getTodoList([]),
    todoFilter: 'allTodo',
    selectedTodo: null,
  }

  this.setState = () => {
    this.state.todos = getTodoList([])

    const filteredTodos = filterTodos(this.state)

    const nextState = {
      ...this.state,
      todos: filteredTodos,
    }

    todoList.setState({
      ...this.state,
      todos: filteredTodos,
    })

    todoCount.setState(nextState)
  }

  function filterTodos({ todos, todoFilter }) {
    if (todoFilter === 'allTodo') {
      return todos
    } else if (todoFilter === 'whatTodo') {
      return todos.filter((todo) => todo.isCompleted === false)
    } else {
      return todos.filter((todo) => todo.isCompleted === true)
    }
  }

  const title = new Title({ targetElement })

  const todoForm = new TodoForm({
    targetElement,
    onSubmit: (newTodo) => {
      const todos = getTodoList([])

      const nextTodos = [...todos, newTodo]
      setTodoList(nextTodos)
      this.state.selectedTodo = null
      this.setState()
    },
  })

  const mainElement = document.createElement('main')
  targetElement.appendChild(mainElement)

  const todoList = new TodoList({
    targetElement: mainElement,
    initialState: this.state,

    onToggle: (todoId) => {
      const updatedTotalTodoState = getTodoList([]).map((todo) =>
        todo.id === todoId && todo.isEditing === false
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )

      setTodoList(updatedTotalTodoState)
      this.setState()
    },
    onDelete: (todoId) => {
      const updatedTotalTodoState = getTodoList([]).filter(
        (todo) => todo.id !== todoId
      )

      setTodoList(updatedTotalTodoState)
      this.setState()
    },
    onChangeMode: (todoId, todoContent = null) => {
      const updatedTotalTodoState = getTodoList([]).map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              isEditing: !todo.isEditing,
              content: todoContent === null ? todo.content : todoContent,
            }
          : todo
      )

      setTodoList(updatedTotalTodoState)
      this.state.selectedTodo = todoId
      this.setState()
    },
  })

  const todoCount = new TodoCount({
    targetElement: mainElement,
    initialState: this.state,

    onSelect: (action) => {
      this.state.todoFilter = action
      this.setState()
    },
  })
}
