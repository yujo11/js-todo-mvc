import { makeId } from "../function/util.js";
const STORAGE_KEY = "TodoList";

export function setTodoList(newTodoTitle) {
  try {
    const newId = makeId();

    const newTodo = {
      id: newId,
      title: newTodoTitle,
      isCompleted: false,
    };
    const getTodo = getTodoList();
    const newTodoList = JSON.stringify([...getTodo, newTodo]);

    localStorage.setItem(STORAGE_KEY, newTodoList);
  } catch (e) {
    alert("새로운 TodoList 업로드에 실패했습니다. 🥹");
    throw new Error("new TodoList set 실패!");
  }
}

export function getTodoList() {
  try {
    const getData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    return getData;
  } catch (e) {
    alert("Todo 들을 가져오다가 실패했습니다. 🥹");
    throw new Error("TodoList get 실패!");
  }
}
