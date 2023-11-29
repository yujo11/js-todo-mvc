const storage = window.localStorage;

export const getTodoList = (key, defaultValue) => {
  try {
    const storedItem = storage.getItem(key);

    if (storedItem == null) {
      return defaultValue;
    }

    return JSON.parse(storedItem);
  } catch (error) {
    console.error(error.message);
  }
};
export const setTodoList = (key, newValue) => {
  storage.setItem(key, JSON.stringify(newValue));
};

export const getTempTodo = (key, defaultValue) => {
  try {
    const storedTodo = storage.getItem(key);
    if (storedTodo == null) {
      return defaultValue;
    }
    return JSON.parse(storedTodo);
  } catch (error) {
    console.error(error.message);
  }
};
export const setTempTodo = (key, newValue) => {
  storage.setItem(key, JSON.stringify(newValue));
};
export const removeTempTodo = (key) => {
  storage.removeItem(key);
};
