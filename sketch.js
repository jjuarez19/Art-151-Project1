var bgColor;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color( random(255), random(255), random(255) );
}

function draw() {
  background(bgColor);
  push();
  translate(width/2, height/2);
  rotate(angle);
  fill(0);
  triangle(50, 250, 250, 250, 150, 50);
  fill(255, 255, 0);
  triangle(50, 250, 150, 250, 100, 150);
  triangle(150, 250, 250, 250, 200, 150);
  triangle(100, 150, 200, 150, 150, 50);
  pop();
  angle += radians(2);

function mousePressed() {
  bgColor = color( random(255), random(255), random(255) );
  }
    
}