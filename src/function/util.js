export function makeId() {
  const date = new Date().getTime();
  const randomNum = Math.random();

  return `${date}${randomNum}`;
}
