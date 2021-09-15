var x = 0;
var speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
  
function draw() {
  background(0);
  stroke(225);
  strokeWeight(4);
  noFill();
 
  ellipse(x, 200, 100, 100);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  
  x = x + speed;
}