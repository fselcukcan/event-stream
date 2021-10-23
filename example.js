
es = makeEventStream()
es.addEventListener("click", e => console.log("click called: ", e))
es.addEventListener("negotiationneeded", e => console.log("negotiationneeded called: ", e))
es.addEventListener("click", e => console.log("click called: ", e.detail))

var clickEvent = new CustomEvent("click", { detail: 7 })
es.dispatchEvent(clickEvent)
