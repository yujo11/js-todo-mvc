export default function stringToNumber(string) {
  try {
    if (isNaN(string)) {
      throw new Error('잘못된 타입 변환입니다. 올바른 숫자 값을 입력해주세요.')
    }
    const changedString = Number(string)
    return changedString
  } catch (error) {
    console.error(error.message)
  }
}
