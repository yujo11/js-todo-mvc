import Header from "./Components/Header/Header.js";

const DUMY = [
  { id: "111", title: "테스트용 더미1", isCompleted: false },
  { id: "222", title: "테스트용 더미2", isCompleted: false },
  { id: "333", title: "테스트용 더미3", isCompleted: false },
  { id: "444", title: "테스트용 더미4", isCompleted: false },
];

export default function App({ target }) {
  // header
  const header = new Header({ target });
}
