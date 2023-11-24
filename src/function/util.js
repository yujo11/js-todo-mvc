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
