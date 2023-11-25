import { makeId } from "../function/util.js";
import {
  ALERT_MESSAGE_UPDATE_LIST,
  ALERT_MESSAGE_SET_LIST,
  STORAGE_KEY,
  ALERT_MESSAGE_GET_LIST,
  ERROR_MESSAGE_SET_LIST,
  ERROR_MESSAGE_UPDATE_LIST,
  ERROR_MESSAGE_GET_LIST,
} from "../Constants.js";

export function setNewTodoList(newTodoTitle) {
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
    alert(ALERT_MESSAGE_SET_LIST);
    throw new Error(ERROR_MESSAGE_SET_LIST, e);
  }
}

export function updateTodoList(newTodoList) {
  try {
    const updatedData = JSON.stringify(newTodoList);

    localStorage.setItem(STORAGE_KEY, updatedData);
  } catch (e) {
    alert(ALERT_MESSAGE_UPDATE_LIST);
    throw new Error(ERROR_MESSAGE_UPDATE_LIST, e);
  }
}

export function getTodoList() {
  try {
    const getData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    return getData;
  } catch (e) {
    alert(ALERT_MESSAGE_GET_LIST);
    throw new Error(ERROR_MESSAGE_GET_LIST, e);
  }
}
