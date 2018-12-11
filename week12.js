var recognizer = new webkitSpeechRecognition()

recognizer.addEventListener("result", onSpeechResult)

function onSpeechResult(evt) {
  var result = evt.results[0][0].transcript
  console.log(result)

  document.body.style.backgroundColor = result

}

// when the button is clicked
//begin speech recognition

var button = document.querySelector("#speech-button")

button.addEventListener("click", onButtonClick)

function onButtonClick(evt) {
  recognizer.start()
}
