var red = 0;
var blue = 0;
var green = 0;

var redSlider = document.getElementById("redSlider");
var redOutput = document.getElementById("red");
redOutput.innerHTML = redSlider.value;
setColor();

redSlider.oninput = function() {
  redOutput.innerHTML = this.value;
  red = this.value;
  setColor();
}


var greenSlider = document.getElementById("greenSlider");
var greenOutput = document.getElementById("green");
greenOutput.innerHTML = greenSlider.value;

greenSlider.oninput = function() {
  greenOutput.innerHTML = this.value;
  green = this.value;
  setColor();
}


var blueSlider = document.getElementById("blueSlider");
var blueOutput = document.getElementById("blue");
blueOutput.innerHTML = greenSlider.value;

blueSlider.oninput = function() {
  blueOutput.innerHTML = this.value;
  blue = this.value;
  setColor();
}


function setColor() {
  var color = "rgb("+red+", "+green+", "+blue+")";
  document.getElementById("color").style.backgroundColor = color;
  document.getElementById("colorCode").innerHTML = color;
}