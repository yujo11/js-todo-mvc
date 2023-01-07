import TodoList from "./Models/TodoList.js"
import NewTodoFormView from "./Views/NewTodoFormView.js"
import TodoListView from "./Views/TodoListView.js"
import NewTodoFormController from "./Controllers/NewTodoFormController.js"
import TodoListController from "./Controllers/TodoListController.js"

const app = () => {
  const models = {
    todoList: new TodoList()
  }
  const views = {
    newTodoForm: new NewTodoFormView(document.querySelector('.js-new-todo')),
    todoList: new TodoListView(document.querySelector('.js-todo-list'))
  }
  const controllers = {
    newTodoForm: new NewTodoFormController(views, models),
    todoList: new TodoListController(views, models)
  }

  Object.values(views).forEach(view => view.initialize())
  Object.values(controllers).forEach(controller => controller.initialize())
}

app()