export function makeId() {
  const date = new Date().getTime();
  const randomNum = Math.random();
  return `${date}${randomNum}`;
}

export function toggleCompleted({ list, id }) {
  const newList = list.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isCompleted: !item.isCompleted,
      };
    }
    return item;
  });
  return newList;
}

export function deleteTodo({ list, id }) {
  const deletedList = list.filter((item) => item.id !== id);
  return deletedList;
}

export function editTodo({ list, id, editedTitle }) {
  const editedList = list.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        title: editedTitle,
      };
    }
    return item;
  });
  return editedList;
}
