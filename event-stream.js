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
