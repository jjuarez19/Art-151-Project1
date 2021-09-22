var ball = {
  x: 300,
  y: 200,
  xspeed:4,
  yspeed:-3
}
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
  
  // rectMode(CENTER);
  // rect(0,0,100,50);
  
  move();
  bounce();
  display();
  triforce();
}  

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display(){
  stroke(0);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 50);
  ellipse(200,200,25);
}

function triforce(){ 
  triangle(50, 250, 250, 250, 150, 50);
  fill(255, 255, 0);
  triangle(50, 250, 150, 250, 100, 150);
  triangle(150, 250, 250, 250, 200, 150);
  triangle(100, 150, 200, 150, 150, 50);
  pop();
  angle += radians(2);
}

function mousePressed() {
  bgColor = color( random(255), random(255), random(255) );
}
