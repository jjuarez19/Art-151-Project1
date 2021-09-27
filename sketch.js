var ball = {
  x: 300,
  y: 400,
  xspeed:6,
  yspeed:-6,
}

var ballColor;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballColor = color(random(255), random(255), random(255));
  rupeeColor = color(random(255), random(255), random(255) );
  alert("Repeatedly click your mouse to change the color of the background being drawn!")
}

function draw() {
  push();
  translate(width/2, height/2);
  rotate(angle);
  
  fill(0);
  
  triforce();

  move();
  bounce();
  display();
 
  rupee();
  
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
  strokeWeight(1);
  fill(ballColor);
  ellipse(ball.x, ball.y, 50);
  ellipse(ball.x, ball.y, 50);

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
  
function rupee() {
   
   translate(width / 2, height / 2);
   stroke(0);
   strokeWeight(2);
   fill(rupeeColor);
   let a = atan2(mouseY - height / 2, mouseX - width / 2);
   rotate(a);
   push();
   beginShape();
   vertex(0,-60);
   vertex(30,-20);
   vertex(30, 30);
   vertex(0, 70);
   vertex(-30, 30);
   vertex(-30,-20);
   vertex(0,-60);
   endShape();
   pop();
}

function mousePressed() {
  bgColor = color( random(255), random(255), random(255) );
  ballColor = color(random(255), random(255), random(255) );
  rectColor = color(random(255), random(255), random(255) );
  rupeeColor = color(random(255), random(255), random(255) );

}