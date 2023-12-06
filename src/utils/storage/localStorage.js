import { LOCALSTORAGE_KEY } from '../../constants/constants.js'

const storage = window.localStorage

export const getTodoList = (defaultValue) => {
  try {
    const storedItem = storage.getItem(LOCALSTORAGE_KEY)

    return storedItem == null ? defaultValue : JSON.parse(storedItem)
  } catch (error) {
    console.error(error.message)
  }
}
export const setTodoList = (newValue) => {
  storage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newValue))
}

export const getTempTodo = (key, defaultValue) => {
  try {
    const storedTodo = storage.getItem(key)

    return storedTodo == null ? defaultValue : JSON.parse(storedTodo)
  } catch (error) {
    console.error(error.message)
  }
}
export const setTempTodo = (key, newValue) => {
  storage.setItem(key, JSON.stringify(newValue))
}
export const removeTempTodo = (key) => {
  storage.removeItem(key)
}
