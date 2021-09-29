var ball = {
  x: 300,
  y: 400,
  xspeed:10,
  yspeed:-10,
}

var ballColor;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rupeeColor = color(random(255), random(255), random(255) );
  
alert("Ready for some sensory overload? Hit the OK button to begin. The Triforce logo will be constantly rotating around the center of the canvas, while continuously re-painting it's path. Simultaneously the bouncing ball will randomly paint the background of the canvas. The Rupee in the center will rotate in the direction of your cursor placement on the canvas. Want to avoid drawing over a cool portion of your background? Hold down any key on your keyboard and you will cause the ball and the rupee to turn transparent. Enjoy the random color goodness!")
}

function draw() {
  push();
  translate(width/2, height/2);
  rotate(angle);
  
  if (keyIsPressed === true) {
    fill(random(255), random(255), random(255), 1 );
  } else {
    fill(random(255), random(255), random(255));
  }
  
// Calls Triforce.  
  triforce();
  
//Calls ball functions.
  move();
  bounce();
  display();
  
//Calls Rupee.
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
  strokeWeight(0.1);
  if (keyIsPressed === true) {
    fill(random(255), random(255), random(255), 1);
  } else {
    fill(random(255), random(255), random(255));
  }
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
   fill(random(255), random(255), random(255));
   
   if (keyIsPressed === true) {
    fill(random(255), random(255), random(255), 1 );
  } else {
    fill(random(255), random(255), random(255));
  }
  
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