let capture;
let mousePositions = [];
const MAX_POS = 50;

function setup() {
  createCanvas(1000, 700);
  capture = createCapture(VIDEO);
  capture.size(300, 400);
  capture.hide();
}

function draw() {
  background(10, 20, 30);
  //how you're drawing your pose
  ellipse(mouseX, mouseY, 50, 50);
  fill(mouseX / 3.9, mouseY / 2.7, height / 2.7);

  //how you're storing the last 50 poses
  mousePositions.push({ x: mouseX, y: mouseY });

  //removes poses that are older than 50
  if (mousePositions.length > MAX_POS) {
    mousePositions.shift();
  }
  for (let i = 0; i < mousePositions.length; i += 1) {
    // how you want to draw the previous poses
    // relate it to i to change pose drawing over time
    ellipse(mousePositions[i].x, mousePositions[i].y, i, i);
  }
}

function mousePressed() {
  ratio.add(velocity);
  if (mouseButton === LEFT) {
    velocity = ratio * 10;
  }
}
