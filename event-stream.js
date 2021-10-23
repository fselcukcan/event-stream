export default function makeEventStream() {
  var listeners = []
  function addEventListener(type, callback) {
    listeners.push({ type, callback })
    return listeners
  }
  function removeEventListener(type, callback) {
    return listeners.filter(listener => listener.type === type && listener.callback === callback)
  }
  function dispatchEvent(event) {
    listeners
      .filter(listener => listener.type === event.type)
      .map(listener => listener.callback)
      .reduce((acc, callback) => [...acc, callback(event)], [])
  }
  return {
    addEventListener,
    removeEventListener,
    dispatchEvent,
  }
}
