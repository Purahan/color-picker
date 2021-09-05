var red = 0;
var blue = 0;
var green = 0;
var input = document.getElementById("colorCode");

var redSlider = document.getElementById("redSlider");
var redOutput = document.getElementById("red");
redSlider.value = 0;
redOutput.value = redSlider.value;
setColor();

redSlider.oninput = function() {
  redOutput.value = this.value;
  red = this.value;
  setColor();
}
redOutput.onchange = function() {
  redSlider.value = this.value;
  red = this.value;
  setColor();
}


var greenSlider = document.getElementById("greenSlider");
var greenOutput = document.getElementById("green");
greenSlider.value = 0;
greenOutput.value = greenSlider.value;

greenSlider.oninput = function() {
  greenOutput.value = this.value;
  green = this.value;
  setColor();
}
greenOutput.onchange = function() {
  greenSlider.value = this.value;
  green = this.value;
  setColor();
}


var blueSlider = document.getElementById("blueSlider");
var blueOutput = document.getElementById("blue");
blueSlider.value = 0;
blueOutput.value = greenSlider.value;

blueSlider.oninput = function() {
  blueOutput.value = this.value;
  blue = this.value;
  setColor();
}
blueOutput.onchange = function() {
  blueSlider.value = this.value;
  blue = this.value;
  setColor();
}


function setColor() {
  var color = "rgb("+red+", "+green+", "+blue+")";
  document.getElementById("color").style.backgroundColor = color;
  input.value = color;
}

function changeAndCopy() {
  document.getElementById("copy").innerHTML = "<i class='bi bi-clipboard-check'></i>";
  navigator.clipboard.writeText(input.value)
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  setTimeout(function(){ document.getElementById("copy").innerHTML = "<i class='bi bi-clipboard'></i>"; }, 2000);
}