class Model extends EventTarget {
  on(eventName, callback) {
    this.addEventListener(eventName, callback)
  }

  emit(eventName, payload) {
    this.dispatchEvent(new CustomEvent(eventName, { detail: payload }))
  }
}

export default Model 