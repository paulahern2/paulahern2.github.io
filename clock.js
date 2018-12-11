function updateTime() {
  var timeHolder =
  document.querySelector("#time")

  var time = new Date()

  timeHolder.innerHTML = time.getSeconds()

  if (time.getSeconds() < 20) {
    timeHolder.style.color = "red"

  }
}

setInterval(updateTime, 1000)
