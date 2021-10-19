var colors = ['violet', 'white', 'green'];
var boxes = document.querySelectorAll(".square");
var button = document.querySelector("button");

window.addEventListener("load", function () {
  for (i = 0; i < boxes.length; i++) {
   
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    boxes[i].style.width = '100px';
    boxes[i].style.height = '100px';
    boxes[i].style.display = 'inline-block';
  }
});



button.style.cursor = "pointer";