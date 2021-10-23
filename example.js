es = makeEventStream()
es.subscribe("click", e => console.log("click happened. 1st handler called. event: ", e))
es.subscribe("negotiationneeded", e => console.log("negotiationneeded. only handler called. event: ", e))
es.subscribe("click", e => console.log("click happened. 2nd handler called. event.detail: ", e.detail))

var clickEvent = new CustomEvent("click", { detail: 7 })
var clickEvent_ = { type: "click", detail: 8 }

es.emit(clickEvent)
es.emit(clickEvent_)
