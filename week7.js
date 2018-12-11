function updateTime() {
  var timeHolder =
  document.querySelector("#time")

  var date = new Date()

  timeHolder.innerHTML =
  date.getSeconds()

  if (date.getSeconds() < 20) {
    timeHolder.style.color = "red"
  } else if (date.getSeconds() < 30) {
    timeHolder.style.color = "blue"
  } else {
    timeHolder.style.color = "goldenrod"
  }

}

updateTime()

setInterval(updateTime, 1000)
