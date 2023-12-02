export const APP_TODO_TITLE = "TODOS";
export const STORAGE_KEY = "TodoList";
export const TODO_FORM_PLACE_HOLDER = "할 일을 입력하세요!";
export const MIN_CHAR = 2;

export const FILTER_OPTIONS = [
  { option: "All", text: "전체 항목", isDefault: true },
  { option: "Todo", text: "해야할 일", isDefault: false },
  { option: "Completed", text: "완료한 일", isDefault: false },
];

export const ALERT_MESSAGE = {
  SET_LIST: "새로운 TodoList 업로드에 실패했습니다. 🥹",
  UPDATE_LIST: "List 를 업데이트하는 과정에서 오류가 발생했습니다! 😡",
  GET_LIST: "Todo 들을 가져오다가 실패했습니다. 🥹",
  EDIT: "현재 Todo를 수정 중입니다. 🖐️ 수정을 완료 후 진행해 주세요!",
  INPUT: "2글자 이상 입력해주세요. ✏️",
};

export const ERROR_MESSAGE = {
  SET_LIST: "new TodoList set 실패!",
  UPDATE_LIST: "update 과정에서 실패!",
  GET_LIST: "TodoList get 실패!",
};

export const IMAGE_SRC = {
  DELETE: "./src/Imgs/trash_icon.svg",
  CHECK: "./src/Imgs/check_icon.svg",
};
