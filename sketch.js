function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(0);
  
  let posX = width/2;
  let posY = height/2;
  
  let angle = Math.atan2(mouseY-posY, mouseX-posX);

  translate(posX, posY);
  rotate(angle)
  // rotate(angle + radians(-90))

  stroke(255, 255, 0)
  fill(255, 0, 0)
  beginShape();
  vertex(-3, -3);
  vertex(50, -3);
  vertex(50, -6);
  vertex(60, 0);
  vertex(50, 6);
  vertex(50, 3);
  vertex(-3, 3);
  vertex(-3, -3);
  endShape()
}