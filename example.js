es = makeEventStream()
es.addEventListener("click", e => console.log("click happened. 1st handler called. event: ", e))
es.addEventListener("negotiationneeded", e => console.log("negotiationneeded. only handler called. event: ", e))
es.addEventListener("click", e => console.log("click happened. 2nd handler called. event.detail: ", e.detail))

var clickEvent = new CustomEvent("click", { detail: 7 })
es.dispatchEvent(clickEvent)
