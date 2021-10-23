function makeEventStream() {
  var listeners = []
  function addEventListener(type, callback) {
    listeners.push({ type, callback })
    return listeners
  }
  function removeEventListener(type, callback) {
    return listeners.filter(listener => listener.type === type && listener.callback === callback)
  }
  function dispatchEvent(event) {
    var listeners_ = listeners.filter(listener => listener.type === event.type)
    var callbacks = listeners_.map(listener => listener.callback)
    return callbacks.reduce((acc, callback) => [...acc, callback(event)], [])
  }
  return {
    addEventListener,
    removeEventListener,
    dispatchEvent,
  }
}

es = makeEventStream()
es.addEventListener("click", e => console.log("click called: ", e))
es.addEventListener("negotiationneeded", e => console.log("negotiationneeded called: ", e))
es.addEventListener("click", e => console.log("click called: ", e.detail))

var clickEvent = new CustomEvent("click", { detail: 7 })
es.dispatchEvent(clickEvent)