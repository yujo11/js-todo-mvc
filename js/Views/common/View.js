class View extends EventTarget {
  constructor($target) {
    super()
    this.$target = $target
  }

  on(eventName, callback) {
    this.addEventListener(eventName, callback)
  }

  emit(eventName, payload) {
    this.dispatchEvent(new CustomEvent(eventName, { detail: payload }))
  }

  insertDomStringIntoTargetBeforeEnd(domStirng) {
    this.$target.insertAdjacentHTML('beforeend', domStirng)
  }

  updateTarget(domString) {
    this.$target.innerHTML = ''
    this.insertDomStringIntoTargetBeforeEnd(domString)
  }
}

export default View