export default function checkNewComponent(target, self) {
  try {
    if (self instanceof target == false) {
      throw new Error('new 키워드를 붙이셔야 합니다.')
    }
  } catch (error) {
    console.error(error.message)
  }
}
