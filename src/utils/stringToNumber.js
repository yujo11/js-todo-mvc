export default function StringToNumber(string) {
  try {
    const changedString = Number(string);
    if (isNaN(changedString)) {
      throw new Error("잘못된 타입 변환입니다. 올바른 숫자 값을 입력해주세요.");
    }
    return changedString;
  } catch (error) {
    console.error(error.message);
    return string;
  }
}
