export default function makeEventStream() {
  var listeners = []
  function addEventListener(type, callback) {
    listeners.push({ type, callback })
    return { type, callback }
  }
  function removeEventListener(type, callback) {
    return listeners.filter(listener => listener.type === type && listener.callback === callback)
  }
  function dispatchEvent(event) {
    listeners
      .filter(listener => listener.type === event.type)
      .map(listener => listener.callback) // callback default value be identity function so no type error in next map, or filter non function ones here or there.
      .map(callback => callback(event))
  }
  return {
    subscribe: addEventListener,
    unsubscribe: removeEventListener,
    emit: dispatchEvent,
  }
}
